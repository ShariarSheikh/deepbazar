import Link from 'next/link';
import { FC } from 'react';
import {
  AiOutlineHeart,
  AiOutlineQuestionCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaClipboardList } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';

const Sidebar: FC = () => {
  return (
    <nav className="w-full max-w-[290px] max-h-[428px] rounded-[6px] bg-[#f3f9fb]">
      <div className="flex flex-col justify-center items-center pt-[18px]">
        <img
          className="w-[60px] h-[60px] rounded-full object-cover"
          src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          alt="user"
        />
        <h1 className="text-[18px] font-medium">Shariar Sheikh</h1>
      </div>
      <ul className="mt-[18px] w-full">
        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile"
            className="text-gray-600 w-full h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <RxDashboard size={16} />
            <span className="font-normal text-sm">Overview</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <FaClipboardList size={16} />
            <span className="font-normal text-sm">Order</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineHeart size={16} />
            <span className="font-normal text-sm">My Wishlist</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <CiLocationOn size={16} />
            <span className="font-normal text-sm">Shipping Address</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineStar size={16} />
            <span className="font-normal text-sm">My Reviews</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <AiOutlineQuestionCircle size={16} />
            <span className="font-normal text-sm">My Question & Answer</span>
          </Link>
        </li>

        <li className="w-full h-[38px] mb-1">
          <Link
            href="/profile/order"
            className="w-full text-gray-600 h-[38px] flex items-center space-x-2 border-l-2 px-1 border-transparent hover:border-primary hover:bg-[#e1f6ff] duration-150"
          >
            <IoSettingsOutline size={16} />
            <span className="font-normal text-sm">Account Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
