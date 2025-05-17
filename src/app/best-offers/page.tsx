'use client';

import PaginationComponent from '@/components/common/PaginationComponent';
import Skeleton from '@/components/common/Skeleton';
import { LoadingPage } from '@/components/common/loading';
import { useGetProductsMutation } from '@/redux/services/productApi';
import { ProductListApiQuery } from '@/types/product.types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Product from '../shop/Product';

const defaultBannerSate = {
  id: 10,
  bannerUrl: 'https://i.ibb.co/q7Mg3Cg/35008886397.png',
  link: '',
  offer: 9,
};

const banners = [
  {
    id: 1,
    bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
    link: 'offers',
    offer: 80,
  },
  {
    id: 2,
    bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
    link: 'men-clothes',
    offer: 50,
  },
  {
    id: 3,
    bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
    link: 'electronics',
    offer: 30,
  },
  defaultBannerSate,
];

export default function Page() {
  const [getProducts, getProductsApi] = useGetProductsMutation();
  const [pageLengthSate, setPageLengthState] = useState<number>(1);
  const [isInitialize, setIsInitialize] = useState<boolean>(false);
  const [banner, setBanner] = useState(defaultBannerSate);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  const pageLengthQuery = searchParams.get('pageLength');
  const offerIdQuery = searchParams.get('id');

  const getPageLength = (): number => {
    if (pageLengthQuery !== null) {
      const parsedPageLength = parseInt(pageLengthQuery, 10);
      if (!isNaN(parsedPageLength) && parsedPageLength > 0) {
        return parsedPageLength;
      }
    }
    return pageLengthSate;
  };

  const getOfferBannerData = () => {
    const queryId = Number(offerIdQuery);
    if (!queryId || isNaN(queryId) || queryId < 0 || queryId > banners.length) {
      return defaultBannerSate;
    }
    return banners[queryId - 1];
  };

  const query: ProductListApiQuery = {
    limit: 8,
    pageLength: getPageLength(),
    discountPercentUpTo: getOfferBannerData().offer,
  };

  const pageLengthHandler = (length: number) => {
    if (pageLengthSate === length) return;
    setPageLengthState(length);
    queryParams.set('pageLength', length.toString());
    router.replace(`/best-offers?${queryParams.toString()}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setPageLengthState(getPageLength());
  }, []);

  useEffect(() => {
    getProducts({ query: query });
  }, [pageLengthQuery, offerIdQuery]);

  useEffect(() => {
    if (isInitialize) return;
    setBanner(getOfferBannerData());
    setIsInitialize(true);
  }, [searchParams, isInitialize, router]);

  if (!isInitialize) return <LoadingPage />;
  if (!banner.id) return router.back();

  const loadingSkeleton = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-8">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <Skeleton width="100%" height="200px" className="rounded-t-lg" />
          <div className="p-4">
            <Skeleton width="80%" height="20px" className="mb-2" />
            <Skeleton width="60%" height="20px" className="mb-3" />
            <Skeleton width="40%" height="20px" />
          </div>
        </div>
      ))}
    </div>
  );

  const zeroProducts = getProductsApi.data?.data.totals === 0 && (
    <div className="flex flex-col items-center justify-center min-h-[300px] w-full text-center">
      <div className="text-4xl mb-4">😕</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        No Products Found
      </h3>
      <p className="text-gray-600 max-w-md">
        We couldn't find any products matching this offer. Check out our other
        amazing deals!
      </p>
      <button
        onClick={() => router.push('/shop')}
        className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Browse All Products
      </button>
    </div>
  );

  const productsList = getProductsApi?.data &&
    getProductsApi.data?.data.totals > 0 && (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-8">
        {getProductsApi.data?.data.products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );

  const pagination = getProductsApi?.data &&
    getProductsApi.data?.data.totals > 0 && (
      <div className="w-full flex justify-center mt-10">
        <PaginationComponent
          currentPage={pageLengthSate}
          onChange={pageLengthHandler}
          totalProducts={getProductsApi.data?.data.totals}
          limit={8}
        />
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner.bannerUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-2xl shadow-lg">
            <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3">
              {banner.offer}% OFF
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Special Offers
            </h1>
            <p className="text-gray-700">
              Don't miss these amazing deals with up to {banner.offer}% discount
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {zeroProducts}
          {getProductsApi.isLoading ? loadingSkeleton : productsList}
          {pagination}
        </div>
      </div>
    </main>
  );
}
