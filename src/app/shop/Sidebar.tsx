import CheckBox from '@/components/common/CheckBox';
import Input from '@/components/common/Input';
import { categories } from '@/views/home/CategorySection';
import Image from 'next/image';
import { BsArrowRight, BsCart2 } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div className="bg-white pt-4 px-4 rounded-[6px] border border-gray-200 border-dashed mb-4">
      <h1 className="text-lg mb-[16px] font-medium">Category</h1>
      <ul className="border-b border-gray-200">
        {categories.map(category => (
          <li
            key={category.id}
            className="mb-3 flex items-center h-[20px] text-sm"
          >
            <CheckBox name={category.catName} isChecked onClick={() => {}} />
            <span className="ml-[8px]">{category.catName}</span>
          </li>
        ))}
      </ul>

      <h1 className="text-lg mt-[30px] mb-[16px] font-medium">Price</h1>
      <div className="w-full flex items-center justify-between h-8">
        <Input
          placeholder="Min price"
          containerClassName="max-w-[47%] h-full"
          className="h-full w-full bg-white border border-gray-200 rounded-[6px]"
        />
        <Input
          placeholder="Max price"
          containerClassName="max-w-[47%] h-full"
          className="h-full w-full bg-white border border-gray-200 rounded-[6px]"
        />
      </div>
      <ul className="mt-4">
        {priceRangeList.map(range => (
          <li
            key={range.id}
            className="mb-3 flex items-center h-[20px] text-sm"
          >
            <CheckBox
              name={range.text}
              isChecked={range.isChecked}
              onClick={() => {}}
            />
            <span className="ml-[8px]">{range.text}</span>
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
    isChecked: true,
    text: 'All Price',
    isCustom: true,
    startingPrice: 0,
    endPrice: 0,
  },
  {
    id: 2,
    isChecked: false,
    text: 'Under $20',
    isCustom: false,
    startingPrice: 0,
    endPrice: 20,
  },
  {
    id: 3,
    isChecked: false,
    text: '$25 to $100',
    isCustom: false,
    startingPrice: 25,
    endPrice: 100,
  },
  {
    id: 4,
    isChecked: false,
    text: '$100 to $300',
    isCustom: false,
    startingPrice: 100,
    endPrice: 300,
  },
  {
    id: 5,
    isChecked: false,
    text: '$300 to $500',
    isCustom: false,
    startingPrice: 300,
    endPrice: 500,
  },
  {
    id: 6,
    isChecked: false,
    text: '$500 to $1000',
    isCustom: false,
    startingPrice: 500,
    endPrice: 1000,
  },
  {
    id: 7,
    isChecked: false,
    text: '$1000 to $10000',
    isCustom: false,
    startingPrice: 1000,
    endPrice: 10000,
  },
];
