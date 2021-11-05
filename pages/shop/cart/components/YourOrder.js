import React, { useEffect } from "react";
import { clearCartItems, getCart } from "../../../../redux/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../../../../utils/CartItems";
import { useRouter } from "next/dist/client/router";

const YourOrder = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity } =
    useSelector(getCart);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    cartTotalQuantity <= 0 && router.push("/");
  }, [cartItems]);

  return (
    <div className="w-full lg:w-2/4  py-2 px-2">
      <h1 className="text-xl font-semibold">Your Order</h1>

      <div className="w-full max-h-[600px] overflow-y-scroll">
        {cartItems?.map((x) => (
          <CartItems key={x.id} data={x} />
        ))}
      </div>

      <div className="w-full flex justify-between self-end items-center  h-14">
        <p
          className="py-2 px-3 rounded text-sm border border-red-500 hover:bg-red-500
         hover:text-white cursor-pointer active:scale-105 duration-200"
          onClick={() => dispatch(clearCartItems())}
        >
          Clear All Items
        </p>

        <h1>
          Subtotal:
          <span className="text-xl font-semibold">
            <span className="text-base pl-1">{cartItems[0]?.currency}</span>
            {cartTotalAmount}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default YourOrder;
