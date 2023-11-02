'use client';

import Skeleton from '@/components/common/Skeleton';
import { LoadingPage } from '@/components/common/loading';
import { useGetProductsMutation } from '@/redux/services/productApi';
import { ProductListApiQuery } from '@/types/product.types';
import { Banners, banners } from '@/views/home/HeroSection';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { CSSProperties, useEffect, useState } from 'react';
import Product from '../shop/Product';
import PaginationComponent from '@/components/common/PaginationComponent';

const defaultBannerSate: Banners = {
  id: 10,
  bannerUrl: 'https://i.ibb.co/q7Mg3Cg/35008886397.png',
  link: '',
  offer: 9,
};

export default function Page() {
  const [getProducts, getProductsApi] = useGetProductsMutation();
  const [pageLengthSate, setPageLengthState] = useState<number>(1);
  const [isInitialize, setIsInitialize] = useState<boolean>(false);
  const [banner, setBanner] = useState<Banners>({
    id: 0,
    bannerUrl: '',
    link: '',
    offer: 0,
  });

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
    return pageLengthSate; // Use the default if query param is invalid or null
  };

  const getOfferBannerData = (): Banners => {
    const queryId = Number(offerIdQuery);
    if (!queryId || isNaN(queryId) || queryId < 0 || queryId > banners.length) {
      // if query doesn't exits set default offer
      return defaultBannerSate;
    }

    return banners[queryId - 1];
  };

  const query: ProductListApiQuery = {
    limit: 8,
    pageLength: getPageLength(),
    discountPercentUpTo: getOfferBannerData().offer,
  };

  // ON PAGINATION CHANGE
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
    return setIsInitialize(true);
  }, [searchParams, isInitialize, router]);

  if (!isInitialize) return <LoadingPage />;
  if (!banner.id) return router.back();

  const loadingSkeleton = (
    <>
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
    </>
  );

  const zeroProducts = typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals === 0 && (
      <div className="flex items-center justify-center h-[200px] text-[30px] font-bold uppercase tracking-[2px] w-full text-sm text-gray-500">
        <span>Zero Products</span>
      </div>
    );

  const productsList =
    typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals > 0 &&
    getProductsApi.data?.data.products.map(product => (
      <Product key={product._id} product={product} />
    ));

  const pagination = typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals > 0 && (
      <PaginationComponent
        currentPage={pageLengthSate}
        onChange={pageLengthHandler}
        totalProducts={getProductsApi.data?.data.totals}
        limit={8}
      />
    );

  const divStyle: CSSProperties = {
    backgroundImage: `url(${banner.bannerUrl})`,
    backgroundSize: '100% 100%',
    backgroundColor: 'aqua',
  };

  return (
    <main className="min-h-[60vh] w-full pb-4 bg-white">
      <div className="h-[316px] w-full z-10" style={divStyle} />
      <div className="w-full min-h-[300px] rounded-t-[6px] max-w-[1201px] mx-auto bg-[#F3F9FB] z-20 -mt-[70px] p-3 lg:p-6">
        {zeroProducts}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4 w-full pt-[30px]">
          {getProductsApi.isLoading && loadingSkeleton}
          {productsList}
        </div>
        <div className="w-full flex items-center justify-center h-[80px] mt-[30px]">
          {pagination}
        </div>
      </div>
    </main>
  );
}
