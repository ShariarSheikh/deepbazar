import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
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
import { TfiClose } from 'react-icons/tfi';

const HamburgerMenu = dynamic(() => import('./HamburgerMenu'));

interface HamburgerMenuIconProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuIcon: FC<HamburgerMenuIconProps> = ({ open, setOpen }) => {
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

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
  }, [pathname]);

  return (
    <AnimatePresence>
      <div className="relative w-[48px] h-[48px]">
        <button
          onClick={() => {
            if (open) return undefined;
            openMenu();
          }}
          className="flex items-center cursor-pointer justify-center min-w-[48px] max-w-[48px] h-[48px] bg-[#F3F9FB] active:scale-95 duration-150 rounded-[10px]"
        >
          {open ? (
            <TfiClose className="text-primary" />
          ) : (
            <CiMenuFries className="rotate-[180deg] text-primary" />
          )}
        </button>

        {open && (
          <HamburgerMenu
            closeMenu={closeMenu}
            hideResult={hideResult}
            resultContainerRef={resultContainerRef}
          />
        )}
      </div>
    </AnimatePresence>
  );
};

export default HamburgerMenuIcon;
