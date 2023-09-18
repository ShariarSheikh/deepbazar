'use client';
import Order from '@/views/user/order';
import { orders } from '@/views/user/order/utils';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <section className="w-full">
      <Order mode="overview" orders={orders.slice(0, 4)} />
    </section>
  );
};

export default Page;
