import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DeliveryLocation from './DeliveryLocation';
import HamburgerMenuIcon from './Icon';
import Logo from './Logo';
import ProfileButtons from './ProfileButtons';
import SearchBar from './SearchBar';

//---------------------------------------------

//---------------------------------------------

export default function Mobile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <div className="w-full lg:hidden px-4">
      <div className="flex items-center justify-between pt-[8px]">
        <HamburgerMenuIcon open={open} setOpen={setOpen} />
        <DeliveryLocation />
        <div className="hidden md:block">
          <ProfileButtons />
        </div>
        <Logo />
      </div>
      <div className="w-full mt-2 pb-[5px]">
        <SearchBar />
      </div>
    </div>
  );
}
