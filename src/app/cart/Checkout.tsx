import Button from '@/components/common/Button';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

const Checkout = () => {
  const cart = useAppSelector(state => state.cartSlice);

  const router = useRouter();

  const gotToCheckoutHandler = () => router.push('/cart/checkout');
  return (
    <div className="w-full bg-white rounded-[6px] max-w-[100%] h-full max-h-[395px] lg:max-w-[360px] flex flex-col items-start justify-start px-2 py-2 lg:py-6 lg:px-4">
      <div className="w-full h-full">
        <h1 className="text-xl font-semibold pb-3 border-b border-gray-200">
          Order Summary
        </h1>

        <ul className="text-gray-600">
          <li className="flex items-center justify-between mb-[15px] mt-[15px]">
            <span>Sub Total</span>
            <span className="font-semibold">${cart.subtotal}</span>
          </li>
          <li className="flex items-center justify-between mb-[12px]">
            <span>Tax</span>
            <span className="font-semibold">$0.00</span>
          </li>
          <li className="flex items-center justify-between mb-[12px]">
            <span>Shipping</span>
            <span className="font-semibold text-primary">Free</span>
          </li>
          <li className="flex items-center justify-between mb-[20px]">
            <span>Total</span>
            <span className="font-semibold">${cart.totalAmount}</span>
          </li>
        </ul>
        <Button
          type="submit"
          onClick={gotToCheckoutHandler}
          className="shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] active:scale-95 duration-150 flex justify-center items-center w-full mt-[10px] bg-primary h-[42px] rounded-[6px] text-white text-[13px]"
        >
          Go to checkout
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
