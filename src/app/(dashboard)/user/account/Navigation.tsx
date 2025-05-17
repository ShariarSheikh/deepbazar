import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { RiKeyFill } from 'react-icons/ri';

//-------------------------------------------------

//-------------------------------------------------

const Navigation: FC = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="h-[48px] w-full flex items-center bg-white">
      <ul className="w-full flex items-center justify-start h-full overflow-x-auto md:overflow-auto">
        <Link
          href="/user/account"
          className={`text-[12px] md:text-[14px] font-semibold cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] ${
            segment === null
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600'
          }`}
        >
          <li className="h-[48px] flex items-center">
            <BsFillFilePersonFill className="mr-[8px]" /> General
          </li>
        </Link>

        <Link
          href="/user/account/socialLinks"
          className={`text-[12px] md:text-[14px] font-semibold ml-[13px] md:ml-[40px] cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] ${
            segment === 'socialLinks'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600'
          }`}
        >
          <li className="flex items-center h-[48px] min-w-[100px]">
            <FaShareAlt className="mr-[8px]" /> Social Links
          </li>
        </Link>

        <Link
          href="/user/account/changePassword"
          className={`text-[12px] md:text-[14px] font-semibold ml-[13px] md:ml-[40px] cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] ${
            segment === 'changePassword'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600'
          }`}
        >
          <li className="flex items-center h-[48px] min-w-[131px]">
            <RiKeyFill className="mr-[8px]" /> Change Password
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navigation;
