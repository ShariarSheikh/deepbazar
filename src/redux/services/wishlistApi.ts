import { WishlistData } from '@/types/wishlist.type';
import { apiSlice } from '.';

export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createWishlist: builder.mutation<
      { data: WishlistData; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/wishlist/create/${credential.productId}`,
        method: 'post',
        body: credential,
      }),
    }),

    deleteWishlist: builder.mutation<
      { data: WishlistData; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/wishlist/delete/${credential.productId}`,
        method: 'delete',
      }),
    }),

    getUserAllWishlist: builder.query<
      { data: { totals: number; wishlist: WishlistData[] }; success: boolean },
      void
    >({
      query: () => ({
        url: `/wishlist/get-user-all-wishlist`,
        method: 'get',
      }),
    }),

    getAllWishlistById: builder.query<
      { data: { totals: number }; success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/wishlist/list-by-productId/${credential.productId}`,
        method: 'get',
      }),
    }),

    checkWishlistAddedOrNot: builder.query<
      { success: boolean },
      { productId: string }
    >({
      query: credential => ({
        url: `/wishlist/check-wishlist-added-or-not/${credential.productId}`,
        method: 'get',
      }),
    }),
  }),
});

export const {
  useCreateWishlistMutation,
  useDeleteWishlistMutation,
  useGetUserAllWishlistQuery,
  useGetAllWishlistByIdQuery,
  useCheckWishlistAddedOrNotQuery,
} = wishlistApi;
