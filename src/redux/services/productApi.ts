import {
  ProductListApiQuery,
  ProductListType,
  ProductTypes,
  SellerProductList,
} from '@/types/product.types';
import { apiSlice } from '.';

export const productApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.mutation<
      {
        data: { products: ProductListType[]; totals: number };
        success: boolean;
      },
      { query: ProductListApiQuery }
    >({
      query: ({ query }) => {
        const queryParams: ProductListApiQuery = {
          ...query,
        };

        return {
          url: `/product/list`,
          method: 'get',
          params: queryParams,
        };
      },
    }),

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

    getProductDetails: builder.query<
      { data: ProductTypes; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/product/get-details-by-id/${credential.productId}`,
        method: 'get',
      }),
    }),

    getSellerProduct: builder.query<
      { data: ProductTypes; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/product/seller-product/${credential.productId}`,
        method: 'get',
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

    updateProduct: builder.mutation<
      void,
      { productId: string; product: ProductTypes }
    >({
      query: credential => ({
        url: `/product/update/${credential.productId}`,
        method: 'put',
        body: credential.product,
      }),
    }),

    deleteProduct: builder.mutation<void, { productId: string }>({
      query: credential => ({
        url: `/product/delete/${credential.productId}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useGetProductsMutation,
  useCreateProductMutation,
  useGetSellerProductsQuery,
  useDeleteProductMutation,
  useGetSellerProductQuery,
  useUpdateProductMutation,
  useGetProductDetailsQuery,
} = productApi;
