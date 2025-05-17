'use client';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Role } from '@/app/auth/utils';
import { LoadingPage } from '@/components/common/loading';
import Header from './header';
import SellerSidebar from './header/HamburgerMenu';

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
    <section className="w-full h-auto bg-[#f5f5f5] mb-4">
      <div className="w-full min-h-screen ">
        <Header />
        <div className="w-full lg:flex lg:flex-row lg:space-x-6 max-w-[1080px] mx-auto">
          <div className="lg:block hidden pt-[35px] max-w-[247px] min-w-[247px]">
            <SellerSidebar />
          </div>
          <div className="md:px-4 w-full h-full bg-white px-3 md:p-5 mt-3 md:mt-[35px] rounded-[6px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerLayout;
