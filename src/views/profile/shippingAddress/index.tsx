import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BiPlus } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';

const ShippingAddress: FC = () => {
  const route = useRouter();

  const addNewHandler = () => route.push('/profile/shipping-address/add-new');
  return (
    <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
      <header className="flex items-center justify-between">
        <h1 className="text-gray-600 font-medium">My Shipping Address</h1>
        <button
          onClick={addNewHandler}
          className="px-[16px] py-[6px] border border-primary flex items-center rounded-[6px] text-primary hover:text-white font-bold text-sm hover:bg-primary active:scale-95 duration-200"
        >
          <BiPlus className="ml-2" />
          <span>Add New</span>
        </button>
      </header>

      <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        {/* if not wishlist_item exits  */}

        <div className="flex items-center flex-wrap justify-between gap-y-4">
          <div className="w-[48%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="w-full flex items-center justify-between mt-[20px]">
              <button className="text-green-600 text-sm font-medium">
                Active
              </button>
              <div className="flex items-center justify-end space-x-4 text-sm">
                <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                  <FiEdit /> <span>Edit</span>
                </button>
                <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                  <MdDeleteOutline /> <span>Delete</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[49%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="w-full flex items-center justify-between mt-[20px]">
              <button className="text-yellow-600 text-sm font-medium">
                Click To Active
              </button>
              <div className="flex items-center justify-end space-x-4 text-sm">
                <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                  <FiEdit /> <span>Edit</span>
                </button>
                <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                  <MdDeleteOutline /> <span>Delete</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[49%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="w-full flex items-center justify-between mt-[20px]">
              <button className="text-yellow-600 text-sm font-medium">
                Click To Active
              </button>
              <div className="flex items-center justify-end space-x-4 text-sm">
                <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                  <FiEdit /> <span>Edit</span>
                </button>
                <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                  <MdDeleteOutline /> <span>Delete</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[49%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="w-full flex items-center justify-between mt-[20px]">
              <button className="text-yellow-600 text-sm font-medium">
                Click To Active
              </button>
              <div className="flex items-center justify-end space-x-4 text-sm">
                <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                  <FiEdit /> <span>Edit</span>
                </button>
                <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                  <MdDeleteOutline /> <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
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
