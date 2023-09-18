import { categories } from '@/views/home/CategorySection';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../PageTitle';

export default function Page() {
  return (
    <>
      <Head>
        <title>Category | DeepBazar</title>
      </Head>
      <section className="w-full h-full bg-white max-w-[1080px] mx-auto p-5 mt-10 rounded-[16px] shadow-md">
        <PageTitle pageName="Category" />

        <ul className="mt-[8px] w-full flex flex-wrap justify-between gap-2 items-center p-[12px]">
          {categories.map(category => (
            <Link
              key={category.id}
              href={{
                pathname: '/shop',
                query: {
                  category: category.catPath,
                },
              }}
              className="h-[100px] w-[48%]"
            >
              <li className="w-full h-full rounded-[6px] flex items-center p-2 justify-start bg-[#F3F9FB] group cursor-pointer hover:bg-[#e9f4f8] duration-150">
                <div className="w-[72px] h-[72px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={category.bgImgUrl}
                    alt={category.catName}
                  />
                </div>
                <div className="ml-[8px]">
                  <h1 className="text-primary text-[12px] md:text-base line-clamp-1 md:list-none">
                    {category.catName}
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
    </>
  );
}
