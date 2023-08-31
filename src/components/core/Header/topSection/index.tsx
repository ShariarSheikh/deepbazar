import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCaravan } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import HamburgerMenu from '../hamburgerMenu';
import HamburgerMenuIcon from '../hamburgerMenu/Icon';
import DeliveryLocation from './DeliveryLocation';
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
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden w-full h-full lg:block">
      <div className="w-full bg-[#F5F5F5]">
        <div className="h-[42px] max-w-[1201px] text-[#666666] font-light mx-auto flex items-center justify-between">
          <h1 className="text-sm">Welcome to worldwide DeepBazar!</h1>
          <div className="flex space-x-4">
            <button>
              <Link href="tel:01304802278" className="flex items-center">
                <CiLocationOn className="text-primary" />
                <p className="ml-[6px] text-sm">
                  Deliver to <b>033456</b>
                </p>
              </Link>
            </button>
            <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

            <Link href="/track-order">
              <button className="flex items-center">
                <FaCaravan className="text-primary" />
                <p className="ml-[6px] text-sm">Track your order</p>
              </button>
            </Link>
            <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

            <Link href="/best-offer">
              <button className="flex items-center">
                <MdLocalOffer className="text-primary" />
                <p className="ml-[6px] text-sm">Best Offers</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-[#EDEDED]">
        <div className="max-w-[1201px] h-full min-h-[90px] mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <HamburgerMenuIcon open={open} setOpen={setOpen} />
            <Logo />
            <DeliveryLocation />
          </div>

          <div className="w-full max-w-[828px] flex items-center justify-end">
            <SearchBar />
            <ProfileButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT----------------------------------
const TopSection = () => {
  const { width } = useWindowSize();

  return (
    <div
      className="w-full flex items-center justify-between
      font-roboto px-4 2xl:px-0 transition-all duration-150"
    >
      {width <= 1023 ? <RenderUiForMobile /> : <RenderUiForDesktop />}
    </div>
  );
};

export default TopSection;
