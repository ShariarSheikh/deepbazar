'use client';

import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import ShippingAddress from './ShippingAddress';

//-------------------------------------

//-------------------------------------

const Page = () => {
  return (
    <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-3">
      <header className="flex items-center space-x-2 text-gray-600 font-medium">
        <Link
          href="/user/shipping-address"
          className="hover:underline text-primary"
        >
          <h1>My Shipping Address</h1>
        </Link>
        <div className="flex items-center">
          <IoIosArrowForward />
          <span className="ml-[3px]">Add New</span>
        </div>
      </header>
      <ShippingAddress />
    </div>
  );
};

export default Page;
