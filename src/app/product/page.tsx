'use client';

import smartPhones, { SmartPhonesData } from '@/fakeDB/smartPhones';
import Product from '@/views/product';
import { NextPage } from 'next';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

//------------------------------------------------------------------
interface PageProps {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
//------------------------------------------------------------------

const Page: NextPage<PageProps> = () => {
  const [data, setData] = useState<SmartPhonesData>({
    _id: 0,
    images: {
      cardSizeUrl: '',
      displayUrl: '',
      commentUrl: '',
      defaultUrl: '',
    },
    title: '',
    description: '',
    price: 0,
    discountPrice: 0,
    reviews: {
      total: 0,
      star: 0,
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const { category, productId } = {
    category: searchParams.get('category'),
    productId: searchParams.get('productId'),
  };

  useEffect(() => {
    if (!productId) return setIsLoading(true);
    const productData = smartPhones.find(
      item => item._id === Number(productId)
    );
    if (!productData?._id) return undefined;
    setData(productData);
  }, [productId, category]);

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      <div className="flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-primary">
        <Link href="/">
          <div className="flex items-center">
            <AiFillHome /> <span>Home</span>
          </div>
        </Link>
        <Link
          href={{
            pathname: '/shop',
            query: {
              category: category,
            },
          }}
        >
          <div className="flex items-center">
            <IoIosArrowForward /> <span>{category}</span>
          </div>
        </Link>
        <div className="flex items-center text-gray-500">
          <IoIosArrowForward /> <span>{data?.title}</span>
        </div>
      </div>
      <Product isLoading={isLoading} data={data} />
    </main>
  );
};

export default Page;
