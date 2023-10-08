import {
  Account,
  ChangePassword,
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

    register: builder.mutation<void, Account>({
      query: credential => ({
        url: '/auth/register',
        method: 'post',
        body: { ...credential },
      }),
    }),

    changePassword: builder.mutation<void, ChangePassword>({
      query: credential => ({
        url: `/auth/update-password/${credential.userId}`,
        method: 'post',
        body: {
          oldPassword: credential.oldPassword,
          newPassword: credential.newPassword,
        },
      }),
    }),

    profile: builder.query<{ data: { user: Account }; success: boolean }, void>(
      {
        query: () => ({ url: '/auth/profile' }),
      }
    ),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useProfileQuery,
} = auth;
