/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Environment,
  SERVER_API_ACCESS_KEY,
  serverDevUrl,
  serverProdUrl,
} from '@/global.variables';
import { Account, LoginAccount } from '@/types/auth.types';
import { Category } from '@/types/category.types';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setCredentials } from '../features/authSlice';

export const url = Environment === 'development' ? serverDevUrl : serverProdUrl;

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  headers: {
    'x-api-key': SERVER_API_ACCESS_KEY,
  },
  credentials: 'include',
  //@ts-ignore
  prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
    const token = getState().authSlice.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

type BaseQueryWithReAuthType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;

const baseQueryWithReAuth: BaseQueryWithReAuthType = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log({ result });

  //@ts-ignore
  if (result?.error === 'Invalid Token') {
    const refreshResult = await baseQuery('/refresh-token', api, extraOptions);

    console.log({ refreshResult });
    //@ts-ignore
    if (refreshResult?.data) {
      //@ts-ignore
      const user = api.getState().authSlice.user;
      //@ts-ignore
      api.dispatch(setCredentials({ token: refreshResult.data, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
// Invalid Token

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({
    login: builder.mutation<any, LoginAccount>({
      query: loginData => ({
        url: '/auth/login',
        method: 'post',
        body: loginData,
      }),
    }),

    register: builder.mutation<any, Account>({
      query: registerData => ({
        url: '/auth/register',
        method: 'post',
        body: registerData,
      }),
    }),

    //CATEGORY API
    getCategory: builder.query<{ data: Category[]; success: boolean }, void>({
      query: () => ({ url: '/category/get' }),
    }),
  }),
});

export const { useGetCategoryQuery, useLoginMutation, useRegisterMutation } =
  apiSlice;
