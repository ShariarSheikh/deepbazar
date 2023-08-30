import ReviewStar from '@/components/common/ReviewStar';
import { SmartPhonesData } from '@/fakeDB/smartPhones';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

//---------------------------------------------
interface IProps {
  data: SmartPhonesData[];
  productPageLink: {
    pathname: string;
    query: {
      keyword: string;
    };
  };
}
//---------------------------------------------

const BestDealsSection: FC<IProps> = ({ data, productPageLink }) => {
  const firstItem = data[3] || {};
  return (
    <section className="w-full relative mt-[60px] min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-[28px] font-bold">FlashSale</h1>
          <div className="flex items-center">
            <p className="text-[14px] ml-[24px] mr-[12px]">Ending In</p>
            <div className="h-[30px] px-[10px] bg-primary text-white flex items-center justify-center">
              <p>12d : 21h : 56m : 23s</p>
            </div>
          </div>
        </div>
        <Link href={productPageLink}>
          <button className="text-[28px] font-bold flex items-center space-x-1 hover:underline">
            <p>More</p> <MdKeyboardArrowRight className="text-primary" />
          </button>
        </Link>
      </div>
      <div className="mt-[40px] flex h-full max-h-[592px] overflow-hidden">
        <div className="h-full min-h-[592px] w-[320px] px-[18px] pb-[18px]">
          <div className="w-full h-[268px] overflow-hidden rounded-[10px] bg-[#f5f6f6] group cursor-pointer">
            <img
              className="w-full h-full group-hover:scale-110 duration-150"
              src={firstItem.images.cardSizeUrl}
              alt={firstItem.title}
            />
          </div>
          <div className="mt-[10px]">
            <ReviewStar reviews={firstItem.reviews} />
            <h1 className="line-clamp-2 text-[16px] mt-[6px]">
              {firstItem.title}
            </h1>
            <div className="mt-[12px] flex items-center w-full space-x-2 text-[16px]">
              <span className="text-gray-600 font-normal">
                <del>${firstItem.discountPrice}</del>
              </span>
              <span className="font-bold text-primary">${firstItem.price}</span>
            </div>
            <p className="mt-[12px] text-[14px] text-gray-400 line-clamp-3 font-normal">
              {firstItem.description}
            </p>
            <div className="mt-[24px] flex justify-between items-center">
              <button className="flex items-center justify-center rounded-full h-[48px] w-[48px] bg-[#f3f9fb] group">
                <AiOutlineHeart className="text-primary font-medium text-[20px] group-hover:scale-110 duration-150" />
              </button>

              <button className="flex items-center justify-center space-x-2 text-sm active:scale-95 duration-150 font-medium w-[160px] h-[38px] rounded-[50px] border border-[#008ECC] hover:bg-primary text-primary hover:text-white">
                <BsCart2 className="group-hover:text-white font-medium text-[20px] group-hover:scale-110 duration-150" />
                <span className="pt-[4px]">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-3 items-center">
          {data.slice(1).map(item => (
            <div key={item._id} className="w-full max-w-[24%] h-[290px]">
              <div className="w-full h-[188px] overflow-hidden rounded-[10px] bg-[#f5f6f6] group cursor-pointer">
                <img
                  className="w-full h-full group-hover:scale-110 duration-150"
                  src={item.images.cardSizeUrl}
                  alt={item.title}
                />
              </div>
              <div className="mt-[8px] px-3">
                <h1 className="line-clamp-1 text-[16px]">{item.title}</h1>
                <div className="flex items-center justify-between">
                  <ReviewStar reviews={item.reviews} />
                  <p className="text-[18px] font-bold">
                    <span className="text-[13px]">$</span>
                    {item.price}
                  </p>
                </div>
                <p className="mt-[4px] text-[11px] text-gray-400 line-clamp-2 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDealsSection;
