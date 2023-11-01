import CheckBox from '@/components/common/CheckBox';
import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { BsArrowRight, BsCart2 } from 'react-icons/bs';

export default function Sidebar() {
  const { data, isSuccess, isLoading } = useGetCategoryQuery();
  const [priceLength, setPriceLength] = useState<number>(0);
  const [prices, setPrices] = useState<{
    startPrice: number;
    endPrice: number;
  }>({
    startPrice: 0,
    endPrice: 0,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('category');

  const categoryLoadingSkeleton = (
    <>
      <Skeleton width={'100%'} height={20} className="mb-2" />
      <Skeleton width={'100%'} height={20} className="mb-2" />
      <Skeleton width={'100%'} height={20} className="mb-2" />
      <Skeleton width={'100%'} height={20} className="mb-2" />
      <Skeleton width={'100%'} height={20} className="mb-2" />
    </>
  );

  // INPUT HANDLER
  const inputPriceChangeHandler = (
    field: 'startPrice' | 'endPrice',
    value: string
  ) => {
    const input = parseFloat(value);

    if (isNaN(input)) return;

    setPrices(prevS => ({
      ...prevS,
      [field]: Number(input),
    }));
  };

  // PRICE INPUT HANDLER
  const priceInputFilterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const queryParams = new URLSearchParams(window.location.search);

    if (
      isNaN(prices.startPrice) ||
      isNaN(prices.endPrice) ||
      prices.startPrice < 0 ||
      prices.endPrice < 0
    )
      return;

    queryParams.set('startPrice', prices.startPrice.toString());
    queryParams.set('endPrice', prices.endPrice.toString());
    router.replace(`/shop?${queryParams.toString()}`);
  };

  // CATEGORY SELECT HANDLER
  const selectCategoryHandler = (category: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (category === categoryName) {
      queryParams.delete('category');
    } else {
      queryParams.set('category', category);
    }
    router.replace(`/shop?${queryParams.toString()}`);
  };

  // SELECT PRE CREATED PRICE RANGE
  const priceOnSelectFilterHandler = (priceListLength: number) => {
    const queryParams = new URLSearchParams(window.location.search);

    // IF CLICK THE SAME PRICE AGAIN THEN REMOVE IT FROM QUERIES
    if (priceLength === priceListLength) {
      setPriceLength(0);
      queryParams.delete('startPrice');
      queryParams.delete('endPrice');

      return router.replace(`/shop?${queryParams}`);
    } else {
      setPriceLength(priceListLength);

      // IF USER SELECT ALL PRICE , THEN REMOVE PRICE QUERIES
      if (priceRangeList[priceListLength].text === 'All Price') {
        queryParams.delete('startPrice');
        queryParams.delete('endPrice');

        return router.replace(`/shop?${queryParams}`);
      }

      queryParams.set(
        'startPrice',
        priceRangeList[priceListLength].startPrice.toString()
      );
      queryParams.set(
        'endPrice',
        priceRangeList[priceListLength].endPrice.toString()
      );

      router.replace(`/shop?${queryParams.toString()}`);
    }
  };

  return (
    <div className="bg-white pt-4 px-4 rounded-[6px] border border-gray-200 border-dashed mb-4 max-w-[280px]">
      <h1 className="text-lg mb-[16px] font-medium">Category</h1>
      <ul className="border-b border-gray-200">
        {isLoading && categoryLoadingSkeleton}

        {isSuccess &&
          data.data.map(category => (
            <li
              key={category._id}
              className="mb-3 flex items-center h-[20px] text-sm"
            >
              <CheckBox
                name={category.name}
                isChecked={
                  categoryName
                    ? categoryName.trim().toLowerCase() ===
                      category.name.toLowerCase()
                    : false
                }
                onClick={() => selectCategoryHandler(category.name)}
              />
              <span className="ml-[8px]">{category.name}</span>
            </li>
          ))}
      </ul>

      <h1 className="text-lg mt-[30px] mb-[16px] font-medium">Price</h1>
      <div className="w-full flex items-center justify-between h-8">
        <Input
          placeholder="Min price"
          containerClassName="max-w-[47%] h-full"
          type="number"
          min={1}
          value={prices.startPrice === 0 ? '' : prices.startPrice}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            inputPriceChangeHandler('startPrice', event.target.value)
          }
          onKeyDown={priceInputFilterHandler}
          className="h-full w-full bg-white border border-gray-200 rounded-[6px]"
        />
        <Input
          placeholder="Max price"
          containerClassName="max-w-[47%] h-full"
          type="number"
          min={10}
          value={prices.endPrice === 0 ? '' : prices.endPrice}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            inputPriceChangeHandler('endPrice', event.target.value)
          }
          onKeyDown={priceInputFilterHandler}
          className="h-full w-full bg-white border border-gray-200 rounded-[6px]"
        />
      </div>
      <ul className="mt-4">
        {priceRangeList.map((price, i) => (
          <li
            key={price.id}
            className="mb-3 flex items-center h-[20px] text-sm"
          >
            <CheckBox
              name={price.text}
              isChecked={i === priceLength}
              onClick={() => priceOnSelectFilterHandler(i)}
            />
            <span className="ml-[8px]">{price.text}</span>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-[264px] h-[438px] pt-4 rounded-[6px] border border-gray-200 px-2 mb-2">
        <div className="w-full h-[164px] relative rounded-[6px] overflow-hidden">
          <Image
            src="https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?w=740&t=st=1693248758~exp=1693249358~hmac=4f663d5220a3a056151020ffef6db37cb8040c6724db5acd0a2047ad4b08bb9c"
            alt="product image"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="mt-6 text-xl font-semibold line-clamp-2">
          Heavy on Features. Light on Price.
        </h1>
        <div className="h-10 w-full flex items-center justify-center space-x-2 mt-4">
          <span>Only for:</span>
          <div className="h-full bg-primary text-white flex items-center justify-center px-3 rounded-[6px]">
            $198 USD
          </div>
        </div>
        <button className="mt-4 flex items-center justify-center space-x-2 text-sm active:scale-95 duration-150 font-medium w-full h-[38px] rounded-[6px] border border-[#008ECC] hover:bg-primary text-primary hover:text-white">
          <BsCart2 className="group-hover:text-white font-medium text-[20px] group-hover:scale-110 duration-150" />
          <span className="pt-[4px]">Add to Cart</span>
        </button>
        <button className="mt-2 flex items-center justify-center space-x-2 text-sm active:scale-95 duration-150 font-medium w-full h-[38px] rounded-[6px] border border-[#ffa41c] hover:bg-[#ffa41c] text-[#ffa41c] hover:text-black">
          <span className="">View Details</span>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

const priceRangeList = [
  {
    id: 1,
    text: 'All Price',
    startPrice: 1,
    endPrice: 0,
  },
  {
    id: 2,
    text: 'Under $20',
    startPrice: 1,
    endPrice: 20,
  },
  {
    id: 3,
    text: '$25 to $100',
    startPrice: 25,
    endPrice: 100,
  },
  {
    id: 4,
    text: '$100 to $300',
    startPrice: 100,
    endPrice: 300,
  },
  {
    id: 5,
    text: '$300 to $500',
    startPrice: 300,
    endPrice: 500,
  },
  {
    id: 6,
    text: '$500 to $1000',
    startPrice: 500,
    endPrice: 1000,
  },
  {
    id: 7,
    text: '$1000 to $10000',
    startPrice: 1000,
    endPrice: 10000,
  },
];
