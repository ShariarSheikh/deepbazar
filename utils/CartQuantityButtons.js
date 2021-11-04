import React, { useEffect, useState } from "react";

const CartQuantityButtons = ({
  quantity,
  countItem,
  increment,
  decrement,
  selectCount,
}) => {
  return (
    <div className="w-full max-w-[200px] flex items-center h-10 space-x-3 mt-5">
      <div
        onClick={() => decrement()}
        className="h-full active:scale-125 duration-200 py-2 px-2 border border-gray-200 flex items-center justify-center cursor-pointer text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-1 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 12H6"
          />
        </svg>
      </div>
      <div className="relative w-10 h-full flex justify-center items-center bg-black text-white">
        <input
          step="0.01"
          maxLength={quantity}
          className="hide_input_arrow w-10 h-10 bg-black text-white overflow-hidden pl-2"
          type="number"
          value={countItem}
          onChange={selectCount}
        />
      </div>
      <div
        onClick={() => increment()}
        className="h-full active:scale-125 duration-200 py-2 px-2 border border-gray-200 flex items-center justify-center cursor-pointer text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-1 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartQuantityButtons;
