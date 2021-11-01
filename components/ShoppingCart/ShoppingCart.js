import React from "react";
import { BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const ShoppingCart = () => {
  return (
    <div
      className="relative md:w-[32%] lg:w-[24%] 2xl:min-w-[320px] max-w-xs w-[48%] h-[260px] xl:min-h-[380px] max-h-[380px]
     flex flex-col justify-between mb-5 md:mb-7 xl:mb-12 hover:shadow-2xl transition-all duration-200 group"
    >
      <div className="bg-purple-100 w-full h-[180px] md:h-[290px] relative overflow-hidden">
        <img
          className="h-full w-full object-cover cursor-pointer"
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="product-img"
        />
        {/* add to cart */}
        <div className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 w-10 h-10 xl:w-14 xl:h-12 lg:hidden group-hover:block cursor-pointer">
          <div className="w-full h-full flex justify-center items-center border bg-white border-gray-400 rounded-lg
           active:scale-110 transition duration-200">
            <FiShoppingCart className="xl:w-6 w-4 h-4 xl:h-6" />
          </div>
        </div>
        {/* add favorite */}
        <div className="absolute bottom-1 left-1 lg:left-auto lg:bottom-14 xl:bottom-16 lg:right-2 w-10 h-10 xl:w-14 xl:h-12 lg:hidden group-hover:block cursor-pointer group">
          <div className="w-full h-full flex justify-center items-center border bg-white border-gray-400 rounded-lg
           active:scale-110 transition duration-200">
            <BsHeart className="xl:w-6 w-4 h-4 xl:h-6 text-red-400" />
          </div>
        </div>
      </div>

      <div className="flex h-[80px] xl:h-[90px] flex-col items-center w-full py-3">
        <h2 className="text-gray-600 text-xl font-normal cursor-default">
          Lal jackets qular
        </h2>
        <p className="font-semibold text-roboto mt-1">$450.00</p>
      </div>

      {/* bonus  */}
      <div className="absolute top-2 xl:top-5 right-2 xl:right-5 w-10 h-10 xl:w-14 xl:h-12">
        <div className="w-full h-full flex justify-center items-center bg-black text-white rounded-lg text-sm">
          -20%
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
