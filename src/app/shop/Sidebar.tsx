import CheckBox from '@/components/common/CheckBox';
import Input from '@/components/common/Input';
import { categories } from '@/views/home/CategorySection';

export default function Sidebar() {
  return (
    <div className="bg-white pt-4 px-4 rounded-[6px] border border-gray-200 border-dashed">
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
