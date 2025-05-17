// import { logout } from '@/redux/features/authSlice';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChangeEvent, MutableRefObject } from 'react';
// import ClickAwayListener from 'react-click-away-listener';
// import { AiFillHome, AiFillProject, AiOutlineHeart } from 'react-icons/ai';
// import { BiLogOutCircle, BiSolidOffer } from 'react-icons/bi';
// import { BsShop } from 'react-icons/bs';
// import { FaSellcast } from 'react-icons/fa';
// import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi';
// import { GiDeerTrack } from 'react-icons/gi';

// interface HamburgerMenuProps {
//   closeMenu: () => void;
//   hideResult: (element: ChangeEvent<HTMLInputElement> | HTMLDivElement) => void;
//   resultContainerRef: MutableRefObject<null>;
// }

// export default function HamburgerMenu({
//   hideResult,
//   resultContainerRef,
//   closeMenu,
// }: HamburgerMenuProps) {
//   const user = useAppSelector(state => state.authSlice.user);

//   const dispatch = useAppDispatch();

//   const logOutHandle = () => {
//     dispatch(logout());
//   };

//   return (
//     <ClickAwayListener onClickAway={closeMenu}>
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: -10 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ type: 'spring', damping: 30, stiffness: 400 }}
//         className="h-full w-full mt-2 z-50 min-h-[calc(100vh-150px)] relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[200px] min-w-[200px] rounded-[10px] overflow-hidden"
//         ref={resultContainerRef}
//         onClick={e => hideResult(e.currentTarget)}
//       >
//         <div className="w-full h-full flex flex-col justify-between overflow-hidden">
//           <ul className="mt-[10px] w-full">
//             <Link href="/">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <AiFillHome /> <p className="ml-[8px] pt-[2px]">Home</p>
//               </li>
//             </Link>
//             <Link href="/shop">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <BsShop />
//                 <p className="ml-[8px] pt-[2px]">Shop</p>
//               </li>
//             </Link>
//             <Link href="/best-offer">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <BiSolidOffer />
//                 <p className="ml-[8px] pt-[2px]">Best Offers</p>
//               </li>
//             </Link>
//             <Link href="/track-order">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <GiDeerTrack />
//                 <p className="ml-[8px] pt-[2px]">Track Order</p>
//               </li>
//             </Link>
//             <Link href="/cart">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <FiShoppingCart />
//                 <p className="ml-[8px] pt-[2px]">Cart</p>
//               </li>
//             </Link>
//             <Link href="/user/favorite">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <AiOutlineHeart />
//                 <p className="ml-[8px] pt-[2px]">Favorite</p>
//               </li>
//             </Link>
//             <Link href="/contact">
//               <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                 <FiPhoneCall />
//                 <p className="ml-[8px] pt-[2px]">Contact</p>
//               </li>
//             </Link>
//             {!user?._id && (
//               <Link
//                 href={{
//                   pathname: '/auth',
//                   query: {
//                     keyword: 'seller',
//                   },
//                 }}
//               >
//                 <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                   <FaSellcast />
//                   <p className="ml-[8px] pt-[2px]">Sell On DeepBazar</p>
//                 </li>
//               </Link>
//             )}
//           </ul>

//           <div>
//             <Link href="/flash-sale">
//               <div className="relative w-[180px] mx-auto h-[200px] mb-[20px] rounded-[6px] overflow-hidden">
//                 <Image
//                   src="https://i.ibb.co/KNSg6rq/Screenshot-2.png"
//                   alt="best product"
//                   fill
//                 />
//               </div>
//             </Link>
//             <div className="h-[80px] border-t border-gray-300 pt-[23px]">
//               {user?._id ? (
//                 <button
//                   onClick={logOutHandle}
//                   className="w-full mx-auto max-w-[95%] pl-[8px] mb-[3px] h-[38px] border border-red-600 flex items-center rounded-[6px] text-red-600 hover:text-white font-bold text-sm hover:bg-red-600 active:scale-95 duration-200 group"
//                 >
//                   <BiLogOutCircle className="text-red-600 group-hover:text-white mr-[4px]" />
//                   <span>LogOut</span>
//                 </button>
//               ) : (
//                 <Link href="/auth">
//                   <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
//                     <AiFillProject />
//                     <p className="ml-[8px] pt-[2px]">Login/SignUp</p>
//                   </li>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </ClickAwayListener>
//   );
// }

