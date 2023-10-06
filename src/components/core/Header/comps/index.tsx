import useWindowSize from '@/hooks/useWindowSize';
import dynamic from 'next/dynamic';

const MobileView = dynamic(() => import('./MobileView'));
const DesktopView = dynamic(() => import('./DesktopView'));

//---------------------------------------------

//---------------------------------------------

const HeaderSection = () => {
  const { width } = useWindowSize();

  return (
    <div
      className="w-full flex items-center justify-between
      font-roboto px-4 2xl:px-0 transition-all duration-150"
    >
      {width <= 1023 ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default HeaderSection;
