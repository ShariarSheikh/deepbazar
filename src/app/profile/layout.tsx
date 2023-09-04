'use client';
import Breadcrumb from '@/views/profile/Breadcrumb';
import Sidebar from '@/views/profile/Sidebar';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ProfileLayout: FC<IProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <section className="w-full max-w-[1190px] px-[10px] mx-auto min-h-[60vh]">
      <div className="w-full flex">
        <div className="w-full max-w-[290px] max-h-[460px] sticky top-[133px]">
          <Breadcrumb segment={segment} />
          <Sidebar />
        </div>
        <div className="w-full ml-[20px] p-3 bg-[#f3f9fb] mt-[48px] rounded-[6px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
