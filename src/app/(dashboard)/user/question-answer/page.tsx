'use client';
import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import Pagination from '@/components/common/PaginationComponent';
import { LoadingPage } from '@/components/common/loading';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useAppDispatch } from '@/redux/hooks';
import {
  useDeleteQuestionMutation,
  useGetUserAllQuestionAndAnsQuery,
} from '@/redux/services/questionAndAnsApi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FcAnswers } from 'react-icons/fc';
import { IoMdSad } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { RiQuestionnaireFill } from 'react-icons/ri';

//-------------------------------------

//-------------------------------------

const Page = () => {
  const getQuestions = useGetUserAllQuestionAndAnsQuery();
  const [deleteQuestion, deleteQuestionApi] = useDeleteQuestionMutation();

  const [currentPage, setCurrentPage] = useState(0);
  const [deleteBox, setDeleteBox] = useState<{
    deleteId: string;
    open: boolean;
  }>({
    deleteId: '',
    open: false,
  });

  const dispatch = useAppDispatch();

  const openDeleteBox = (deleteId: string) => {
    setDeleteBox({
      open: true,
      deleteId: deleteId,
    });
  };

  const deleteHandler = () => {
    deleteQuestion({ questionId: deleteBox.deleteId });
  };

  useEffect(() => {
    if (deleteQuestionApi.isLoading) return undefined;
    if (deleteQuestionApi.isSuccess) {
      getQuestions.refetch();
      setDeleteBox({
        open: false,
        deleteId: '',
      });

      dispatch(
        showAlert({
          message: 'Successfully Deleted',
          type: AlertType.Success,
        })
      );
    }
  }, [deleteQuestionApi]);

  return (
    <section className="w-full">
      <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-2 md:pt-3">
        <header className="">
          <h1 className="text-gray-600 font-medium">My Question & Answer</h1>
        </header>

        {getQuestions.isLoading && <LoadingPage />}

        {getQuestions.data?.data.totals === 0 && (
          <p className="text-center py-3 px-2 text-gray-600 text-sm">
            You don't question on any product
          </p>
        )}

        {typeof getQuestions.data !== 'undefined' &&
          getQuestions.data?.data.totals > 0 && (
            <div className="w-full h-full p-1 md:p-5 bg-white mt-2 md:mt-10 rounded-[6px]">
              {getQuestions.data?.data.data.map(question => (
                <div
                  key={question._id}
                  className="w-full flex flex-col md:flex-row border border-gray-200 pb-2 mb-[20px] rounded-[6px]"
                >
                  <Link href={`/product/${question.product._id}`}>
                    <div className="relative w-[123px] h-[123px] min-w-[123px] min-h-[123px] rounded-[6px] overflow-hidden">
                      <Image
                        src={question.product.imgUrl}
                        fill
                        alt="user picture"
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="ml-[16px] pr-8">
                    <div className="">
                      <div className="pt-[8px] flex items-start font-medium">
                        <RiQuestionnaireFill className="text-[#FF4646] mr-[8px]" />
                        <span className="ml-[6px]">Me: </span>
                        <span>{question.question.question}</span>
                      </div>
                      {question.answer?.ans ? (
                        <div className="w-full pt-[8px] flex items-start justify-start bg-primaryLight rounded-[6px] px-3 mt-[8px] ml-[8px] min-h-[85px]">
                          <div className="mr-[3px] flex items-items h-[27px] overflow-hidden min-w-[94px]">
                            <FcAnswers className="mr-[8px] w-5 h-5" />
                            <span className="text-sm">
                              Admin:{question.answer.by}{' '}
                            </span>
                          </div>
                          <div className="pt-[2px]">
                            <p className="text-sm text-gray-600">
                              {question.answer.ans}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full pt-[8px] flex items-center justify-center bg-primaryLight rounded-[6px] px-3 mt-[8px] ml-[8px] min-h-[85px]">
                          <h1 className="text-base text-gray-600">
                            No Answers:
                          </h1>
                          <div>
                            <IoMdSad className="text-primaryLight w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-3 justify-start w-full mt-[20px]">
                      <button
                        onClick={() => openDeleteBox(question._id)}
                        className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150"
                      >
                        <MdDeleteOutline /> <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-[56px] rounded-b-[16px] flex items-center justify-center">
                <Pagination
                  limit={10}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalProducts={getQuestions.data?.data.totals}
                />
              </div>
            </div>
          )}
      </div>
      <CustomModal
        style={{ width: 380 }}
        onClose={() =>
          setDeleteBox({
            open: false,
            deleteId: '',
          })
        }
        isOpen={deleteBox.open}
      >
        <div className="w-[320px] mx-auto flex flex-col justify-end">
          <div className="w-full flex">
            <div className="h-[50px] w-[50px] rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
              <AiOutlineCheckCircle />
            </div>
            <div className="pl-3">
              <h1 className="text-[20px] font-semibold">
                Sure you want to delete?
              </h1>
              <p className="mt-2 text-sm text-[#54595E]">
                Are you sure you want to delete this?
              </p>
            </div>
          </div>
          {deleteQuestionApi.isError && (
            <p className="text-[11px] text-red-700 px-[3px] pt-[4px] pb-2">
              {InputApiErrorMessage(
                //@ts-expect-error
                deleteQuestionApi.error?.data?.message
              )}
            </p>
          )}
          <Button
            disabled={deleteQuestionApi.isLoading}
            isLoading={deleteQuestionApi.isLoading}
            loadingColor="white"
            loadingSpinnerSize={40}
            onClick={deleteHandler}
            className="bg-red-600 mt-[24px] w-full rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] h-[33px]"
          >
            Confirm Delete
          </Button>
        </div>
      </CustomModal>
    </section>
  );
};

export default Page;
