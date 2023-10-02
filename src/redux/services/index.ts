/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Environment,
  SERVER_API_ACCESS_KEY,
  serverDevUrl,
  serverProdUrl,
} from '@/global.variables';
import { CreateAccount, LoginAccount } from '@/types/auth.types';
import { Category } from '@/types/category.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const url = Environment === 'development' ? serverDevUrl : serverProdUrl;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    headers: {
      'x-api-key': SERVER_API_ACCESS_KEY,
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<any, LoginAccount>({
      query: loginData => ({
        url: '/auth/login',
        method: 'post',
        body: loginData,
      }),
    }),

    register: builder.mutation<any, CreateAccount>({
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
  api;
