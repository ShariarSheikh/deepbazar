'use client';
import MyQuestionAnswer from '@/views/user/question-answer';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <section className="w-full">
      <MyQuestionAnswer />
    </section>
  );
};

export default Page;
