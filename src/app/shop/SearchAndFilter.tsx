import Input from '@/components/common/Input';
import { ChangeEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const SearchAndFilter = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  // INPUT HANDLERS------------------------------------------------------------
  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <div className="h-12 flex items-center justify-between bg-white rounded-[6px">
        <form className="w-full max-w-[50%] border-b border-gray-200 flex items-center justify-between h-[48px] bg-transparent relative">
          <Input
            className="flex-1 pl-[15px] h-full text-[14px] bg-transparent z-10 border-none"
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
      <div className="mt-4 w-full h-[48px] bg-[#0c648bc7] text-white flex justify-between items-center px-3 rounded-[6px]">
        <div className="flex items-center text-sm text-[#d4e9ff]">
          <h2 className="mr-4">Active Filter:</h2>
          <button className="flex items-center space-x-2 cursor-pointer bg-[#0c648b] hover:bg-[#2f7d9f] border border-[#72acc57a] active:scale-95 duration-150 rounded-[6px] px-3 py-[5px] mr-3">
            <span>Watch</span> <AiOutlineClose />
          </button>
          <button className="flex items-center space-x-2 cursor-pointer bg-[#0c648b] hover:bg-[#2f7d9f] border border-[#72acc57a] active:scale-95 duration-150 rounded-[6px] px-3 py-[5px]">
            <span>$300 to $500</span> <AiOutlineClose />
          </button>
        </div>

        <div className="flex items-center space-x-1 text-sm">
          <h3 className="font-medium">342</h3>
          <p className="text-[#d8eded]">Result found.</p>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
