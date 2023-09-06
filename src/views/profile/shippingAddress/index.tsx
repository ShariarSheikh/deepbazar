import { FC } from 'react';
import { CiLocationOn } from 'react-icons/ci';

const ShippingAddress: FC = () => {
  return (
    <div className="max-w-full px-[34px] py-0">
      <header className="">
        <h1 className="text-gray-600 font-medium">My Shipping Address</h1>
      </header>

      <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-md">
        {/* if not wishlist_item exits  */}

        <div className="flex items-center flex-wrap">
          <div className="w-[48%]"></div>
        </div>

        {1 > 2 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <CiLocationOn className="font-medium" />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px]">
              You Haven't Added Shipping Address
            </h1>
            <p className="text-[#757575] text-center text-sm mt-2.5">
              Please add your shipping address!
            </p>
            <button className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200">
              Add Shipping Address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;
