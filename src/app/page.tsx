'use client';

import ProductCart from '@/components/common/ProductCart';
import Skeleton from '@/components/common/Skeleton';
import { useGetProductsQuery } from '@/redux/services/productApi';
import { ProductSectionName } from '@/types/product.types';
import CategorySection from '@/views/home/CategorySection';
import FeaturedProducts from '@/views/home/FeaturedProducts';
import HeroSection from '@/views/home/HeroSection';
import JustForYou from '@/views/home/JustForYou';
import NewArrivals from '@/views/home/NewArrivals';
import { SwiperSlide } from 'swiper/react';
import type { Metadata } from 'next';

//-----------------------------------------
const metadata: Metadata = {};
//-----------------------------------------

//---------------------------------------------------------
export default function Home() {
  metadata.title = 'Home - DeepBazar';

  const getNewArrivals = useGetProductsQuery({
    query: { limit: 9, productSectionName: ProductSectionName.NewArrivals },
  });

  const getJustForYou = useGetProductsQuery({
    query: { limit: 8, productSectionName: ProductSectionName.JustForYou },
  });

  const getFeaturedProducts = useGetProductsQuery({
    query: {
      limit: 15,
      productSectionName: ProductSectionName.FeaturedProducts,
    },
  });

  return (
    <main className="min-h-screen w-full m-auto mt-10 px-1">
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />

        <CategorySection />

        {getNewArrivals.isLoading ? (
          <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
            <Skeleton className="w-[30%]" height={200} />
          </div>
        ) : (
          <NewArrivals
            data={getNewArrivals.data?.data.products}
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
            {getJustForYou.isLoading ? (
              <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
              </div>
            ) : (
              typeof getJustForYou.data !== 'undefined' &&
              getJustForYou.data.data.products.map(product => (
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
            {getFeaturedProducts.isLoading ? (
              <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
                <Skeleton className="w-[30%]" height={200} />
              </div>
            ) : (
              typeof getFeaturedProducts.data !== 'undefined' &&
              getFeaturedProducts.data.data.products.map(product => (
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
