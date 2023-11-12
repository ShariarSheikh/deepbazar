import CartQuantityButtons from '@/components/common/CartQuantityButtons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { FC, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import SellerAndDeliveryInfo from './SellerAndDeliveryInfo';
import { ProductTypes } from '@/types/product.types';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import StarRating from '@/components/common/StarRating';
import {
  useCheckWishlistAddedOrNotQuery,
  useCreateWishlistMutation,
  useDeleteWishlistMutation,
  useGetAllWishlistByIdQuery,
} from '@/redux/services/wishlistApi';
import Button from '@/components/common/Button';
import { loginOpenModal } from '@/redux/features/loginFirstSlice';
import { useRouter } from 'next/navigation';

const Info: FC<{ data: ProductTypes }> = ({ data }) => {
  const user = useAppSelector(state => state.authSlice);

  // WISHLIST -------------- API
  const [createWishlist, createWishlistApi] = useCreateWishlistMutation();
  const [deleteWishlist, deleteWishlistApi] = useDeleteWishlistMutation();

  const getWishlist = useGetAllWishlistByIdQuery({ productId: data._id });
  const checkWishlist = useCheckWishlistAddedOrNotQuery({
    productId: data._id,
  });
  // WISHLIST -------------- API

  const [quantity, setQuantity] = useState<number>(1);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const wishlistHandler = () => {
    if (!user.user._id)
      return dispatch(loginOpenModal({ redirectUrl: `/product/${data._id}` }));
    if (!user.user?.role.includes('USER')) return;

    if (checkWishlist.isError) {
      createWishlist({ productId: data._id });
    } else {
      deleteWishlist({ productId: data._id });
    }
  };

  //add to cart
  const addItems = () => {
    const cartItem: CartDataTypes = {
      title: data.title,
      imgUrl: data.images.filter(imgUrl => imgUrl.isDefault)[0].cardImg,
      price: data.price,
      discountPrice: data.discountPrice,
      discountPercent: data.discountPercent,
      productId: data._id,
    };
    dispatch(addToCart({ data: cartItem, quantity }));
  };

  //buy now item
  const buyNowItems = () => {
    const cartItem: CartDataTypes = {
      title: data.title,
      imgUrl: data.images.filter(imgUrl => imgUrl.isDefault)[0].cardImg,
      price: data.price,
      discountPrice: data.discountPrice,
      discountPercent: data.discountPercent,
      productId: data._id,
    };
    dispatch(addToCart({ data: cartItem, quantity }));
    router.push('/cart/checkout');
  };

  useEffect(() => {
    if (!createWishlistApi.isSuccess) return undefined;
    getWishlist.refetch();
    checkWishlist.refetch();
  }, [createWishlistApi.isSuccess]);

  useEffect(() => {
    if (!deleteWishlistApi.isSuccess) return undefined;
    getWishlist.refetch();
    checkWishlist.refetch();
  }, [deleteWishlistApi.isSuccess]);

  const selPrice =
    data.discountPrice > 0 && data.discountPercent
      ? data.discountPrice
      : data.price;

  return (
    <div
      className={`w-full md:ml-[20px] min-h-[436px] mt-10 lg:mt-0 rounded-[6px] flex flex-col md:flex-row justify-start lg:justify-around overflow-hidden text-gray-600`}
    >
      <div className="w-full md:w-[60%] h-full pr-[10px]">
        <h1 className="text-lg md:text-3xl font-semibold uppercase">
          {data?.title}
        </h1>

        <div className="mt-3 flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <StarRating rating={data.ratings.star} />
              <p className="text-[10px] font-medium text-gray-500 pt-[5px] ml-[8px]">
                ({data.ratings.totalReviews})
              </p>
            </div>

            <p className="text-[12px] text-gray-500 pt-[3px]">Ratings</p>
          </div>
          <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

          <p className="text-[12px] text-gray-500 pt-[3px]">
            ({data.totalQuestion}) Questions
          </p>
        </div>

        {data.offerText?.trim() && (
          <div className="text-[12px] md:text-sm w-full max-w-[320px] bg-primary flex items-center flex-wrap space-x-2 mt-[15px] px-2 py-1 rounded-[6px] text-white">
            <span>Offer:</span> <span>{data.offerText}</span>
          </div>
        )}

        <div className="mt-[10px] text-[12px] md:text-sm flex items-center flex-wrap space-x-2 pt-[3px] text-gray-500">
          <span>Category:</span>
          <span>{data.category}</span>
        </div>

        <button
          style={{
            background: data.inStock ? '#48BB78' : '#E53E3E',
          }}
          className="py-[2px] px-[8px] rounded-[8px] text-[12px] text-white font-bold mt-[16px] cursor-default"
        >
          {data.inStock ? 'InStock' : 'Out Of Stock'}
        </button>

        <div className="mt-3 pb-5 text-primary flex items-center space-x-3">
          <span className="font-semibold text-xl">
            <span className="font-medium pl-1">$</span>
            {selPrice}
          </span>

          {data.discountPrice > 0 && <del>${data.price}</del>}
          {data.discountPercent > 0 && (
            <span className="bg-primary text-white text-[12px] px-2 py-[2px] rounded-[6px]">
              {data.discountPercent}%
            </span>
          )}
        </div>

        <div className="mt-3 w-full flex items-center h-[36">
          <h3 className="mr-[10px]"> Quantity:</h3>
          <CartQuantityButtons
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />
        </div>

        <div className="flex items-center space-x-3 h-[40px] mt-5">
          <button
            className="h-[38px] w-[80px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-[#ffa41c] text-black active:scale-95 duration-200"
            onClick={buyNowItems}
          >
            By Now
          </button>
          <button
            className="h-[38px] w-[120px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-primary text-white active:scale-95 duration-200"
            onClick={addItems}
          >
            Add to Cart
          </button>

          <Button
            onClick={wishlistHandler}
            disabled={
              createWishlistApi.isLoading ||
              deleteWishlistApi.isLoading ||
              getWishlist.isLoading ||
              checkWishlist.isLoading
            }
            isLoading={
              createWishlistApi.isLoading ||
              deleteWishlistApi.isLoading ||
              getWishlist.isLoading ||
              checkWishlist.isLoading
            }
            loadingColor="white"
            loadingSpinnerSize={40}
            className="active:scale-95 duration-150 bg-white group hover:bg-[#def5ff] border-2 border-[#def5ff] h-[40px] px-[20px] rounded-[6px] flex items-center justify-center"
          >
            <span className="mr-[4px] text-primary">
              {getWishlist.data?.data.totals ?? 0}
            </span>
            {checkWishlist.isError ? (
              <AiOutlineHeart className="text-primary font-medium text-[20px] group-hover:scale-110 duration-150" />
            ) : (
              <AiFillHeart className="fill-primary font-medium text-[20px] group-hover:scale-110 duration-150" />
            )}
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[30%] mt-[30px] md:mt-0 h-full">
        <SellerAndDeliveryInfo sellerId={data.sellerId} />
      </div>
    </div>
  );
};

export default Info;
