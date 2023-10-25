import { useRef, useState } from 'react';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { ComponentShowOnType } from '.';
import Button from '../Button';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

interface IProps {
  componentFor: ComponentShowOnType;
  productId: string;
  userId: string;
}
function QuestionAndAns({
  componentFor,
  userId,
  productId,
}: IProps): JSX.Element {
  const [isQuestionBox, setIsQuestionBox] = useState<boolean>(false);

  const questionBoxRef = useRef<HTMLTextAreaElement>(null);

  const questionBoxHandler = (isOpen: boolean) => setIsQuestionBox(isOpen);
  const submitQuestionHandler = () => {
    // eslint-disable-next-line prettier/prettier, no-console
    console.log({ userId, productId, question: questionBoxRef.current?.value });
  };
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
              <div className="mt-[8px]">
                <textarea
                  ref={questionBoxRef}
                  placeholder="Write question..."
                  className="min-h-[56px] max-h-[250px] px-[14px] py-3 rounded-[8px] border border-gray-200 focus:border-2 outline-none w-full"
                />
              </div>
              <Button
                onClick={submitQuestionHandler}
                className="mt-[4px] font-semibold text-white rounded-[8px] py-[6px] px-[16px] bg-primary active:scale-95 duration-200"
              >
                Submit
              </Button>
            </div>
          ) : null}
        </div>
      )}
      <ul className="w-full">
        {qnaAndAns.map(list => (
          <UserQanList key={list.id} list={list} componentFor={componentFor} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionAndAns;

interface UserQnaListProps {
  componentFor: ComponentShowOnType;
  list: {
    id: number;
    question: string;
    ans: string;
    user: string;
    createdAt: string;
  };
}

function UserQanList({ list, componentFor }: UserQnaListProps) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false);

  const replayThisReview = (): void => {
    setIsOpenReply(prevState => !prevState);
  };
  return (
    <li key={list.id} className="w-full mb-[40px]">
      <div className="flex w-full">
        <div>
          <RiQuestionnaireFill className="fill-red-600" />
        </div>
        <div className="ml-[12px] w-full">
          <h1 className="text-[14px]">{list.question}</h1>
          <p className="mt-[2px] text-gray-500 text-[12px]">
            By <b>{list.user}</b> {list.createdAt}
          </p>

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
              {list.ans ? (
                <div className="w-full rounded-[8px] bg-gray-500 bg-opacity-[8%] py-[16px] px-[12px]">
                  <p className="text-[16px] text-gray-600">{list.ans}</p>
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

const qnaAndAns = [
  {
    id: 1,
    question: 'XL Size is available for this jacket?',
    ans: '',
    user: 'Sagor wahid',
    createdAt: 'November 22, 2021',
  },

  {
    id: 2,
    question: 'XL Size is available for this jacket?',
    ans: 'Please check the size or color availability in the variation section on the product page.',
    user: 'Sagor wahid',
    createdAt: 'November 22, 2021',
  },
  {
    id: 3,
    question: 'XL Size is available for this jacket?',
    ans: '',
    user: 'Sagor wahid',
    createdAt: 'November 22, 2021',
  },
];
