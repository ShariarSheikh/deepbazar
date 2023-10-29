'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { LoadingPage } from '@/components/common/loading';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!cartTotalQuantity) router.back();
    setIsInitialized(true);
  }, [cartTotalQuantity, router]);

  if (!isInitialized) return <LoadingPage />;

  return (
    <main className="w-full h-auto bg-[#f5f5f5] mb-4">
      <section className="w-full lg:max-w-[1366px] max-w-[685px] lg:w-full m-auto mt-5 px-3 pb-10">
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
          </div>
        </div>
        <div className="md:px-4 w-full h-full bg-white px-3 md:p-5 mt-3 md:mt-[35px] rounded-[6px] shadow-md">
          {children}
        </div>
      </section>
    </main>
  );
};

export default SellerLayout;
