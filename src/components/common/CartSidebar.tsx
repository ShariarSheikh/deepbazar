/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  CartData,
  addToCart,
  decreaseCartItems,
  removeItem,
  showCartHandler,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CartQuantityButtons from './CartQuantityButtons';

//---------------------------------------------------------------------------

//---------------------------------------------------------------------------

const ItemsList = ({ cartItems }: { cartItems: CartData[] }) => {
  return (
    <div className="w-full max-h-[100vh] h-full overflow-y-scroll pb-4 px-3">
      {cartItems?.map(item => <Item data={item} key={item.productId} />)}
    </div>
  );
};

const Item = ({ data }: { data: CartData }) => {
  const { cartItems } = useAppSelector(state => state.cartSlice);

  //cart items data
  const { title, price, cartQuantity, productId } = data;

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
      <div className="h-[150px] w-[35%] overflow-hidden relative">
        <img
          className="w-full h-full cursor-pointer hover:scale-110 duration-200"
          src="https://via.placeholder.com/89x150"
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
      <div className="w-6 h-6 rounded-full bg-white border border-red-500 absolute right-2 bottom-[94px]">
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

const NoItems = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={`w-full mt-16`}>
      <div className="text-center w-[250px] m-auto mb-32">
        <img
          className="w-[250px] h-[250px] object-scale-down rounded-full overflow-hidden bg-gray-200"
          src="https://i.ibb.co/TMffFpS/Screenshot.png"
          alt="n"
        />
        <h1 className="mt-6 text-gray-700 font-semibold text-xl">
          Zero Items In Your Cart
        </h1>
        <p
          className="cursor-pointer mt-4 text-blue-500 font-semibold hover:scale-105 duration-200"
          onClick={() => dispatch(showCartHandler())}
        >
          <Link href="/shop" passHref>
            Let&apos;s do some Shop
          </Link>
        </p>
      </div>
    </div>
  );
};

// MAIN
const CartSidebar = () => {
  const { isShowCart, cartItems, cartTotalQuantity } = useAppSelector(
    state => state.cartSlice
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    isShowCart
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isShowCart]);

  return (
    <div
      className={`fixed top-0 flex justify-between right-0 z-30 ${
        isShowCart ? 'w-full h-screen' : 'w-0 h-0'
      }`}
    >
      <div
        className={`h-screen bg-black bg-opacity-30 w-auto flex-grow`}
        onClick={() => dispatch(showCartHandler())}
      />

      <div
        className={`h-screen ${
          isShowCart ? 'w-[320px] md:min-w-[320px]' : 'w-0'
        } transform-all duration-300 bg-white flex flex-col justify-between overflow-hidden`}
      >
        <div className="h-20 flex justify-between items-center pl-3 border-b border-gray-300 pb-2">
          <AiOutlineClose
            onClick={() => dispatch(showCartHandler())}
            className="text-gray-600 w-8 h-8 cursor-pointer border rounded-full"
          />
          <p className="text-2xl pr-6">Shopping Cart</p>
        </div>

        {cartTotalQuantity > 0 ? (
          <>
            <ItemsList cartItems={cartItems} />

            <div className="w-full flex justify-center items-center">
              <button
                className="w-full p-4 bg-[#a52a2a] text-white cursor-pointer active:scale-105 duration-200"
                onClick={() => (
                  router.push('/cart'), dispatch(showCartHandler())
                )}
              >
                Go to Cart
              </button>
            </div>
          </>
        ) : (
          <NoItems />
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
