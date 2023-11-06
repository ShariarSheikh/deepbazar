import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MobileView = dynamic(() => import('./MobileView'));
const DesktopView = dynamic(() => import('./DesktopView'));

//---------------------------------------------

//---------------------------------------------

const HeaderSection = () => {
  return (
    <div
      className="w-full flex items-center justify-between
      font-roboto transition-all duration-150"
    >
      <Suspense fallback={<div className="w-full h-[70px]" />}>
        <MobileView />
        <DesktopView />
      </Suspense>
    </div>
  );
};

export default HeaderSection;
