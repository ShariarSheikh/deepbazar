'use client';

import LoginSidebar from '@/components/common/LoginSidebar';
import { useAppSelector } from '@/redux/hooks';
import dynamic from 'next/dynamic';
import TopSection from './topSection';

const CartSidebar = dynamic(() => import('@/components/common/CartSidebar'));
const FavoriteCartSidebar = dynamic(
  () => import('@/components/common/FavoriteCartSidebar')
);

const Header = () => {
  const { userData } = useAppSelector(state => state.loginSlice);

  return (
    <header className="w-full">
      <TopSection />
      {/* <BottomSection /> */}
      <CartSidebar />
      <FavoriteCartSidebar />
      {!userData.user?.name && <LoginSidebar />}
    </header>
  );
};

export default Header;

export const categoryList: Array<{
  id: number;
  category: string;
  link: string;
}> = [
  {
    id: 1,
    category: 'All',
    link: 'aps',
  },
  {
    id: 2,
    category: 'Apps & Games',
    link: 'mobile-apps',
  },
  {
    id: 3,
    category: 'Baby',
    link: 'baby-products',
  },
  {
    id: 4,
    category: 'Books',
    link: 'stripbooks',
  },
  {
    id: 5,
    category: 'Computers',
    link: 'computers',
  },

  {
    id: 6,
    category: 'Arts, Crafts & Sewing',
    link: 'arts-crafts',
  },
  {
    id: 7,
    category: 'Electronics',
    link: 'electronics',
  },
  {
    id: 8,
    category: 'Whole Foods Market',
    link: 'wholefoods',
  },
];
