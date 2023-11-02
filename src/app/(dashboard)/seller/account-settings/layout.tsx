'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Navigation from './Navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/authSlice';
import AccountVerifiedAlert from '@/components/common/AccountVerifiedAlert';

//-------------------------------------------------
interface IProps {
  children: React.ReactNode;
}
//-------------------------------------------------

const AccountSettingLayout: FC<IProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();

  const dispatch = useAppDispatch();

  const logOutHandle = () => {
    dispatch(logout());
  };

  return (
    <section className="w-full h-full p-5 mx-auto pt-3">
      <div className="w-full h-full px-5 bg-white rounded-[6px]">
        <AccountVerifiedAlert />

        <header className="flex items-center justify-between mb-3">
          <h1 className="text-gray-600 font-medium">Account & Settings</h1>
          <button
            onClick={logOutHandle}
            className="px-[16px] py-[6px] border border-red-600 flex items-center rounded-[6px] text-red-600 hover:text-white font-bold text-sm hover:bg-red-600 active:scale-95 duration-200 group"
          >
            <BiLogOutCircle className="text-red-600 group-hover:text-white mr-[4px]" />
            <span>LogOut</span>
          </button>
        </header>

        <div className="mt-[5px] text-[14px] flex items-center h-8 space-x-3">
          <Link href={'/seller'} className=" text-gray-900 hover:underline">
            Seller
          </Link>
          <IoIosArrowForward />
          <span className="text-gray-600">{segment ?? 'General'}</span>
        </div>

        <Navigation />

        {children}
      </div>
    </section>
  );
};

export default AccountSettingLayout;
