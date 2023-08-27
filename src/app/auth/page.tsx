'use client';

import Auth from '@/views/auth/Auth';
import { NextPage } from 'next';

//------------------------------------------------------------------
type PageProps = NextPage;
//------------------------------------------------------------------

const Page: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <main className="min-h-[80vh] max-w-[1201px] w-full m-auto mt-8 px-4 pb-4">
      <Auth />
    </main>
  );
};

export default Page;
