'use client';

import Order from '@/views/cart/Order';

const CartPage = () => {
  return (
    <main className="page w-full lg:max-w-[1366px] max-w-[640px] lg:w-full m-auto mt-5 px-3 pb-10">
      {/* <div className="w-full flex flex-col-reverse lg:flex-row-reverse justify-between mt-4 relative">
        <Payment />
        <Order />
      </div> */}
      <div className="max-w-[610px] w-full mx-auto">
        <h1 className="text-xl font-semibold text-gray-600">Shopping Cart</h1>
        <p className="text-sm mt-2 font-medium">Home / Cart</p>
      </div>
      <div className="w-full flex flex-col items-center mt-4 relative">
        <Order />
      </div>
    </main>
  );
};

export default CartPage;
