'use client';
import ShippingAddress from '@/views/profile/shippingAddress';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="">
      <ShippingAddress />
    </div>
  );
};

export default Page;
