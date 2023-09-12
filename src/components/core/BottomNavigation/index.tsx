'use client';

import CartBadges from '@/components/common/CartBadge';
import { useAppSelector } from '@/redux/hooks';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';

//-----------------------------------------
enum NavigationLinks {
  products = 'all-product',
  favorite = 'profile/wishlist',
  home = '',
  cart = 'cart',
  login = 'auth',
}
//-----------------------------------------

const BottomNavigationComp: FC = () => {
  const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);

  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  return (
    <nav className="block md:hidden fixed bottom-0 z-50 w-full bg-white rounded-t-[6px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex items-center justify-between h-[50px]">
        <button
          onClick={() => router.push('/all-products')}
          style={
            segment === NavigationLinks.products
              ? {
                  background: '#f3f9fb',
                  color: '#008ecc',
                  borderColor: '#008ecc',
                }
              : {
                  background: 'white',
                  color: '#008ecc',
                  borderColor: 'transparent',
                }
          }
          className="flex flex-col items-center justify-center h-full w-[30%] border-t-2"
        >
          <BsShop />
          <span className="text-[10px]">Products</span>
        </button>
        <button
          onClick={() => router.push('/profile/wishlist')}
          style={
            segment === NavigationLinks.favorite
              ? {
                  background: '#f3f9fb',
                  color: '#008ecc',
                  borderColor: '#008ecc',
                }
              : {
                  background: 'white',
                  color: '#008ecc',
                  borderColor: 'transparent',
                }
          }
          className="flex flex-col items-center justify-center h-full w-[30%] border-t-2"
        >
          <AiOutlineHeart />
          <span className="text-[10px]">Favorite</span>
        </button>
        <button
          onClick={() => router.push('/')}
          style={
            segment === NavigationLinks.home || segment === null
              ? {
                  background: '#f3f9fb',
                  color: '#008ecc',
                  borderColor: '#008ecc',
                }
              : {
                  background: 'white',
                  color: '#008ecc',
                  borderColor: 'transparent',
                }
          }
          className="flex flex-col items-center justify-center h-full w-[30%] border-t-2"
        >
          <AiFillHome />
          <span className="text-[10px]">Home</span>
        </button>
        {/* #78808a */}
        <button
          onClick={() => router.push('/cart')}
          style={
            segment === NavigationLinks.cart
              ? {
                  background: '#f3f9fb',
                  color: '#008ecc',
                  borderColor: '#008ecc',
                }
              : {
                  background: 'white',
                  color: '#008ecc',
                  borderColor: 'transparent',
                }
          }
          className="flex flex-col items-center justify-center h-full w-[30%] border-t-2 relative"
        >
          <FiShoppingCart />
          <span className="text-[10px]">Cart</span>
          <div className="absolute -top-[5px] right-[15px]">
            <CartBadges number={cartTotalQuantity || 6} />
          </div>
        </button>
        <button
          onClick={() => router.push('/auth')}
          style={
            segment === NavigationLinks.login
              ? {
                  background: '#f3f9fb',
                  color: '#008ecc',
                  borderColor: '#008ecc',
                }
              : {
                  background: 'white',
                  color: '#008ecc',
                  borderColor: 'transparent',
                }
          }
          className="flex flex-col items-center justify-center h-full w-[30%] border-t-2"
        >
          <GoPerson />
          <span className="text-[10px]">Login</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigationComp;
