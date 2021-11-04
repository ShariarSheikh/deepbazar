import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import {
  addToCart,
  getCart,
  removeItem,
  decreaseCartItems,
} from "../redux/cartSlice/cartSlice";
import { useSelector } from "react-redux";

const CartQuantityButtons = dynamic(() => import("./CartQuantityButtons"));

const CartItems = ({ data }) => {
  //check if cart sidebar is open then change some css styles
  const { openCartSidebar, cartItems } = useSelector(getCart);

  //cart items data
  const { title, images, price, minQuantity, cartQuantity, currency } = data;

  const [countItem, setCountItem] = useState(1);
  const dispatch = useDispatch();

  //increment cart quantity
  const increment = () => {
    setCountItem(parseInt(countItem) + 1);
    //increment state quantity
    const quantity = 1;
    dispatch(addToCart({ data, quantity }));
  };

  //decrement cart quantity
  const decrement = () => {
    countItem > 1 && setCountItem(parseInt(countItem) - 1);
    //decrement state quantity
    const quantity = 1;
    dispatch(decreaseCartItems({ data, quantity }));
  };

  //select count
  const selectCount = (e) => {
    const count = e.target.value;
    setCountItem(count);
  };

  //on page load set cart quantity
  useEffect(() => {
    setCountItem(cartQuantity);
  }, [data, cartItems]);

  return (
    <div
      className={`w-full bg-gray-50 max-h-[180px] flex flex-row items-center ${
        openCartSidebar ? "mt-0" : "mt-2"
      } relative border-b border-gray-300 pb-1 overflow-hidden`}
    >
      {/* img container  */}
      <div
        className={`${
          openCartSidebar ? "h-[150px] w-[130px]" : "h-[180px] w-[200px]"
        } overflow-hidden`}
      >
        {images?.slice(0, 1).map((x) => (
          <img
            key={x}
            className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
            src={x}
            alt="cart items"
          />
        ))}
      </div>

      {/* infoContainer */}
      <div
        className={`w-full max-h-[280px] h-[180px] pl-3  ml-5 pb-2 ${
          openCartSidebar ? "h-[150px]" : "h-[180px]"
        }`}
      >
        <div>
          <h2
            className={`font-semibold text-base ${
              openCartSidebar
                ? "line-clamp-1"
                : "md:line-clamp-3 line-clamp-2 text-xl"
            } `}
          >
            {title}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            minus.
          </h2>
          <p className="text-gray-600 mt-1">
            Price:
            <span className="font-semibold">
              <span className="font-medium text-sm pl-1">{currency} </span>
              {price}
            </span>
          </p>
          <p className="text-gray-600 mt-1">
            Total Price:
            <span className="font-semibold">
              <span className="font-medium text-sm pl-1">{currency} </span>
              {Number(price) * Number(cartQuantity)}
            </span>
          </p>
        </div>

        <div>
          <CartQuantityButtons
            countItem={countItem}
            increment={increment}
            decrement={decrement}
            selectCount={selectCount}
            quantity={minQuantity}
          />
        </div>
      </div>

      {/* remove items */}
      <p className="p-3 flex justify-end items-center">
        <AiOutlineClose
          className="cursor-pointer active:scale-125 duration-200 md:bg-transparent"
          onClick={() => dispatch(removeItem(data))}
        />
      </p>
    </div>
  );
};

export default CartItems;
