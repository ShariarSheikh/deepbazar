import RatingStar from '@/components/common/RatingStar';
import Link from 'next/link';

const Product = ({
  discount,
  offerText,
}: {
  discount?: string;
  offerText?: string;
}) => {
  return (
    <div className="h-full w-[100%] bg-white rounded-[6px] p-[10px] relative">
      {discount && (
        <div className="bg-primary rounded-[3px] text-white absolute left-[7px] top-[7px] text-[10px] z-[5] px-[10px] py-[5px]">
          {discount} <span>OFF</span>
        </div>
      )}

      {offerText && (
        <div className="bg-[#EE5858] rounded-[3px] text-white absolute right-[7px] top-[7px] text-[10px] z-[5] px-[10px] py-[5px]">
          {offerText}
        </div>
      )}

      <Link
        href={{
          pathname: '/product',
          query: {
            category: 'watch',
            productId: 7,
          },
        }}
      >
        <div className="w-full max-w-[190px] h-[190px] overflow-hidden z-[3] rounded-[10px] bg-[#f5f6f6] group cursor-pointer">
          <img
            className="w-full h-full group-hover:scale-110 duration-150"
            src="https://i.pinimg.com/originals/8b/06/29/8b062905bcd44b0d9164b46cc309a251.jpg"
            alt="product image"
          />
        </div>
      </Link>
      <div className="mt-[10px]">
        <RatingStar
          reviews={{
            total: 2,
            star: 4.2,
          }}
        />
        <Link
          href={{
            pathname: '/product',
            query: {
              category: 'watch',
              productId: 7,
            },
          }}
        >
          <h1 className="line-clamp-2 text-[16px] mt-[6px]">OnePlus 9 Pro</h1>
        </Link>
        <p className="text-[12px] text-gray-400 line-clamp-2 font-normal">
          Experience speed and smoothness with the OnePlus 9 Pro powered by the
        </p>
        <div className="mt-[12px] flex items-center w-full space-x-2 text-[16px]">
          <span className="font-bold text-primary">$799</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
