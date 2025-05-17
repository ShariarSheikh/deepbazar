// import Link from 'next/link';
// import { FC } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const HeroSection: FC = () => {
//   return (
//     <div className="w-full relative h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg mx-auto">
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
//       >
//         {banners.map(banner => (
//           <div key={banner.id} className="relative h-full w-full">
//             <Link
//               href={{
//                 pathname: '/best-offers',
//                 query: {
//                   id: banner.id,
//                 },
//               }}
//               className="block h-full w-full"
//             >
//               <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
//                 {/* Background Image */}
//                 <img
//                   src={banner.bannerUrl}
//                   alt={banner.category}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                 />

//                 {/* Dark Overlay for Text Contrast */}
//                 <div className="absolute inset-0 bg-black/20" />
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

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import {
//   FaHeadset,
//   FaRegCreditCard,
//   FaShieldAlt,
//   FaShippingFast,
// } from 'react-icons/fa';
// import {
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdOutlineKeyboardArrowRight,
// } from 'react-icons/md';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Demo slides data
//   const slides = [
//     {
//       id: 1,
//       title: 'Next-Gen Technology',
//       subtitle: 'Discover the latest in tech innovation',
//       description:
//         'Explore our collection of cutting-edge devices with exclusive launch offers',
//       cta: 'Shop Now',
//       ctaLink: '/shop?category=new-arrivals',
//       imageBg: 'bg-gradient-to-r from-blue-600 to-indigo-800',
//       imagePosition: 'right',
//       discount: '30% OFF',
//       color: 'text-blue-50',
//     },
//     {
//       id: 2,
//       title: 'Premium Audio',
//       subtitle: 'Immersive sound experience',
//       description:
//         'High-quality headphones and speakers with crystal clear sound',
//       cta: 'Browse Collection',
//       ctaLink: '/shop?category=audio',
//       imageBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
//       imagePosition: 'left',
//       discount: '25% OFF',
//       color: 'text-purple-50',
//     },
//     {
//       id: 3,
//       title: 'Smart Watches',
//       subtitle: 'Technology on your wrist',
//       description:
//         'Track fitness, stay connected, and look stylish with our smartwatch collection',
//       cta: 'View Watches',
//       ctaLink: '/shop?category=watch',
//       imageBg: 'bg-gradient-to-r from-green-600 to-teal-600',
//       imagePosition: 'right',
//       discount: '20% OFF',
//       color: 'text-green-50',
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handlePrevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleNextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const goToSlide = index => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Features section data
//   const features = [
//     {
//       icon: <FaShippingFast className="text-primary" />,
//       title: 'Free Shipping',
//       description: 'On all orders over $99',
//     },
//     {
//       icon: <FaHeadset className="text-primary" />,
//       title: '24/7 Support',
//       description: 'Dedicated support team',
//     },
//     {
//       icon: <FaShieldAlt className="text-primary" />,
//       title: 'Secure Payment',
//       description: '100% protected payments',
//     },
//     {
//       icon: <FaRegCreditCard className="text-primary" />,
//       title: 'Easy Returns',
//       description: '30-day return policy',
//     },
//   ];

//   // Shopping categories
//   const categories = [
//     {
//       name: 'Smartphones',
//       image: 'bg-blue-500',
//       path: '/shop?category=smart-phone',
//     },
//     { name: 'Laptops', image: 'bg-purple-500', path: '/shop?category=laptop' },
//     { name: 'Watches', image: 'bg-green-500', path: '/shop?category=watch' },
//     { name: 'Audio', image: 'bg-yellow-500', path: '/shop?category=audio' },
//     { name: 'Cameras', image: 'bg-red-500', path: '/shop?category=camera' },
//   ];

//   return (
//     <div className="w-full">
//       {/* Main Hero Slider */}
//       <div className="relative w-full overflow-hidden h-[450px]">
//         {/* Slides */}
//         <div className="w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute top-0 left-0 w-full h-full flex items-center transition-all duration-500 ease-in-out ${
//                 index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//             >
//               {/* Background with gradient */}
//               <div className={`absolute inset-0 ${slide.imageBg}`}></div>

//               {/* Content wrapper */}
//               <div className="container mx-auto px-4 md:px-6 z-10">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                   {/* Text content */}
//                   <div
//                     className={`w-full md:w-1/2 ${
//                       slide.imagePosition === 'right'
//                         ? 'order-1 md:order-1'
//                         : 'order-1 md:order-2'
//                     } text-white`}
//                   >
//                     <div
//                       className={`${
//                         index === currentSlide ? 'animate-fadeInUp' : ''
//                       }`}
//                     >
//                       <span className="inline-block px-4 py-1 bg-white text-primary font-semibold rounded-full text-sm mb-4">
//                         {slide.subtitle}
//                       </span>
//                       <h1
//                         className={`text-4xl md:text-5xl font-bold mb-4 ${slide.color}`}
//                       >
//                         {slide.title}
//                       </h1>
//                       <p className="text-lg mb-6 max-w-md opacity-90">
//                         {slide.description}
//                       </p>

//                       <div className="flex items-center space-x-4">
//                         <Link href={slide.ctaLink}>
//                           <span className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1">
//                             {slide.cta}
//                           </span>
//                         </Link>
//                         <Link href="/shop">
//                           <span className="inline-flex items-center px-4 py-2 text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-300">
//                             View All{' '}
//                             <MdOutlineKeyboardArrowRight className="ml-1" />
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image/Visual area */}
//                   <div
//                     className={`w-full md:w-1/2 ${
//                       slide.imagePosition === 'right'
//                         ? 'order-2 md:order-2'
//                         : 'order-2 md:order-1'
//                     } p-6 flex justify-center`}
//                   >
//                     <div
//                       className={`relative ${
//                         index === currentSlide ? 'animate-fadeInRight' : ''
//                       }`}
//                     >
//                       {/* Placeholder for product image */}
//                       <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 flex items-center justify-center relative">
//                         {/* This would be your actual product image */}
//                         <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
//                           <span className="text-white font-bold text-lg">
//                             {slide.discount}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={handlePrevSlide}
//           className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         >
//           <MdKeyboardArrowLeft className="text-white text-2xl" />
//         </button>

