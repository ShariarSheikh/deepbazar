'use client';
import { PATH_SELLER } from '@/utils/routes';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsFillFilePersonFill, BsShop } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { RiKeyFill } from 'react-icons/ri';
import PageTitle from './PageTitle';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  const router = useRouter();

  return (
    <section className="w-full h-full">
      <PageTitle pageName="Dashboard" />

      <ul className="mt-[8px] w-full flex flex-col md:flex-row flex-wrap justify-between gap-2 items-center p-[12px]">
        <li
          onClick={() => router.push(PATH_SELLER.products.manage)}
          className="max-w-full md:max-w-[48%] w-full h-[120px] md:h-[220px] rounded-[6px] border border-gray-200 flex bg-[#bee6f3]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BsShop className="w-12 md:w-20 h-12 md:h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg md:text-2xl font-bold uppercase">
              Total Products
            </h1>
            <p className="text-2xl md:text-4xl mt-2 font-semibold">36</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_SELLER.category)}
          className="max-w-full md:max-w-[48%] w-full h-[120px] md:h-[220px] rounded-[6px] border border-gray-200 flex bg-[#bef3e7]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BiCategoryAlt className="w-12 md:w-20 h-12 md:h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg md:text-2xl font-bold uppercase">
              View Category
            </h1>
            <p className="text-2xl md:text-4xl mt-2 font-semibold">Total 5</p>
          </div>
        </li>
        <li
          onClick={() => router.push(PATH_SELLER.accountAndSettings)}
          className="w-full h-[255px] mt-[20px] rounded-[6px] border border-gray-200 flex bg-[#f0f8ff]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BiCategoryAlt className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold uppercase">Account</h1>

            <ul className="w-full flex flex-col md:flex-row items-center justify-center">
              <li className="h-[48px] flex items-center text-[14px] font-semibold border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600">
                <BsFillFilePersonFill className="mr-[8px]" /> Profile
              </li>

              <li className="flex items-center h-[48px] text-[14px] font-semibold ml-[40px] border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600">
                <FaShareAlt className="mr-[8px]" /> Social Links
              </li>

              <li className="flex items-center h-[48px] text-[14px] font-semibold ml-[40px] border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600">
                <RiKeyFill className="mr-[8px]" /> Change Password
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Page;
