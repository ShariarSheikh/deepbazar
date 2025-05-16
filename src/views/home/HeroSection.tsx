// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { FC } from 'react';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// //---------------------------------------

// //---------------------------------------

// const HeroSection: FC = () => {
//   const router = useRouter();

//   return (
//     <div className="w-full relative h-[150px] max-h-[150px] md:h-[316px] md:max-h-[316px] bg-slate-100">
//       <Carousel
//         swipeable
//         autoPlay
//         infiniteLoop
//         showArrows
//         useKeyboardArrows
//         stopOnHover
//         emulateTouch
//       >
//         {banners.map(banner => (
//           <div key={banner.category}>
//             <Link
//               href={{
//                 pathname: '/shop',
//                 query: {
//                   category: banner.link,
//                   offer: banner.offer,
//                 },
//               }}
//             >
//               <div
//                 onClick={() => router.push(`/shop/${banner.link}`)}
//                 className="w-full min-h-[150px] md:min-h-[316px] max-w-[1201px] mx-auto cursor-pointer rounded-md max-h-[150px] md:max-h-[316px] relative group"
//               >
//                 <img
//                   src={banner.bannerUrl}
//                   alt="banner"
//                   className="w-full min-h-[150px] md:min-h-[316px] object-fill md:object-cover duration-300 transition-all"
//                 />

//                 <div className="absolute inset-0 duration-200 transition-all" />
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default HeroSection;

// interface Banners {
//   id: number;
//   bannerUrl: string;
//   link: string;
//   category: string;
//   offer: string;
// }
// const banners: Banners[] = [
//   {
//     id: 1,
//     bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
//     link: 'offers',
//     category: 'offers',
//     offer: '80%',
//   },
//   {
//     id: 2,
//     bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
//     link: 'men-clothes',
//     category: 'men-clothes',
//     offer: '80%',
//   },
//   {
//     id: 3,
//     bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
//     link: 'shoes',
//     category: 'shoes',
//     offer: '30%',
//   },
// ];

// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { FC } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const HeroSection: FC = () => {
//   const router = useRouter();

//   return (
//     <div className="w-full relative h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
//       <Carousel
//         showStatus={false}
//         showThumbs={false}
//         infiniteLoop
//         autoPlay
//         interval={5000}
//         transitionTime={500}
//         stopOnHover
//         swipeable
//         emulateTouch
//         renderArrowPrev={(clickHandler, hasPrev) => (
//           <button
//             onClick={clickHandler}
//             disabled={!hasPrev}
//             className="absolute left-4 z-10 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-md hover:scale-105 transition-all"
//             aria-label="Previous slide"
//           >
//             &larr;
//           </button>
//         )}
//         renderArrowNext={(clickHandler, hasNext) => (
//           <button
//             onClick={clickHandler}
//             disabled={!hasNext}
//             className="absolute right-4 z-10 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-md hover:scale-105 transition-all"
//             aria-label="Next slide"
//           >
//             &rarr;
//           </button>
//         )}
//       >
//         {banners.map(banner => (
//           <div key={banner.id} className="relative h-full">
//             <Link
//               href={{
//                 pathname: '/shop',
//                 query: {
//                   category: banner.link,
//                   offer: banner.offer,
//                 },
//               }}
//               className="block h-full"
//             >
//               <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
//                 <img
//                   src={banner.bannerUrl}
//                   alt={banner.category}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                 />
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5" />

//                 {/* Banner Content */}
//                 <div className="absolute left-8 bottom-8 text-left max-w-md">
//                   {banner.offer && (
//                     <span className="inline-block px-3 py-1 mb-2 text-sm font-bold text-white bg-primary rounded-full">
//                       {banner.offer} OFF
//                     </span>
//                   )}
//                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
//                     {banner.category.replace('-', ' ').toUpperCase()}
//                   </h2>
//                   <button
//                     onClick={e => {
//                       e.preventDefault();
//                       router.push(
//                         `/shop?category=${banner.link}&offer=${banner.offer}`
//                       );
//                     }}
//                     className="mt-4 px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg"
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default HeroSection;

// interface Banner {
//   id: number;
//   bannerUrl: string;
//   link: string;
//   category: string;
//   offer: string;
// }

// const banners: Banner[] = [
//   {
//     id: 1,
//     bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
//     link: 'offers',
//     category: 'special-offers',
//     offer: '80%',
//   },
//   {
//     id: 2,
//     bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
//     link: 'men-clothes',
//     category: 'men-fashion',
//     offer: '50%',
//   },
//   {
//     id: 3,
//     bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
//     link: 'electronics',
//     category: 'latest-gadgets',
//     offer: '30%',
//   },
// ];

import Link from 'next/link';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection: FC = () => {
  return (
    <div className="w-full relative h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg mx-auto">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
        stopOnHover
        swipeable
        emulateTouch
      >
        {banners.map(banner => (
          <div key={banner.id} className="relative h-full w-full">
            <Link
              href={{
                pathname: '/shop',
                query: {
                  category: banner.link,
                  offer: banner.offer,
                },
              }}
              className="block h-full w-full"
            >
              <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                {/* Background Image */}
                <img
                  src={banner.bannerUrl}
                  alt={banner.category}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;

interface Banner {
  id: number;
  bannerUrl: string;
  link: string;
  category: string;
  offer: string;
}

const banners: Banner[] = [
  {
    id: 1,
    bannerUrl: 'https://i.ibb.co/0ftZYZR/Group-204.png',
    link: 'offers',
    category: 'special-offers',
    offer: '80%',
  },
  {
    id: 2,
    bannerUrl: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
    link: 'men-clothes',
    category: 'men-fashion',
    offer: '50%',
  },
  {
    id: 3,
    bannerUrl: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
    link: 'electronics',
    category: 'latest-gadgets',
    offer: '30%',
  },
];
