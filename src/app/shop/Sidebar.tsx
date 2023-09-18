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
    </div>
  );
}
