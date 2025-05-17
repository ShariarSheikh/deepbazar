import CartQuantityButtons from '@/components/common/CartQuantityButtons';
import {
  CartData,
  addToCart,
  decreaseCartItems,
  removeItem,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const ItemContainer = () => {
  const { cartItems } = useAppSelector(state => state.cartSlice);

  return (
    <div className="w-full max-w-[100%] lg:max-w-[68%] bg-white rounded-[6px] p-[8px] md:p-[16px]">
      <h1 className="text-xl font-semibold">Your Items</h1>

      <div className="w-full max-h-[395px] overflow-y-auto invisible-scrollbar visible-scrollbar-onHover">
        <ItemsList data={cartItems} />
      </div>
    </div>
  );
};

export default ItemContainer;

const ItemsList = ({ data }: { data: CartData[] }) => {
  return (
    <div className="w-full max-h-[100vh] h-full pb-4">
      {data?.map(item => <Item data={item} key={item.productId} />)}
    </div>
  );
};

const Item = ({ data }: { data: CartData }) => {
  const { cartItems } = useAppSelector(state => state.cartSlice);

  const [countItem, setCountItem] = useState<number>(1);
  const dispatch = useAppDispatch();

  const increment = () => {
    //@ts-ignore
    setCountItem(parseInt(countItem) + 1);
    const quantity = 1;
    dispatch(addToCart({ data, quantity }));
  };

  const decrement = () => {
    //@ts-ignore
    countItem > 1 && setCountItem(parseInt(countItem) - 1);
    const quantity = 1;
    dispatch(decreaseCartItems({ data, quantity }));
  };

  //on page load set cart quantity
  useEffect(() => {
    setCountItem(data.cartQuantity);
  }, [data, cartItems, data.cartQuantity]);

  const itemPrice = data.discountPrice > 0 ? data.discountPrice : data.price;

  return (
    <div className="w-full max-h-[180px] flex flex-row items-center relative border-b border-gray-300 pb-1 overflow-hidden">
      {/* img container  */}
      <Link href={`/product/${data.productId}`}>
        <div className="h-[130px] md:h-[150px] w-[130px] md:w-[185px] overflow-hidden relative rounded-[6px]">
          <Image
            fill
            className="w-full h-full cursor-pointer hover:scale-110 duration-200"
            src={data.imgUrl}
            alt="cart items"
          />
        </div>
      </Link>

      {/* infoContainer */}
      <div className="w-[60%] max-h-[280px] h-[180px] pl-2 md:pl-3 md:ml-5 pb-2 py-3">
        <div>
          <Link href={`/product/${data.productId}`}>
            <h2 className="font-medium text-[15px] text-gray-700 line-clamp-2">
              {data.title}
            </h2>
          </Link>

          <div className="mt-1 flex items-center justify-start space-x-2 text-[12px] lg:text-[13px] font-bold text-primary">
            <span className="text-gray-600">Price: ${itemPrice}</span>
            {data.discountPrice > 0 && <del>${data.price}</del>}
            {data.discountPercent > 0 && (
              <span className="bg-primary text-white px-2 py-[1px] rounded-[6px]">
                {data.discountPercent}%
              </span>
            )}
          </div>

          <p className="text-gray-600 mt-1 text-sm">
            Total Price:
            <span className="font-semibold">
              <span className="font-medium text-sm pl-1">$</span>
              {(Number(itemPrice) * Number(data.cartQuantity)).toFixed(2)}
            </span>
          </p>
        </div>

        <div>
          <CartQuantityButtons
            increment={increment}
            decrement={decrement}
            quantity={data.cartQuantity}
          />
        </div>
      </div>

      {/* remove items */}
      <div className="w-10 h-10 absolute right-0 bottom-[10px]">
        <button className="w-full h-full flex justify-center items-center">
          <RiDeleteBinLine
            className="cursor-pointer text-gray-600 fill-gray-600 h-[25px] w-[25px] active:scale-125 duration-200 md:bg-transparent"
            onClick={() => dispatch(removeItem({ id: data.productId }))}
          />
        </button>
      </div>
    </div>
  );
};
