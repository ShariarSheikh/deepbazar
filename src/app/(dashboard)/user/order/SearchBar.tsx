import Input from '@/components/common/Input';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar(): JSX.Element {
  return (
    <div className="w-full flex items-center h-[56px] border borderColor rounded-md relative">
      <AiOutlineSearch className="text-gray-500 w-6 h-6 ml-4" />
      <Input
        type="text"
        className="w-full h-full border-none outline-none text-sm text-gray-600"
        placeholder="Search by order Id"
      />
    </div>
  );
}

export default SearchBar;
