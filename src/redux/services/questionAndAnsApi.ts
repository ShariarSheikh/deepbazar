import {
  QuestionAndAnsCreate,
  QuestionAndAnsData,
} from '@/types/questionAndAnswer.types';
import { apiSlice } from '.';

export const questionAndAnsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // CREATE
    createQuestion: builder.mutation<
      { success: boolean },
      QuestionAndAnsCreate
    >({
      query: credential => ({
        url: '/question_answer/create',
        method: 'post',
        body: credential,
      }),
    }),

    // GET ALL FOR PRODUCT
    getAllQAndAnsByProductId: builder.query<
      {
        data: { totals: number; data: QuestionAndAnsData[] };
        success: boolean;
      },
      { productId: string }
    >({
      query: credential => ({
        url: `/question_answer/list-by-productId/${credential.productId}`,
        method: 'get',
      }),
    }),

    // GET ALL FOR USER
    getUserAllQuestionAndAns: builder.query<
      {
        data: { totals: number; data: QuestionAndAnsData[] };
        success: boolean;
      },
      void
    >({
      query: () => ({
        url: `/question_answer/get-user-all-qAndAns`,
        method: 'get',
      }),
    }),

    // DELETE BY USER
    deleteQuestion: builder.mutation<
      { data: { totals: number }; success: boolean },
      { questionId: string }
    >({
      query: credential => ({
        url: `/question_answer/delete/${credential.questionId}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useCreateQuestionMutation,
  useGetAllQAndAnsByProductIdQuery,
  useGetUserAllQuestionAndAnsQuery,
  useDeleteQuestionMutation,
} = questionAndAnsApi;
