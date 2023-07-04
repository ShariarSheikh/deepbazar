'use client';

import Product from '@/views/product';
import { NextPage } from 'next';

//------------------------------------------------------------------
interface PageProps {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
//------------------------------------------------------------------

const Page: NextPage<PageProps> = ({ params }: PageProps) => {
  const { productId } = params;

  return (
    <main className="min-h-[60vh] max-w-[1366px] w-full m-auto mt-8 px-4 pb-4">
      <Product productId={productId} />
    </main>
  );
};

export default Page;
