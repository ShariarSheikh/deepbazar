'use client';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { FC, ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import { useAppSelector } from '@/redux/hooks';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';

interface IProps {
  children: ReactNode;
}

const UserLayout: FC<IProps> = ({ children }) => {
  const { user } = useAppSelector(state => state.authSlice);
  const segment = useSelectedLayoutSegment();

  const router = useRouter();

  if (user?.role.includes(Role.SELLER)) {
    router.replace(`/seller`);
    return <LoadingPage />;
  }

  return (
    <section className="w-full h-auto max-w-[1190px] md:px-[10px] mx-auto min-h-[60vh]">
      <div className="w-full flex h-full">
        <div className="w-full max-w-[75px] md:max-w-[290px] lg:max-h-[460px] sticky top-[133px] mb-[20px]">
          <Breadcrumb segment={segment} />
          <Sidebar />
        </div>
        <div className="w-full h-full ml-[20px] md:p-3 mt-[48px] rounded-[6px] mb-[20px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UserLayout;
