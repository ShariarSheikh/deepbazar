import { useEffect, useState } from 'react';
import NavHeader from './NavHeader';
import SearchBar from './SearchBar';

//--------------------------------------
//--------------------------------------

function Header() {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [isStickyHeader, setIsStickyHeader] = useState<boolean>(false);

  // HEADER STICKY
  useEffect(() => {
    const findScrollPositionHeight = (): void => {
      if (window.pageYOffset >= 65) return setIsStickyHeader(true);
      return setIsStickyHeader(false);
    };
    window.addEventListener('scroll', findScrollPositionHeight);
    findScrollPositionHeight();
    return () => window.removeEventListener('scroll', findScrollPositionHeight);
  }, []);

  return (
    <header
      className={`w-full bg-primary z-50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${
        isStickyHeader ? 'sticky top-0' : ''
      }`}
    >
      <div className="w-full relative max-w-[1080px] mx-auto">
        <NavHeader setShowSearchBar={setShowSearchBar} />
        <SearchBar isShow={showSearchBar} setIsShow={setShowSearchBar} />
      </div>
    </header>
  );
}

export default Header;
