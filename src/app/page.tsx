'use client';

// import ProductCart from '@/components/common/ProductCart';
// import smartPhones from '@/fakeDB/smartPhones';
// import NewArrivals from '@/views/home/NewArrivals';
import CategorySection from '@/views/home/CategorySection';
import HeroSection from '@/views/home/HeroSection';
// import FeaturedProducts from '@/views/home/FeaturedProducts';
// import SponsoredItem from '@/views/home/SponsoredItem';
// import { ProductSectionName } from '@/views/home/utils';
// import { SwiperSlide } from 'swiper/react';
// import JustForYou from '@/views/home/JustForYou';

//---------------------------------------------------------

//---------------------------------------------------------
export default function Home() {
  return (
    <main className="min-h-screen w-full m-auto mt-10">
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />

        <CategorySection />

        {/* <NewArrivals
          data={smartPhones.slice(0, 9)}
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'flash-sale',
            },
          }}
        /> */}

        {/* <JustForYou
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'watch',
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
            {smartPhones.slice(0, 8).map(phoneData => (
              <ProductCart
                key={phoneData._id}
                isInsideSlider={false}
                data={phoneData}
              />
            ))}
          </>
        </JustForYou>

        <SponsoredItem />

        <FeaturedProducts
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'smart-phones',
            },
          }}
          title={ProductSectionName.FeaturedProducts}
        >
          {smartPhones.map(phoneData => (
            <SwiperSlide key={phoneData._id}>
              <ProductCart isInsideSlider data={phoneData} />
            </SwiperSlide>
          ))}
        </FeaturedProducts> */}
        <br />
        <br />
      </div>
    </main>
  );
}
