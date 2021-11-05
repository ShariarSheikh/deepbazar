import React from "react";

const CartBadges = ({ number }) => {
  return (
    <div
      className={`absolute md:right-0 -right-1 md:top-0 -top-2 w-4 md:w-5 h-4 md:h-5 bg-red-500 text-white rounded-full flex justify-center items-center overflow-hidden`}
    >
      <p className="text-[12px]">{number}</p>
    </div>
  );
};

export default CartBadges;
