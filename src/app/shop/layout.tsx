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
    <section className="w-full h-full bg-primaryLight">
      <div className="w-full max-w-[1201px] mx-auto">
        <Breadcrumb category={category} />
      </div>
      <div className="h-full w-full flex min-h-[60vh] max-w-[1201px] mx-auto">
        <div
          style={{
            maxWidth: 280,
          }}
          className="w-full"
        >
          <Sidebar />
        </div>

        <div className="w-full h-full px-4">
          <SearchAndFilter />
          {children}
        </div>
      </div>
    </section>
  );
};

export default ShopLayout;
