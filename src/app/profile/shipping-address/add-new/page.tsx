'use client';
import AddNewShippingAddress from '@/views/profile/shippingAddress/add-new';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="">
      <AddNewShippingAddress />
    </div>
  );
};

export default Page;
