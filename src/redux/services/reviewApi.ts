import { apiSlice } from '.';
import { ReviewCreate, ReviewData } from '@/types/review.type';

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createReview: builder.mutation<
      { data: ReviewData; success: boolean },
      ReviewCreate
    >({
      query: credential => ({
        url: '/review/create',
        method: 'post',
        body: credential,
      }),
    }),

    getAllReviewByProductId: builder.query<
      { data: { totals: number; reviews: ReviewData[] }; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/review/list-by-productId/${credential.productId}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useCreateReviewMutation, useGetAllReviewByProductIdQuery } =
  reviewApi;
