import Link from 'next/link';
import { FC } from 'react';
import RatingStar from './RatingStar';
import { ProductListType } from '@/types/product.types';
import Image from 'next/image';
import Button from './Button';
import { useAppDispatch } from '@/redux/hooks';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';

//---------------------------------------
interface IProps {
  isInsideSlider: boolean;
  product: ProductListType;
}
//---------------------------------------

const ProductCart: FC<IProps> = ({ isInsideSlider, product }) => {
  const dispatch = useAppDispatch();

  //add to cart
  const addItems = () => {
    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: product.imgUrl,
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercent: product.discountPercent,
      productId: product._id,
    };
    dispatch(addToCart({ data: cartItem, quantity: 1 }));
  };

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
        <h1 className="mt-[5px] md:mt-[16px] md:mb-2 text-[10px] lg:text-sm text-gray-800 font-semibold line-clamp-1 pr-1">
          {product.category}
        </h1>
        <Link href={`/product/${product._id}`} className="w-full text-gray-600">
          <h1 className="lg:mt-[7px] md:mb-[10px] font-normal text-[12px] lg:text-sm line-clamp-1 pr-1">
            {product.title}
          </h1>
        </Link>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-[7px]">
          <div className="flex items-center justify-start space-x-2 text-[12px] lg:text-[13px] font-bold text-primary">
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

        <div className="w-full flex justify-center">
          <Button
            onClick={addItems}
            className="text-[12px] lg:text-sm w-full max-w-[95%] rounded-full active:scale-95 duration-150 font-medium h-[25px] lg:h-[33px] border border-[#008ECC] hover:bg-primary text-primary hover:text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {product.offerText && (
        <div className="text-[11px] absolute pl-2 bg-primary text-white group line-clamp-1 overflow-hidden left-[0px] top-[0px] w-[120px] h-[22px] rounded-[6px] flex items-center justify-start">
          {product.offerText}
        </div>
      )}
    </div>
  );
};

export default ProductCart;
