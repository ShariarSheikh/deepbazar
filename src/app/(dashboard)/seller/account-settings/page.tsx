'use client';

import Input from '@/components/common/Input';
import { UploadAvatar } from '@/components/common/Upload';
import Head from 'next/head';

export default function AccountSettingsPage() {
  return (
    <>
      <Head>
        <title>Account & Settings | DeepBazar</title>
      </Head>
      <section className="w-full flex justify-between mt-[5px]">
        <div className="bg-white rounded-[16px] w-full max-w-[220px] h-[364px] flex flex-col items-center justify-center shadow-card">
          <div className="w-[144px] h-[144px] flex items-center justify-center border borderColor border-dashed rounded-full">
            <div className="w-[128px] h-[128px] rounded-full relative">
              <UploadAvatar
                className="w-full h-full rounded-full"
                file={
                  'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80'
                }
                thumbnail
              />
            </div>
          </div>
          <p className="text-[12px] text-gray-600 mt-[24px] max-w-[148px] w-full text-center">
            Allowed *.jpeg, *.jpg, *.png, *.webp Max size of 3.1 MB
          </p>
        </div>

        <div className="w-full bg-white p-[24px] rounded-[16px] ml-[24px] shadow-card">
          <div className="w-full flex gap-3 flex-wrap">
            <div className="w-full flex items-center justify-between">
              <div className="w-[48%]">
                <Input
                  placeholder="First Name"
                  name="First Name"
                  value=""
                  className="h-full w-full rounded-[8px]"
                  containerClassName="w-[49%] h-[48px]"
                />
              </div>
              <div className="w-[48%]">
                <Input
                  placeholder="Last Name"
                  name="Last Name"
                  value=""
                  className="h-full w-full rounded-[8px]"
                  containerClassName="w-[49%] h-[48px]"
                />
              </div>
            </div>
            <Input
              placeholder="Email"
              name="email"
              value="JayvionSimon@gmail.com"
              className="h-full w-full rounded-[8px]"
              containerClassName="w-[49%] h-[48px]"
            />

            <Input
              placeholder="Address"
              name="address"
              value="19034 Verna Unions Apt. 164 - Honolulu, RI / 87535"
              className="h-full w-full rounded-[8px] px-3"
              containerClassName="w-[49%] h-[48px]"
            />

            <Input
              placeholder="Zip Code"
              name="zipCode"
              value=""
              className="h-full w-full rounded-[8px]"
              containerClassName="w-[49%] h-[48px]"
            />
            <textarea
              value="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
              className="bg-gray-50 text-sm p-3 min-h-[104px] max-h-[200px] rounded-[8px] border border-gray-200 w-full mt-[14px]"
              placeholder="About"
            />
            <div className="flex items-center justify-end w-full mt-[14px]">
              <button className="bg-primary rounded-[8px] text-white font-bold text-[14px] px-[16px] py-[6px]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
