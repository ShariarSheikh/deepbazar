import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../../../redux/cartSlice/cartSlice";
import dynamic from "next/dynamic";
import { LoadingLayout } from "../../../../utils/loading";

const CartQuantityButtons = dynamic(() =>
  import("../../../../utils/CartQuantityButtons")
);

const InfoContainer = ({ data, status }) => {
  const [countItem, setCountItem] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    setCountItem(parseInt(countItem) + 1);
  };
  const decrement = () => {
    countItem > 1 && setCountItem(parseInt(countItem) - 1);
  };

  //select count
  const selectCount = (e) => {
    const count = e.target.value;
    setCountItem(count);
  };

  //add to cart
  const addItems = () => {
    const quantity = countItem;
    dispatch(addToCart({ data, quantity }));
    dispatch(openCart());
  };

  return (
    <div className={`w-full max-w-[768px] m-auto lg:w-3/6 mt-10 lg:mt-0`}>
      {status === "pending" ? (
        <div>
          <LoadingLayout width="100%" height="50px" />
          <LoadingLayout width="100%" height="50px" />
          <LoadingLayout width="100%" height="50px" />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold">
            {data?.title.toLocaleUpperCase()}
          </h1>
          <p className="mt-3">
            Availability:
            <span className="font-semibold">{data?.available}</span>
          </p>
          <p className="mt-3 border-b border-gray-300 pb-5">
            Price:
            <span className="font-semibold text-xl">
              <span className="font-medium text-base pl-1">
                {data?.currency}
              </span>
              {data?.price}
            </span>
          </p>
          <div className="mt-3 w-full flex items-center">
            {/* quantity */}
            <div>
              Quantity:
              <CartQuantityButtons
                quantity={data?.minQuantity}
                countItem={countItem}
                increment={increment}
                decrement={decrement}
                selectCount={selectCount}
              />
            </div>
          </div>
          {/* add to cart */}
          <button
            className="py-2 px-3 cursor-pointer bg-black text-white mt-5 active:scale-105 duration-200"
            onClick={addItems}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoContainer;
