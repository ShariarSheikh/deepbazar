'use client';
import { LoadingPage } from '@/components/common/loading';
import { useGetUserDashboardQuery } from '@/redux/services/auth';
import { PATH_USER } from '@/utils/routes';
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
//-------------------------------------

const Page = () => {
  const getUserDashboardData = useGetUserDashboardQuery();
  const router = useRouter();

  const data = {
    orders: getUserDashboardData.data?.data.orders || 0,
    wishlist: getUserDashboardData.data?.data.wishlist || 0,
    shippingAddress: getUserDashboardData.data?.data.shippingAddress || 0,
    reviews: getUserDashboardData.data?.data.reviews || 0,
    question: getUserDashboardData.data?.data.question || 0,
  };

  return (
    <section className="w-full h-full p-1 lg:p-5 max-w-[1080px] mx-auto pt-3">
      <h1 className="text-gray-600 font-medium">Overview</h1>

      {getUserDashboardData.isLoading && <LoadingPage />}

      {getUserDashboardData.isSuccess && (
        <ul className="flex flex-wrap justify-start gap-2 items-center  w-full h-full p-1 lg:p-5 bg-white mt-10 rounded-[6px]">
          <li
            onClick={() => router.push(PATH_USER.order)}
            className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] cursor-pointer rounded-[6px] text-white border border-gray-200 flex bg-[#81b0ff]"
          >
            <div className="h-full w-[100px] lg:w-[110px] flex items-center justify-center">
              <FaClipboardList className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Total Orders
              </h1>
              <p className="text-lg lg:text-[24px] mt-2 font-semibold">
                {data.orders}
              </p>
            </div>
          </li>

          <li
            onClick={() => router.push(PATH_USER.wishlist)}
            className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] cursor-pointer rounded-[6px] text-white border border-gray-200 flex bg-[#0c103c]"
          >
            <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
              <AiOutlineHeart className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Total Favorite
              </h1>
              <p className="text-lg lg:text-[24px] mt-2 font-semibold">
                {data.wishlist}
              </p>
            </div>
          </li>

          <li
            onClick={() => router.push(PATH_USER.shippingAddress)}
            className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] cursor-pointer rounded-[6px] text-white border border-gray-200 flex bg-[#ee5858]"
          >
            <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
              <CiLocationOn className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Shipping Address
              </h1>
              <p className="text-lg lg:text-[24px] mt-2 font-semibold">
                Total {data.shippingAddress}
              </p>
            </div>
          </li>

          <li
            onClick={() => router.push(PATH_USER.reviews)}
            className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] cursor-pointer rounded-[6px] text-white border border-gray-200 flex bg-[#8458ee]"
          >
            <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
              <AiOutlineStar className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Total Reviews
              </h1>
              <p className="text-lg lg:text-[24px] mt-2 font-semibold">
                {data.reviews}
              </p>
            </div>
          </li>

          <li
            onClick={() => router.push(PATH_USER.questionAnswer)}
            className="max-w-full lg:max-w-[48%] w-full h-[90px] lg:h-[130px] cursor-pointer rounded-[6px] pr-1 border border-gray-200 flex bg-[#f2f3f5]"
          >
            <div className="h-full w-[100px] lg:w-[180px] flex items-center justify-center">
              <AiOutlineQuestionCircle className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Total Question & Answer
              </h1>
              <p className="text-lg lg:text-[24px] mt-2 font-semibold">
                {data.question}
              </p>
            </div>
          </li>

          <li
            onClick={() => router.push(PATH_USER.account)}
            className="w-full h-[255px] mt-[20px] rounded-[6px] cursor-pointer border border-gray-200 flex flex-col md:flex-row bg-[#f0f8ff]"
          >
            <div className="h-full w-[180px] flex items-center justify-center">
              <BiCategoryAlt className="w-8 lg:w-12 h-8 lg:h-12" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-sm lg:text-lg font-bold uppercase">
                Account
              </h1>

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
      )}
    </section>
  );
};

export default Page;
