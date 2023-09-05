'use client';
import Wishlist from '@/views/profile/wishlist';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="">
      <Wishlist />
    </div>
  );
};

export default Page;
