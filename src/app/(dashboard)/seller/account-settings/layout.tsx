'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import PageTitle from '../PageTitle';
import Navigation from './Navigation';

//-------------------------------------------------
interface IProps {
  children: React.ReactNode;
}
//-------------------------------------------------

const AccountSettingLayout: FC<IProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();
  return (
    <section className="w-full h-full p-5 mx-auto pt-3">
      <div className="w-full h-full px-5 bg-white rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <PageTitle
          pageName="Account & Settings"
          breadcrumb={
            <div className="mt-[5px] text-[14px] flex items-center h-8 space-x-3">
              <Link href={'/seller'} className=" text-gray-900 hover:underline">
                Seller
              </Link>
              <IoIosArrowForward />
              <span className="text-gray-600">{segment ?? 'General'}</span>
            </div>
          }
        />

        <Navigation />

        {children}
      </div>
    </section>
  );
};

export default AccountSettingLayout;
