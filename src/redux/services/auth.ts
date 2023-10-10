import {
  Account,
  ChangePassword,
  LoginAccount,
  LoginAccountReturnType,
  UpdateAccount,
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

    updateAccount: builder.mutation<
      { data: { user: Account }; success: boolean },
      { userId: string; user: UpdateAccount }
    >({
      query: credential => ({
        url: `/auth/update/${credential.userId}`,
        method: 'put',
        body: credential.user,
      }),
    }),

    changePassword: builder.mutation<void, ChangePassword>({
      query: credential => ({
        url: `/auth/update-password/${credential.userId}`,
        method: 'put',
        body: {
          oldPassword: credential.oldPassword,
          newPassword: credential.newPassword,
        },
      }),
    }),

    deleteAccount: builder.mutation<void, { userId: string }>({
      query: credential => ({
        url: `/auth/delete/${credential.userId}`,
        method: 'delete',
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
  useUpdateAccountMutation,
  useChangePasswordMutation,
  useProfileQuery,
  useDeleteAccountMutation,
} = auth;
