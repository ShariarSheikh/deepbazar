'use client';
import { FC, ReactNode, useState } from 'react';
import SellerHeader from './header';
import SellerSidebar from './sidebar';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  const { user } = useAppSelector(state => state.authSlice);
  const [expendSidebar, setExpendSidebar] = useState<boolean>(true);

  const router = useRouter();

  if (user?.role.includes(Role.USER)) {
    router.replace(`/user`);
    return <LoadingPage />;
  }

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
