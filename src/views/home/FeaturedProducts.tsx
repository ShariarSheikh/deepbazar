import Link from 'next/link';
import { FC } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import required modules

import { Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// SWIPER JS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductCart from './ProductCart';
import { ProductListType } from '@/types/product.types';

//---------------------------------------------
interface IProps {
  data: ProductListType[];
}
//---------------------------------------------

const FeaturedProducts: FC<IProps> = ({ data }) => {
  return (
    <section className="w-full h-full relative mt-[22px] lg:mt-[60px] md:min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-sm md:text-[28px] font-bold">Featured Products</h1>
        <Link href={`/shop`}>
          <button className="text-sm md:text-[28px] font-bold flex items-center space-x-1 hover:underline text-primary">
            <p>More</p> <MdKeyboardArrowRight className="text-primary" />
          </button>
        </Link>
      </div>

      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        spaceBetween={30}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroupSkip: 1,
          },
        }}
        scrollbar={true}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        modules={[Keyboard, Scrollbar]}
        className="w-full mt-[24px] md:mt-[40px] pb-10 lg:min-h-[500px]"
      >
        {data.map(product => (
          <SwiperSlide key={product._id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;
