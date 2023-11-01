'use client';
import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import Pagination from '@/components/common/PaginationComponent';
import StarRating from '@/components/common/StarRating';
import { LoadingPage } from '@/components/common/loading';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useAppDispatch } from '@/redux/hooks';
import {
  useDeleteReviewMutation,
  useGetUserAllReviewsQuery,
} from '@/redux/services/reviewApi';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

//-------------------------------------

//-------------------------------------

const Page: NextPage = () => {
  const [deleteReview, { isLoading: deleteLoading, isSuccess: deleteSuccess }] =
    useDeleteReviewMutation();

  const [currentPage, setCurrentPage] = useState(0);
  const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);

  const { data, isLoading, refetch } = useGetUserAllReviewsQuery();

  const totalPages = 100;

  const deleteHandler = (id: string) => deleteReview({ reviewId: id });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (deleteLoading) return undefined;
    if (deleteSuccess) {
      refetch();
      setIsDeleteBox(false);
      dispatch(
        showAlert({
          message: 'Successfully Deleted',
          type: AlertType.Success,
        })
      );
    }
  }, [deleteLoading, deleteSuccess]);

  return (
    <section className="w-full">
      <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-3">
        <header className="">
          <h1 className="text-gray-600 font-medium">My Reviews</h1>
        </header>

        {isLoading && <LoadingPage />}

        {data?.data.totals === 0 && (
          <p className="text-center py-3 px-2 text-gray-600 text-sm">
            You don't review on any product
          </p>
        )}

        {typeof data !== 'undefined' && data?.data.totals > 0 && (
          <div className="w-full h-full p-1 md:p-5 bg-white pt-3 md:mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            {data.data.reviews.map(review => (
              <>
                <div
                  key={review._id}
                  className="w-full flex flex-col md:flex-row border-b border-gray-200 pb-2 mb-[20px]"
                >
                  <Link href={`/product/${review.product._id}`}>
                    <div className="relative w-[123px] h-[123px] min-w-[123px] min-h-[123px] rounded-[6px] overflow-hidden">
                      <Image
                        //@ts-expect-error
                        src={review.product.images[0].commentImg}
                        fill
                        alt="user picture"
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="ml-[16px] pr-8">
                    <StarRating rating={review.star} />
                    <Link href={`/product/${review.product._id}`}>
                      <h1 className="font-medium mt-[4px]">
                        {review.product.title}
                      </h1>
                    </Link>
                    <p className="text-[14px] text-gray-600">
                      {review.message}
                    </p>
                    <div className="flex flex-row items-start space-x-4 -center w-full max-w-[200px]">
                      <button
                        onClick={() => setIsDeleteBox(true)}
                        className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150"
                      >
                        <MdDeleteOutline /> <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
                <CustomModal
                  boxStyle={{ width: 350 }}
                  onClose={() => setIsDeleteBox(false)}
                  isOpen={isDeleteBox}
                >
                  <div className="w-[300px] flex flex-col justify-end">
                    <div className="w-full flex justify-center">
                      <Button
                        disabled={deleteLoading}
                        isLoading={deleteLoading}
                        loadingColor="white"
                        loadingSpinnerSize={40}
                        onClick={() => deleteHandler(review._id)}
                        className="mt-[4px] font-semibold text-white rounded-[6px] h-[32px] w-[175px] bg-red-500 active:scale-95 duration-200"
                      >
                        Confirm Delete
                      </Button>
                    </div>
                  </div>
                </CustomModal>
              </>
            ))}
            <div className="h-[56px] rounded-b-[16px] flex items-center justify-center">
              <Pagination
                limit={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={100}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
