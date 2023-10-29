import CartQuantityButtons from '@/components/common/CartQuantityButtons';
import {
  CartData,
  addToCart,
  clearCartItems,
  decreaseCartItems,
  removeItem,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Order = () => {
  const { cartItems, cartTotalAmount } = useAppSelector(
    state => state.cartSlice
  );

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   cartTotalQuantity <= 0 && router.replace('/');
  // }, [cartItems]);

  return (
    <div className="w-full lg:w-2/4 py-2 px-2">
      <h1 className="text-xl font-semibold">Your Order</h1>

      <div className="w-full max-h-[600px] overflow-y-scroll">
        {/* {cartItems?.map((item: CartData) => ( */}
        <ItemsList data={cartItems} />
        {/* ))} */}
      </div>

      <div className="w-full flex justify-between self-end items-center  h-14">
        <p
          className="py-2 px-3 rounded text-sm border border-red-500 hover:bg-red-500
         hover:text-white text-red-400 cursor-pointer active:scale-105 duration-200"
          onClick={() => dispatch(clearCartItems())}
        >
          Clear All Items
        </p>

        <h1>
          Subtotal:
          <span className="text-xl font-semibold">
            <span className="text-base pl-1">$</span>
            {cartTotalAmount}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Order;

const ItemsList = ({ data }: { data: CartData[] }) => {
  return (
    <div className="w-full max-h-[100vh] h-full pb-4 px-3">
      {data?.map(item => <Item data={item} key={item.productId} />)}
    </div>
  );
};

const Item = ({ data }: { data: CartData }) => {
  const { cartItems } = useAppSelector(state => state.cartSlice);

  //cart items data
  const { title, price, cartQuantity, productId, imgUrl } = data;

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
    setCountItem(cartQuantity);
  }, [data, cartItems, cartQuantity]);

  const itemPrice = (Number(price) * Number(cartQuantity)).toFixed(2);
  return (
    <div className="w-full bg-gray-50 max-h-[180px] flex flex-row items-center mt-0 relative border-b border-gray-300 pb-1 overflow-hidden">
      {/* img container  */}
      <div className="h-[150px] w-[35%] overflow-hidden relative rounded-[6px]">
        <Image
          fill
          className="w-full h-full cursor-pointer hover:scale-110 duration-200"
          src={imgUrl}
          alt="cart items"
        />
      </div>

      {/* infoContainer */}
      <div className="w-[60%] max-h-[280px] h-[180px] pl-3 ml-5 pb-2 py-3">
        <div>
          <h2 className="font-medium text-[15px] text-gray-700 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Price:
            <span className="font-semibold">
              <span className="font-medium text-sm pl-1">$</span>
              {price}
            </span>
          </p>
          <p className="text-gray-600 mt-1 text-sm">
            Total Price:
            <span className="font-semibold">
              <span className="font-medium text-sm pl-1">$</span>
              {itemPrice}
            </span>
          </p>
        </div>

        <div>
          <CartQuantityButtons
            increment={increment}
            decrement={decrement}
            quantity={cartQuantity}
          />
        </div>
      </div>

      {/* remove items */}
      <div className="w-10 h-10 rounded-full border border-red-500 absolute right-2 bottom-20">
        <p className="w-full h-full flex justify-center items-center">
          <AiOutlineClose
            className="cursor-pointer active:scale-125 duration-200 md:bg-transparent"
            onClick={() => dispatch(removeItem({ id: productId }))}
          />
        </p>
      </div>
    </div>
  );
};
