'use client';

import type { Metadata } from 'next';
import ProductAdditionalInfo, {
  ComponentShowOnType,
} from '@/components/common/ProductAdditionalInfo';
import Link from 'next/link';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import DisplayImage from './DisplayImage';
import Info from './Info';
import { useGetProductDetailsQuery } from '@/redux/services/productApi';
import { LoadingPage } from '@/components/common/loading';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import Head from 'next/head';

//------------------------------------------------------------------
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
  title: 'Product Page - DeepBazar',
};
//------------------------------------------------------------------

const Page = ({ params }: { params: { id: string } }) => {
  const user = useAppSelector(state => state.authSlice.user);
  const { data, isLoading, isError } = useGetProductDetailsQuery({
    productId: params.id,
  });

  const router = useRouter();

  useEffect(() => {}, []);

  if (isLoading) return <LoadingPage />;

  const product = data?.data;
  if (!product?._id || isError) return router.back();

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      <Head>
        <title>{product.title ?? 'Product'} - DeepBazar</title>
      </Head>
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
              category: product?.category,
            },
          }}
        >
          <div className="flex items-center">
            <IoIosArrowForward /> <span>{product?.category}</span>
          </div>
        </Link>
        <div className="flex items-center text-gray-500">
          <IoIosArrowForward />
          <span className="line-clamp-1">{product.title}</span>
        </div>
      </div>

      <div className="w-full min-w-[300px] max-w-[440px] mx-auto md:max-w-[100%] flex flex-col lg:flex-row justify-between transition-all duration-200">
        {product?._id && (
          <>
            <DisplayImage images={product?.images} />
            <Info data={product} />
          </>
        )}
      </div>
      <ProductAdditionalInfo
        componentFor={ComponentShowOnType.UserProductDetails}
        specification={product.specification}
        description={product.description}
        productId={product._id}
        userId={user?._id ?? ''}
        totalReview={product.ratings.totalReviews}
      />
    </main>
  );
};

export default Page;
