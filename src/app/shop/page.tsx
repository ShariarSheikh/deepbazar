'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

export default function Page() {
  const searchParams = useSearchParams();

  const { category } = {
    category: searchParams.get('category'),
  };

  useEffect(() => {}, [category]);

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      <div className="flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-primary">
        <Link href="/">
          <div className="flex items-center">
            <AiFillHome /> <span>Home</span>
          </div>
        </Link>
        <Link
          href={{
            pathname: '/shop',
            query: {
              category: category,
            },
          }}
        >
          <div className="flex items-center">
            <IoIosArrowForward /> <span>{category}</span>
          </div>
        </Link>
        {/* <div className="flex items-center text-gray-500">
        <IoIosArrowForward /> <span>{data?.title}</span>
      </div> */}
      </div>

      <div className="">
        <h2>Hello world!</h2>
      </div>
    </main>
  );
}
