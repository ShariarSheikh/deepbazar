'use client';
import Breadcrumb from '@/views/profile/Breadcrumb';
import Sidebar from '@/views/profile/Sidebar';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const UserLayout: FC<IProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <section className="w-full h-auto max-w-[1190px] px-[10px] mx-auto min-h-[60vh]">
      <div className="w-full flex h-full">
        <div className="w-full max-w-[290px] max-h-[460px] sticky top-[133px] mb-[20px]">
          <Breadcrumb segment={segment} />
          <Sidebar />
        </div>
        <div className="w-full h-full ml-[20px] p-3 bg-[#f3f9fb] mt-[48px] rounded-[6px] mb-[20px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UserLayout;
