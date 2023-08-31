import Link from 'next/link';
import { FC, ReactElement, ReactNode } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import required modules

import { Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//---------------------------------------------
interface IProps {
  title: string;
  children: ReactElement | ReactNode;
  isSlider: boolean;
  productPageLink: {
    pathname: string;
    query: {
      keyword: string;
    };
  };
  navigationComp: ReactElement | null;
}
//---------------------------------------------

const ProductFeedsHome: FC<IProps> = ({
  title,
  children,
  isSlider,
  productPageLink,
  navigationComp,
}) => {
  if (isSlider)
    return (
      <section className="w-full h-full relative mt-[60px] min-h-[500px]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[28px] font-bold">{title}</h1>
          <Link href={productPageLink}>
            <button className="text-[28px] text-primary font-bold flex items-center space-x-1 hover:underline">
              <p>More</p> <MdKeyboardArrowRight className="text-primary" />
            </button>
          </Link>
        </div>

        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          // breakpoints={{
          //   769: {
          //     slidesPerView: 2,
          //     slidesPerGroup: 2,
          //   },
          // }}
          scrollbar={true}
          navigation={false}
          pagination={{
            clickable: false,
          }}
          modules={[Keyboard, Scrollbar]}
          className="w-full mt-[40px] pb-10 min-h-[500px]"
        >
          {children}
        </Swiper>
      </section>
    );

  return (
    <section className="w-full relative mt-[60px] min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[28px] font-bold">{title}</h1>
        <Link href={productPageLink}>
          <button className="text-[28px] font-bold flex items-center space-x-1 hover:underline">
            <p>More</p> <MdKeyboardArrowRight className="text-primary" />
          </button>
        </Link>
      </div>
      {navigationComp}
      <div className="mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
        {children}
      </div>
    </section>
  );
};

export default ProductFeedsHome;
