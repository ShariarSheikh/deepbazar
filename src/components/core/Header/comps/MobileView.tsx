import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HamburgerMenuIcon from './Icon';
import Logo from './Logo';
import SearchBar from './SearchBar';
import DeliveryLocation from './DeliveryLocation';

//---------------------------------------------

//---------------------------------------------

export default function Mobile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between pt-[8px]">
        <HamburgerMenuIcon open={open} setOpen={setOpen} />
        <DeliveryLocation />
        <Logo />
      </div>
      <div className="w-full mt-2 pb-[5px]">
        <SearchBar />
      </div>
    </div>
  );
}
