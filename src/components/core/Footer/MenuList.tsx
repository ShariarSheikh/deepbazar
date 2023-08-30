import Link from 'next/link';

const MenuList = () => {
  return (
    <div className="flex-grow lg:pt-4 w-2/4 sm:w-[30%] md:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">Menu</p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <Link href="/">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Home
            </li>
          </Link>
          <Link href="/all-products">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              All Products
            </li>
          </Link>
          <Link href="/all-offers">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              All Offers
            </li>
          </Link>
          <Link href="/track-order">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Track Order
            </li>
          </Link>
          <Link href="/cart">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Cart
            </li>
          </Link>
          <Link href="/auth">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Sign Up/Sign In
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