//         <button
//           onClick={handleNextSlide}
//           className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         >
//           <MdKeyboardArrowRight className="text-white text-2xl" />
//         </button>

//         {/* Pagination Dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-white scale-110' : 'bg-white/40'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Features Bar */}
//       <div className="bg-white shadow-md py-6 relative z-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center space-x-3 group">
//                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Shopping Categories */}
//       <div className="bg-gray-50 py-10">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//               Shop By Category
//             </h2>
//             <p className="text-gray-600 mt-2">
//               Browse our top categories for the best deals
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {categories.map((category, index) => (
//               <Link key={index} href={category.path}>
//                 <div className="group cursor-pointer">
//                   <div
//                     className={`${category.image} h-32 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1`}
//                   >
//                     <span className="text-white font-semibold text-lg">
//                       {category.name}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import {
//   FaHeadset,
//   FaRegCreditCard,
//   FaShieldAlt,
//   FaShippingFast,
// } from 'react-icons/fa';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Demo slides data with richer content
//   const slides = [
//     {
//       id: 1,
//       title: 'Next-Gen Technology',
//       subtitle: 'Summer Collection Launch',
//       description:
//         'Experience the future today with our cutting-edge devices and exclusive launch offers',
//       cta: 'Shop Now',
//       ctaLink: '/shop?category=new-arrivals',
//       imageBg: 'bg-gradient-to-r from-blue-600 to-indigo-800',
//       imagePosition: 'right',
//       discount: '30% OFF',
//       color: 'text-blue-50',
//       productImage: 'https://i.ibb.co/0ftZYZR/Group-204.png',
//       highlight: 'Trending Now',
//     },
//     {
//       id: 2,
//       title: 'Premium Audio',
//       subtitle: 'Immersive Sound Experience',
//       description:
//         'Crystal clear sound with noise cancellation and premium build quality',
//       cta: 'Browse Collection',
//       ctaLink: '/shop?category=audio',
//       imageBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
//       imagePosition: 'left',
//       discount: '25% OFF',
//       color: 'text-purple-50',
//       productImage: 'https://i.ibb.co/5jV29wG/www-reallygreatsite-com-2.png',
//       highlight: 'Best Sellers',
//     },
//     {
//       id: 3,
//       title: 'Smart Watches',
//       subtitle: 'Technology on Your Wrist',
//       description:
//         'Stay connected, track your fitness, and look stylish with our premium smartwatch collection',
//       cta: 'View Watches',
//       ctaLink: '/shop?category=watch',
//       imageBg: 'bg-gradient-to-r from-green-600 to-teal-600',
//       imagePosition: 'right',
//       discount: '20% OFF',
//       color: 'text-green-50',
//       productImage: 'https://i.ibb.co/Kjx6f47/Mac-Book-Air-1.png',
//       highlight: 'New Arrivals',
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handlePrevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleNextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const goToSlide = index => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Enhanced features section
//   const features = [
//     {
//       icon: <FaShippingFast className="text-primary text-xl" />,
//       title: 'Free Shipping',
//       description: 'On all orders over $99',
//       bg: 'bg-blue-50',
//     },
//     {
//       icon: <FaHeadset className="text-primary text-xl" />,
//       title: '24/7 Support',
//       description: 'Dedicated support team',
//       bg: 'bg-purple-50',
//     },
//     {
//       icon: <FaShieldAlt className="text-primary text-xl" />,
//       title: 'Secure Payment',
//       description: '100% protected payments',
//       bg: 'bg-green-50',
//     },
//     {
//       icon: <FaRegCreditCard className="text-primary text-xl" />,
//       title: 'Easy Returns',
//       description: '30-day return policy',
//       bg: 'bg-yellow-50',
//     },
//   ];

//   // Shopping categories with icons
//   const categories = [
//     {
//       name: 'Smartphones',
//       image: 'bg-gradient-to-br from-blue-500 to-blue-700',
//       path: '/shop?category=smart-phone',
//       icon: '📱',
//     },
//     {
//       name: 'Laptops',
//       image: 'bg-gradient-to-br from-purple-500 to-purple-700',
//       path: '/shop?category=laptop',
//       icon: '💻',
//     },
//     {
//       name: 'Watches',
//       image: 'bg-gradient-to-br from-green-500 to-green-700',
//       path: '/shop?category=watch',
//       icon: '⌚',
//     },
//     {
//       name: 'Audio',
//       image: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
//       path: '/shop?category=audio',
//       icon: '🎧',
//     },
//     {
//       name: 'Cameras',
//       image: 'bg-gradient-to-br from-red-500 to-red-600',
//       path: '/shop?category=camera',
//       icon: '📷',
//     },
//   ];

//   return (
//     <div className="w-full font-poppins">
//       {/* Main Hero Slider */}
//       <div className="relative w-full overflow-hidden h-[500px] md:h-[600px] rounded-b-xl shadow-lg">
//         {/* Slides */}
//         <div className="w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute top-0 left-0 w-full h-full flex items-center transition-all duration-500 ease-in-out ${
//                 index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               } ${slide.imageBg}`}
//             >
//               {/* Content wrapper */}
//               <div className="container mx-auto px-4 md:px-6 z-10">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                   {/* Text content */}
//                   <div
//                     className={`w-full md:w-1/2 ${
//                       slide.imagePosition === 'right'
//                         ? 'order-1 md:order-1'
//                         : 'order-1 md:order-2'
//                     } text-white`}
//                   >
//                     <div
//                       className={`${
//                         index === currentSlide ? 'animate-fadeInUp' : ''
//                       } space-y-4`}
//                     >
//                       <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full text-xs mb-2 border border-white/30">
//                         {slide.highlight}
//                       </span>
//                       <h1
//                         className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${slide.color}`}
//                       >
//                         {slide.title}
//                       </h1>
//                       <p className="text-lg md:text-xl opacity-90 max-w-md">
//                         {slide.description}
//                       </p>

//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
//                         <Link href={slide.ctaLink}>
//                           <span className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30">
//                             {slide.cta}
//                           </span>
//                         </Link>
//                         <div className="flex items-center">
//                           <span className="text-white/80 mr-2">
//                             Starting at
//                           </span>
//                           <span className="text-xl font-bold text-white">
//                             $299
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image/Visual area */}
//                   <div
//                     className={`w-full md:w-1/2 ${
//                       slide.imagePosition === 'right'
//                         ? 'order-2 md:order-2'
//                         : 'order-2 md:order-1'
//                     } p-6 flex justify-center relative`}
//                   >
//                     <div
//                       className={`relative ${
//                         index === currentSlide ? 'animate-fadeInRight' : ''
//                       }`}
//                     >
//                       {/* Discount badge */}
//                       <div className="absolute -top-4 -right-4 z-10 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
//                         <span className="text-white font-bold text-lg">
//                           {slide.discount}
//                         </span>
//                       </div>

//                       {/* Product image */}
//                       <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8 overflow-hidden">
//                         <img
//                           src={slide.productImage}
//                           alt={slide.title}
//                           className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={handlePrevSlide}
//           className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
//           aria-label="Previous slide"
//         >
//           <MdKeyboardArrowLeft className="text-white text-2xl" />
//         </button>

//         <button
//           onClick={handleNextSlide}
//           className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
//           aria-label="Next slide"
//         >
//           <MdKeyboardArrowRight className="text-white text-2xl" />
//         </button>

//         {/* Pagination Dots */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-white scale-125 shadow-md'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Features Bar */}
//       <div className="bg-white shadow-sm py-8 relative z-20 -mt-1">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center space-x-4 group">
//                 <div
//                   className={`w-14 h-14 rounded-full ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800 text-lg">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Shopping Categories */}
//       <div className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//               Shop By Category
//             </h2>
//             <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//               Discover our wide range of products in popular categories
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//             {categories.map((category, index) => (
//               <Link key={index} href={category.path} passHref>
//                 <div className="group cursor-pointer">
//                   <div
//                     className={`${category.image} h-40 rounded-xl flex flex-col items-center justify-center mb-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden`}
//                   >
//                     <span className="text-4xl mb-2">{category.icon}</span>
//                     <span className="text-white font-semibold text-lg z-10">
//                       {category.name}
//                     </span>
//                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
//                   </div>
//                   <div className="text-center">
//                     <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
//                       Explore {category.name}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import {
//   FaHeadset,
//   FaRegCreditCard,
//   FaShieldAlt,
//   FaShippingFast,
// } from 'react-icons/fa';
// import {
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdOutlineKeyboardArrowRight,
// } from 'react-icons/md';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Enhanced slides data
//   const slides = [
//     {
//       id: 1,
//       title: 'Summer Tech Sale',
//       subtitle: 'Limited Time Offer',
//       description:
//         'Get the latest gadgets with exclusive discounts up to 40% off',
//       cta: 'Shop Now',
//       ctaLink: '/shop?category=new-arrivals',
//       imageBg: 'bg-gradient-to-br from-blue-700 to-blue-900',
//       discount: '40% OFF',
//       productImage:
//         'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'Trending Now',
//       price: 'From $199',
//     },
//     {
//       id: 2,
//       title: 'Premium Audio',
//       subtitle: 'Immersive Sound',
//       description:
//         'Noise-cancelling headphones with crystal clear audio quality',
//       cta: 'Browse Audio',
//       ctaLink: '/shop?category=audio',
//       imageBg: 'bg-gradient-to-br from-purple-700 to-purple-900',
//       discount: '30% OFF',
//       productImage:
//         'https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'Best Sellers',
//       price: 'From $149',
//     },
//     {
//       id: 3,
//       title: 'Smart Watches',
//       subtitle: 'Tech Meets Style',
//       description:
//         'Track your fitness and stay connected with our premium collection',
//       cta: 'View Watches',
//       ctaLink: '/shop?category=watch',
//       imageBg: 'bg-gradient-to-br from-teal-700 to-teal-900',
//       discount: '25% OFF',
//       productImage:
//         'https://images.unsplash.com/photo-1607850478432-a80d4ff5aa41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'New Arrivals',
//       price: 'From $179',
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handlePrevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleNextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const goToSlide = index => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Features data
//   const features = [
//     {
//       icon: <FaShippingFast className="text-primary text-xl" />,
//       title: 'Free Shipping',
//       description: 'On orders over $99',
//     },
//     {
//       icon: <FaHeadset className="text-primary text-xl" />,
//       title: '24/7 Support',
//       description: 'Dedicated customer care',
//     },
//     {
//       icon: <FaShieldAlt className="text-primary text-xl" />,
//       title: 'Secure Payment',
//       description: '100% protected',
//     },
//     {
//       icon: <FaRegCreditCard className="text-primary text-xl" />,
//       title: 'Easy Returns',
//       description: '30-day policy',
//     },
//   ];

//   // Categories data
//   const categories = [
//     {
//       name: 'Smartphones',
//       icon: '📱',
//       path: '/shop?category=smart-phone',
//       bg: 'from-blue-500 to-blue-600',
//     },
//     {
//       name: 'Laptops',
//       icon: '💻',
//       path: '/shop?category=laptop',
//       bg: 'from-purple-500 to-purple-600',
//     },
//     {
//       name: 'Watches',
//       icon: '⌚',
//       path: '/shop?category=watch',
//       bg: 'from-teal-500 to-teal-600',
//     },
//     {
//       name: 'Headphones',
//       icon: '🎧',
//       path: '/shop?category=audio',
//       bg: 'from-indigo-500 to-indigo-600',
//     },
//     {
//       name: 'Cameras',
//       icon: '📷',
//       path: '/shop?category=camera',
//       bg: 'from-rose-500 to-rose-600',
//     },
//   ];

//   return (
//     <div className="w-full font-poppins">
//       {/* Modern Hero Banner */}
//       <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
//         {/* Slides */}
//         <div className="w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 flex items-center transition-opacity duration-500 ease-in-out ${
//                 slide.imageBg
//               } ${
//                 index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//             >
//               {/* Diagonal accent */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

//               {/* Content container */}
//               <div className="container mx-auto px-6 z-10">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//                   {/* Text content */}
//                   <div className="w-full md:w-1/2 text-white space-y-5">
//                     <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
//                       {slide.highlight}
//                     </span>

//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                       {slide.title}
//                     </h1>

//                     <p className="text-xl opacity-90 max-w-lg">
//                       {slide.description}
//                     </p>

//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
//                       <Link href={slide.ctaLink}>
//                         <span className="inline-flex items-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
//                           {slide.cta}
//                           <MdOutlineKeyboardArrowRight className="ml-1 text-xl" />
//                         </span>
//                       </Link>
//                       <div className="flex items-center gap-2">
//                         <span className="text-white/80">Starting at</span>
//                         <span className="text-2xl font-bold">
//                           {slide.price}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Product image */}
//                   <div className="w-full md:w-1/2 relative">
//                     <div className="relative w-full max-w-lg mx-auto">
//                       {/* Discount badge */}
//                       <div className="absolute -top-4 -right-4 z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
//                         <span className="text-white font-bold">
//                           {slide.discount}
//                         </span>
//                       </div>

//                       {/* Product container */}
//                       <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden p-8">
//                         <img
//                           src={slide.productImage}
//                           alt={slide.title}
//                           className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation arrows */}
//         <button
//           onClick={handlePrevSlide}
//           className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
//           aria-label="Previous slide"
//         >
//           <MdKeyboardArrowLeft className="text-white text-2xl" />
//         </button>

//         <button
//           onClick={handleNextSlide}
//           className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
//           aria-label="Next slide"
//         >
//           <MdKeyboardArrowRight className="text-white text-2xl" />
//         </button>

//         {/* Pagination dots */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-white scale-150'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Gradient fade at bottom */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
//       </div>

//       {/* Features ribbon - seamless transition */}
//       <div className="relative z-20 -mt-16">
//         <div className="container mx-auto px-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Categories section */}
//       <div className="pt-24 pb-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               Shop By Category
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Explore our curated collections in popular categories
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//             {categories.map((category, index) => (
//               <Link key={index} href={category.path} passHref>
//                 <div className="group relative overflow-hidden rounded-xl h-40 bg-gradient-to-br ${category.bg} shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white p-4 z-10">
//                     <span className="text-4xl">{category.icon}</span>
//                     <span className="text-lg font-semibold text-center">
//                       {category.name}
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import {
//   FaHeadset,
//   FaRegCreditCard,
//   FaShieldAlt,
//   FaShippingFast,
// } from 'react-icons/fa';
// import {
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdOutlineKeyboardArrowRight,
// } from 'react-icons/md';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Enhanced slides data with your updated image links
//   const slides = [
//     {
//       id: 1,
//       title: 'Summer Tech Sale',
//       subtitle: 'Limited Time Offer',
//       description:
//         'Get the latest gadgets with exclusive discounts up to 40% off',
//       cta: 'Shop Now',
//       ctaLink: '/shop?category=new-arrivals',
//       imageBg: 'bg-gradient-to-br from-blue-700 to-blue-900',
//       discount: '40% OFF',
//       productImage:
//         'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'Trending Now',
//       price: 'From $199',
//     },
//     {
//       id: 2,
//       title: 'Premium Audio',
//       subtitle: 'Immersive Sound',
//       description:
//         'Noise-cancelling headphones with crystal clear audio quality',
//       cta: 'Browse Audio',
//       ctaLink: '/shop?category=audio',
//       imageBg: 'bg-gradient-to-br from-purple-700 to-purple-900',
//       discount: '30% OFF',
//       productImage:
//         'https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'Best Sellers',
//       price: 'From $149',
//     },
//     {
//       id: 3,
//       title: 'Smart Watches',
//       subtitle: 'Tech Meets Style',
//       description:
//         'Track your fitness and stay connected with our premium collection',
//       cta: 'View Watches',
//       ctaLink: '/shop?category=watch',
//       imageBg: 'bg-gradient-to-br from-teal-700 to-teal-900',
//       discount: '25% OFF',
//       productImage:
//         'https://images.unsplash.com/photo-1607850478432-a80d4ff5aa41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       highlight: 'New Arrivals',
//       price: 'From $179',
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handlePrevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleNextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const goToSlide = (index: any) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Features data
//   const features = [
//     {
//       icon: <FaShippingFast className="text-primary text-xl" />,
//       title: 'Free Shipping',
//       description: 'On orders over $99',
//     },
//     {
//       icon: <FaHeadset className="text-primary text-xl" />,
//       title: '24/7 Support',
//       description: 'Dedicated customer care',
//     },
//     {
//       icon: <FaShieldAlt className="text-primary text-xl" />,
//       title: 'Secure Payment',
//       description: '100% protected',
//     },
//     {
//       icon: <FaRegCreditCard className="text-primary text-xl" />,
//       title: 'Easy Returns',
//       description: '30-day policy',
//     },
//   ];

//   // Categories data - improved design
//   const categories = [
//     {
//       name: 'Smartphones',
//       path: '/shop?category=smart-phone',
//       bg: 'bg-blue-100',
//       text: 'text-blue-800',
//       icon: '📱',
//     },
//     {
//       name: 'Laptops',
//       path: '/shop?category=laptop',
//       bg: 'bg-purple-100',
//       text: 'text-purple-800',
//       icon: '💻',
//     },
//     {
//       name: 'Watches',
//       path: '/shop?category=watch',
//       bg: 'bg-teal-100',
//       text: 'text-teal-800',
//       icon: '⌚',
//     },
//     {
//       name: 'Headphones',
//       path: '/shop?category=audio',
//       bg: 'bg-indigo-100',
//       text: 'text-indigo-800',
//       icon: '🎧',
//     },
//     {
//       name: 'Cameras',
//       path: '/shop?category=camera',
//       bg: 'bg-rose-100',
//       text: 'text-rose-800',
//       icon: '📷',
//     },
//   ];

//   return (
//     <div className="w-full font-poppins">
//       {/* Modern Hero Banner with fixed text positioning */}
//       <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
//         {/* Slides */}
//         <div className="w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 flex items-center transition-opacity duration-500 ease-in-out ${
//                 slide.imageBg
//               } ${
//                 index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//             >
//               {/* Content container with proper text positioning */}
//               <div className="container mx-auto px-6 z-10 h-full flex items-center">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
//                   {/* Text content - fixed positioning */}
//                   <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6">
//                     <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
//                       {slide.highlight}
//                     </span>

//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                       {slide.title}
//                     </h1>

//                     <p className="text-lg md:text-xl opacity-90 max-w-lg">
//                       {slide.description}
//                     </p>

//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
//                       <Link href={slide.ctaLink}>
//                         <span className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
//                           {slide.cta}
//                           <MdOutlineKeyboardArrowRight className="ml-1 text-xl" />
//                         </span>
//                       </Link>
//                       <div className="flex items-center gap-2">
//                         <span className="text-white/80">Starting at</span>
//                         <span className="text-xl font-bold">{slide.price}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Product image - fixed positioning */}
//                   <div className="w-full md:w-1/2 relative h-full flex items-center justify-center">
//                     <div className="relative w-full max-w-md">
//                       {/* Discount badge - positioned properly */}
//                       <div className="absolute -top-4 -right-4 z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
//                         <span className="text-white font-bold">
//                           {slide.discount}
//                         </span>
//                       </div>

//                       {/* Product container */}
//                       <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden p-4">
//                         <img
//                           src={slide.productImage}
//                           alt={slide.title}
//                           className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation arrows - fixed positioning */}
//         <button
//           onClick={handlePrevSlide}
//           className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
//           aria-label="Previous slide"
//         >
//           <MdKeyboardArrowLeft className="text-white text-2xl" />
//         </button>

//         <button
//           onClick={handleNextSlide}
//           className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
//           aria-label="Next slide"
//         >
//           <MdKeyboardArrowRight className="text-white text-2xl" />
//         </button>

//         {/* Pagination dots - fixed positioning */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-white scale-150'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Gradient fade at bottom */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
//       </div>

//       {/* Features ribbon - improved design */}
//       <div className="relative z-20 -mt-16">
//         <div className="container mx-auto px-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Improved Categories section */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               Shop By Category
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Browse our popular product categories
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {categories.map((category, index) => (
//               <Link key={index} href={category.path} passHref>
//                 <div
//                   className={`group relative overflow-hidden rounded-lg h-40 ${category.bg} shadow-md hover:shadow-lg transition-all duration-300`}
//                 >
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 z-10">
//                     <span className="text-4xl">{category.icon}</span>
//                     <span
//                       className={`text-lg font-semibold text-center ${category.text}`}
//                     >
//                       {category.name}
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaHeadset,
  FaRegCreditCard,
  FaShieldAlt,
  FaShippingFast,
} from 'react-icons/fa';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Slides data
  const slides = [
    {
      id: 1,
      title: 'Summer Tech Sale',
      subtitle: 'Limited Time Offer',
      description:
        'Get the latest gadgets with exclusive discounts up to 40% off',
      cta: 'Shop Now',
      ctaLink: '/shop?category=new-arrivals',
      imageBg: 'bg-gradient-to-br from-blue-700 to-blue-900',
      discount: '40% OFF',
      productImage:
        'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlight: 'Trending Now',
      price: 'From $199',
    },
    {
      id: 2,
      title: 'Premium Audio',
      subtitle: 'Immersive Sound',
      description:
        'Noise-cancelling headphones with crystal clear audio quality',
      cta: 'Browse Audio',
      ctaLink: '/shop?category=audio',
      imageBg: 'bg-gradient-to-br from-purple-700 to-purple-900',
      discount: '30% OFF',
      productImage:
        'https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlight: 'Best Sellers',
      price: 'From $149',
    },
    {
      id: 3,
      title: 'Smart Watches',
      subtitle: 'Tech Meets Style',
      description:
        'Track your fitness and stay connected with our premium collection',
      cta: 'View Watches',
      ctaLink: '/shop?category=watch',
      imageBg: 'bg-gradient-to-br from-teal-700 to-teal-900',
      discount: '25% OFF',
      productImage:
        'https://images.unsplash.com/photo-1607850478432-a80d4ff5aa41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlight: 'New Arrivals',
      price: 'From $179',
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goToSlide = (index: any) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Features data
  const features = [
    {
      icon: <FaShippingFast className="text-primary text-xl" />,
      title: 'Free Shipping',
      description: 'On orders over $99',
    },
    {
      icon: <FaHeadset className="text-primary text-xl" />,
      title: '24/7 Support',
      description: 'Dedicated customer care',
    },
    {
      icon: <FaShieldAlt className="text-primary text-xl" />,
      title: 'Secure Payment',
      description: '100% protected',
    },
    {
      icon: <FaRegCreditCard className="text-primary text-xl" />,
      title: 'Easy Returns',
      description: '30-day policy',
    },
  ];

  // Categories data
  const categories = [
    {
      name: 'Smartphones',
      icon: '📱',
      path: '/shop?category=smart-phone',
      bg: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Laptops',
      icon: '💻',
      path: '/shop?category=laptop',
      bg: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Watches',
      icon: '⌚',
      path: '/shop?category=watch',
      bg: 'from-teal-500 to-teal-600',
    },
    {
      name: 'Headphones',
      icon: '🎧',
      path: '/shop?category=audio',
      bg: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'Cameras',
      icon: '📷',
      path: '/shop?category=camera',
      bg: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <div className="w-full font-poppins">
      {/* Hero Banner with fixed text overlap */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        <div className="w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center transition-opacity duration-500 ease-in-out ${
                slide.imageBg
              } ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Content container with proper padding to prevent overlap */}
              <div className="container mx-auto px-6 z-10 h-full flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                  {/* Text content with right padding to prevent arrow overlap */}
                  <div className="w-full md:w-1/2 text-white space-y-4 pl-10 md:pl-16">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                      {slide.highlight}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl opacity-90">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                      <Link href={slide.ctaLink}>
                        <span className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                          {slide.cta}
                          <MdOutlineKeyboardArrowRight className="ml-1 text-xl" />
                        </span>
                      </Link>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">Starting at</span>
                        <span className="text-xl font-bold">{slide.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product image */}
                  <div className="w-full md:w-1/2 relative h-full flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      {/* Discount badge */}
                      <div className="absolute -top-4 -right-4 z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
                        <span className="text-white font-bold">
                          {slide.discount}
                        </span>
                      </div>

                      {/* Product container */}
                      <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden p-4">
                        <img
                          src={slide.productImage}
                          alt={slide.title}
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - positioned outside text container */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous slide"
        >
          <MdKeyboardArrowLeft className="text-white text-xl md:text-2xl" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next slide"
        >
          <MdKeyboardArrowRight className="text-white text-xl md:text-2xl" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-150'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </div>

      {/* Features ribbon */}
      <div className="relative z-20 -mt-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Shop By Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our popular product categories
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.path} passHref>
                <div
                  className={`group relative overflow-hidden rounded-lg h-40 bg-gradient-to-br ${category.bg} shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 z-10">
                    <span className="text-4xl">{category.icon}</span>
                    <span className="text-lg font-semibold text-center text-white">
                      {category.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
