import { apiSlice } from '.';
import { OrderCreateData, OrderData } from '@/types/order.type';

export const orderApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation<
      { data: OrderData; success: boolean },
      { order: OrderCreateData }
    >({
      query: ({ order }) => ({
        url: `/order/create`,
        method: 'post',
        body: order,
      }),
    }),

    deleteOrder: builder.mutation<
      { data: OrderData; success: boolean },
      { orderId: string }
    >({
      query: ({ orderId }) => ({
        url: `/order/delete/${orderId}`,
        method: 'delete',
      }),
    }),

    getOrderDetails: builder.query<
      { data: OrderData; success: boolean },
      { orderId: string }
    >({
      query: ({ orderId }) => ({
        url: `/order/get/${orderId}`,
        method: 'get',
      }),
    }),

    getAllOrders: builder.query<
      { data: OrderData[]; success: boolean },
      { userId: string }
    >({
      query: ({ userId }) => ({
        url: `/order/get-all-order-user/${userId}`,
        method: 'get',
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderDetailsQuery,
} = orderApi;
