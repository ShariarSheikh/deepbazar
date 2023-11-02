import { useAppSelector } from '@/redux/hooks';
import React from 'react';
import { AiFillWarning, AiOutlineMail } from 'react-icons/ai';

const AccountVerifiedAlert = () => {
  const user = useAppSelector(state => state.authSlice.user);

  if (user.verified) return null;

  const resendEmailHandle = () => {};

  return (
    !user.verified && (
      <header className="w-full flex items-center justify-between h-12 mb-3 bg-[#0d0740] px-3">
        <div className="flex items-center">
          <AiFillWarning className="text-white" size={24} />
          <h1 className="text-gray-200 font-medium ml-2">
            Please verified your profile, check your email box.
          </h1>
        </div>
        <button
          onClick={resendEmailHandle}
          className="px-[16px] py-[6px] border border-green-600 flex items-center rounded-[6px] text-green-600 hover:text-white font-bold text-sm hover:bg-green-600 active:scale-95 duration-200 group"
        >
          <AiOutlineMail className="text-green-600 group-hover:text-white mr-[4px]" />
          <span>Resend Email</span>
        </button>
      </header>
    )
  );
};

export default AccountVerifiedAlert;
