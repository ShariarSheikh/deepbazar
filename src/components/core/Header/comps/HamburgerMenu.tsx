import { logout } from '@/redux/features/authSlice';
import { loginOpenModal } from '@/redux/features/loginFirstSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { PATH_USER } from '@/utils/routes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, MutableRefObject } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiFillHome, AiFillProject, AiOutlineHeart } from 'react-icons/ai';
import { BiLogOutCircle, BiSolidOffer } from 'react-icons/bi';
import { BsShop } from 'react-icons/bs';
import { FaSellcast } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
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

  const router = useRouter();
  const dispatch = useAppDispatch();

  const logOutHandle = () => {
    dispatch(logout());
    closeMenu();
  };

  const linkHandler = (link: string, isAuthNeed: boolean) => {
    //IF USER NOT LOGGED IN THEN LOGGED IN FIRST THEN REDIRECT
    if (isAuthNeed && !user._id)
      return dispatch(loginOpenModal({ redirectUrl: link }));
    router.push(link);
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -10 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: 'spring ', damping: 30, stiffness: 400 }}
        className={`h-full w-full mt-2 z-50 ${
          user._id ? 'min-h-[calc(100vh-200px)]' : 'min-h-[calc(100vh-185px)]'
        } relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[200px] min-w-[200px] rounded-[10px] overflow-hidden`}
        ref={resultContainerRef}
        onClick={e => hideResult(e.currentTarget)}
      >
        <div className="w-full h-full flex flex-col justify-between overflow-hidden">
          <ul className="mt-[10px] w-full">
            <Link href="/">
              <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                <AiFillHome /> <p className="ml-[8px] pt-[2px]">Home</p>
              </li>
            </Link>

            <li
              onClick={() => linkHandler('/shop', false)}
              className="cursor-pointer text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]"
            >
              <BsShop />
              <p className="ml-[8px] pt-[2px]">Shop</p>
            </li>

            <li
              onClick={() => linkHandler('/best-offers', false)}
              className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]"
            >
              <BiSolidOffer />
              <p className="ml-[8px] pt-[2px]">Best Offers</p>
            </li>

            <li
              onClick={() => linkHandler(PATH_USER.trackOrder, true)}
              className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]"
            >
              <GiDeerTrack />
              <p className="ml-[8px] pt-[2px]">Track Order</p>
            </li>

            <Link href="/cart">
              <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                <FiShoppingCart />
                <p className="ml-[8px] pt-[2px]">Cart</p>
              </li>
            </Link>
            <Link href={PATH_USER.wishlist}>
              <li
                onClick={() => linkHandler(PATH_USER.wishlist, true)}
                className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]"
              >
                <AiOutlineHeart />
                <p className="ml-[8px] pt-[2px]">Wishlist</p>
              </li>
            </Link>
            {!user?._id && (
              <Link
                href={{
                  pathname: '/auth',
                  query: {
                    keyword: 'seller',
                  },
                }}
              >
                <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                  <FaSellcast />
                  <p className="ml-[8px] pt-[2px]">Sell On DeepBazar</p>
                </li>
              </Link>
            )}
          </ul>

          <div>
            <Link href="/best-offers?id=2">
              <div className="relative w-[180px] mx-auto h-[200px] mb-[20px] rounded-[6px] overflow-hidden">
                <Image
                  src="https://i.ibb.co/KNSg6rq/Screenshot-2.png"
                  alt="best product"
                  fill
                />
              </div>
            </Link>
            <div className="h-[80px] border-t border-gray-300 pt-[23px]">
              {user?._id ? (
                <button
                  onClick={logOutHandle}
                  className="w-full mx-auto max-w-[95%] pl-[8px] mb-[3px] h-[38px] border border-red-600 flex items-center rounded-[6px] text-red-600 hover:text-white font-bold text-sm hover:bg-red-600 active:scale-95 duration-200 group"
                >
                  <BiLogOutCircle className="text-red-600 group-hover:text-white mr-[4px]" />
                  <span>LogOut</span>
                </button>
              ) : (
                <Link href="/auth">
                  <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                    <AiFillProject />
                    <p className="ml-[8px] pt-[2px]">Login/SignUp</p>
                  </li>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </ClickAwayListener>
  );
}
