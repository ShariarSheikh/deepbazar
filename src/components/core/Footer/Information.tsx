const Information = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 sm:mt-0 w-2/4 sm:w-[30%] md:w-1/4">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl text-gray-300">
          Information
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base text-gray-300 font-medium w-auto">
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Terms & Conditions
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            FAQ
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Authenticity
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Delivery & Returns
          </li>
          <li className="mb-2 cursor-pointer hover:underline duration-200">
            Gift Cards
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
