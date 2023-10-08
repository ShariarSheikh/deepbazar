'use client';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { UploadAvatar } from '@/components/common/Upload';
import { useAppSelector } from '@/redux/hooks';
import { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
  const user = useAppSelector(state => state.authSlice.user);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileImg, setProfileImg] = useState<string>(
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  );

  return (
    <section className="w-full flex justify-between mt-[5px]">
      <div className="bg-white rounded-[16px] w-full max-w-[220px] h-[364px] flex flex-col items-center justify-center shadow-card">
        <div className="w-[144px] h-[144px] flex items-center justify-center border borderColor border-dashed rounded-full">
          <div className="w-[128px] h-[128px] rounded-full relative">
            <UploadAvatar
              className="w-full h-full rounded-full"
              file={profileImg}
              thumbnail
            />
          </div>
        </div>
        <p className="text-[12px] text-gray-600 mt-[24px] max-w-[148px] w-full text-center">
          Allowed *.jpeg, *.jpg, *.png, *.webp Max size of 3.1 MB
        </p>
      </div>

      <div className="w-full bg-white p-[24px] rounded-[16px] ml-[24px] shadow-card">
        <form className="w-full flex gap-3 flex-wrap">
          <div className="w-full flex items-center justify-between">
            <div className="w-[48%]">
              <Input
                placeholder="First Name"
                name="First Name"
                value={user?.firstName}
                className="h-full w-full rounded-[8px]"
                containerClassName="w-[49%] h-[48px]"
              />
            </div>
            <div className="w-[48%]">
              <Input
                placeholder="Last Name"
                name="Last Name"
                value={user?.lastName}
                className="h-full w-full rounded-[8px]"
                containerClassName="w-[49%] h-[48px]"
              />
            </div>
          </div>
          <Input
            placeholder="Email"
            name="email"
            value={user?.email}
            className="h-full w-full rounded-[8px]"
            containerClassName="w-[49%] h-[48px]"
          />

          <Input
            placeholder="Address"
            name="address"
            value={user?.address}
            className="h-full w-full rounded-[8px] px-3"
            containerClassName="w-[49%] h-[48px]"
          />

          <Input
            placeholder="Zip Code"
            name="zipCode"
            value={user?.zipCode}
            className="h-full w-full rounded-[8px]"
            containerClassName="w-[49%] h-[48px]"
          />
          <textarea
            value={user?.bio}
            className="bg-gray-50 text-sm p-3 min-h-[104px] max-h-[200px] rounded-[8px] border border-gray-200 w-full mt-[14px]"
            placeholder="About"
          />
          <div className="flex items-center justify-end w-full mt-[14px]">
            <Button className="bg-primary rounded-[8px] text-white font-bold text-[14px] px-[16px] py-[6px]">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
