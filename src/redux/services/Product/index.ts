import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductDetailsApi, ProductListApi } from './types';

const ProductApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4093/auth/serverProductionUrl',
    headers: {},
  }),

  //ENDPOINTS---------------------------------------
  endpoints: builder => ({
    productList: builder.query<ProductListApi, void>({
      query: () => ({
        url: `/api/product/list`,
      }),
    }),

    productDetailsById: builder.query<ProductDetailsApi, any>({
      query: (id: string) => ({
        url: `/api/product/details/${id}`,
      }),
    }),

    searchProducts: builder.query<any, any>({
      query: ({ query }: { query: string }) => ({
        url: `/api/product/search`,
        body: { query: query },
      }),
    }),
  }),
});

export default ProductApi;
// API HOOKS
export const {
  useProductDetailsByIdQuery,
  useSearchProductsQuery,
  useProductListQuery,
} = ProductApi;
