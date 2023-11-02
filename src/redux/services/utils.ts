import {
  Environment,
  SERVER_API_ACCESS_KEY,
  serverDevUrl,
  serverProdUrl,
} from '@/global.variables';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { logout, setCredentials } from '../features/authSlice';
import { RootState } from '../store';
//------------------------------------------------

//------------------------------------------------

export const url = Environment === 'development' ? serverDevUrl : serverProdUrl;

export const baseQuery = fetchBaseQuery({
  baseUrl: url,
  headers: {
    'x-api-key': SERVER_API_ACCESS_KEY,
  },
  //@ts-ignore
  prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
    const token = getState().authSlice.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

//------------------------------------------

//------------------------------------------
type BaseQueryWithReAuthType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;

const mutex = new Mutex();

export const baseQueryWithReAuth: BaseQueryWithReAuthType = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  //@ts-ignore
  const invalidTokenIsTrue = result?.error?.data?.message === 'Invalid Token';
  //@ts-ignore
  const expireTokenIsTrue = result?.error?.data?.message === 'jwt expired';

  //IF API GOT ERROR AND CHECK ERROR IS ONE OF THEM (INVALID TOKEN || EXPIRE TOKEN)
  if (result?.error?.data && (expireTokenIsTrue || invalidTokenIsTrue)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh-token',
            method: 'POST',
            body: {
              //@ts-ignore
              refreshToken: api.getState().authSlice.refreshToken,
            },
          },
          api,
          extraOptions
        );

        //@ts-ignore
        if (refreshResult?.data.data?.accessToken) {
          api.dispatch(
            //@ts-ignore
            setCredentials({ accessToken: refreshResult.data.data.accessToken })
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
