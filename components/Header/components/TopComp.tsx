import { GoLocation } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

const TopComp = () => {
  return (
    <div className="w-full h-12 py-5 flex items-center border">
      {/* first div logo div */}
      <div className="pr-5">
        <p className="cursor-pointer font-bold text-2xl text-gray-800">
          DeepBazar
        </p>
      </div>
      {/* second div */}
      <div className="flex items-center cursor-pointer mr-7">
        <GoLocation className="mr-1 text-gray-500" />
        <div className="flex flex-col">
          <span className="text-gray-600 text-[12px] leading-none">
            Delivery To
          </span>
          <span className="font-semibold text-sm leading-none text-gray-800">
            Kuliarchor Thana
          </span>
        </div>
      </div>
      {/* third div */}
      <div className="flex-1">
        <form className="w-full flex justify-between h-[42px]">
          <div className="w-10 flex justify-center items-center border">
            All
          </div>
          <input
            className="flex-1 border pl-3 outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="w-10 flex items-center justify-center border">S</div>
        </form>
      </div>
      {/* four div */}
      <div className="ml-5">
        <div className="leading-none text-gray-700 text-sm">Language</div>
        <div className="leading-none text-gray-700 font-semibold">English</div>
      </div>
      {/* five div */}
      <div className="ml-5">
        <div className="leading-none text-gray-700">017293</div>
        <div className="leading-none text-gray-700 font-semibold text-sm">
          Contact Us
        </div>
      </div>
      {/* six div */}
      <div className="flex ">
        <div>
          <FiShoppingCart />
        </div>
        <div></div>
        <div>a</div>
      </div>
    </div>
  );
};

export default TopComp;
