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
        className={`duration-150 backdrop-blur-sm bg-white/80 h-[65px] w-full flex items-center justify-between relative z-50 text-gray-800`}
      >
        <div className="flex items-center pl-4 relative">
          <Button
            className="flex items-center text-primary space-x-1 uppercase"
            onClick={() => setIsMenu(true)}
          >
            <FiMenu /> <span>{isMenu ? 'Close' : 'Menu'}</span>
          </Button>

          <div
            role="presentation"
            onClick={() => setShowSearchBar(prevState => !prevState)}
            className="w-[36px] h-[36px] ml-10 rounded-full hover:bg-primaryLight hover:bg-opacity-[8%] flex duration-200 transition-all active:scale-95 items-center justify-center cursor-pointer [&>svg]:hover:scale-110"
          >
            <AiOutlineSearch className="w-[20px] h-[20px] text-gray-600" />
          </div>

          {isMenu && (
            <ClickAwayListener onClickAway={() => setIsMenu(false)}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                className="h-full min-h-[567px] w-full mt-2 z-50  absolute top-[51px] left-0 bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[247px] min-w-[247px] overflow-hidden rounded-[10px]"
              >
                <SellerSidebar />
              </motion.div>
            </ClickAwayListener>
          )}
        </div>

        <div className="h-full space-x-4 flex items-center md:pr-5">
          <Link
            href="/seller/account-settings"
            className="cursor-pointer flex items-center w-full max-w-[95px] md:max-w-[160px] min-w-[95px] md:min-w-[160px]"
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
                <div className="w-full h-full bg-primary text-white font-medium flex items-center justify-center">
                  {user?.firstName.charAt(0)}
                </div>
              )}
            </div>
            <p className="pl-[5px] text-[16px] text-start font-bold text-[#666666] w-full max-w-[120px] line-clamp-1">
              {user?.firstName}
            </p>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}
