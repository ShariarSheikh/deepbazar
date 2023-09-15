'use client';
import SellerHeader from '@/views/seller/header';
import SellerSidebar from '@/views/seller/sidebar';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  return (
    <section className="w-full h-auto max-w-[1366px] px-[10px] mx-auto bg-primaryLight">
      <div className="w-full flex min-h-[60vh]">
        <div className="h-screen sticky top-0 z-[80] max-w-[280px] w-full">
          <SellerSidebar />
        </div>

        <div className="w-full h-full">
          <SellerHeader />
          {children}
        </div>
      </div>
    </section>
  );
};

export default SellerLayout;
