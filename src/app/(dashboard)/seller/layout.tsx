'use client';
import SellerHeader from '@/views/seller/header';
import SellerSidebar from '@/views/seller/sidebar';
import { FC, ReactNode, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  const [expendSidebar, setExpendSidebar] = useState<boolean>(true);
  return (
    <section className="w-full h-auto bg-primaryLight">
      <div className="w-full flex min-h-screen max-w-[1366px] mx-auto">
        <div
          style={{
            maxWidth: expendSidebar ? 280 : 80,
          }}
          className="max-h-[calc(100vh-16px)] sticky top-0 z-[80] w-full pt-4 rounded-[6px]"
        >
          <SellerSidebar
            expendSidebar={expendSidebar}
            setIsExpendSidebar={setExpendSidebar}
          />
        </div>

        <div className="w-full h-full px-4 pt-4">
          <SellerHeader />
          {children}
        </div>
      </div>
    </section>
  );
};

export default SellerLayout;
