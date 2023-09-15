'use client';
import Input from '@/components/common/Input';
import Pagination from '@/components/common/Pagination';
import { PATH_SELLER } from '@/utils/routes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { HiPlus } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import ProductList, { pdList } from './ProductList';

//---------------------------------------------------------------------

//---------------------------------------------------------------------

export default function ManagePage() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();
  const createNewProduct = () => router.push(PATH_SELLER.products.new);

  return (
    <>
      <Head>
        <title>Manage Products | DeepBazar</title>
      </Head>
      <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-[24px] text-primary-100 font-bold">
              Product List
            </h1>
            <div className="mt-[5px] text-[14px] flex items-center h-8 space-x-4">
              <Link
                href={PATH_SELLER.overview}
                className=" text-primary-100 hover:underline"
              >
                Seller
              </Link>
              <IoIosArrowForward />
              <span className="text-gray-600">Products / Manage Products</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={createNewProduct}
              className="px-[16px] py-[6px] bg-primary flex items-center rounded-[8px] text-white font-bold text-sm hover:bg-primaryDark active:scale-95 duration-200"
            >
              <HiPlus className="mr-2" /> <span>New Product</span>
            </button>

            <button className="px-[16px] py-[6px] bg-primary flex items-center rounded-[8px] text-white font-bold text-sm hover:bg-primaryDark active:scale-95 duration-200">
              <span>Export</span> <FiDownload className="ml-2" />
            </button>
          </div>
        </header>

        <div className="w-full h-full bg-white mt-10 rounded-[16px] shadow-md">
          <div className="w-full flex py-5 px-5">
            <div className="w-full flex items-center h-[56px] border borderColor rounded-md relative">
              <AiOutlineSearch className="text-gray-500 w-6 h-6 ml-4" />
              <Input
                className="w-full h-full border-none"
                containerClassName="w-full h-full"
                placeholder="Search product"
              />
            </div>
          </div>

          <div className="w-full h-full border-t border-gray-200 pt-5 min-h-[300px]">
            <div className="flex justify-between items-center w-full h-[56px] px-[18px]">
              <h3 className="text-[13px] text-gray-600 font-semibold ml-[16px]">
                Product
              </h3>

              <div className="flex items-center">
                <h3 className="text-[13px] text-gray-600 font-semibold min-w-[200px]">
                  Create At
                </h3>
                <div className="w-full min-w-[200px]">
                  <h3 className="text-[13px] text-gray-600 font-semibold">
                    Sell Price
                  </h3>
                </div>
              </div>
            </div>

            {pdList.slice(0, 7).map(product => (
              <ProductList key={product.id} product={product} />
            ))}

            <div className="px-[18px] w-full border-t borderColor h-[56px] flex items-center justify-end mt-[16px]">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
