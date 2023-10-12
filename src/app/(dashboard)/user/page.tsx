'use client';
import { PATH_USER } from '@/utils/routes';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import {
  AiOutlineHeart,
  AiOutlineQuestionCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaClipboardList, FaShareAlt } from 'react-icons/fa';
import { RiKeyFill } from 'react-icons/ri';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  const router = useRouter();

  return (
    <section className="w-full h-full p-1 lg:p-5 max-w-[1080px] mx-auto pt-3">
      <h1 className="text-gray-600 font-medium">Overview</h1>
      <ul className="flex flex-wrap justify-start gap-2 items-center  w-full h-full p-1 lg:p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <li
          onClick={() => router.push(PATH_USER.order)}
          className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] rounded-[6px] text-white border border-gray-200 flex bg-[#81b0ff]"
        >
          <div className="h-full w-[100px] lg:w-[110px] flex items-center justify-center">
            <FaClipboardList className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-lg font-bold uppercase">
              Total Orders
            </h1>
            <p className="text-lg lg:text-[24px] mt-2 font-semibold">36</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_USER.wishlist)}
          className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] rounded-[6px] text-white border border-gray-200 flex bg-[#0c103c]"
        >
          <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
            <AiOutlineHeart className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-lg font-bold uppercase">
              Total Favorite
            </h1>
            <p className="text-lg lg:text-[24px] mt-2 font-semibold">5</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_USER.shippingAddress)}
          className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] rounded-[6px] text-white border border-gray-200 flex bg-[#ee5858]"
        >
          <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
            <CiLocationOn className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-lg font-bold uppercase">
              Shipping Address
            </h1>
            <p className="text-lg lg:text-[24px] mt-2 font-semibold">Total 5</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_USER.reviews)}
          className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] rounded-[6px] text-white border border-gray-200 flex bg-[#8458ee]"
        >
          <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
            <AiOutlineStar className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-lg font-bold uppercase">
              Total Reviews
            </h1>
            <p className="text-lg lg:text-[24px] mt-2 font-semibold">50</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_USER.questionAnswer)}
          className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] rounded-[6px] pr-1 border border-gray-200 flex bg-[#f2f3f5]"
        >
          <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
            <AiOutlineQuestionCircle className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-lg font-bold uppercase">
              Total Question & Answer
            </h1>
            <p className="text-lg lg:text-[24px] mt-2 font-semibold">10</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_USER.account)}
          className="w-full h-[255px] mt-[20px] rounded-[6px] border border-gray-200 flex flex-col md:flex-row bg-[#f0f8ff]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BiCategoryAlt className="w-8 lg:w-12 h-8 lg:h-12" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-sm lg:text-lg font-bold uppercase">Account</h1>

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
