'use client';

import { useSearchParams } from 'next/navigation';
import { FC, ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import SearchAndFilter from './SearchAndFilter';
import Sidebar from './Sidebar';

interface IProps {
  children: ReactNode;
}

const ShopLayout: FC<IProps> = ({ children }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className="w-full h-auto bg-primaryLight">
      <div className="w-full flex max-w-[1201px] mx-auto">
        <div className="w-full max-w-[280px] sticky top-[133px] mb-[20px]">
          <Breadcrumb category={category} />
          <Sidebar />
        </div>
        <div className="w-full h-full px-4 pt-1">
          <SearchAndFilter />
          {children}
        </div>
      </div>
    </section>
  );
};

export default ShopLayout;
