/* eslint-disable no-new */
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface IProps {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
  isSticky: boolean;
}

export default function NavHeader({ setShowSearchBar, isSticky }: IProps) {
  return (
    <div
      className={`duration-150 backdrop-blur-sm bg-white/80 ${
        isSticky ? 'h-[65px]' : 'h-[88px]'
      } w-full flex items-center justify-between relative z-50 text-gray-800`}
    >
      <div
        role="presentation"
        onClick={() => setShowSearchBar(prevState => !prevState)}
        className="w-[36px] h-[36px] ml-10 rounded-full hover:bg-primaryLight hover:bg-opacity-[8%] flex duration-200 transition-all active:scale-95 items-center justify-center cursor-pointer [&>svg]:hover:scale-110"
      >
        <AiOutlineSearch className="w-[20px] h-[20px] text-gray-600" />
      </div>

      <div className="h-full space-x-4 flex items-center pr-5">
        <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
          <div className="h-[40px] w-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden relative">
            {true ? (
              <Image
                fill
                src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="user picture"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary text-white font-medium flex items-center justify-center">
                {`Shariar Sheikh`.charAt(0)}
              </div>
            )}
          </div>
          <p className="pl-[5px] text-[16px] text-start font-bold text-[#666666] w-full max-w-[120px] line-clamp-1">
            Shariar Sheikh
          </p>
        </button>
      </div>
    </div>
  );
}
