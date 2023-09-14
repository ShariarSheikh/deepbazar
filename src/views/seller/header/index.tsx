import { useEffect, useState } from 'react';
import NavHeader from './NavHeader';
import SearchBar from './SearchBar';

//--------------------------------------
//--------------------------------------

function SellerHeader() {
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
    <header className={`w-full z-50 ${isStickyHeader ? 'sticky top-0' : ''}`}>
      <div className="w-full relative">
        <NavHeader
          isSticky={isStickyHeader}
          setShowSearchBar={setShowSearchBar}
        />

        <SearchBar isShow={showSearchBar} setIsShow={setShowSearchBar} />
      </div>
    </header>
  );
}

export default SellerHeader;
