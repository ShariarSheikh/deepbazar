import useWindowSize from '@/hooks/useWindowSize';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaClipboardList } from 'react-icons/fa';
import { GiDeerTrack } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';
import Breadcrumb from './Breadcrumb';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';
import { FiMenu } from 'react-icons/fi';
import CustomModal from '@/components/common/CustomModal';

const Sidebar: FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const pathname = usePathname();
  const { width } = useWindowSize();
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    setIsMenu(false);
  }, [pathname]);

  return (
    <>
      {width >= 768 ? (
        <div className="w-full max-w-[290px] lg:max-h-[460px] sticky top-[133px] mb-[20px]">
          <Breadcrumb segment={segment} />
          <Nav />
        </div>
      ) : (
        <AnimatePresence>
          <div className="w-full relative mt-[20px] ml-1">
            {!isMenu ? (
              <Button
                className="flex items-center text-primary space-x-1 uppercase"
                onClick={() => setIsMenu(true)}
              >
                <FiMenu /> <span>Menu</span>
              </Button>
            ) : (
              <Button
                className="flex items-center text-primary space-x-1 uppercase"
                onClick={() => setIsMenu(false)}
              >
                <AiOutlineClose /> <span>Close</span>
              </Button>
            )}
            {isMenu && (
              <CustomModal isOpen={isMenu} onClose={() => setIsMenu(false)}>
                <Nav />
              </CustomModal>
            )}
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Sidebar;

const Nav = () => {
  const user = useAppSelector(state => state.authSlice.user);
  return (
    <nav className="w-full max-w-[290px] max-h-[490px] overflow-hidden rounded-[6px] bg-white">
      <div className="flex flex-col justify-center items-center pt-[18px] pb-[10px] border-b-2 border-gray-200">
        {user?.imgUrl ? (
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={user.imgUrl}
            alt="user"
          />
        ) : (
          <div className="w-[60px] h-[60px] bg-primary rounded-full text-white font-medium flex items-center justify-center">
            {user?.firstName.charAt(0)}
          </div>
        )}
        <h1 className="text-[18px] font-medium w-full line-clamp-1 text-center">
          {user?.firstName} {user?.lastName}
        </h1>
      </div>
      <ul className="mt-[18px] w-full">
        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user"
            className="text-gray-600 w-full h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <RxDashboard size={16} />
            <span className="font-normal text-sm">Overview</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/track-order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <GiDeerTrack size={16} />
            <span className="font-normal text-sm">Track Order</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <FaClipboardList size={16} />
            <span className="font-normal text-sm">Order</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/wishlist"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineHeart size={16} />
            <span className="font-normal text-sm">My Wishlist</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/shipping-address"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <CiLocationOn size={16} />
            <span className="font-normal text-sm">Shipping Address</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/reviews"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineStar size={16} />
            <span className="font-normal text-sm">My Reviews</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/question-answer"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineQuestionCircle size={16} />
            <span className="font-normal text-sm">My Question & Answer</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/user/account"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 pl-[15px] border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <IoSettingsOutline size={16} />
            <span className="font-normal text-sm">Account Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
