import { FC } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const SponsoredItem: FC = () => {
  return (
    <div className="h-[424px] w-full mx-auto max-w-[1201px] bg-[#f3f9fb] flex items-center justify-between px-[40px] rounded-[30px]">
      <div className="max-w-[50%] w-full">
        <h1 className="text-[48px] font-bold">Macbook Pro</h1>
        <p className="text-[24px]">
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <button className="relative uppercase active:scale-95 duration-150 flex items-center space-x-3 mt-[21px] border rounded-[6px] h-[48px] px-[16px] group">
          <p>Shop Now</p>
          <BsArrowRightShort className="group-hover:animate-bounce" />
        </button>
      </div>
      <div className="w-[400px] h-[400px] relative">
        <img
          className="w-full h-full"
          src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf85336ce58cf03_instax%20mini%2011-min.png"
          alt="product image"
        />
      </div>
    </div>
  );
};

export default SponsoredItem;
