/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { AiFillStar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { IoMdStarHalf } from 'react-icons/io';
import { ComponentShowOnType } from '.';
import Button from '../Button';
import ReviewWriteRating from '../ReviewWriteRating';
import {
  useCreateReviewMutation,
  useGetAllReviewByProductIdQuery,
} from '@/redux/services/reviewApi';
import { InputApiErrorMessage } from '../FormikCustomInput';
import { ReviewData } from '@/types/review.type';
import dateFormat from '@/utils/dateFormat';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import StarRating from '../StarRating';
import { loginOpenModal } from '@/redux/features/loginFirstSlice';

interface IProps {
  componentFor: ComponentShowOnType;
  productId: string;
  setTotalReviews: Dispatch<SetStateAction<number>>;
}
export const RatingType = [
  'Rating is Required *',
  'Very Poor',
  'Poor',
  'Neutral',
  'Good',
  'Excellent',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Reviews({
  componentFor,
  productId,
  setTotalReviews,
}: IProps): JSX.Element {
  const user = useAppSelector(state => state.authSlice.user);
  const [createReview, { isLoading, isSuccess, isError, error: CreateError }] =
    useCreateReviewMutation();

  const getReviews = useGetAllReviewByProductIdQuery({ productId: productId });

  const [isReviewBox, setIsReviewBox] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const reviewBoxRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const reviewBoxHandler = (isOpen: boolean) => setIsReviewBox(isOpen);

  const submitReviewHandler = () => {
    if (!user._id)
      return dispatch(loginOpenModal({ redirectUrl: `/product/${productId}` }));

    if (user.role.includes('SELLER'))
      return alert('Seller not allow to review');

    if (!reviewBoxRef.current?.value.trim() || rating === 0)
      return setError('Please add rating and write your feedback');

    createReview({
      productId,
      star: rating,
      ratingLevel: RatingType[rating],
      message: reviewBoxRef.current?.value.trim(),
    });
    setError('');
  };

  const ratingHandler = (ratingNum: number): void => {
    if (ratingNum <= 0 || ratingNum >= 6) return undefined;
    if (rating === ratingNum) return setRating(prevState => prevState - 1);

    setRating(ratingNum);
  };

  useEffect(() => {
    if (isLoading) return undefined;
    //@ts-expect-error
    if (isError) return setError(CreateError?.data?.message ?? '');

    if (isSuccess) {
      getReviews.refetch();
      setIsReviewBox(false);
      setRating(0);
      return setError('');
    }
  }, [isError, CreateError, isLoading, isSuccess]);

  useEffect(() => {
    setTotalReviews(getReviews.data?.data.totals || 0);
  }, [getReviews.data?.data.totals]);

  if (getReviews.isLoading)
    return (
      <h2 className="text-center py-3 px-2 text-gray-600 text-[13px]">
        Loading...
      </h2>
    );

  return (
    <>
      {typeof getReviews.data !== 'undefined' &&
        getReviews.data.data.totals > 0 && (
          <div className="w-full h-full relative">
            <div className="flex w-full h-full min-h-[140px] lg:min-h-[238px] border-b borderColor">
              <div className="w-[50%] h-full min-h-[140px] md:min-h-[238px] flex items-center flex-col justify-center border-r borderColor">
                <h2 className="text-[13px] lg:text-[16px] text-gray-600 font-semibold">
                  Average rating
                </h2>
                <h1 className="text-[26px] lg:text-[48px] font-extrabold text-primary">
                  4/5
                </h1>
                <div className="flex items-center text-primary">
                  <AiFillStar className="w-[14px] lg:w-[28px] h-[14px] lg:h-[28px]" />
                  <AiFillStar className="w-[14px] lg:w-[28px] h-[14px] lg:h-[28px]" />
                  <AiFillStar className="w-[14px] lg:w-[28px] h-[14px] lg:h-[28px]" />
                  <IoMdStarHalf className="w-[17px] lg:w-[30px] h-[17px] lg:h-[30px]" />
                  <AiFillStar className="w-[14px] lg:w-[28px] h-[14px] lg:h-[28px] fill-gray-400" />
                </div>
                <p className="text-gray-600 text-[12px]">({} reviews)</p>
              </div>

              <div className="w-full max-w-[50%] flex flex-col justify-center items-center h-full min-h-[140px] md:min-h-[238px] px-[24px]">
                <ul className="w-full">
                  <li className="w-full flex items-center space-x-4">
                    <h1 className="text-gray-800 font-semibold text-[13px] lg:text-[14px] min-w-[42px]">
                      5 Star
                    </h1>
                    <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                      <div className="absolute left-0 w-[30%] rounded-md h-full bg-primary" />
                    </div>
                    <h1 className="text-[13px] lg:text-[14px] text-gray-600">
                      25.k
                    </h1>
                  </li>

                  <li className="w-full flex items-center space-x-2 md:space-x-4 mt-[5px] lg:mt-[12px]">
                    <h1 className="text-gray-800 font-semibold text-[13px] lg:text-[14px] min-w-[42px]">
                      4 Star
                    </h1>
                    <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                      <div className="absolute left-0 w-[23%] rounded-md h-full bg-primary" />
                    </div>
                    <h1 className="text-[13px] lg:text-[14px] text-gray-600">
                      1.1k
                    </h1>
                  </li>

                  <li className="w-full flex items-center space-x-2 md:space-x-4 mt-[5px] lg:mt-[12px]">
                    <h1 className="text-gray-800 font-semibold text-[13px] lg:text-[14px] min-w-[42px]">
                      3 Star
                    </h1>
                    <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                      <div className="absolute left-0 w-[60%] rounded-md h-full bg-primary" />
                    </div>
                    <h1 className="text-[13px] lg:text-[14px] text-gray-600">
                      8.2k
                    </h1>
                  </li>

                  <li className="w-full flex items-center space-x-2 md:space-x-4 mt-[5px] lg:mt-[12px]">
                    <h1 className="text-gray-800 font-semibold text-[13px] lg:text-[14px] min-w-[42px]">
                      2 Star
                    </h1>
                    <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                      <div className="absolute left-0 w-[19%] rounded-md h-full bg-primary" />
                    </div>
                    <h1 className="text-[13px] lg:text-[14px] text-gray-600">
                      73.9k
                    </h1>
                  </li>
                  <li className="w-full flex items-center space-x-2 md:space-x-4 mt-[5px] lg:mt-[12px]">
                    <h1 className="text-gray-800 font-semibold text-[13px] lg:text-[14px] min-w-[42px]">
                      1 Star
                    </h1>
                    <div className="mx-[16px] w-full relative h-[4px] rounded-md bg-gray-300 max-w-[340px]">
                      <div className="absolute left-0 w-[16%] rounded-md h-full bg-primary" />
                    </div>
                    <h1 className="text-[13px] lg:text-[14px] text-gray-600">
                      2.6k
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      {componentFor === ComponentShowOnType.UserProductDetails && (
        <>
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
            <>
              <div className="mt-[8px]">
                <div>
                  {error && InputApiErrorMessage(error)}
                  <div className="flex items-center justify-start space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <ReviewWriteRating
                        className={'ratingIcon'}
                        fill={rating >= i + 1 ? '#008ECC' : '#DBDEDF'}
                        onClick={() => ratingHandler(i + 1)}
                        key={i}
                      />
                    ))}
                  </div>
                  <div className="text-[13px] text-gray-600">
                    {RatingType[rating]}
                  </div>
                </div>

                <textarea
                  ref={reviewBoxRef}
                  placeholder="Write review..."
                  className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border border-gray-200 focus:border-2 outline-none w-full mt-[5px]"
                />
              </div>
              <div className="w-full flex justify-end">
                <Button
                  disabled={isLoading}
                  isLoading={isLoading}
                  loadingColor="white"
                  loadingSpinnerSize={40}
                  onClick={submitReviewHandler}
                  className="mt-[4px] font-semibold text-white rounded-[8px] h-[32px] w-[86px] bg-primary active:scale-95 duration-200"
                >
                  Submit
                </Button>
              </div>
            </>
          ) : null}
        </>
      )}

      {typeof getReviews.data !== 'undefined' &&
        getReviews.data.data.totals > 0 && (
          <div className="w-full bg-white pb-[40px]">
            {getReviews.data.data.reviews.map(review => (
              <UserReview
                key={review._id}
                review={review}
                componentFor={componentFor}
              />
            ))}
          </div>
        )}

      {typeof getReviews.data !== 'undefined' &&
        getReviews.data.data.totals === 0 && (
          <div className="text-gray-600 flex items-center justify-center h-[100px]">
            <span>Zero Reviews on this product</span>
          </div>
        )}
    </>
  );
}

