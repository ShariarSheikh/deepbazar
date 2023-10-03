import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
//---------------------------------------

//---------------------------------------

const HeroSection: FC = () => {
  const router = useRouter();

  return (
    <div className="w-full relative h-[150px] max-h-[150px] md:h-[316px] md:max-h-[316px] bg-slate-100">
      <Carousel
        swipeable
        autoPlay
        infiniteLoop
        showArrows
        useKeyboardArrows
        stopOnHover
        emulateTouch
      >
        {banners.map(banner => (
          <div key={banner.category}>
            <Link
              href={{
                pathname: '/shop',
                query: {
                  category: banner.link,
                  offer: banner.offer,
                },
              }}
            >
              <div
                onClick={() => router.push(`/shop/${banner.link}`)}
                className="w-full min-h-[150px] md:min-h-[316px] max-w-[1201px] mx-auto cursor-pointer rounded-md max-h-[150px] md:max-h-[316px] relative group"
              >
                <img
                  src={banner.bannerUrl}
                  alt="banner"
                  className="w-full min-h-[150px] md:min-h-[316px] object-fill md:object-cover duration-300 transition-all"
                />

                <div className="absolute inset-0 duration-200 transition-all" />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;

interface Banners {
  id: number;
  bannerUrl: string;
  link: string;
  category: string;
  offer: string;
}
const banners: Banners[] = [
  {
    id: 1,
    bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
    link: 'offers',
    category: 'offers',
    offer: '80%',
  },
  {
    id: 2,
    bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
    link: 'men-clothes',
    category: 'men-clothes',
    offer: '80%',
  },
  {
    id: 3,
    bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
    link: 'shoes',
    category: 'shoes',
    offer: '30%',
  },
];
