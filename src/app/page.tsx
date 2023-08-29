'use client';

import ProductCart from '@/components/common/ProductCart';
import smartPhones from '@/fakeDB/smartPhones';
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
        <ProductFeedsHome
          productPageLink={{
            pathname: '/shop',
            query: {
              keyword: 'smartPhones',
            },
          }}
          isSlider
          title="SmartPhones For You!"
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
      <br />
      <br />
      <br />
      {/* <ProductsFeed> */}
      {/* {isLoading && (
          <>
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
          </>
        )} */}

      {/* {products?.length > 0 &&
          products?.map(product => (
            <ProductCart key={product._id} data={product} />
          ))} */}
      {/* </ProductsFeed> */}
    </main>
  );
}
