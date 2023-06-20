import { Dispatch, FC, SetStateAction } from 'react';

interface HamburgerMenuIconProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuIcon: FC<HamburgerMenuIconProps> = ({ open, setOpen }) => {
  return (
    <div className="block lg:hidden">
      {/* menu icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-7 w-7 text-black ${open ? 'hidden' : 'visible'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      {/* menu close icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`h-7 w-7 text-black ${open ? 'visible' : 'hidden'}`}
        onClick={() => setOpen(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default HamburgerMenuIcon;
