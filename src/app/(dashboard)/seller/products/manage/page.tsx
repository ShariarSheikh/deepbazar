'use client';
import Pagination from '@/components/common/Pagination';
import { PATH_SELLER } from '@/utils/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  useDeleteProductMutation,
  useGetSellerProductsQuery,
} from '@/redux/services/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import ProductListTable from './ProductListTable';
import Button from '@/components/common/Button';
import { FaRotateLeft } from 'react-icons/fa6';
import Skeleton from '@/components/common/Skeleton';
import { useRouter } from 'next/navigation';

//---------------------------------------------------------------------

//---------------------------------------------------------------------

export default function ManagePage() {
  const { user } = useAppSelector(state => state.authSlice);
  const [
    deleteProduct,
    { isLoading: isLoadingDelete, isSuccess: isSuccessDelete },
  ] = useDeleteProductMutation();

  const { data, isLoading, refetch } = useGetSellerProductsQuery({
    sellerId: user?._id,
  });

  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // USE HOOK
  const dispatch = useAppDispatch();
  const router = useRouter();

  const deleteHandler = async (productId: string) => {
    await deleteProduct({ productId: productId });
  };

  const editHandler = (productId: string) => {
    router.push(`${PATH_SELLER.products.edit}/${productId}`);
  };

  const reFetchProductData = () => refetch();

  useEffect(() => {
    if (!isSuccessDelete) return;
    reFetchProductData();

    dispatch(
      showAlert({
        message: 'Your product deleted successfully',
        type: AlertType.Success,
      })
    );

    return () => undefined;
  }, [isSuccessDelete, dispatch]);

  return (
    <div className="w-full h-full">
      <header>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg md:text-[24px] text-primary-100 font-bold">
            Product List
          </h1>

          <Button
            onClick={reFetchProductData}
            disabled={isLoading}
            isLoading={isLoading}
            loadingColor="white"
            loadingSpinnerSize={40}
            className="px-[16px] py-[6px] bg-primary flex items-center rounded-[8px] text-white font-bold text-sm active:scale-95 duration-200"
          >
            <FaRotateLeft className="mr-2" /> <span>Refresh</span>
          </Button>
        </div>
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
      </header>

      {isLoading ? (
        <>
          <div className="flex items-center justify-between h-[48px] mt-3 md:mt-5">
            <Skeleton width={40} height={40} />
            <Skeleton width={74} height={20} className="ml-4" />
            <Skeleton width={100} height={20} className="ml-8" />
            <Skeleton width={54} height={20} className="ml-4" />
          </div>
          <div className="flex items-center justify-between h-[48px] mt-2">
            <Skeleton width={40} height={40} />
            <Skeleton width={74} height={20} className="ml-4" />
            <Skeleton width={100} height={20} className="ml-8" />
            <Skeleton width={54} height={20} className="ml-4" />
          </div>
          <div className="flex items-center justify-between h-[48px] mt-2">
            <Skeleton width={40} height={40} />
            <Skeleton width={74} height={20} className="ml-4" />
            <Skeleton width={100} height={20} className="ml-8" />
            <Skeleton width={54} height={20} className="ml-4" />
          </div>
        </>
      ) : null}

      {!isLoading && data?.data?.length ? (
        <>
          <ProductListTable
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            products={data.data}
            isLoadingDelete={isLoadingDelete}
          />

          <div className="px-[18px] w-full border-t borderColor h-[56px] flex items-center justify-center mt-[16px]">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      ) : null}

      {!isLoading && !data?.data.length ? (
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
      ) : null}
    </div>
  );
}
