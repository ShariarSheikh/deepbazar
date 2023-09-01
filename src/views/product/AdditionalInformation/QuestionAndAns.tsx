/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import { RiQuestionnaireFill } from 'react-icons/ri';

function QuestionAndAns(): JSX.Element {
  return (
    <div className="p-[24px]">
      <ul className="w-full">
        {qnaAndAns.map(list => (
          <UserQanList key={list.id} list={list} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionAndAns;

interface UserQnaListProps {
  id: number;
  question: string;
  ans: string;
  user: string;
  createdAt: string;
}

function UserQanList({ list }: { list: UserQnaListProps }) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false);

  const replayThisReview = (): void => {
    setIsOpenReply(prevState => !prevState);
  };
  return (
    <li key={list.id} className="w-full mb-[40px]">
      <div className="flex w-full">
        <div>
          <RiQuestionnaireFill className="fill-secondaryMain" />
        </div>
        <div className="ml-[12px] w-full">
          <h1 className="text-[14px]">{list.question}</h1>
          <p className="mt-[2px] text-gray-500 text-[12px]">
            By <b>{list.user}</b> {list.createdAt}
          </p>
          <button
            onClick={replayThisReview}
            className={`text-[14px] active:scale-95 duration-200 font-semibold mt-[8px] ${
              isOpenReply ? 'text-gray-800' : 'text-primary'
            }`}
          >
            Reply This Review
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
