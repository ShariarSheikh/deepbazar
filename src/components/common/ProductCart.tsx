import { SmartPhonesData } from '@/fakeDB/smartPhones';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

//---------------------------------------
interface IProps {
  isInsideSlider: boolean;
  data: SmartPhonesData;
}
//---------------------------------------

const ProductCart: FC<IProps> = ({ isInsideSlider, data }) => {
  return (
    <div
      style={{
        maxWidth: isInsideSlider ? 277 : '23%',
      }}
      className="w-full h-[444px] bg-white relative"
    >
      <div className="w-full h-[303px] rounded-[6px] relative overflow-hidden bg-[#f5f6f6] group cursor-pointer">
        <img
          src={data.images.cardSizeUrl}
          alt="product image"
          className="w-full h-full group-hover:scale-110 duration-150"
        />
      </div>
      <div>
        <div className="w-full flex items-center justify-between cursor-default">
          <h1 className="w-full max-w-[70%] mt-[16px] mb-[12px] text-[18px] line-clamp-1 pr-1">
            {data.title}
          </h1>
          <p className="text-[18px] font-bold">
            <span className="text-[13px]">$</span>
            {data.price}
          </p>
        </div>
        <p className="text-[12px] mb-[5px] text-gray-500 line-clamp-1">
          {data.description}
        </p>
        <div className="flex items-center mb-[10px]">
          <div className="flex items-center space-x-1">
            <FaStar className="text-primary text-[12px]" />
            <FaStar className="text-primary text-[12px]" />
            <FaStar className="text-primary text-[12px]" />
            <FaStarHalfAlt className="text-primary text-[12px]" />
            <FaRegStar className="text-primary text-[12px]" />
          </div>
          <p className="text-[10px] font-medium text-gray-500 pt-[5px] ml-[8px]">
            ({data.reviews.total})
          </p>
        </div>
        <div className="w-full flex justify-start">
          <button className="text-sm active:scale-95 duration-150 font-medium w-[120px] h-[38px] rounded-[50px] border border-[#008ECC] hover:bg-primary text-primary hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="absolute active:scale-75 duration-150 bg-white group hover:bg-[#def5ff] overflow-hidden right-[10px] top-[10px] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
        <AiOutlineHeart className="text-primary font-medium text-[20px] group-hover:scale-110 duration-150" />
      </div>
    </div>
  );
};

export default ProductCart;
