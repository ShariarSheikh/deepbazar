import Button from '@/components/common/Button';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import SellerSidebar from './HamburgerMenu';
import { useAppSelector } from '@/redux/hooks';
import ClickAwayListener from 'react-click-away-listener';
import Link from 'next/link';

interface IProps {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
}

export default function NavHeader({ setShowSearchBar }: IProps) {
  const user = useAppSelector(state => state.authSlice.user);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <div
        className={`duration-150 bg-primary h-[65px] w-full flex items-center justify-between relative z-50 text-white`}
      >
        <div className="flex items-center pl-4 relative">
          <div className="block lg:hidden">
            <Button
              className="flex items-center text-white space-x-1 uppercase"
              onClick={() => setIsMenu(true)}
            >
              <FiMenu /> <span>{isMenu ? 'Close' : 'Menu'}</span>
            </Button>
          </div>

          <div className="hidden lg:block">
            <div
              className={`w-full p-3 relative flex items-center justify-start bg-white rounded-[6px] h-[50px] text-lg`}
            >
              <h1 className="cursor-pointer font-bold text-primary min-w-[130px]">
                <Link href="/" passHref>
                  DeepBazar
                </Link>
              </h1>
            </div>
          </div>

          <div
            role="presentation"
            onClick={() => setShowSearchBar(prevState => !prevState)}
            className="w-full mx-3 md:mx-auto md:ml-10 p-2 max-w-[180px] lg:max-w-[380px] lg:min-w-[380px] h-[42px] rounded-[6px] bg-primaryLight bg-opacity-[8%] flex justify-start duration-200 transition-all active:scale-95 items-center cursor-pointer [&>svg]:hover:scale-110"
          >
            <AiOutlineSearch className="w-[20px] h-[20px] text-white" />
            <span className="text-sm pl-1 line-clamp-1">Search pages..</span>
          </div>

          {isMenu && (
            <ClickAwayListener onClickAway={() => setIsMenu(false)}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                className="block lg:hidden h-full min-h-[567px] max-h-[567px] w-full mt-2 z-50  absolute top-[51px] left-0 bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[247px] min-w-[247px] overflow-hidden rounded-[10px]"
              >
                <SellerSidebar />
              </motion.div>
            </ClickAwayListener>
          )}
        </div>

        <div className="h-full space-x-4 flex items-center pr-1 md:pr-2">
          <Link
            href="/seller/account-settings"
            className="cursor-pointer flex items-center w-full max-w-[95px] md:max-w-[160px] min-w-[95px]"
          >
            <div className="h-[40px] w-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden relative">
              {user?.imgUrl ? (
                <Image
                  fill
                  src={user.imgUrl}
                  alt="user picture"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primaryLight text-primary font-medium flex items-center justify-center">
                  {user?.firstName.charAt(0)}
                </div>
              )}
            </div>
            <p className="pl-[5px] text-[16px] text-start font-bold text-white w-full max-w-[120px] line-clamp-1">
              {user?.firstName}
            </p>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}
