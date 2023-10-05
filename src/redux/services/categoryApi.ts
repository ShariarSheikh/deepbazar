import { Category } from '@/types/category.types';
import { apiSlice } from '.';

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query<{ data: Category[]; success: boolean }, void>({
      query: () => ({ url: '/category/get' }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
