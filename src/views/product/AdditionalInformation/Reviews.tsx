/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoMdStarHalf } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';

function Reviews(): JSX.Element {
  return (
    <div className="w-full h-full relative">
      <div className="flex w-full h-full min-h-[238px] border-b borderColor">
        <div className="w-[50%] h-full min-h-[238px] flex items-center flex-col justify-center border-r borderColor">
          <h2 className="text-[16px] text-gray-600 font-semibold">
            Average rating
          </h2>
          <h1 className="text-[48px] font-extrabold">4/5</h1>
          <div className="flex items-center">
            <AiFillStar className="fill-warningMain w-[28px] h-[28px]" />
            <AiFillStar className="fill-warningMain w-[28px] h-[28px]" />
            <AiFillStar className="fill-warningMain w-[28px] h-[28px]" />
            <IoMdStarHalf className="w-[30px] h-[30px] fill-warningMain" />
            <AiFillStar className="w-[28px] h-[28px] fill-gray-400" />
          </div>
          <p className="text-gray-600 text-[12px]">(8.24k reviews)</p>
        </div>

        <div className="w-full max-w-[50%] flex flex-col justify-center items-center h-full min-h-[238px] px-[24px]">
          <ul className="w-full">
            <li className="w-full flex items-center space-x-4">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                5 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-500 max-w-[340px]">
                <div className="absolute left-0 w-[30%] rounded-md h-full bg-primaryMain" />
              </div>
              <h1 className="text-[14px] text-gray-600">25.k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                4 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-500 max-w-[340px]">
                <div className="absolute left-0 w-[23%] rounded-md h-full bg-primaryMain" />
              </div>
              <h1 className="text-[14px] text-gray-600">1.1k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                3 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-500 max-w-[340px]">
                <div className="absolute left-0 w-[60%] rounded-md h-full bg-primaryMain" />
              </div>
              <h1 className="text-[14px] text-gray-600">8.2k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                2 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-500 max-w-[340px]">
                <div className="absolute left-0 w-[19%] rounded-md h-full bg-primaryMain" />
              </div>
              <h1 className="text-[14px] text-gray-600">73.9k</h1>
            </li>
            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                1 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-500 max-w-[340px]">
                <div className="absolute left-0 w-[16%] rounded-md h-full bg-primaryMain" />
              </div>
              <h1 className="text-[14px] text-gray-600">2.6k</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-white pb-[40px]">
        {reviewsData.map(review => (
          <UserReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;

function UserReview({ review }: { review: ReviewDataType }) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false);

  const replayThisReview = (): void => {
    setIsOpenReply(prevState => !prevState);
  };

  return (
    <div className="min-h-[123px] w-full flex flex-row mt-[40px]">
      <div className="w-full max-w-[240px] min-h-[123px] flex flex-col items-center justify-start h-full">
        <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden">
          <Image
            src={review.profileUrl}
            fill
            alt="user picture"
            className="object-fill"
          />
        </div>
        <h1 className="text-[14px] font-semibold mt-[16px]">{review.name}</h1>
        <p className="text-[12px] text-gray-600 mt-[4px]">{review.createdAt}</p>
      </div>

      <div className="ml-[16px] pr-8">
        <div className="flex items-center">
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <IoMdStarHalf className="w-[21px] h-[21px] fill-warningMain" />
          <AiFillStar className="w-[19px] h-[19px] fill-gray-400" />
        </div>
        <div className="py-[8px] flex items-center space-x-2">
          <MdVerified className="fill-successMain" />
          <h3 className="text-successMain text-[12px]">Verified purchase</h3>
        </div>
        <p className="text-[14px] mt-[8px]">{review.comment}</p>
        <button
          onClick={replayThisReview}
          className={`text-[14px] active:scale-95 duration-200 font-semibold mt-[8px] ${
            isOpenReply ? 'text-gray-800' : 'text-primary'
          }`}
        >
          Reply This Review
        </button>
        {isOpenReply ? (
          <>
            <div className="mt-[8px]">
              <textarea
                placeholder="Write replay..."
                className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border borderColor focus:border-2 outline-none w-full"
              />
            </div>
            <button
              onClick={replayThisReview}
              className="font-semibold text-white rounded-[8px] py-[6px] px-[16px] bg-primaryMain hover:bg-primaryDark active:scale-95 duration-200"
            >
              Submit
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

interface ReviewDataType {
  id: number;
  profileUrl: string;
  name: string;
  createdAt: string;
  comment: string;
}

const reviewsData: ReviewDataType[] = [
  {
    id: 1,
    profileUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Shariar Sheikh',
    createdAt: '09 Aug 2022',
    comment:
      'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the',
  },
  {
    id: 2,
    profileUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Shariar Sheikh',
    createdAt: '09 Aug 2022',
    comment:
      'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the',
  },
  {
    id: 3,
    profileUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Shariar Sheikh',
    createdAt: '09 Aug 2022',
    comment:
      'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the',
  },
  {
    id: 4,
    profileUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Shariar Sheikh',
    createdAt: '09 Aug 2022',
    comment:
      'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the',
  },
];
