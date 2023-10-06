import Link from 'next/link';
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCaravan } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

import HamburgerMenuIcon from './Icon';
import Logo from './Logo';
import ProfileButtons from './ProfileButtons';
import SearchBar from './SearchBar';
import DeliveryLocation from './DeliveryLocation';

export default function DesktopView() {
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

            <Link href="/user/track-order">
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
}