export default Reviews;

interface UserReviewProps {
  review: ReviewData;
  componentFor: ComponentShowOnType;
}

function UserReview({ review, componentFor }: UserReviewProps) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false);

  const replayThisReview = (): void => {
    setIsOpenReply(prevState => !prevState);
  };

  return (
    <div className="min-h-[123px] border-b border-gray-200 w-full flex flex-row mt-[18px] lg:mt-[40px]">
      <div className="w-full max-w-[95px] lg:max-w-[240px] min-h-[123px] flex flex-col items-start lg:items-center justify-start h-full">
        <div className="relative w-[38px] lg:w-[64px] h-[38px] lg:h-[64px] rounded-full overflow-hidden">
          {review.user.imgUrl ? (
            <Image
              fill
              src={review.user.imgUrl}
              alt="user picture"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary text-white font-medium flex items-center justify-center rounded-full">
              {review.user.name.charAt(0)}
            </div>
          )}
        </div>
        <h1 className="text-[13px] lg:text-[14px] font-semibold mt-[10px] lg:mt-[16px] line-clamp-1">
          {review.user.name}
        </h1>
        <p className="text-[12px] text-gray-600 mt-[4px]">
          {dateFormat(review.createdAt)}
        </p>
      </div>

      <div className="pl-[8px] lg:ml-[16px] pr-[5px] lg:pr-8">
        <StarRating rating={review.star} />
        <p className="text-[13px] lg:text-[14px] mt-[8px]">{review.message}</p>
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
