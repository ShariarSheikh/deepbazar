'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import HeaderSection from './comps';

const Header = () => {
  const segment = useSelectedLayoutSegment();
  // IS PAGE IS SELLER PAGE THAN DON'T SHOW THE HEADER
  if (segment === '(dashboard)') return null;

  return (
    <header className="w-full sticky top-0 z-30 bg-white">
      <HeaderSection />
    </header>
  );
};

export default Header;
