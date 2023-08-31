import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiFillHome, AiFillProject, AiOutlineHeart } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { BsShop } from 'react-icons/bs';
import { CiMenuFries } from 'react-icons/ci';
import { FaSellcast } from 'react-icons/fa';
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi';
import { GiDeerTrack } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';

interface HamburgerMenuIconProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuIcon: FC<HamburgerMenuIconProps> = ({ open, setOpen }) => {
  const toggleMenu = () => setOpen(prevState => !prevState);

  const resultContainerRef = useRef(null);
  const pathname = usePathname();

  const hideResult = (
    element: ChangeEvent<HTMLInputElement> | HTMLDivElement
  ): void => {
    if (resultContainerRef.current === element) return undefined;
    return setOpen(false);
  };

  useEffect(() => {
    if (open) return setOpen(false);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      <div className="relative w-[48px] h-[48px]">
        <button
          onClick={toggleMenu}
          className="flex items-center cursor-pointer justify-center min-w-[48px] max-w-[48px] h-[48px] bg-[#F3F9FB] active:scale-95 duration-150 rounded-[10px]"
        >
          {open ? (
            <TfiClose className="text-primary" />
          ) : (
            <CiMenuFries className="rotate-[180deg] text-primary" />
          )}
        </button>

        {open && (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="h-full w-full mt-2 z-50 min-h-[calc(100vh-150px)] relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[200px] min-w-[200px] rounded-[10px]"
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
                  <Link href="/all-product">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <BsShop />
                      <p className="ml-[8px] pt-[2px]">All Products</p>
                    </li>
                  </Link>
                  <Link href="/best-offer">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <BiSolidOffer />
                      <p className="ml-[8px] pt-[2px]">Best Offers</p>
                    </li>
                  </Link>
                  <Link href="/take-order">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <GiDeerTrack />
                      <p className="ml-[8px] pt-[2px]">Take Order</p>
                    </li>
                  </Link>
                  <Link href="/cart">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <FiShoppingCart />
                      <p className="ml-[8px] pt-[2px]">Cart</p>
                    </li>
                  </Link>
                  <Link href="/profile/favorite">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <AiOutlineHeart />
                      <p className="ml-[8px] pt-[2px]">Favorite</p>
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                      <FiPhoneCall />
                      <p className="ml-[8px] pt-[2px]">Contact</p>
                    </li>
                  </Link>
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
                </ul>

                <div>
                  <Link href="/flash-sale">
                    <div className="w-[180px] mx-auto h-[200px] mb-[20px] rounded-[6px] overflow-hidden">
                      <img
                        src="https://i.ibb.co/KNSg6rq/Screenshot-2.png"
                        alt="best product"
                      />
                    </div>
                  </Link>
                  <div className="h-[80px] border-t border-gray-300 pt-[23px]">
                    <Link href="/auth">
                      <li className="text-[14px] w-full h-[36px] mb-[3px] flex items-center pl-[8px] hover:bg-[#F3F9FB]">
                        <AiFillProject />
                        <p className="ml-[8px] pt-[2px]">Sign Up/Sign In</p>
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </ClickAwayListener>
        )}
      </div>
    </AnimatePresence>
  );
};

export default HamburgerMenuIcon;
