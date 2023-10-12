'use client';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';
import Header from './header';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  const { user } = useAppSelector(state => state.authSlice);

  const router = useRouter();

  if (user?.role.includes(Role.USER)) {
    router.replace(`/user`);
    return <LoadingPage />;
  }

  return (
    <section className="w-full h-auto">
      <div className="w-full min-h-screen max-w-[1080px] mx-auto md:px-4">
        <Header />
        {children}
      </div>
    </section>
  );
};

export default SellerLayout;
