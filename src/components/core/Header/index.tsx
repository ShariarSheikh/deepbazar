'use client';

import LoginSidebar from '@/components/common/LoginSidebar';
import { useAppSelector } from '@/redux/hooks';
import dynamic from 'next/dynamic';
import TopSection from './comps';

const CartSidebar = dynamic(() => import('@/components/common/CartSidebar'));
const FavoriteCartSidebar = dynamic(
  () => import('@/components/common/FavoriteCartSidebar')
);

const Header = () => {
  const { userData } = useAppSelector(state => state.loginSlice);

  return (
    <header className="w-full sticky top-0 z-30 bg-white">
      <TopSection />
      {/* <BottomSection /> */}
      <CartSidebar />
      <FavoriteCartSidebar />
      {!userData.user?.name && <LoginSidebar />}
    </header>
  );
};

export default Header;
