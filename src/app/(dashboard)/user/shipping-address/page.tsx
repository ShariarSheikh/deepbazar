'use client';
import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import { LoadingPage } from '@/components/common/loading';
import {
  useDeleteShippingAddressMutation,
  useGetUserAllShippingAddressQuery,
  useMakeShippingAddressDefaultMutation,
} from '@/redux/services/shippingAddressApi';
import { PATH_USER } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';

//-------------------------------------

//-------------------------------------

const Page = () => {
  const getShippingAddress = useGetUserAllShippingAddressQuery();

  const [deleteShippingAddress, deleteShippingAddressApi] =
    useDeleteShippingAddressMutation();

  const [makeDefaultShippingAddress, makeDefaultShippingAddressApi] =
    useMakeShippingAddressDefaultMutation();

  const [isDeleteAddress, setIsDeleteAddress] = useState<{
    open: boolean;
    deleteId: string;
  }>({
    open: false,
    deleteId: '',
  });

  const route = useRouter();
  const addNewHandler = () => route.push(PATH_USER.newShippingAddress);

  const deleteHandler = () =>
    deleteShippingAddress({ shippingAddressId: isDeleteAddress.deleteId });

  const makeDefaultHandler = (id: string) =>
    makeDefaultShippingAddress({ shippingAddressId: id });

  useEffect(() => {
    if (deleteShippingAddressApi.isLoading) return;
    if (!deleteShippingAddressApi.data?.data._id) return;

    setIsDeleteAddress({
      open: false,
      deleteId: '',
    });
    getShippingAddress.refetch();
  }, [deleteShippingAddressApi]);

  useEffect(() => {
    if (makeDefaultShippingAddressApi.isLoading) return;
    if (!makeDefaultShippingAddressApi.data?.data._id) return;

    getShippingAddress.refetch();
  }, [makeDefaultShippingAddressApi]);

  return (
    <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-3">
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

      <div className="w-full h-full pt-1 md:p-5 bg-white mt-3 rounded-[6px]">
        {getShippingAddress.isLoading && <LoadingPage />}

        {typeof getShippingAddress.data !== 'undefined' &&
          getShippingAddress.data?.data.length > 0 && (
            <>
              {getShippingAddress.data.data.map(address => (
                <div
                  key={address._id}
                  className="flex flex-col items-center justify-between gap-y-4 mb-[15px]"
                >
                  <div
                    style={{
                      borderColor: address.isDefault ? '#17a55c' : '#ebebeb',
                    }}
                    className="w-full bg-white border rounded-[6px] p-2 min-h-[120px]"
                  >
                    <h1 className="text-base">
                      Name: {address.firstName} {address.lastName}
                    </h1>
                    <p className="text-sm text-[#757575] line-clamp-1">
                      {address.phone}, {address.email}
                    </p>
                    <p className="text-sm text-[#757575] line-clamp-2">
                      {address.address}, {address.thana}, {address.district},
                      {address.division}
                    </p>
                    <div className="w-full flex items-center justify-between mt-[20px]">
                      {address.isDefault ? (
                        <span className="text-green-600 text-sm font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="text-red-600 text-sm font-medium">
                          Disabled
                        </span>
                      )}
                      <div className="flex items-center justify-between space-x-4 text-sm">
                        <Button
                          disabled={deleteShippingAddressApi.isLoading}
                          isLoading={deleteShippingAddressApi.isLoading}
                          loadingColor="white"
                          loadingSpinnerSize={40}
                          onClick={() =>
                            setIsDeleteAddress({
                              open: true,
                              deleteId: address._id,
                            })
                          }
                          className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150"
                        >
                          <MdDeleteOutline /> <span>Delete</span>
                        </Button>
                        {!address.isDefault && (
                          <Button
                            disabled={makeDefaultShippingAddressApi.isLoading}
                            isLoading={makeDefaultShippingAddressApi.isLoading}
                            loadingColor="white"
                            loadingSpinnerSize={40}
                            onClick={() => makeDefaultHandler(address._id)}
                            className="flex items-center text-green-600 space-x-1 active:scale-95 duration-150"
                          >
                            <AiFillEdit /> <span>Make Default</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <CustomModal
                boxStyle={{ width: 350 }}
                onClose={() =>
                  setIsDeleteAddress({
                    open: false,
                    deleteId: '',
                  })
                }
                isOpen={isDeleteAddress.open}
              >
                <div className="w-[300px] flex flex-col justify-end">
                  <div className="w-full flex flex-col justify-center">
                    <p className="text-gray-600 text-sm py-2">
                      Delete Shipping Address!
                    </p>
                    <Button
                      disabled={deleteShippingAddressApi.isLoading}
                      isLoading={deleteShippingAddressApi.isLoading}
                      loadingColor="white"
                      loadingSpinnerSize={40}
                      onClick={deleteHandler}
                      className="mt-[4px] font-semibold text-white rounded-[6px] h-[32px] w-full bg-red-500 active:scale-95 duration-200"
                    >
                      Confirm Delete
                    </Button>
                  </div>
                </div>
              </CustomModal>
            </>
          )}

        {getShippingAddress.data?.data.length === 0 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <CiLocationOn className="font-medium" />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px] text-center">
              You Haven't Added Shipping Address
            </h1>
            <p className="text-[#757575] text-center text-sm mt-2.5">
              Please add your shipping address!
            </p>
            <button
              onClick={() => route.push(PATH_USER.newShippingAddress)}
              className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200"
            >
              Add Shipping Address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
