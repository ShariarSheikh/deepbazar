import { SmartPhonesData } from '@/fakeDB/smartPhones';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import ReviewStar from './ReviewStar';

//---------------------------------------
interface IProps {
  isInsideSlider: boolean;
  isInsideGrid?: boolean;
  data: SmartPhonesData;
}
//---------------------------------------

const ProductCart: FC<IProps> = ({ isInsideSlider, data, isInsideGrid }) => {
  return (
    <div
      style={{
        maxWidth: isInsideSlider ? 277 : isInsideGrid ? '100%' : '23%',
      }}
      className="w-full h-[450px] bg-white relative"
    >
      <Link
        href={{
          pathname: '/product',
          query: {
            category: 'watch',
            productId: data._id,
          },
        }}
      >
        <div className="w-full h-[303px] rounded-[6px] relative overflow-hidden bg-[#f5f6f6] group cursor-pointer">
          <img
            src={data.images.cardSizeUrl}
            alt="product image"
            className="w-full h-full group-hover:scale-110 duration-150"
          />
        </div>
      </Link>
      <div>
        <div className="w-full flex items-center justify-between cursor-default">
          <Link
            href={{
              pathname: '/product',
              query: {
                category: 'watch',
                productId: data._id,
              },
            }}
            className="w-full max-w-[70%]"
          >
            <h1 className=" mt-[16px] mb-[12px] text-[18px] line-clamp-1 pr-1">
              {data.title}
            </h1>
          </Link>
          <p className="text-[18px] font-bold text-primary">
            <span className="text-[13px]">$</span>
            {data.price}
          </p>
        </div>
        <p className="text-[12px] mb-[5px] text-gray-500 line-clamp-1">
          {data.description}
        </p>
        <ReviewStar
          containerStyles={{ marginBottom: 10 }}
          reviews={data.reviews}
        />
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
