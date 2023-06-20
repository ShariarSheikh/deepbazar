const MenuList = () => {
  return (
    <div className="flex-grow lg:pt-4 w-2/4 sm:w-[30%] md:w-1/4">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl text-gray-300">
          Menu
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base text-gray-300 font-medium w-auto">
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Home
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            All Products
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            New Arrivals
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Top Selling
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Customer Services
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Help Center
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
