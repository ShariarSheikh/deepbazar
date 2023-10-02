'use client';
import Input from '@/components/common/Input';
import { NextPage } from 'next';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
      <header className="">
        <h1 className="text-gray-600 font-medium">Track Order</h1>
      </header>

      <div className="w-full h-full min-h-[300px] p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="flex items-center space-x-3">
          <Input placeholder="Order Id" className="h-[38px]" />
          <button className="px-[16px] py-[6px] border border-primary flex items-center rounded-[6px] text-primary hover:text-white font-bold text-sm hover:bg-primary active:scale-95 duration-200">
            <span>Search</span>
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Page;
