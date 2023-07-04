/* eslint-disable @typescript-eslint/no-unused-vars */
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ProductTypes } from '@/types/product.types';
import { FC, useState } from 'react';
import { AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';

const Info: FC<{ data: ProductTypes }> = ({ data }) => {
  const [countItem, setCountItem] = useState<number>(1);
  const dispatch = useAppDispatch();

  // const increment = () => {
  //   setCountItem(parseFloat(countItem) + 1);
  // };
  // const decrement = () => {
  //   countItem > 1 && setCountItem(parseInt(countItem) - 1);
  // };

  //add to cart
  const addItems = () => {
    const quantity = countItem;
    dispatch(addToCart({ data, quantity }));
  };

  return (
    <div className={`w-full max-w-[768px] m-auto lg:w-3/6 mt-10 lg:mt-0`}>
      <div>
        <h1 className="text-3xl font-semibold uppercase">{data?.title}</h1>
        <div className="mt-3">
          <div className="text-sm flex items-center">
            <h1 className="mr-1">Review:</h1>
            <StarRatings
              rating={data.reviews.average_rating}
              starDimension="18px"
              starSpacing="2px"
              starRatedColor="#eab308"
            />
            <span className="ml-1">({data.reviews.average_rating})</span>
          </div>

          <h1 className="text-sm flex items-center">
            Total Reviews:
            <span className="ml-1">{data.reviews.total_reviews}</span>
            <AiFillStar className="fill-yellow-500" />
          </h1>
        </div>
        <div className="mt-1 flex flex-row items-center text-sm">
          <p className="mr-1">Category:</p>
          {data.categories?.map((category, i) => (
            <span className="ml-1" key={category}>
              {category}
              {i !== data.categories.length &&
                i + 1 !== data.categories.length &&
                ','}
            </span>
          ))}
        </div>

        {data?.attributes?.color && (
          <div className="flex items-center space-x-2 text-sm">
            <p className="mr-1 text-black">Color:</p>
            <span>{data.attributes.color}</span>
            <p className="mr-1 text-black">Size:</p>
            <span className="">{data.attributes.size}</span>
          </div>
        )}
        <h2>
          Stock:{' '}
          <span className="text-slate-600 font-medium">
            {data.inventory.stock}
          </span>
        </h2>
        <div className="flex items-center">
          <h2 className="mr-1">Available: </h2>
          {data.inventory.availability ? (
            <AiOutlineCheckCircle className="fill-green-500 text-white" />
          ) : (
            <AiOutlineCheckCircle className="fill-red-500 text-white" />
          )}
        </div>

        <p className="mt-3 border-b border-gray-300 pb-5">
          Price:
          <span className="font-semibold text-xl">
            <span className="font-medium text-base pl-1">$</span>
            {data?.price}
          </span>
        </p>
        <div className="mt-3 w-full flex items-center">
          {/* quantity */}
          <div>
            Quantity:
            {/* <CartQuantityButtons
              quantity={data?.minQuantity}
              countItem={countItem}
              increment={increment}
              decrement={decrement}
            /> */}
          </div>
        </div>
        {/* add to cart */}
        <button
          className="py-2 px-3 cursor-pointer bg-black text-white mt-5 active:scale-105 duration-200"
          onClick={addItems}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Info;
