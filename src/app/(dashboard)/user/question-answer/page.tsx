'use client';
import Pagination from '@/components/common/Pagination';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FcAnswers } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { IoMdSad } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { RiQuestionnaireFill } from 'react-icons/ri';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  const totalPages = 100;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="w-full">
      <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
        <header className="">
          <h1 className="text-gray-600 font-medium">My Question & Answer</h1>
        </header>

        <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          {
            <>
              <div className="w-full flex flex-row border border-gray-200 pb-2 mb-[20px] rounded-[6px]">
                <Link
                  href={{
                    pathname: '/product',
                    query: {
                      category: 'watch',
                      productId: '123',
                    },
                  }}
                >
                  <div className="relative w-[123px] h-[123px] min-w-[123px] min-h-[123px] rounded-[6px] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
                      fill
                      alt="user picture"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="ml-[16px] pr-8">
                  <div className="">
                    <div className="pt-[8px] flex items-center font-medium">
                      <RiQuestionnaireFill className="text-[#FF4646] mr-[8px]" />
                      <span className="ml-[6px]">Me: </span>
                      <span>XL Size is available for this jacket?</span>
                    </div>

                    <div className="w-full pt-[8px] flex items-start justify-start bg-primaryLight rounded-[6px] px-3 mt-[8px] ml-[8px] min-h-[85px]">
                      <div className="mr-[3px] flex items-items h-[27px] overflow-hidden min-w-[94px]">
                        <FcAnswers className="mr-[8px] w-5 h-5" />
                        <span className="text-sm">Admin: </span>
                      </div>
                      <div className="pt-[2px]">
                        <p className="text-sm text-gray-600">
                          Please check the size or color availability in the
                          variation section on the product page. variation
                          section on the product page. variation section on the
                          product page.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 justify-start w-full mt-[20px]">
                    <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                      <FiEdit /> <span>Edit</span>
                    </button>
                    <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                      <MdDeleteOutline /> <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-row border border-gray-200 pb-2 mb-[20px] rounded-[6px]">
                <Link
                  href={{
                    pathname: '/product',
                    query: {
                      category: 'watch',
                      productId: '123',
                    },
                  }}
                >
                  <div className="relative w-[123px] h-[123px] min-w-[123px] min-h-[123px] rounded-[6px] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
                      fill
                      alt="user picture"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="ml-[16px] pr-8">
                  <div className="">
                    <div className="pt-[8px] flex items-center font-medium">
                      <RiQuestionnaireFill className="text-[#FF4646] mr-[8px]" />
                      <span className="mr-[6px]">Me: </span>
                      <span>XL Size is available for this jacket?</span>
                    </div>

                    <div className="w-full pt-[8px] flex items-center justify-center bg-primaryLight rounded-[6px] px-3 mt-[8px] ml-[8px] min-h-[85px]">
                      <h1 className="text-base text-gray-600">No Answers:</h1>
                      <div>
                        <IoMdSad className="text-primaryLight w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          <div className="h-[56px] rounded-b-[16px] flex items-center justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
