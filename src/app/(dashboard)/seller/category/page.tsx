'use client';

import Link from 'next/link';
import PageTitle from '../PageTitle';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import Skeleton from '@/components/common/Skeleton';

export default function Page() {
  const { data, isLoading } = useGetCategoryQuery();
  return (
    <section className="w-full h-full bg-white max-w-[1080px] mx-auto p-5 mt-10 rounded-[16px] shadow-md">
      <PageTitle pageName="Category" />

      <ul className="mt-[8px] w-full flex flex-wrap justify-between gap-2 items-center p-[12px]">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} height={100} width={'48%'} />
          ))}

        {!isLoading &&
          data?.data?.map(category => (
            <Link
              key={category._id}
              href={{
                pathname: '/shop',
                query: {
                  category: category.pageUrl,
                },
              }}
              className="h-[100px] w-[48%]"
            >
              <li className="w-full h-full rounded-[6px] flex items-center p-2 justify-start bg-[#F3F9FB] group cursor-pointer hover:bg-[#e9f4f8] duration-150">
                <div className="w-[72px] h-[72px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={category.imgUrl}
                    alt={category.name}
                  />
                </div>
                <div className="ml-[8px]">
                  <h1 className="text-primary text-[12px] md:text-base line-clamp-1 md:list-none">
                    {category.name}
                  </h1>
                  <p className="text-[10px] md:text-[12px] text-gray-500">
                    {category.totalItems} Item Available
                  </p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
}
