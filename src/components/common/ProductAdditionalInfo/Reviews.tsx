/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiFillStar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { IoMdStarHalf } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { ComponentShowOnType } from '.';
import Button from '../Button';

interface IProps {
  componentFor: ComponentShowOnType;
  productId: string;
  userId: string;
}

function Reviews({ componentFor, userId, productId }: IProps): JSX.Element {
  const [isReviewBox, setIsReviewBox] = useState<boolean>(false);

  const reviewBoxRef = useRef<HTMLTextAreaElement>(null);

  const reviewBoxHandler = (isOpen: boolean) => setIsReviewBox(isOpen);
  const submitReviewHandler = () => {
    // eslint-disable-next-line prettier/prettier, no-console
    console.log({ userId, productId, review: reviewBoxRef.current?.value });
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex w-full h-full min-h-[238px] border-b borderColor">
        <div className="w-[50%] h-full min-h-[238px] flex items-center flex-col justify-center border-r borderColor">
          <h2 className="text-[16px] text-gray-600 font-semibold">
            Average rating
          </h2>
          <h1 className="text-[48px] font-extrabold text-primary">4/5</h1>
          <div className="flex items-center text-primary">
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
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                <div className="absolute left-0 w-[30%] rounded-md h-full bg-primary" />
              </div>
              <h1 className="text-[14px] text-gray-600">25.k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                4 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                <div className="absolute left-0 w-[23%] rounded-md h-full bg-primary" />
              </div>
              <h1 className="text-[14px] text-gray-600">1.1k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                3 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                <div className="absolute left-0 w-[60%] rounded-md h-full bg-primary" />
              </div>
              <h1 className="text-[14px] text-gray-600">8.2k</h1>
            </li>

            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                2 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                <div className="absolute left-0 w-[19%] rounded-md h-full bg-primary" />
              </div>
              <h1 className="text-[14px] text-gray-600">73.9k</h1>
            </li>
            <li className="w-full flex items-center space-x-4 mt-[12px]">
              <h1 className="text-gray-800 font-semibold text-[14px] min-w-[42px]">
                1 Star
              </h1>
              <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                <div className="absolute left-0 w-[16%] rounded-md h-full bg-primary" />
              </div>
              <h1 className="text-[14px] text-gray-600">2.6k</h1>
            </li>
          </ul>
        </div>
      </div>

      {componentFor === ComponentShowOnType.UserProductDetails && (
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-600">
              Click the button to add a review
            </h1>

            {isReviewBox ? (
              <Button
                onClick={() => reviewBoxHandler(false)}
                className={`text-[14px] active:scale-95 duration-200 flex items-center space-x-2 font-semibold mt-[8px] px-2 py-1 rounded-[6px] text-primary`}
              >
                <AiOutlineClose /> <span>Close Review Box</span>
              </Button>
            ) : (
              <Button
                onClick={() => reviewBoxHandler(true)}
                className={`text-[14px] active:scale-95 duration-200 flex items-center space-x-2 font-semibold mt-[8px] px-2 py-1 rounded-[6px] text-primary`}
              >
                <AiOutlinePlus /> <span>Add Review</span>
              </Button>
            )}
          </div>

          {isReviewBox ? (
            <div>
              <div className="mt-[8px]">
                <textarea
                  ref={reviewBoxRef}
                  placeholder="Write review..."
                  className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border border-gray-200 focus:border-2 outline-none w-full"
                />
              </div>
              <Button
                onClick={submitReviewHandler}
                className="mt-[4px] font-semibold text-white rounded-[8px] py-[6px] px-[16px] bg-primary active:scale-95 duration-200"
              >
                Submit
              </Button>
            </div>
          ) : null}
        </div>
      )}

      <div className="w-full bg-white pb-[40px]">
        {reviewsData.map(review => (
          <UserReview
            key={review.id}
            review={review}
            componentFor={componentFor}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;

interface UserReviewProps {
  review: ReviewDataType;
  componentFor: ComponentShowOnType;
}

function UserReview({ review, componentFor }: UserReviewProps) {
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
            className="object-cover"
          />
        </div>
        <h1 className="text-[14px] font-semibold mt-[16px]">{review.name}</h1>
        <p className="text-[12px] text-gray-600 mt-[4px]">{review.createdAt}</p>
      </div>

      <div className="ml-[16px] pr-8">
        <div className="flex items-center text-primary">
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <AiFillStar className="fill-warningMain w-[19px] h-[19px]" />
          <IoMdStarHalf className="w-[21px] h-[21px] fill-warningMain" />
          <AiFillStar className="w-[19px] h-[19px] fill-gray-400" />
        </div>
        <div className="py-[8px] flex items-center space-x-2">
          <MdVerified className="text-green-500" />
          <h3 className="text-green-500 text-[12px]">Verified purchase</h3>
        </div>
        <p className="text-[14px] mt-[8px]">{review.comment}</p>

        {componentFor === ComponentShowOnType.SellerDashboardProductDetails && (
          <>
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
                    className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border border-gray-200 focus:border-2 outline-none w-full"
                  />
                </div>
                <button
                  onClick={replayThisReview}
                  className="font-semibold text-white rounded-[8px] py-[6px] px-[16px] bg-primary active:scale-95 duration-200"
                >
                  Submit
                </button>
              </>
            ) : null}
          </>
        )}
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
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
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
