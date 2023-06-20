import useWindowSize from '@/hooks/useWindowSize';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HamburgerMenu from '../hamburgerMenu';
import HamburgerMenuIcon from '../hamburgerMenu/Icon';
import DeliveryLocation from './DeliveryLocation';
import LanguageAndContact from './LanguageAndContact';
import Logo from './Logo';
import ProfileButtons from './ProfileButtons';
import SearchBar from './SearchBar';

//---------------------------------------------

//---------------------------------------------

const RenderUiForMobile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between">
        <HamburgerMenuIcon open={open} setOpen={setOpen} />
        <Logo />
        <ProfileButtons />
      </div>
      <div className="w-full mt-4">
        <SearchBar />
      </div>
      <HamburgerMenu isOpenMenu={open} />
    </div>
  );
};

const RenderUiForDesktop = () => {
  return (
    <div className="hidden w-full h-full lg:block">
      <div className="w-full flex items-center justify-between h-full">
        <Logo />
        <DeliveryLocation />
        <SearchBar />
        <LanguageAndContact />
        <ProfileButtons />
      </div>
    </div>
  );
};

// MAIN COMPONENT----------------------------------
const TopSection = () => {
  const { width } = useWindowSize();

  return (
    <div
      className="w-full py-5 flex items-center justify-between
      border-b font-roboto px-4 2xl:px-0 transition-all duration-150"
    >
      {width <= 1023 && <RenderUiForMobile />}
      {width > 1023 && <RenderUiForDesktop />}
    </div>
  );
};

export default TopSection;
