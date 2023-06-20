import useWindowSize from '@/hooks/useWindowSize';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import bDesktop1 from '../../assets/banner-desktop1.png';
import bDesktop2 from '../../assets/banner-desktop2.png';
import bDesktop3 from '../../assets/banner-desktop3.png';
import bMobile1 from '../../assets/banner-mobile1.png';
import bMobile2 from '../../assets/banner-mobile2.png';
import bMobile3 from '../../assets/banner-mobile3.png';
//---------------------------------------

//---------------------------------------

const HeroSection = () => {
  //HOOKS
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <div className="w-full relative h-[300px] bg-slate-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full rounded-md overflow-hidden"
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.category}>
            <div
              onClick={() => router.push(`/shop/${banner.link}`)}
              className="w-full min-h-[300px] max-w-[1300px] mx-auto cursor-pointer rounded-md max-h-[300px] overflow-hidden relative group"
            >
              <img
                src={
                  width <= 460
                    ? banner.bannerMobileUrl.src
                    : banner.bannerDesktopUrl.src
                }
                alt="banner"
                className="w-full min-h-[300px] object-cover group-hover:scale-110 duration-300 transition-all"
              />

              <div className="absolute inset-0 duration-200 transition-all" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

interface Banners {
  id: number;
  bannerMobileUrl: StaticImageData;
  bannerDesktopUrl: StaticImageData;
  link: string;
  category: string;
}
const banners: Banners[] = [
  {
    id: 1,
    bannerDesktopUrl: bDesktop1,
    bannerMobileUrl: bMobile1,
    link: 'offers',
    category: 'offers',
  },
  {
    id: 2,
    bannerDesktopUrl: bDesktop2,
    bannerMobileUrl: bMobile2,
    link: 'men-clothes',
    category: 'men-clothes',
  },
  {
    id: 3,
    bannerDesktopUrl: bDesktop3,
    bannerMobileUrl: bMobile3,
    link: 'shoes',
    category: 'shoes',
  },
];
