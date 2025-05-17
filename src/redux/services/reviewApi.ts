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

    getUserAllReviews: builder.query<
      { data: { totals: number; reviews: ReviewData[] }; success: boolean },
      void
    >({
      query: () => ({
        url: `/review/get-user-all-reviews`,
        method: 'get',
      }),
    }),

    deleteReview: builder.mutation<
      { data: { totals: number; reviews: ReviewData }; success: boolean },
      { reviewId: string }
    >({
      query: credential => ({
        url: `/review/delete/${credential.reviewId}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewByProductIdQuery,
  useGetUserAllReviewsQuery,
  useDeleteReviewMutation,
} = reviewApi;
