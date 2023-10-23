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
  useCreateProductMutation,
  useGetSellerProductsQuery,
  useDeleteProductMutation,
  useGetSellerProductQuery,
  useUpdateProductMutation,
} = productApi;
