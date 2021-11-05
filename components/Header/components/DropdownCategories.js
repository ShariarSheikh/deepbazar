import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  hideCategory,
  showCategoryOpen,
} from "../../../redux/showCategorySlice/showCategorySlice";
import { categoryList } from "../../../utils/Data";

const DropdownCategories = () => {
  const openCategory = useSelector(showCategoryOpen);

  return (
    <div
      className={`w-full min-w-[1024px] max-w-[1366px] z-40 pr-4 2xl:px-0 absolute top-5 left-0 shadow-md cursor-default`}
    >
      <ul
        className={`w-full flex justify-between items-center h-full bg-gray-50 transition-all ${
          openCategory ? "h-[64px]" : "h-0"
        } duration-150`}
      >
        {categoryList
          ?.slice(1)
          .map(({ id, category, link, img, categoryList }) => (
            <li
              className={`flex-grow border-r px-2 group h-full cursor-pointer
             border-gray-200 w-full flex justify-between items-center relative ${
               openCategory ? "visible" : "hidden"
             }`}
              key={id}
            >
              <p className="font-roboto">{category}</p>
              <img src={img} alt="category image" className="w-[40px]" />

              {/* subcategory list */}
              <SubcategoryList
                categoryList={categoryList}
                categoryLink={link}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownCategories;

const SubcategoryList = ({ categoryList, categoryLink }) => {
  const dispatch = useDispatch();
  return (
    <ul className="absolute top-16 left-0 w-full group-hover:block hidden bg-white shadow-lg cursor-default">
      {categoryList.map(({ id, text, link }) => (
        <Link href={`/shop${categoryLink}${link}`} passHref key={id}>
          <li
            className="px-2 py-2 cursor-pointer border-b border-gray-100 hover:scale-105 duration-200"
            onClick={() => dispatch(hideCategory())}
          >
            {text}
          </li>
        </Link>
      ))}
      <Link href={`/shop${categoryLink}`} passHref>
        <li
          className="text-center px-2 py-2 cursor-pointer border-b border-gray-100 hover:scale-105 duration-200"
          onClick={() => dispatch(hideCategory())}
        >
          All
        </li>
      </Link>
    </ul>
  );
};
