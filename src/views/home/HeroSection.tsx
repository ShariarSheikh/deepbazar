import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//---------------------------------------

//---------------------------------------

const HeroSection = () => {
  //HOOKS
  const router = useRouter();

  return (
    <div className="w-full relative h-[316px] bg-slate-100">
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
        className="mySwiper h-full rounded-md"
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.category}>
            <div
              onClick={() => router.push(`/shop/${banner.link}`)}
              className="w-full min-h-[316px] max-w-[1201px] mx-auto cursor-pointer rounded-md max-h-[316px] relative group"
            >
              <img
                src={banner.bannerUrl}
                alt="banner"
                className="w-full min-h-[316px] object-cover duration-300 transition-all"
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
  bannerUrl: string;
  link: string;
  category: string;
}
const banners: Banners[] = [
  {
    id: 1,
    bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
    link: 'offers',
    category: 'offers',
  },
  {
    id: 2,
    bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
    link: 'men-clothes',
    category: 'men-clothes',
  },
  {
    id: 3,
    bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
    link: 'shoes',
    category: 'shoes',
  },
];
