'use client';

import ProductCart from '@/components/common/ProductCart';
import smartPhones from '@/fakeDB/smartPhones';
import BestDealsSection from '@/views/home/BestDealsSection';
import CategorySection from '@/views/home/CategorySection';
import HeroSection from '@/views/home/HeroSection';
import ProductFeedsHome from '@/views/home/ProductFeedsHome';
import { SwiperSlide } from 'swiper/react';

//---------------------------------------------------------

//---------------------------------------------------------
export default function Home() {
  // const { data, isLoading } = useProductListQuery();

  return (
    <main className="min-h-screen w-full m-auto mt-10">
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />
        <CategorySection />

        <br />

        <BestDealsSection
          data={smartPhones.slice(0, 9)}
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'smartPhones',
            },
          }}
        />

        <br />
        <br />
        <br />
        <br />

        <ProductFeedsHome
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'watch',
            },
          }}
          isSlider={false}
          title="Discount Items For You!"
          navigationComp={
            <div className="w-full py-[40px]">
              <div className="w-full flex items-center space-x-4">
                <button className="rounded-[100px] h-[43px] border border-[#c5c5c5] px-[23px] text-sm font-semibold">
                  Watch
                </button>
                <button className="rounded-[100px] h-[43px] border border-[#c5c5c5] px-[23px] text-sm font-semibold">
                  Smart Phone
                </button>
                <button className="rounded-[100px] h-[43px] border border-[#c5c5c5] px-[23px] text-sm font-semibold">
                  Laptop
                </button>
                <button className="rounded-[100px] h-[43px] border border-[#c5c5c5] px-[23px] text-sm font-semibold">
                  Camera
                </button>
                <button className="rounded-[100px] h-[43px] border border-[#c5c5c5] px-[23px] text-sm font-semibold">
                  Audio
                </button>
              </div>
            </div>
          }
        >
          <>
            {smartPhones.slice(0, 8).map(phoneData => (
              <ProductCart
                key={phoneData._id}
                isInsideSlider
                data={phoneData}
              />
            ))}
          </>
        </ProductFeedsHome>
        <br />
        <br />
        <br />
        <br />
        <ProductFeedsHome
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'smartPhones',
            },
          }}
          isSlider
          title="SmartPhones For You!"
          navigationComp={null}
        >
          {smartPhones.map(phoneData => (
            <SwiperSlide key={phoneData._id}>
              <ProductCart isInsideSlider data={phoneData} />
            </SwiperSlide>
          ))}
        </ProductFeedsHome>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
