import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCart, openCart } from "../../redux/cartSlice/cartSlice";
import CartItems from "../../utils/CartItems";

const CartItemsBox = () => {
  const { openCartSidebar, cartItems, cartTotalQuantity } =
    useSelector(getCart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    openCartSidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [openCartSidebar]);

  return (
    <div
      className={`w-full fixed top-0 min-h-screen flex justify-between right-0 z-30 ${
        openCartSidebar ? "w-full" : "w-0"
      }`}
    >
      <div
        className={`h-screen bg-black bg-opacity-50 w-auto flex-grow`}
        onClick={() => dispatch(openCart())}
      />

      <div
        className={`h-screen ${
          openCartSidebar ? "w-[400px] md:min-w[400px]" : "w-0"
        } transform-all duration-300 bg-white flex flex-col overflow-hidden`}
      >
        <div className="h-20 flex justify-between items-center pl-3 border-b border-gray-300 pb-2">
          <AiOutlineClose
            onClick={() => dispatch(openCart())}
            className="text-gray-600 w-8 h-8 cursor-pointer border rounded-full"
          />
          <p className="font-semibold text-2xl pr-6">Shopping Cart</p>
        </div>

        {cartTotalQuantity >= 1 && <CartItemsList cartItems={cartItems} />}

        {cartTotalQuantity <= 0 && <ZeroItems />}

        {cartItems.length >= 1 && (
          <div className="w-full flex justify-center items-center">
            <button
              className="w-full p-4 bg-black text-white cursor-pointer active:scale-105 duration-200"
              onClick={() => (router.push("/shop/cart"), dispatch(openCart()))}
            >
              Go to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItemsBox;

const CartItemsList = ({ cartItems }) => {
  return (
    <div className="w-full max-h-[80vh] overflow-y-scroll pb-4 px-2">
      {cartItems?.map((x) => (
        <CartItems data={x} key={x.id} />
      ))}
    </div>
  );
};

const ZeroItems = () => {
  const dispatch = useDispatch();
  return (
    <div className={`h-screen w-full mt-16`}>
      <div className="text-center w-[250px] m-auto">
        <img
          className="w-[250px] h-[250px] object-scale-down rounded-full overflow-hidden bg-gray-200"
          src="https://www.seekpng.com/png/full/117-1170538_404-your-cart-is-empty.png"
          alt="n"
        />
        <h1 className="mt-6 text-gray-700 font-semibold text-xl">
          Zero Items In Your Cart
        </h1>
        <p
          className="cursor-pointer mt-4 text-blue-500 font-semibold hover:scale-105 duration-200"
          onClick={() => dispatch(openCart())}
        >
          <Link href="/shop" passHref>
            Let's do some Shop
          </Link>
        </p>
      </div>
    </div>
  );
};
