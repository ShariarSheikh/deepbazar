import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowDropDownFill } from "react-icons/ri";
import { categoryList } from "../../../utils/Data";

const HamburgerMenu = ({ isOpenMenu }) => {
  const [open, setOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    setOpen(isOpenMenu);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMenu, open]);

  return (
    <div
      className={`${
        open ? "w-full" : "w-0"
      } w-full fixed top-16 md:top-20 h-screen left-0 lg:hidden z-50 `}
    >
      <div
        className={`${
          open ? "w-full z-50" : "w-0"
        } h-screen bg-gray-100 text-black overflow-hidden transition-all duration-200`}
      >
        <ul className="w-full py-5">
          <li className="text-base border-b border-gray-300 h-12 flex items-center cursor-pointer px-4">
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li className="text-base border-b border-gray-300 h-12 flex items-center cursor-pointer px-4">
            <Link href="/shop" passHref>
              All Products
            </Link>
          </li>
          <li className="text-base border-b border-gray-300 min-h-[45px] w-full flex flex-col items-center relative">
            <p
              className="w-full flex items-center cursor-pointer px-4 mt-3"
              onClick={() => setShowCategory((prevState) => !prevState)}
            >
              Categories
              <RiArrowDropDownFill className="text-gray-500 ml-2 w-6 h-6" />
            </p>
            <Categories
              showCategory={showCategory}
            />
          </li>

          <li className="text-base border-b border-gray-300 h-12 flex items-center cursor-pointer px-4">
            <Link href="/customer-service" passHref>
              Customer Service
            </Link>
          </li>
          <li className="text-base border-b border-gray-300 h-12 flex items-center cursor-pointer px-4">
            <Link href="/help-center" passHref>
              Help Center
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

const Categories = ({ showCategory }) => {
  const removeFirstCategory = categoryList.slice(1);
  return (
    <div
      className={`w-full mt-5 bg-white ${
        showCategory ? "h-[240px]" : "h-0"
      } overflow-hidden transition-all duration-200`}
    >
      <ul className={`w-full flex flex-col h-full`}>
        {removeFirstCategory?.map(({ id, category, link, img }) => (
          <Link
            href={`/shop${link}`}
            passHref
            key={id}
   
          >
            <li className="h-12 w-full flex flex-row items-center justify-between cursor-pointer px-4 border-t border-gray-100 overflow-hidden">
              <p>{category}</p>
              <img
                className="w-[40px] h-full object-contain"
                src={img}
                alt="category image"
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
