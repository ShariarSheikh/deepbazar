import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({ category = '' }: { category: string | null }) => {
  return (
    <div className="flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-gray-600">
      <Link href="/">
        <div className="flex items-center">
          <AiFillHome /> <span className="mt-[3px] ml-[3px]">Home</span>
        </div>
      </Link>

      <Link href={`/shop`}>
        <div className="flex items-center">
          <IoIosArrowForward />
          <span className="mt-[3px] ml-[3px]">Shop</span>
        </div>
      </Link>

      {category && (
        <div className="flex items-center text-primary max-w-[80px]">
          <IoIosArrowForward />
          <span className="mt-[3px] ml-[3px] line-clamp-1">{category}</span>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