import { logout } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, MutableRefObject } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiFillHome, AiFillProject, AiOutlineHeart } from 'react-icons/ai';
import { BiLogOutCircle, BiSolidOffer } from 'react-icons/bi';
import { BsShop } from 'react-icons/bs';
import { FaSellcast } from 'react-icons/fa';
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi';
import { GiDeerTrack } from 'react-icons/gi';

interface HamburgerMenuProps {
  closeMenu: () => void;
  hideResult: (element: ChangeEvent<HTMLInputElement> | HTMLDivElement) => void;
  resultContainerRef: MutableRefObject<null>;
}

export default function HamburgerMenu({
  hideResult,
  resultContainerRef,
  closeMenu,
}: HamburgerMenuProps) {
  const user = useAppSelector(state => state.authSlice.user);
  const dispatch = useAppDispatch();

  const logOutHandle = () => {
    dispatch(logout());
    closeMenu();
  };

  // const linkHandler = (link: string, isAuthNeed: boolean) => {
  //   //IF USER NOT LOGGED IN THEN LOGGED IN FIRST THEN REDIRECT
  //   if (isAuthNeed && !user._id)
  //     return dispatch(loginOpenModal({ redirectUrl: link }));
  //   router.push(link);
  // };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden min-w-[280px]"
        ref={resultContainerRef}
        onClick={e => hideResult(e.currentTarget)}
      >
        <div className="flex flex-col h-full">
          {/* Main Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-2 px-2 py-3">
              <MenuLink
                href="/"
                icon={<AiFillHome className="text-lg" />}
                label="Home"
              />
              <MenuLink
                href="/shop"
                icon={<BsShop className="text-lg" />}
                label="Shop"
              />
              <MenuLink
                href="/best-offer"
                icon={<BiSolidOffer className="text-lg" />}
                label="Best Offers"
              />
              <MenuLink
                href="/track-order"
                icon={<GiDeerTrack className="text-lg" />}
                label="Track Order"
              />
              <MenuLink
                href="/cart"
                icon={<FiShoppingCart className="text-lg" />}
                label="Cart"
              />
              <MenuLink
                href="/user/favorite"
                icon={<AiOutlineHeart className="text-lg" />}
                label="Favorites"
              />
              <MenuLink
                href="/contact"
                icon={<FiPhoneCall className="text-lg" />}
                label="Contact Us"
              />

              {!user?._id && (
                <MenuLink
                  href={{
                    pathname: '/auth',
                    query: { keyword: 'seller' },
                  }}
                  icon={<FaSellcast className="text-lg" />}
                  label="Sell On DeepBazar"
                />
              )}
            </ul>

            {/* Promo Banner */}
            <div className="mt-6 mx-2 rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <Link href="/flash-sale">
                <div className="relative w-full h-40">
                  <Image
                    src="https://i.ibb.co/KNSg6rq/Screenshot-2.png"
                    alt="Flash sale promotion"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <span className="text-white font-medium">
                      Limited Time Offers
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-100 p-4 bg-gray-50">
            {user?._id ? (
              <button
                onClick={logOutHandle}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                <BiLogOutCircle />
                <span>Log Out</span>
              </button>
            ) : (
              <Link href="/auth">
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
                  <AiFillProject />
                  <span>Login / Sign Up</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </ClickAwayListener>
  );
}

const MenuLink = ({
  href,
  icon,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href: any;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link href={href}>
    <li className="group relative px-4 py-3 my-1 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-primary/5 to-primary/10 hover:shadow-sm">
      {/* Animated highlight bar */}
      <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 bg-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex items-center">
        {/* Icon with gradient background */}
        <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 text-primary transition-all duration-300">
          {icon}
        </div>

        {/* Text with subtle animation */}
        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
          {label}
        </span>

        {/* Animated chevron (optional) */}
        <svg
          className="ml-auto h-4 w-4 text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </li>
  </Link>
);
