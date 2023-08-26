import { Dispatch, FC, SetStateAction } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

interface HamburgerMenuIconProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuIcon: FC<HamburgerMenuIconProps> = ({ open, setOpen }) => {
  const toggleMenu = () => setOpen(prevState => !prevState);
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center cursor-pointer justify-center w-[48px] h-[48px] bg-[#F3F9FB] active:scale-95 duration-150 rounded-[10px]"
    >
      {open ? (
        <TfiClose className="text-primary" />
      ) : (
        <CiMenuFries className="rotate-[180deg] text-primary" />
      )}
    </button>
  );
};

export default HamburgerMenuIcon;
