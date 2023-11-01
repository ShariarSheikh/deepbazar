import Link from 'next/link';
import { FC, ReactElement, ReactNode } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

//---------------------------------------------
interface IProps {
  title: string;
  children: ReactElement | ReactNode;
  navigationComp: ReactElement | null;
}
//---------------------------------------------

const JustForYou: FC<IProps> = ({ title, children, navigationComp }) => {
  return (
    <section className="w-full relative mt-[22px] lg:mt-[40px] md:mt-[60px] min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-sm md:text-[28px] font-bold">{title}</h1>
        <Link href={`/shop`}>
          <button className="text-sm md:text-[28px] font-bold flex items-center space-x-1 hover:underline text-primary">
            <p>More</p> <MdKeyboardArrowRight className="" />
          </button>
        </Link>
      </div>
      {navigationComp}
      <div className="md:mt-[40px] flex items-center justify-between gap-y-10 flex-wrap">
        {children}
      </div>
    </section>
  );
};

export default JustForYou;
