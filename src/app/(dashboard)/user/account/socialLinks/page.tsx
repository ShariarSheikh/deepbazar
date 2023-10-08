'use client';

import Input from '@/components/common/Input';
import { useAppSelector } from '@/redux/hooks';
import { NextPage } from 'next';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const Page: NextPage = () => {
  const user = useAppSelector(state => state.authSlice.user);

  return (
    <section>
      <div className="w-full rounded-[16px] shadow-card bg-white p-[24px] mt-[5px]">
        <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
          <FaFacebookF />
          <Input
            placeholder="Your facebook profile url"
            type="url"
            value={user?.socialLinks?.facebook}
            className="ml-[15px] h-full w-full border-none outline-none"
            containerClassName="h-[38px] w-full"
          />
        </div>
        <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
          <BsInstagram />
          <Input
            placeholder="Your instagram profile url"
            type="url"
            value={user?.socialLinks?.instagram}
            className="ml-[15px] h-full w-full border-none outline-none"
            containerClassName="h-[38px] w-full"
          />
        </div>
        <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
          <GrLinkedinOption />
          <Input
            placeholder="Your linkedin profile url"
            type="url"
            value={user?.socialLinks?.linkedin}
            className="ml-[15px] h-full w-full border-none outline-none"
            containerClassName="h-[38px] w-full"
          />
        </div>
        <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
          <FaTwitter />
          <Input
            placeholder="Your twitter profile url"
            type="url"
            value={user?.socialLinks?.twitter}
            className="ml-[15px] h-full w-full border-none outline-none"
            containerClassName="h-[38px] w-full"
          />
        </div>

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
