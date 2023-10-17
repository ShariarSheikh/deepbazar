import { ProductTypes } from '@/types/product.types';
import { apiSlice } from '.';

export const productApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createProduct: builder.mutation<
      { data: ProductTypes; success: boolean },
      ProductTypes
    >({
      query: credential => ({
        url: '/product/create',
        method: 'post',
        body: credential,
      }),
    }),

    getSellerProducts: builder.query<void, { sellerId: string }>({
      query: credential => ({
        url: `/product/seller-all-product/${credential.sellerId}`,
        method: 'get',
      }),
    }),

    // register: builder.mutation<void, Account>({
    //   query: credential => ({
    //     url: '/auth/register',
    //     method: 'post',
    //     body: { ...credential },
    //   }),
    // }),

    // updateAccount: builder.mutation<
    //   { data: { user: Account }; success: boolean },
    //   { userId: string; user: UpdateAccount }
    // >({
    //   query: credential => ({
    //     url: `/auth/update/${credential.userId}`,
    //     method: 'put',
    //     body: credential.user,
    //   }),
    // }),

    // changePassword: builder.mutation<void, ChangePassword>({
    //   query: credential => ({
    //     url: `/auth/update-password/${credential.userId}`,
    //     method: 'put',
    //     body: {
    //       oldPassword: credential.oldPassword,
    //       newPassword: credential.newPassword,
    //     },
    //   }),
    // }),

    // deleteAccount: builder.mutation<void, { userId: string }>({
    //   query: credential => ({
    //     url: `/auth/delete/${credential.userId}`,
    //     method: 'delete',
    //   }),
    // }),

    // profile: builder.query<{ data: { user: Account }; success: boolean }, void>(
    //   {
    //     query: () => ({ url: '/auth/profile' }),
    //   }
    // ),
  }),
});

export const { useCreateProductMutation, useGetSellerProductsQuery } =
  productApi;
