'use client';

import ProductCart from '@/components/common/ProductCart';
import Skeleton from '@/components/common/Skeleton';
import { ProductSectionName } from '@/types/product.types';
import CategorySection from '@/views/home/CategorySection';
import FeaturedProducts from '@/views/home/FeaturedProducts';
import HeroSection from '@/views/home/HeroSection';
import JustForYou from '@/views/home/JustForYou';
import NewArrivals from '@/views/home/NewArrivals';
import { SwiperSlide } from 'swiper/react';
import Head from 'next/head';
import { useGetProductsMutation } from '@/redux/services/productApi';
import { useEffect, useState } from 'react';

//-----------------------------------------

//-----------------------------------------

export default function Home() {
  const [getNewArrivals, getNewArrivalsApi] = useGetProductsMutation();
  const [getJustForYou, getJustForYouApi] = useGetProductsMutation();
  const [getFeaturedProducts, getFeaturedProductsApi] =
    useGetProductsMutation();

  const [isInitialize, setIsInitialize] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialize) return;
    getNewArrivals({
      query: {
        limit: 4,
        productSectionName: ProductSectionName.NewArrivals,
      },
    });

    getJustForYou({
      query: {
        limit: 8,
        productSectionName: ProductSectionName.JustForYou,
      },
    });

    getFeaturedProducts({
      query: {
        limit: 15,
        productSectionName: ProductSectionName.FeaturedProducts,
      },
    });

    setIsInitialize(true);

    return () => undefined;
  }, []);

  return (
    <main className="min-h-screen w-full m-auto mt-10 px-1">
      <Head>
        <title>Home - DeepBazar</title>
      </Head>
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />

        <CategorySection />

        {getNewArrivalsApi.isLoading ? (
          <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
          </div>
        ) : (
          <NewArrivals
            data={getNewArrivalsApi.data?.data.products}
            productPageLink={{
              pathname: '/shop',
              query: {
                keyword: ProductSectionName.NewArrivals,
              },
            }}
          />
        )}

        <JustForYou
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: ProductSectionName.JustForYou,
            },
          }}
          title={ProductSectionName.JustForYou}
          navigationComp={
            <div className="w-full pt-[16px] pb-[40px] md:pt-[40px]">
              <div className="w-full flex-wrap flex items-center justify-start md:space-x-4">
                <button className="rounded-[100px] h-[35px] md:h-[43px] border border-[#c5c5c5] px-[10px] md:px-[23px] text-[12px] md:text-sm font-medium md:font-semibold ml-[5px] mb-[5px]">
                  Watch
                </button>
                <button className="rounded-[100px] h-[35px] md:h-[43px] border border-[#c5c5c5] px-[10px] md:px-[23px] text-[12px] md:text-sm font-medium md:font-semibold ml-[5px] mb-[5px]">
                  Smart Phone
                </button>
                <button className="rounded-[100px] h-[35px] md:h-[43px] border border-[#c5c5c5] px-[10px] md:px-[23px] text-[12px] md:text-sm font-medium md:font-semibold ml-[5px] mb-[5px]">
                  Laptop
                </button>
                <button className="rounded-[100px] h-[35px] md:h-[43px] border border-[#c5c5c5] px-[10px] md:px-[23px] text-[12px] md:text-sm font-medium md:font-semibold ml-[5px] mb-[5px]">
                  Camera
                </button>
                <button className="rounded-[100px] h-[35px] md:h-[43px] border border-[#c5c5c5] px-[10px] md:px-[23px] text-[12px] md:text-sm font-medium md:font-semibold ml-[5px] mb-[5px]">
                  Audio
                </button>
              </div>
            </div>
          }
        >
          <>
            {getJustForYouApi.isLoading ? (
              <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
              </div>
            ) : (
              typeof getJustForYouApi.data !== 'undefined' &&
              getJustForYouApi.data.data.products.map(product => (
                <ProductCart
                  key={product._id}
                  isInsideSlider={false}
                  product={product}
                />
              ))
            )}
          </>
        </JustForYou>

        {/* <SponsoredItem /> */}

        <FeaturedProducts
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'smart-phones',
            },
          }}
          title={ProductSectionName.FeaturedProducts}
        >
          <>
            {getFeaturedProductsApi.isLoading ? (
              <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
              </div>
            ) : (
              typeof getFeaturedProductsApi.data !== 'undefined' &&
              getFeaturedProductsApi.data.data.products.map(product => (
                <SwiperSlide key={product._id}>
                  <ProductCart isInsideSlider product={product} />
                </SwiperSlide>
              ))
            )}
          </>
        </FeaturedProducts>
        <br />
        <br />
      </div>
    </main>
  );
}
