'use client';

import Skeleton from '@/components/common/Skeleton';
import { useGetProductsMutation } from '@/redux/services/productApi';
import { ProductSectionName } from '@/types/product.types';
import FeaturedProducts from '@/views/home/FeaturedProducts';
import HeroSection from '@/views/home/HeroSection';
import JustForYou from '@/views/home/JustForYou';
import NewArrivals from '@/views/home/NewArrivals';
import SponsoredItem from '@/views/home/SponsoredItem';
import { useEffect, useState } from 'react';

//-----------------------------------------

//-----------------------------------------

export default function Home() {
  const [getNewArrivals, getNewArrivalsApi] = useGetProductsMutation();
  const [getJustForYou, getJustForYouApi] = useGetProductsMutation();
  const [getFeaturedProducts, getFeaturedProductsApi] =
    useGetProductsMutation();

  const [isInitialize, setIsInitialize] = useState<boolean>(false);

  // 1 FETCH NEW ARRIVALS PRODUCTS
  useEffect(() => {
    if (isInitialize) return;
    getNewArrivals({
      query: {
        limit: 4,
        productSectionName: ProductSectionName.NewArrivals,
      },
    });
    setIsInitialize(true);
    return () => undefined;
  }, []);

  // 2 FETCH JUST FOR YOUR PRODUCTS && IS ALREADY INITIALIZE AND FETCH 1 API ALREADY FETCH
  useEffect(() => {
    if (!isInitialize && getNewArrivalsApi.isUninitialized) return;
    getJustForYou({
      query: {
        limit: 4,
        productSectionName: ProductSectionName.JustForYou,
      },
    });
    return () => undefined;
  }, [getNewArrivalsApi, isInitialize]);

  // 2 FETCH JUST FOR YOUR PRODUCTS && IS ALREADY INITIALIZE AND FETCH 2 API ALREADY FETCH
  useEffect(() => {
    if (!isInitialize && getJustForYouApi.isUninitialized) return;
    getFeaturedProducts({
      query: {
        limit: 15,
        productSectionName: ProductSectionName.FeaturedProducts,
      },
    });
    return () => undefined;
  }, [isInitialize, getJustForYouApi]);

  return (
    <main className="min-h-screen w-full m-auto mt-10 px-4">
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />
        {/* <CategorySection /> */}

        {getNewArrivalsApi.isLoading ? (
          <div className="md:mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
          </div>
        ) : (
          <NewArrivals
            data={
              typeof getNewArrivalsApi.data !== 'undefined'
                ? getNewArrivalsApi.data.data.products
                : []
            }
          />
        )}

        {getJustForYouApi.isLoading ? (
          <div className="md:mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
          </div>
        ) : (
          <JustForYou
            data={
              typeof getJustForYouApi.data !== 'undefined'
                ? getJustForYouApi.data.data.products
                : []
            }
          />
        )}

        <SponsoredItem />
        {getFeaturedProductsApi.isLoading ? (
          <div className="md:mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
            <Skeleton className="w-[100%]" height={200} />
          </div>
        ) : (
          <FeaturedProducts
            data={
              typeof getFeaturedProductsApi.data !== 'undefined'
                ? getFeaturedProductsApi.data.data.products
                : []
            }
          />
        )}

        <br />
        <br />
      </div>
    </main>
  );
}
