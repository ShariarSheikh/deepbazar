'use client';
// import SellerHeader from '@/views/seller/header';
// import SellerSidebar from '@/views/seller/sidebar';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  return (
    <section className="w-full h-auto max-w-[1366px] px-[10px] mx-auto min-h-[60vh]">
      <div className="w-full grid grid-cols-[repeat(auto,1fr)]">
        <div className="h-screen sticky top-0 z-[80] max-w-[280px] w-full">
          {/* <SellerSidebar /> */}
        </div>

        <div className="bg-primaryLight w-full min-h-[100vh]">
          {/* <SellerHeader /> */}
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SellerLayout;
