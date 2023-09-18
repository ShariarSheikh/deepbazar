'use client';
import Order from '@/views/user/order';
import { orders } from '@/views/user/order/utils';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="">
      <Order orders={orders} />
    </div>
  );
};

export default Page;
