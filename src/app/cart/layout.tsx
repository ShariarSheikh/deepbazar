'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { LoadingPage } from '@/components/common/loading';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  const { totalQuantity } = useAppSelector(state => state.cartSlice);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const segment = useSelectedLayoutSegment();

  const router = useRouter();

  useEffect(() => {
    if (!totalQuantity) router.back();
    setIsInitialized(true);
  }, [totalQuantity, router]);

  if (!isInitialized) return <LoadingPage />;

  return (
    <main className="w-full h-auto bg-[#f5f5f5]">
      <section className="w-full lg:max-w-[1201px] max-w-[685px] lg:w-full mx-auto pt-5 px-3 pb-10">
        <div className="w-full mx-auto">
          <h1 className="text-xl font-semibold text-gray-600">Shopping Cart</h1>
          <div className="mt-2 flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-primary">
            <Link href="/">
              <div className="flex items-center">
                <AiFillHome /> <span>Home</span>
              </div>
            </Link>
            <Link href={'/cart'}>
              <div className="flex items-center">
                <IoIosArrowForward /> <span>Cart</span>
              </div>
            </Link>
            {segment === 'checkout' && (
              <Link href={'/cart/checkout'}>
                <div className="flex items-center">
                  <IoIosArrowForward /> <span>Checkout</span>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="w-full h-full">{children}</div>
      </section>
    </main>
  );
};

export default SellerLayout;
