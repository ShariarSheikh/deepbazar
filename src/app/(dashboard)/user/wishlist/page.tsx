'use client';
import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import Pagination from '@/components/common/Pagination';
import { LoadingPage } from '@/components/common/loading';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import {
  useDeleteWishlistMutation,
  useGetUserAllWishlistQuery,
} from '@/redux/services/wishlistApi';
import { WishlistData } from '@/types/wishlist.type';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

//-------------------------------------

//-------------------------------------

const Page = () => {
  const { data, isLoading, refetch } = useGetUserAllWishlistQuery();
  const [deleteWishlist, deleteWishlistApi] = useDeleteWishlistMutation();
  const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 100;

  const dispatch = useAppDispatch();

  const deleteHandler = (id: string) => deleteWishlist({ productId: id });
  const addToCartHandler = (wishlist: WishlistData) => {
    const cartItem: CartDataTypes = {
      title: wishlist.title,
      imgUrl: wishlist.imgUrl,
      price: wishlist.price,
      discountPrice: wishlist.discountPrice,
      discountPercent: wishlist.discountPercent,
      productId: wishlist.product._id,
    };
    dispatch(addToCart({ data: cartItem, quantity: 1 }));
  };

  useEffect(() => {
    if (deleteWishlistApi.isLoading) return;
    refetch();
    return () => undefined;
  }, [deleteWishlistApi.isLoading]);

  return (
    <div className="w-full h-full md:p-5 max-w-[1080px] mx-auto pt-3">
      <header className="">
        <h1 className="text-gray-600 font-medium">My Wishlist</h1>
      </header>

      {isLoading && <LoadingPage />}

      <div className="w-full h-full p-1 md:p-5 bg-white mt-3 md:mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        {typeof data !== 'undefined' && data.data.wishlist?.length && (
          <>
            {data.data.wishlist.map(wishlist => (
              <>
                <div
                  key={wishlist._id}
                  className="relative flex flex-col md:flex-row justify-start pb-6 mt-[10px] border-b-[#f2f3f5] border-b border-solid"
                >
                  <Link href={`/product/${wishlist.product._id}`}>
                    <div className="relative overflow-hidden w-32 h-32 rounded-[6px]">
                      <Image
                        src={wishlist.imgUrl}
                        alt="item"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="w-full max-w-[472px] md:ml-6">
                    <Link href={`/product/${wishlist.product._id}`}>
                      <h1 className="w-full font-medium line-clamp-2 text-[#3d3d3f] text-lg">
                        {wishlist.title}
                      </h1>
                    </Link>

                    <div className="mt-[9] text-primary flex items-center space-x-3">
                      <span className="font-semibold text-xl">
                        <span className="font-medium pl-1">$</span>
                        {wishlist.discountPrice > 0
                          ? wishlist.discountPrice
                          : wishlist.price}
                      </span>

                      {wishlist.discountPrice > 0 && (
                        <del>${wishlist.price}</del>
                      )}
                      {wishlist.discountPercent > 0 && (
                        <span className="bg-primary text-white text-[12px] px-2 py-[2px] rounded-[6px]">
                          {wishlist.discountPercent}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 items-center absolute ml-[73px] right-2.5 bottom-[24px] md:bottom-[35px]">
                    <button
                      onClick={() => setIsDeleteBox(true)}
                      className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full active:scale-95 duration-150 text-white bg-red-500"
                    >
                      <AiOutlineDelete className="w-auto h-auto ml-0 mt-0" />
                    </button>
                    <button
                      onClick={() => addToCartHandler(wishlist)}
                      className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full active:scale-95 duration-150 text-primary bg-primaryLight"
                    >
                      <BsCart2 className="w-auto h-auto" />
                    </button>
                  </div>
                </div>
                <CustomModal
                  boxStyle={{ width: 350 }}
                  onClose={() => setIsDeleteBox(false)}
                  isOpen={isDeleteBox}
                >
                  <div className="w-[300px] flex flex-col justify-end">
                    <div className="w-full flex justify-center">
                      <Button
                        disabled={deleteWishlistApi.isLoading}
                        isLoading={deleteWishlistApi.isLoading}
                        loadingColor="white"
                        loadingSpinnerSize={40}
                        onClick={() => deleteHandler(wishlist.product._id)}
                        className="mt-[4px] font-semibold text-white rounded-[6px] h-[32px] w-[175px] bg-red-500 active:scale-95 duration-200"
                      >
                        Confirm Delete
                      </Button>
                    </div>
                  </div>
                </CustomModal>
              </>
            ))}
            <div className="h-[56px] rounded-b-[16px] flex items-center justify-center">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        )}

        {/* if not wishlist_item exits  */}
        {typeof data !== 'undefined' && data?.data.totals === 0 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <AiOutlineHeart />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px]">
              You Have No Wishlist
            </h1>
            <p className="text-[#757575] text-center text-sm mt-2.5">
              Save Items to your wishlist to see when product prices drop
            </p>
            <button className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200">
              Go To Sopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
