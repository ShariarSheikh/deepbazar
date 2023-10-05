/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Account,
  LoginAccount,
  LoginAccountReturnType,
} from '@/types/auth.types';
import { apiSlice } from '.';

export const auth = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginAccountReturnType, LoginAccount>({
      query: credential => ({
        url: '/auth/login',
        method: 'post',
        body: { ...credential },
      }),
    }),

    register: builder.mutation<any, Account>({
      query: credential => ({
        url: '/auth/register',
        method: 'post',
        body: { ...credential },
      }),
    }),

    profile: builder.query<{ data: Account; success: boolean }, void>({
      query: () => ({ url: '/auth/profile' }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useProfileQuery } = auth;
