import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="h-full w-full mt-2 z-50  relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[200px] min-w-[200px] min-h-[243px] rounded-[10px]"
            ref={resultContainerRef}
            onClick={e => hideResult(e.currentTarget)}
          >
            <div
              role="presentation"
              onClick={e => hideResult(e.currentTarget)}
              className="absolute cursor-pointer active:scale-95 right-[4px] top-1 rounded-full bg-opacity-10 w-7 h-7 flex items-center justify-center duration-150"
            >
              <IoCloseOutline className="w-5 h-5" />
            </div>
            <div className="w-full h-full overflow-hidden">
              <ul className="mt-[35px] w-full">
                <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                  Home
                </li>
                <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                  Category
                </li>
                <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                  Sell On DeepBazar
                </li>
                <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                  Buy On DeepBazar
                </li>
                <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                  Contact
                </li>
              </ul>
              <p className="text-center text-gray-400 text-[12px] mt-[23px]">
                © DeepBazar 2023
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default HamburgerMenuIcon;
