'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useAppSelector } from '@/redux/hooks';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';
import Head from 'next/head';

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
    <section className="w-full h-auto max-w-[1190px] md:px-[10px] mx-auto min-h-[60vh]">
      <Head>
        <title>User Panel - DeepBazar</title>
      </Head>
      <div className="w-full flex flex-col md:flex-row h-full">
        <Sidebar />
        <div className="w-full h-full lg:ml-[20px] md:p-3 mt-[20px] md:mt-[30px] rounded-[6px] mb-[20px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UserLayout;
