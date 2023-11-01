'use client';

import { useSearchParams } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import CustomModal from '@/components/common/CustomModal';
import Button from '@/components/common/Button';
import { BsFilter } from 'react-icons/bs';
import useWindowSize from '@/hooks/useWindowSize';

interface IProps {
  children: ReactNode;
}

const ShopLayout: FC<IProps> = ({ children }) => {
  const { width } = useWindowSize();
  const [isModel, setIsModel] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');

  const mobileView = (
    <div className="block lg:hidden bg-[#F3F9FB] z-[100] w-full max-w-[96%] mx-auto sticky top-[133px] mb-[20px]">
      <div className="flex items-center justify-between">
        <Breadcrumb category={category} />
        <Button
          onClick={() => setIsModel(true)}
          className="flex items-center space-x-2 px-2 py-1 cursor-pointer rounded-[6px] bg-white text-gray-600"
        >
          <BsFilter />
          <span className="text-sm">Filter</span>
        </Button>
      </div>

      <CustomModal
        boxStyle={{ width: 280, height: 642 }}
        isOpen={isModel}
        onClose={() => setIsModel(false)}
      >
        <Sidebar />
      </CustomModal>
    </div>
  );

  const desktopView = (
    <div className="hidden lg:block w-full max-w-[280px] sticky top-[133px] mb-[20px]">
      <Breadcrumb category={category} />
      <Sidebar />
    </div>
  );

  // IN MOBILE VIEW WHEN SELECT FILTER THEN CLOSE THE MODAL
  useEffect(() => {
    if (width > 768) return;
    if (isModel) setIsModel(false);
  }, [category, startPrice, endPrice]);
  return (
    <section className="w-full h-auto bg-primaryLight relative">
      <div className="w-full flex flex-col lg:flex-row max-w-[1201px] mx-auto">
        {mobileView}
        {desktopView}
        <div className="w-full h-full lg:px-4 pt-1">{children}</div>
      </div>
    </section>
  );
};

export default ShopLayout;
