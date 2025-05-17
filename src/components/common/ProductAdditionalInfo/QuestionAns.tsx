import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { ComponentShowOnType } from '.';
import Button from '../Button';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginOpenModal } from '@/redux/features/loginFirstSlice';
import {
  useCreateQuestionMutation,
  useGetAllQAndAnsByProductIdQuery,
} from '@/redux/services/questionAndAnsApi';
import { QuestionAndAnsData } from '@/types/questionAndAnswer.types';
import dateFormat from '@/utils/dateFormat';
import { FcAnswers } from 'react-icons/fc';
import { InputApiErrorMessage } from '../FormikCustomInput';

interface IProps {
  componentFor: ComponentShowOnType;
  productId: string;
  setTotalQuestion: Dispatch<SetStateAction<number>>;
}
function QuestionAndAns({
  componentFor,
  productId,
  setTotalQuestion,
}: IProps): JSX.Element {
  const user = useAppSelector(state => state.authSlice.user);
  const [isQuestionBox, setIsQuestionBox] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [createQuestion, createQuestionApi] = useCreateQuestionMutation();
  const getQuestion = useGetAllQAndAnsByProductIdQuery({
    productId: productId,
  });

  const questionBoxRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const questionBoxHandler = (isOpen: boolean) => setIsQuestionBox(isOpen);

  const submitQuestionHandler = () => {
    if (!user._id)
      return dispatch(loginOpenModal({ redirectUrl: `/product/${productId}` }));
    if (user.role.includes('SELLER'))
      return alert('Seller not allow to question');

    if (!questionBoxRef.current?.value?.trim())
      return setError('Please enter your question');

    createQuestion({
      productId: productId,
      question: questionBoxRef.current?.value ?? '',
    });
    setError('');
  };

  useEffect(() => {
    if (createQuestionApi.isLoading) return undefined;
    if (createQuestionApi.isError)
      //@ts-ignore
      return setError(createQuestionApi.error?.data?.message ?? '');

    if (createQuestionApi.isSuccess) {
      getQuestion.refetch();
      setIsQuestionBox(false);
      return setError('');
    }
  }, [createQuestionApi]);

  useEffect(() => {
    setTotalQuestion(getQuestion.data?.data.totals || 0);
  }, [getQuestion.data?.data.totals]);

  if (getQuestion.isLoading)
    return (
      <h2 className="text-center py-3 px-2 text-gray-600 text-[13px]">
        Loading...
      </h2>
    );

  return (
    <div className="p-[24px]">
      {componentFor === ComponentShowOnType.UserProductDetails && (
        <div className="mb-[22px]">
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-600">
              Click the button to add a review
            </h1>

            {isQuestionBox ? (
              <Button
                onClick={() => questionBoxHandler(false)}
                className={`text-[14px] active:scale-95 duration-200 flex items-center space-x-2 font-semibold mt-[8px] px-2 py-1 rounded-[6px] text-primary`}
              >
                <AiOutlineClose /> <span>Close Question Box</span>
              </Button>
            ) : (
              <Button
                onClick={() => questionBoxHandler(true)}
                className={`text-[14px] active:scale-95 duration-200 flex items-center space-x-2 font-semibold mt-[8px] px-2 py-1 rounded-[6px] text-primary`}
              >
                <AiOutlinePlus /> <span>Add Question</span>
              </Button>
            )}
          </div>

          {isQuestionBox ? (
            <div>
              {error && InputApiErrorMessage(error)}
              <div className="mt-[8px]">
                <textarea
                  ref={questionBoxRef}
                  placeholder="Write question..."
                  className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border border-gray-200 focus:border-2 outline-none w-full"
                />
              </div>
              <Button
                disabled={createQuestionApi.isLoading}
                isLoading={createQuestionApi.isLoading}
                loadingColor="white"
                loadingSpinnerSize={40}
                onClick={submitQuestionHandler}
                className="mt-[4px] font-semibold text-white rounded-[8px] py-[6px] px-[16px] bg-primary active:scale-95 duration-200"
              >
                Submit
              </Button>
            </div>
          ) : null}
        </div>
      )}

      {typeof getQuestion.data !== 'undefined' &&
        getQuestion.data.data.totals > 0 && (
          <ul className="w-full">
            {getQuestion.data.data.data.map(question => (
              <UserQanList
                key={question._id}
                question={question}
                componentFor={componentFor}
              />
            ))}
          </ul>
        )}

      {typeof getQuestion.data !== 'undefined' &&
        getQuestion.data.data.totals === 0 && (
          <div className="text-gray-600 flex items-center justify-center h-[100px]">
            <span>Zero Question on this product</span>
          </div>
        )}
    </div>
  );
}

export default QuestionAndAns;

interface UserQnaListProps {
  componentFor: ComponentShowOnType;
  question: QuestionAndAnsData;
}

function UserQanList({ question, componentFor }: UserQnaListProps) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false);

  const replayThisReview = (): void => {
    setIsOpenReply(prevState => !prevState);
  };
  return (
    <li className="w-full mb-[40px]">
      <div className="flex w-full">
        <div>
          <RiQuestionnaireFill className="fill-red-600" />
        </div>
        <div className="ml-[12px] w-full">
          <h1 className="text-[14px]">{question.question.question}</h1>
          <p className="mt-[2px] text-gray-500 text-[12px]">
            By <b>{question.question.by}</b> {dateFormat(question.createdAt)}
          </p>
          {question.answer?.ans && (
            <div className="w-full pt-[8px] flex items-start justify-start bg-primaryLight rounded-[6px] px-3 mt-[8px] ml-[8px] min-h-[85px]">
              <div className="mr-[3px] flex items-items h-[27px] overflow-hidden min-w-[94px]">
                <FcAnswers className="mr-[8px] w-5 h-5" />
                <span className="text-sm">{question.answer?.by}: </span>
              </div>
              <div className="pt-[2px]">
                <p className="text-sm text-gray-600">{question.answer.ans}</p>
              </div>
            </div>
          )}

          {componentFor ===
            ComponentShowOnType.SellerDashboardProductDetails && (
            <>
              <button
                onClick={replayThisReview}
                className={`text-[14px] active:scale-95 duration-200 font-semibold mt-[8px] ${
                  isOpenReply ? 'text-gray-800' : 'text-primary'
                }`}
              >
                Reply This Question
              </button>
              {question.answer?.ans ? (
                <div className="w-full rounded-[8px] bg-gray-500 bg-opacity-[8%] py-[16px] px-[12px]">
                  <p className="text-[16px] text-gray-600">
                    {question.answer?.ans}
                  </p>
                </div>
              ) : null}
              {isOpenReply ? (
                <>
                  <div className="mt-[8px] w-full">
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
    </li>
  );
}
