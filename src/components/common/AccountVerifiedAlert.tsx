import { useAppSelector } from '@/redux/hooks';
import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const AccountVerifiedAlert = () => {
  const user = useAppSelector(state => state.authSlice.user);

  if (user.verified) return null;

  return (
    !user.verified && (
      <header className="w-full flex items-center justify-between h-12 mb-3 bg-[#0d0740] px-3">
        <div className="flex items-center">
          <AiFillWarning className="text-white" size={24} />
          <h1 className="text-gray-200 font-medium ml-2">
            Please verified your profile, check your email box.
          </h1>
        </div>
      </header>
    )
  );
};

export default AccountVerifiedAlert;
