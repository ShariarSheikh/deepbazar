import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({ segment = '' }: { segment: string | null }) => {
  return (
    <div className="flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-gray-600">
      <Link href="/">
        <div className="flex items-center">
          <AiFillHome /> <span className="mt-[3px] ml-[3px]">Home</span>
        </div>
      </Link>

      <Link href={`/user`}>
        <div className="flex items-center">
          <IoIosArrowForward />
          <span className="mt-[3px] ml-[3px]">User</span>
        </div>
      </Link>

      {segment && (
        <Link href={`/user/${segment}`}>
          <div className="flex items-center text-primary">
            <IoIosArrowForward />
            <span className="mt-[3px] ml-[3px]">{segment}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Breadcrumb;
