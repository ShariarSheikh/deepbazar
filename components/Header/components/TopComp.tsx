import { GoLocation } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart, BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";

const TopComp = () => {
  return (
    <div className="w-full py-5 flex items-center justify-between border-b font-roboto px-4 2xl:px-0 transition-all duration-150">
      {/* max width 1014px */}
      <IfDeviceSmall />
      {/* min width 1014px - max width 1366px*/}
      <IfDeviceLarge />
    </div>
  );
};

export default TopComp;

const IfDeviceSmall = () => {
  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between">
        <MenuIcon />
        <Logo />
        <ButtonIcons />
      </div>
      <div className="w-full mt-4">
        <SearchBox />
      </div>
    </div>
  );
};
const IfDeviceLarge = () => {
  return (
    <div className="hidden w-full h-full lg:block">
      <div className="w-full flex items-center justify-between h-full">
        <Logo />
        <DeliveryLocation />
        <SearchBox />
        <LanguageAndContact />
        <ButtonIcons />
      </div>
    </div>
  );
};

const MenuIcon = () => {
  return (
    <div className="block lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="lg:pr-5 ml-7 lg:ml-0">
      <p className="cursor-pointer font-bold text-lg sm:text-2xl text-gray-800">
        DeepBazar
      </p>
    </div>
  );
};

const DeliveryLocation = () => {
  return (
    <div className="flex items-center cursor-pointer mr-7">
      <GoLocation className="mr-1 text-gray-500" />
      <div className="flex flex-col">
        <span className="text-gray-600 text-[13px] leading-none">
          Delivery To
        </span>
        <span className="font-medium text-[14px] leading-none text-gray-800">
          Kuliarchor Thana
        </span>
      </div>
    </div>
  );
};

const ButtonIcons = () => {
  return (
    <div className="flex md:space-x-4 space-x-2">
      <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group">
        <FiShoppingCart className="w-6 h-6 group-hover:scale-105 transform ease-out transition duration-200" />
      </div>
      <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group">
        <BsHeart className="w-6 h-6 group-hover:scale-105 transform ease-out transition duration-200" />
      </div>
      <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group">
        <BsPerson className="w-6 h-6 group-hover:scale-105 transform ease-out transition duration-200" />
      </div>
    </div>
  );
};

const LanguageAndContact = () => {
  return (
    <div className="h-full flex items-center">
      <div className="ml-5 cursor-pointer">
        <div className="leading-none text-gray-700 text-[13px]">Language</div>
        <div className="leading-none text-gray-700 text-[14px] font-medium">
          English
        </div>
      </div>
      <div className="ml-5 mr-5 cursor-pointer">
        <div className="leading-none text-gray-700 text-[13px]">017293</div>
        <div className="leading-none text-gray-700 font-medium text-[14px]">
          Contact Us
        </div>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="flex-1">
      <form className="w-full flex justify-between h-[42px] bg-gray-200">
        <SearchCategoryList />
        <input
          className="flex-1 border-t border-b pl-3 outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="w-10 flex items-center justify-center border cursor-pointer bg-black group">
          <IoSearchOutline className="text-yellow-400 font-bold text-xl group-hover:scale-125 transform ease-out transition duration-200" />
        </div>
      </form>
    </div>
  );
};

const SearchCategoryList = () => {
  const [category, setCategory] = useState("All");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
    addEventListener("scroll", () => setIsOpenMenu(false));   
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    setCategory(text);
    setIsOpenMenu(false);
  };
  return (
    <div
      className="relative text-base h-full max-w-[200px] flex items-center justify-center"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <div className="px-2 w-full flex justify-center cursor-pointer items-center border">
        {category} <RiArrowDropDownFill />
      </div>

      <div
        className="w-[240px] h-auto max-w-[240px] max-h-[520px] text-black absolute left-0 top-12 drop-shadow-xl bg-white pt-2 z-40"
        hidden={!isOpenMenu}
        onClick={(e) => e.stopPropagation()}
      >
        {categoryList.map(({ id, category }) => (
          <p
            className="text-sm cursor-pointer h-8 border-b border-gray-200 px-3 flex items-center"
            key={id}
            onClick={() => clickHandler(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

const categoryList = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "Men's Clothes",
  },
  {
    id: 3,
    category: "Women's Clothes",
  },
  {
    id: 4,
    category: "Bags",
  },
  {
    id: 5,
    category: "Toys",
  },
  {
    id: 6,
    category: "Baby and Kids",
  },
];
