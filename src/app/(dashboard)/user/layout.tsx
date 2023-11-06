'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useAppSelector } from '@/redux/hooks';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';

interface IProps {
  children: ReactNode;
}

const UserLayout: FC<IProps> = ({ children }) => {
  const { user } = useAppSelector(state => state.authSlice);
  const router = useRouter();

  if (user?.role.includes(Role.SELLER)) {
    router.replace(`/seller`);
    return <LoadingPage />;
  }

  return (
    <main className="w-full h-full bg-[#f5f5f5]">
      <section className="w-full max-w-[1190px] md:px-[10px] mx-auto min-h-[593px]">
        <div className="w-full flex flex-col md:flex-row h-full">
          <Sidebar />
          <div className="w-full h-full bg-white lg:ml-[20px] md:p-3 mt-[20px] md:mt-[50px] rounded-[6px] mb-[20px]">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserLayout;
