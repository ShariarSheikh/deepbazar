'use client';

import Auth from '@/views/auth/Auth';
import { NextPage } from 'next';

//------------------------------------------------------------------

//------------------------------------------------------------------

const Page: NextPage = () => {
  return (
    <main className="min-h-[65vh] max-w-[1201px] w-full m-auto mt-12 px-4 pb-4">
      <Auth />
    </main>
  );
};

export default Page;
