'use client';
import Pagination from '@/components/common/Pagination';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { IoMdStarHalf } from 'react-icons/io';
import { MdDeleteOutline, MdVerified } from 'react-icons/md';

//-------------------------------------

//-------------------------------------

const Page: NextPage = () => {
  const totalPages = 100;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="w-full">
      <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-3">
        <header className="">
          <h1 className="text-gray-600 font-medium">My Reviews</h1>
        </header>

        <div className="w-full h-full p-1 md:p-5 bg-white pt-3 md:mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          {
            <>
              <div className="w-full flex flex-col md:flex-row border-b border-gray-200 pb-2 mb-[20px]">
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
                      src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                      fill
                      alt="user picture"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="ml-[16px] pr-8">
                  <div className="flex items-center text-primary">
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <IoMdStarHalf className="w-[21px] h-[21px] fill-warningMain" />
                    <AiFillStar className="w-[19px] h-[19px] fill-gray-400" />
                  </div>
                  <div className="pt-[8px] flex items-center space-x-2">
                    <MdVerified className="text-green-500" />
                    <h3 className="text-green-500 text-[12px]">
                      Verified purchase
                    </h3>
                  </div>
                  <Link
                    href={{
                      pathname: '/product',
                      query: {
                        category: 'watch',
                        productId: '123',
                      },
                    }}
                  >
                    <h1 className="font-medium text-lg mt-[4px]">
                      ONEPLUS 9 PRO
                    </h1>
                  </Link>
                  <p className="text-[14px] text-gray-600">
                    Experience speed and smoothness with the OnePlus 9 Pro
                    powered by the Snapdragon 888.
                  </p>
                  <div className="flex flex-row items-end space-x-4 -center w-full max-w-[200px]">
                    <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                      <FiEdit /> <span>Edit</span>
                    </button>
                    <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                      <MdDeleteOutline /> <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row border-b border-gray-200 pb-2 mb-[20px]">
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
                      src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                      fill
                      alt="user picture"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="ml-[16px] pr-8">
                  <div className="flex items-center text-primary">
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
                    <IoMdStarHalf className="w-[21px] h-[21px] fill-warningMain" />
                    <AiFillStar className="w-[19px] h-[19px] fill-gray-400" />
                  </div>
                  <div className="pt-[8px] flex items-center space-x-2">
                    <MdVerified className="text-green-500" />
                    <h3 className="text-green-500 text-[12px]">
                      Verified purchase
                    </h3>
                  </div>
                  <Link
                    href={{
                      pathname: '/product',
                      query: {
                        category: 'watch',
                        productId: '123',
                      },
                    }}
                  >
                    <h1 className="font-medium text-lg mt-[4px]">
                      ONEPLUS 9 PRO
                    </h1>
                  </Link>
                  <p className="text-[14px] text-gray-600">
                    Experience speed and smoothness with the OnePlus 9 Pro
                    powered by the Snapdragon 888.
                  </p>
                  <div className="flex flex-row items-end space-x-4 -center w-full max-w-[200px]">
                    <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                      <FiEdit /> <span>Edit</span>
                    </button>
                    <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                      <MdDeleteOutline /> <span>Delete</span>
                    </button>
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
