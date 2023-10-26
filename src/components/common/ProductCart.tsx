import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import RatingStar from './RatingStar';
import { ProductListType } from '@/types/product.types';
import Image from 'next/image';
import Button from './Button';

//---------------------------------------
interface IProps {
  isInsideSlider: boolean;
  product: ProductListType;
}
//---------------------------------------

const ProductCart: FC<IProps> = ({ isInsideSlider, product }) => {
  const selPrice =
    product.discountPrice > 0 && product.discountPercent
      ? product.discountPrice
      : product.price;
  return (
    <div
      className={`w-full h-[300px] md:h-[450px] bg-white relative ${
        isInsideSlider ? 'max-w-full' : 'max-w-[48%] md:max-w-[277px]'
      }`}
    >
      <Link href={`/product/${product._id}`}>
        <div className="w-full h-[140px] md:h-[303px] rounded-[6px] relative overflow-hidden bg-[#f5f6f6] group cursor-pointer">
          <Image
            src={product.imgUrl}
            alt="product image"
            className="w-full h-full group-hover:scale-110 duration-150"
            fill
          />
        </div>
      </Link>
      <div>
        <h1 className="md:mt-[16px] md:mb-2 mb-1 text-sm text-gray-800 font-semibold line-clamp-1 pr-1">
          {product.category}
        </h1>
        <Link href={`/product/${product._id}`} className="w-full text-gray-600">
          <h1 className="mt-[7px] md:mb-[10px] font-normal text-sm line-clamp-1 pr-1">
            {product.title}
          </h1>
        </Link>

        <div className="w-full flex items-center justify-between mb-[7px]">
          <div className="flex items-center justify-start space-x-2 text-[12] md:text-[13px] font-bold text-primary">
            <span className="text-gray-600">${selPrice}</span>
            {product.discountPrice > 0 && <del>{product.price}</del>}
            {product.discountPercent > 0 && (
              <span className="bg-primary text-white px-2 py-[1px] rounded-[6px]">
                {product.discountPercent}%
              </span>
            )}
          </div>
          <RatingStar reviews={product.ratings} />
        </div>

        <div className="w-full flex justify-between">
          <Button className="text-sm  w-[33px] h-[33px] flex items-center justify-center rounded-[6px] active:scale-95 duration-150 font-medium border border-[#008ECC] hover:bg-primary text-primary hover:text-white group">
            <AiOutlineHeart className="text-primary group-hover:text-white font-medium text-[20px] group-hover:scale-110 duration-150" />
          </Button>

          <Button className="text-sm w-full max-w-[80%] rounded-[6px] active:scale-95 duration-150 font-medium h-[33px] border border-[#008ECC] hover:bg-primary text-primary hover:text-white">
            Add to Cart
          </Button>
        </div>
      </div>

      {product.offerText && (
        <div className="text-[12px] absolute pl-2 bg-primary text-white group line-clamp-1 overflow-hidden left-[0px] top-[0px] w-[120px] h-[30px] rounded-[6px] flex items-center justify-start">
          {product.offerText}
        </div>
      )}
    </div>
  );
};

export default ProductCart;
