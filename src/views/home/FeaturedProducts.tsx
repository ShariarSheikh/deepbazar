import Link from 'next/link';
import { FC, ReactElement, ReactNode } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import required modules

import { Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';

// SWIPER JS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

//---------------------------------------------
interface IProps {
  title: string;
  children: ReactElement | ReactNode;

  productPageLink: {
    pathname: string;
    query: {
      keyword: string;
    };
  };
}
//---------------------------------------------

const FeaturedProducts: FC<IProps> = ({ title, children, productPageLink }) => {
  return (
    <section className="w-full h-full relative mt-[22px] lg:mt-[60px] md:min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-sm md:text-[28px] font-bold">{title}</h1>
        <Link href={productPageLink}>
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
        className="w-full mt-[24px] md:mt-[40px] pb-10 md:min-h-[500px]"
      >
        {children}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;
