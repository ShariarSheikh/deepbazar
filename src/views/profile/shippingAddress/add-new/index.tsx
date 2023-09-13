/* eslint-disable @typescript-eslint/ban-ts-comment */
import shippingAddress from '@/fakeDB/shippingAddress';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { FC, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
//--------------------------------------------
//--------------------------------------------

const AddNewShippingAddress: FC = () => {
  const [selectedDivisionLength, setSelectedDivisionLength] =
    useState<number>(0);
  const [selectedDistrictLength, setSelectedDistrictLength] =
    useState<number>(7);
  const [selectedThanaLength, setSelectedThanaLength] = useState<number>(0);

  //
  const selectDivisionHandler = (division: string) => {
    const findIndex = shippingAddress.findIndex(
      address => address.name === division
    );
    if (findIndex === 0 || findIndex > 0) {
      setSelectedDistrictLength(0);
      setSelectedDivisionLength(findIndex);
    }
  };

  const selectDistrictHandler = (division: string) => {
    const findIndex = shippingAddress[
      selectedDivisionLength
    ].districts.findIndex(address => address.name === division);

    (findIndex === 0 || findIndex > 0) && setSelectedDistrictLength(findIndex);
  };

  const selectThanaHandler = (thana: string) => {
    const findIndex = shippingAddress[selectedDivisionLength].districts[
      selectedDistrictLength
    ].cities.findIndex(address => address.name === thana);

    (findIndex === 0 || findIndex > 0) && setSelectedThanaLength(findIndex);
  };

  return (
    <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
      <header className="flex items-center space-x-2 text-gray-600 font-medium">
        <Link
          href="/user/shipping-address"
          className="hover:underline text-primary"
        >
          <h1>My Shipping Address</h1>
        </Link>
        <div className="flex items-center">
          <IoIosArrowForward />
          <span className="ml-[3px]">Add New</span>
        </div>
      </header>

      <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <form className="w-full">
          <div className="flex items-center justify-between">
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-[6px] focus:outline-blue-500 block w-full p-2.5"
                placeholder="Shariar"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-[6px] focus:outline-blue-500 block w-full p-2.5"
                placeholder="Sheikh"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-[30px]">
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-[6px] focus:outline-blue-500 block w-full p-2.5"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select Division
              </label>

              <Autocomplete
                id="division-id"
                sx={{
                  '& .MuiInputBase-root': {
                    width: '100%',
                    maxHeight: 41,
                    borderRadius: '6px',
                    background: '#f9fafb',
                    padding: '2px',
                    ':hover': {
                      outline: 'none',
                      border: 'none',
                    },
                  },
                }}
                defaultValue={shippingAddress[0].name}
                value={shippingAddress[selectedDivisionLength].name}
                options={shippingAddress.map(address => address.name)}
                renderInput={params => <TextField {...params} />}
                //@ts-expect-error
                onChange={(_event, value: string) =>
                  selectDivisionHandler(value)
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-[30px]">
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select District
              </label>
              <Autocomplete
                id="district-id"
                sx={{
                  '& .MuiInputBase-root': {
                    width: '100%',
                    maxHeight: 41,
                    borderRadius: '6px',
                    background: '#f9fafb',
                    padding: '2px',
                    ':hover': {
                      outline: 'none',
                      border: 'none',
                    },
                  },
                }}
                value={
                  shippingAddress[selectedDivisionLength].districts[
                    selectedDistrictLength
                  ].name
                }
                options={shippingAddress[selectedDivisionLength].districts.map(
                  address => address.name
                )}
                renderInput={params => <TextField {...params} />}
                //@ts-expect-error
                onChange={(_event, value: string) =>
                  selectDistrictHandler(value)
                }
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select Thana
              </label>
              <Autocomplete
                id="thana-id"
                sx={{
                  '& .MuiInputBase-root': {
                    width: '100%',
                    maxHeight: 41,
                    borderRadius: '6px',
                    background: '#f9fafb',
                    padding: '2px',
                    ':hover': {
                      outline: 'none',
                      border: 'none',
                    },
                  },
                }}
                value={
                  shippingAddress[selectedDivisionLength].districts[
                    selectedDistrictLength
                  ].cities[selectedThanaLength].name
                }
                options={shippingAddress[selectedDivisionLength].districts[
                  selectedDistrictLength
                ].cities.map(address => address.name)}
                renderInput={params => <TextField {...params} />}
                //@ts-expect-error
                onChange={(_event, value: string) => selectThanaHandler(value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-[30px]">
            <div className="w-[48%]">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-[6px] focus:outline-blue-500 block w-full p-2.5"
                placeholder="Street, Apartment, unit, building, floor, etc"
                required
              />
            </div>
            <div className="w-[48%] pt-[24px]">
              <button className="h-[41px] w-full rounded-[6px] flex items-center justify-center mt-[5px] bg-primary text-white font-medium active:scale-95 duration-150">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewShippingAddress;
