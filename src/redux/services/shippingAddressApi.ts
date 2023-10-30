import {
  ShippingAddressCreateData,
  ShippingAddressData,
} from '@/types/shippingAddress.types';
import { apiSlice } from '.';

export const shippingAddressApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createShippingAddress: builder.mutation<
      { data: ShippingAddressData; success: boolean },
      { shippingAddress: ShippingAddressCreateData }
    >({
      query: credential => ({
        url: '/shippingAddress/create',
        method: 'post',
        body: credential.shippingAddress,
      }),
    }),

    getUserAllShippingAddress: builder.query<
      { data: ShippingAddressData[]; success: boolean },
      void
    >({
      query: () => ({
        url: `/shippingAddress/get-all-user-shippingAddress`,
        method: 'get',
      }),
    }),

    makeShippingAddressDefault: builder.mutation<
      { data: ShippingAddressData; success: boolean },
      { shippingAddressId: string }
    >({
      query: ({ shippingAddressId }) => ({
        url: `/shippingAddress/make-default/${shippingAddressId}`,
        method: 'put',
      }),
    }),

    deleteShippingAddress: builder.mutation<
      { data: ShippingAddressData; success: boolean },
      { shippingAddressId: string }
    >({
      query: ({ shippingAddressId }) => ({
        url: `/shippingAddress/delete/${shippingAddressId}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useCreateShippingAddressMutation,
  useDeleteShippingAddressMutation,
  useMakeShippingAddressDefaultMutation,
  useGetUserAllShippingAddressQuery,
} = shippingAddressApi;
