'use client';

import Input from '@/components/common/Input';

export default function RecoverPassword() {
  return (
    <section className="min-h-[45vh] max-w-[1201px] w-full m-auto mt-12 pb-4">
      <h1 className="text-primary text-[25px] font-poppins font-bold">
        Recover Password
      </h1>
      <div className="w-full flex items-center space-x-2 mt-[20px]">
        <form className="w-full">
          <div className="w-full flex flex-col space-y-4 justify-center items-center">
            <Input
              type="email"
              value=""
              placeholder="Enter Your Email"
              className="w-full h-[42px] rounded-[6px] bg-[#F3F9FB] max-w-[320px] px-2 outline-[#E5F8FE] text-[12px]"
            />
            <Input
              type="password"
              value=""
              placeholder="New Password"
              className="w-full h-[42px] rounded-[6px] bg-[#F3F9FB] max-w-[320px] px-2 outline-[#E5F8FE] text-[12px]"
            />
            <Input
              type="password"
              value=""
              placeholder="Confirm Password"
              className="w-full h-[42px] rounded-[6px] bg-[#F3F9FB] max-w-[320px] px-2 outline-[#E5F8FE] text-[12px]"
            />

            <button
              type="button"
              className="w-full h-[42px] rounded-[6px] bg-primary text-white active:scale-95 duration-150 max-w-[320px] px-2 text-[12px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
