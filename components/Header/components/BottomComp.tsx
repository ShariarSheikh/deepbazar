import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import React from "react";
import { links } from "../../../utils/Data";
import { useDispatch } from "react-redux";
import {
  hideCategory,
  showCategory,
} from "../../../redux/showCategorySlice/showCategorySlice";
import DropdownCategories from "./DropdownCategories";

const BottomComp: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className="w-full hidden lg:block px-4 2xl:px-0 h-10 py-6 border-b border-gray-300">
      <div className="w-full h-full flex items-center justify-between min-w-[600px] relative">
        {/* left navigation div */}
        <div className="flex h-full items-center">
          {links.slice(0, 2).map(({ id, name, link }) => (
            <Link href={link} key={id} passHref>
              <a
                className={`font-roboto font-medium text-sm text-gray-800 cursor-pointer
              transition duration-200 p-2 hover:border-b-2 border-gray-900 ${
                router.pathname === link ? "border-b-2 border-gray-900" : ""
              }`}
              >
                {name}
              </a>
            </Link>
          ))}
          <div
            className="flex h-10 items-center font-roboto font-medium text-sm text-gray-800
             cursor-pointer p-2"
            onMouseEnter={() => dispatch(showCategory())}
            onMouseLeave={() => dispatch(hideCategory())}
          >
            Categories <RiArrowDropDownLine className="text-xl" />
            <DropdownCategories />
          </div>
          {/* //.... */}
          {links.slice(2, 4).map(({ id, name, link }) => (
            <Link href={link} key={id} passHref>
              <a className="font-roboto font-medium text-sm text-gray-800 cursor-pointer transition duration-200 p-2">
                {name}
              </a>
            </Link>
          ))}
        </div>
        {/* any random things */}
        <div className="font-medium pr-5 md:pr-0">Covid-19</div>
      </div>
    </nav>
  );
};

export default BottomComp;
