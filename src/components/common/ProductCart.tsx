import { addToCart } from '@/redux/features/cartSlice';
import { addToFavorite } from '@/redux/features/favoriteCartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ProductTypes } from '@/types/product.types';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCart = ({ data }: { data: ProductTypes }) => {
  const dispatch = useAppDispatch();

  const addCartItems = () => {
    const quantity = 1;
    dispatch(addToCart({ data, quantity }));
  };

  return (
    <div
      className="bg-white relative md:w-[32%] lg:w-[24%] max-w-[316px] w-[48%] h-[260px] xl:min-h-[380px] max-h-[380px]
   flex flex-col justify-between mb-5 md:mb-7 rounded-md xl:mb-12 hover:shadow-2xl transition-all duration-200 group md:ml-2"
    >
      <div className="w-full h-[180px] md:h-[290px] relative overflow-hidden p-2">
        <Link href={`/product/${data._id}`} passHref>
          <img
            className="h-full w-full object-cover cursor-pointer rounded-md"
            src={'https://via.placeholder.com/289x274'}
            alt={data.title}
          />
        </Link>

        {/* add to cart */}
        <div className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 w-10 h-10 xl:w-14 xl:h-12 lg:hidden group-hover:block cursor-pointer">
          <div
            className="w-full h-full flex justify-center items-center border bg-white border-gray-400 rounded-lg active:scale-110 transition duration-200"
            onClick={() => addCartItems()}
          >
            <FiShoppingCart className="xl:w-6 w-4 h-4 xl:h-6" />
          </div>
        </div>
      </div>

      <div className="flex h-[80px] xl:h-[90px] flex-col items-center w-full py-3">
        <h2 className="text-gray-600 sm:text-xl font-normal cursor-default line-clamp-1">
          {data.title}
        </h2>
        <p className="font-semibold text-roboto mt-1 text-yellow-600">
          <span className="font-medium text-sm pl-1 ">{data.price}</span>
        </p>
      </div>

      {/* bonus  */}

      <div className="absolute top-0 w-full h-10 px-2 mt-2">
        <div className="w-full h-full flex justify-end items-center">
          <div
            onClick={() => dispatch(addToFavorite(data))}
            className="w-10 h-full flex justify-center items-center cursor-pointer bg-white border border-red-200 rounded-full
         active:scale-110 transition duration-200"
          >
            <AiFillHeart className="xl:w-6 w-4 h-4 xl:h-6 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
