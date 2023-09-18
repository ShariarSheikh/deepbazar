import Input from '@/components/common/Input';
import { ChangeEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchAndFilter = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  // INPUT HANDLERS------------------------------------------------------------
  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <div className="h-12 flex items-center justify-between bg-white rounded-[6px">
      <form className="w-full max-w-[50%] border-b border-gray-200 flex items-center justify-between h-[48px] bg-transparent relative">
        <Input
          className="flex-1 pl-[36px] h-full text-[14px] bg-transparent z-10 border-none"
          type="text"
          placeholder="Search product name and more..."
          value={searchInput}
          onChange={onSearchHandler}
        />

        <div className="w-[40px] h-[20px] relative">
          <button
            type="button"
            className="w-10 flex items-center justify-center cursor-pointer group"
          >
            <FiSearch className="text-primary" />
          </button>
        </div>
      </form>
      <div className="h-full flex items-center text-sm">
        <h1>Sort by:</h1>
        <select className="h-full rounded-[6px] bg-white outline-none border border-gray-200 px-3 flex items-center justify-center ml-3">
          <option value="most-popular">Most Popular</option>
          <option value="regular">Regular</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
