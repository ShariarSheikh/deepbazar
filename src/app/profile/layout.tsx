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
    <section className="w-full max-w-[1201px] mx-auto min-h-[60vh]">
      <Breadcrumb segment={segment} />
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full ml-[20px]">{children}</div>
      </div>
    </section>
  );
};

export default ProfileLayout;
