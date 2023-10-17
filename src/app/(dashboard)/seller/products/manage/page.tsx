'use client';
import Input from '@/components/common/Input';
import Pagination from '@/components/common/Pagination';
import { PATH_SELLER } from '@/utils/routes';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import ProductList, { pdList } from './ProductList';
import { useGetSellerProductsQuery } from '@/redux/services/productApi';
import { useAppSelector } from '@/redux/hooks';

//---------------------------------------------------------------------

//---------------------------------------------------------------------

export default function ManagePage() {
  const { user } = useAppSelector(state => state.authSlice);
  const { data, isLoading } = useGetSellerProductsQuery({
    //@ts-expect-error
    sellerId: user?._id,
  });
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const isOrder = false;

  // eslint-disable-next-line no-console
  console.log({ data, isLoading });

  return (
    <div className="w-full h-full">
      <header>
        <div>
          <h1 className="text-lg md:text-[24px] text-primary-100 font-bold">
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
      </header>

      {isOrder ? (
        <>
          <div className="w-full h-full bg-white mt-3 md:mt-10 rounded-[16px] shadow-md">
            <div className="w-full flex md:py-5 md:px-5">
              <div className="w-full flex items-center h-[56px] border borderColor rounded-md relative">
                <AiOutlineSearch className="text-gray-500 w-6 h-6 ml-4" />
                <Input
                  className="w-full h-full border-none"
                  containerClassName="w-full h-full"
                  placeholder="Search product"
                />
              </div>
            </div>

            <div className="w-full h-full overflow-x-auto border-t border-gray-200 pt-5 min-h-[300px]">
              <div className="overflow-x-auto min-w-[440px] flex justify-between items-center w-full h-[56px] px-[18px] bg-primaryLight">
                <h3 className="text-[13px] text-gray-600 font-semibold ml-[16px]">
                  Product
                </h3>

                <div className="flex items-center">
                  <h3 className="text-[13px] text-gray-600 font-semibold min-w-[96px]">
                    Create At
                  </h3>
                  <div className="w-full min-w-[96px]">
                    <h3 className="text-[13px] text-gray-600 font-semibold">
                      Sell Price
                    </h3>
                  </div>
                </div>
              </div>

              {pdList.slice(0, 7).map(product => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="px-[18px] w-full border-t borderColor h-[56px] flex items-center justify-center mt-[16px]">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center pb-6">
          <h2 className="p-10 text-gray-600 text-center">
            You don't have uploaded any product!
          </h2>
          <Link
            href={PATH_SELLER.products.new}
            className="mt-4 px-2 py-1 rounded-[6px] text-white bg-primary"
          >
            Create New
          </Link>
        </div>
      )}
    </div>
  );
}
