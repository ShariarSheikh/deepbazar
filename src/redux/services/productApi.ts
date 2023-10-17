import { ProductTypes, SellerProductList } from '@/types/product.types';
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

    getSellerProducts: builder.query<
      { data: SellerProductList[]; success: boolean },
      { sellerId: string }
    >({
      query: credential => ({
        url: `/product/seller-all-product/${credential.sellerId}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetSellerProductsQuery } =
  productApi;
