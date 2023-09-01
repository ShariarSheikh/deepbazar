/* eslint-disable @typescript-eslint/no-unused-vars */
import CartQuantityButtons from '@/components/common/CartQuantityButtons';
import ReviewStar from '@/components/common/ReviewStar';
import { SmartPhonesData } from '@/fakeDB/smartPhones';
import { useAppDispatch } from '@/redux/hooks';
import { FC, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Info: FC<{ data: SmartPhonesData }> = ({ data }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  //add to cart
  const addItems = () => {
    const itemQuantity = quantity;
    // dispatch(addToCart({ data, quantity }));
  };

  return (
    <div
      className={`w-full ml-[20px] min-h-[436px] m-auto mt-10 lg:mt-0 rounded-[6px] flex flex-row overflow-hidden text-gray-600`}
    >
      <div className="w-[60%] h-full pr-[10px]">
        <h1 className="text-3xl font-semibold uppercase">{data?.title}</h1>
        <p className="text-base text-gray-500 pt-[3px]">{data.description}</p>
        <div className="mt-3 flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <ReviewStar reviews={data.reviews} />
            <p className="text-[12px] text-gray-500 pt-[3px]">Ratings</p>
          </div>
          <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

          <p className="text-[12px] text-gray-500 pt-[3px]">
            (0) Answered Questions
          </p>
        </div>
        <p className="mt-3 pb-5 text-primary">
          <span className="font-semibold text-xl">
            <span className="font-medium pl-1">$</span>
            {data?.price}
          </span>
        </p>

        <div className="mt-3 w-full flex items-center h-[36">
          <h3 className="mr-[10px]"> Quantity:</h3>
          <CartQuantityButtons
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />
        </div>

        <div className="flex items-center space-x-3 h-[40px] mt-5">
          <button
            className="h-[38px] w-[80px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-[#ffa41c] text-black active:scale-75 duration-200"
            onClick={addItems}
          >
            By Now
          </button>
          <button
            className="h-[38px] w-[120px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-primary text-white active:scale-75 duration-200"
            onClick={addItems}
          >
            Add to Cart
          </button>

          <button className="active:scale-75 duration-150 bg-white group hover:bg-[#def5ff] border-2 border-[#def5ff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <AiOutlineHeart className="text-primary font-medium text-[20px] group-hover:scale-110 duration-150" />
          </button>
        </div>
      </div>

      <div className="w-[30%] h-full bg-indigo-300">
        <h1>hello world!</h1>
      </div>
    </div>
  );
};

export default Info;
