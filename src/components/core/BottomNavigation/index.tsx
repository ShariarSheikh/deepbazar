'use client';

import { Role } from '@/app/auth/utils';
import CartBadges from '@/components/common/CartBadge';
import Skeleton from '@/components/common/Skeleton';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';

//-----------------------------------------
enum NavigationLinks {
  products = 'all-product',
  favorite = 'user/wishlist',
  home = '',
  cart = 'cart',
  login = 'auth',
}
//-----------------------------------------

const BottomNavigationComp: FC = () => {
  const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);
  const { user, isLoading } = useAppSelector(state => state.authSlice);

  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  const handleRouter = () => {
    if (!user?._id) return router.push('/auth');

    //REDIRECT TO USER PROFILE
    if (user?.role.includes(Role.USER)) return router.push(`/user`);

    //REDIRECT TO SELLER PROFILE
    if (user?.role.includes(Role.SELLER)) return router.push(`/seller`);
  };

  const profile = isLoading ? (
    <div className="flex flex-col w-[72px] h-[38px] justify-center items-center">
      <Skeleton circle height={20} width={20} />
      <Skeleton className="mt-1" height={12} width={60} />
    </div>
  ) : user?._id ? (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[20px] w-[20px] min-w-[20px] min-h-[20px] rounded-full overflow-hidden relative">
        {user.imgUrl ? (
          <Image
            fill
            src={user.imgUrl}
            alt="user picture"
            className="object-cover"
          />
        ) : (
          <div className="text-sm w-full h-full bg-primary text-white flex items-center justify-center rounded-full">
            {user.firstName.charAt(0)}
          </div>
        )}
      </div>
      <p className="text-[10px] text-start w-full max-w-[72px] line-clamp-1">
        {user.firstName}
      </p>
    </div>
  ) : (
    <>
      <GoPerson />
      <span className="text-[10px]">Login</span>
    </>
  );

  return (
    <nav className="block md:hidden fixed bottom-0 z-50 w-full bg-white rounded-t-[6px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex items-center justify-between h-[50px]">
        <button
          onClick={() => router.push('/shop')}
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
          <span className="text-[10px]">Shop</span>
        </button>
        <button
          onClick={() => router.push('/user/wishlist')}
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
          onClick={handleRouter}
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
          {profile}
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigationComp;
