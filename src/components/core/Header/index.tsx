'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import HeaderSection from './comps';

const Header = () => {
  const segments = useSelectedLayoutSegments();
  // IS PAGE IS SELLER PAGE THAN DON'T SHOW THE HEADER
  if (segments[1] === 'seller') return null;

  return (
    <header className="w-full sticky top-0 z-30 bg-white">
      <HeaderSection />
    </header>
  );
};

export default Header;
