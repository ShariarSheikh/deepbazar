'use client';
import Input from '@/components/common/Input';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <section>
      <div className="w-full rounded-[16px] shadow-card bg-white p-[24px] mt-[5px]">
        <Input
          placeholder="Old Password"
          type="password"
          className="h-full w-full"
          containerClassName="h-[41px] w-full mb-[24px]"
        />

        <Input
          placeholder="New Password"
          type="password"
          className="h-full w-full"
          containerClassName="h-[41px] w-full mb-[24px]"
        />

        <Input
          placeholder="Confirm New Password"
          type="password"
          className="h-full w-full"
          containerClassName="h-[41px] w-full mb-[24px]"
        />

        <div className="flex items-center justify-end w-full mt-[24px]">
          <button className="bg-primary rounded-[6px] text-white font-bold text-[14px] px-[16px] py-[6px] active:scale-95 duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
