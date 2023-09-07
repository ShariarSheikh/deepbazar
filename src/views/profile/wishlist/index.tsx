import Link from 'next/link';
import React from 'react';
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

interface WishlistUserPanel {
  id: number;
  img: string;
  title: string;
  currency: string;
  amount: string;
  star: number;
  reviews: number;
}

const WishlistData: WishlistUserPanel[] = [
  {
    id: 1,
    img: 'https://dtt1c9id3txwq.cloudfront.net/assets/images/001/420/092/large/_MG_6499.jpg?1663139564',
    title: "Men's Stand Collar Wholesale Price Black Full  Leather Jacket",
    currency: '৳',
    amount: '950',
    star: 4,
    reviews: 12,
  },
  {
    id: 2,
    img: 'https://dtt1c9id3txwq.cloudfront.net/assets/images/001/420/092/large/_MG_6499.jpg?1663139564',
    title: "Men's Stand Collar Wholesale Price Black Full  Leather Jacket",
    currency: '৳',
    amount: '950',
    star: 4,
    reviews: 12,
  },
  {
    id: 3,
    img: 'https://dtt1c9id3txwq.cloudfront.net/assets/images/001/420/092/large/_MG_6499.jpg?1663139564',
    title:
      "Men's Stand Collar Wholesale Price Black Full  Leather Jacket Men's Stand Collar Wholesale Price Black Full  Leather JacketStand Collar Wholesale Price Black Full  Leather Jacket Men",
    currency: '৳',
    amount: '950',
    star: 4,
    reviews: 12,
  },
  {
    id: 4,
    img: 'https://dtt1c9id3txwq.cloudfront.net/assets/images/001/420/092/large/_MG_6499.jpg?1663139564',
    title: "Men's Stand Collar Wholesale Price Black Full  Leather Jacket",
    currency: '৳',
    amount: '950',
    star: 4,
    reviews: 13,
  },
];

const Wishlist: React.FC = () => {
  return (
    <div className="max-w-full px-[34px] py-0">
      <header className="">
        <h1 className="text-gray-600 font-medium">My Wishlist</h1>
      </header>

      <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        {WishlistData.length > 0 &&
          WishlistData?.map(({ id, img, title, amount }) => (
            <div
              key={id}
              className="relative flex justify-start pb-6 mt-[10px] border-b-[#f2f3f5] border-b border-solid"
            >
              <Link href="/shop">
                <div className="overflow-hidden relative w-32 h-32 rounded-[6px]">
                  <img
                    src={img}
                    alt="item"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="w-full max-w-[472px] ml-6">
                <Link href="/shop">
                  <h1 className="w-full font-medium line-clamp-2 text-[#3d3d3f] text-lg">
                    {title}
                  </h1>
                </Link>
                <div className="flex items-center mt-[9px] text-primary">
                  <p className="text-xl">$</p>
                  <p className="text-xl">{amount}</p>
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center absolute ml-[73px] right-2.5 bottom-[35px]">
                <button className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full active:scale-95 duration-150 text-white bg-red-500">
                  <AiOutlineDelete className="w-auto h-auto ml-0 mt-0" />
                </button>
                <button className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full active:scale-95 duration-150 text-primary bg-primaryLight">
                  <BsCart2 className="w-auto h-auto" />
                </button>
              </div>
            </div>
          ))}

        {/* if not wishlist_item exits  */}
        {WishlistData.length === 0 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <AiOutlineHeart />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px]">
              You Have No Wishlist
            </h1>
            <p className="text-[#757575] text-center text-sm mt-2.5">
              Save Items to your wishlist to see when product prices drop
            </p>
            <button className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200">
              Go To Sopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
