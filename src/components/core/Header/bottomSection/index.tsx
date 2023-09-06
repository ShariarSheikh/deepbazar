import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { categoryList } from '..';

const navigationLinks: Array<{
  id: number;
  name: string;
  link: string;
}> = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 3,
    name: 'Customer Services',
    link: '/services',
  },
  {
    id: 4,
    name: 'Help Center',
    link: '/help',
  },
];

//----------------------------------------

//----------------------------------------
const RenderDropdownLinks = () => {
  const open = false;

  return (
    <div
      className={`w-full min-w-[340px] max-w-[768px] z-40 pr-4 2xl:px-0 absolute top-10 left-0 shadow-md cursor-default`}
    >
      <ul
        className={`w-full bg-gray-50 transition-all ${
          open ? 'min-h-[280px]' : 'h-0'
        } duration-150`}
      >
        {categoryList?.slice(1).map(({ id, category, link }) => (
          <Link key={id} href={`/shop?cat=${link}&keyword=""`}>
            <li
              className={`flex-grow px-2 group h-10 cursor-pointer hover:text-gray-500
                 border-b border-transparent hover:border-gray-300
                 w-full flex justify-between items-center relative ${
                   open ? 'visible' : 'hidden'
                 }`}
            >
              <p className="font-roboto">{category}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const BottomSection = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full hidden lg:block px-4 2xl:px-0 h-10 py-6 border-b border-gray-300">
      <div className="w-full h-full flex items-center justify-between min-w-[600px] relative">
        {/* left navigation div */}
        <div className="flex h-full items-center">
          {navigationLinks.slice(0, 2).map(({ id, name, link }) => (
            <Link
              href={link}
              key={id}
              passHref
              className={`font-roboto font-medium text-sm text-gray-800 cursor-pointer
                transition duration-200 p-2 border-b-2 border-transparent hover:border-gray-900 ${
                  pathname === link ? 'border-b-2 border-gray-900' : ''
                }`}
            >
              {name}
            </Link>
          ))}
          <div
            className="flex h-10 items-center font-roboto font-medium text-sm text-gray-800
               cursor-pointer p-2 relative"
            //   onMouseEnter={() => dispatch(showCategory())}
            //   onMouseLeave={() => dispatch(hideCategory())}
          >
            Categories <RiArrowDropDownLine className="text-xl" />
            <RenderDropdownLinks />
          </div>
          {/* .... */}
          {navigationLinks.slice(2, 4).map(({ id, name, link }) => (
            <Link
              href={link}
              key={id}
              passHref
              className="font-roboto font-medium text-sm text-gray-800 cursor-pointer transition duration-200 p-2"
            >
              {name}
            </Link>
          ))}
        </div>
        {/* Any random things */}
        <div className="cursor-pointer pr-5 md:pr-0 font-roboto font-medium text-sm text-gray-800">
          <Link href={'/today-deals'}> Today&apos;s Deals</Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomSection;
