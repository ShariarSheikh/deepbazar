'use client';

import 'react-phone-number-input/style.css';
import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import shippingAddress from '@/fakeDB/shippingAddress';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { ShippingAddressCreateData } from '@/types/shippingAddress.types';
import Input from '@/components/common/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import Button from '@/components/common/Button';
import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import { useCreateShippingAddressMutation } from '@/redux/services/shippingAddressApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { PATH_USER } from '@/utils/routes';
import { AlertType, showAlert } from '@/redux/features/alertSlice';

const initialState: ShippingAddressCreateData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  division: '',
  district: '',
  thana: '',
  address: '',
};

type FieldName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'division'
  | 'district'
  | 'thana'
  | 'address';

const ShippingAddress = () => {
  const [createShippingAddress, createShippingAddressApi] =
    useCreateShippingAddressMutation();

  const user = useAppSelector(state => state.authSlice.user);
  const [state, setState] = useState<ShippingAddressCreateData>(initialState);
  const [error, setError] = useState<string>('');

  const [selectedDivisionLength, setSelectedDivisionLength] =
    useState<number>(0);
  const [selectedDistrictLength, setSelectedDistrictLength] =
    useState<number>(7);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { redirect } = {
    redirect: searchParams.get('redirect'),
  };

  const inputHandler = (value: string, fieldName: FieldName) => {
    switch (fieldName) {
      case 'firstName':
        setState(prevS => ({
          ...prevS,
          [fieldName]: value,
        }));
        break;

      case 'lastName':
        setState(prevS => ({
          ...prevS,
          [fieldName]: value,
        }));
        break;

      case 'email':
        setState(prevS => ({
          ...prevS,
          [fieldName]: value.trim(),
        }));
        break;

      case 'phone':
        setState(prevS => ({
          ...prevS,
          [fieldName]: value,
        }));

        if (error) setError('');
        break;

      case 'address':
        setState(prevS => ({
          ...prevS,
          [fieldName]: value,
        }));
        break;

      case 'division':
        const index = shippingAddress.findIndex(
          address => address.name === value
        );
        if (index === 0 || index > 0) {
          setSelectedDistrictLength(0);
          setSelectedDivisionLength(index);

          setState(prevS => ({
            ...prevS,
            division: shippingAddress[index].name,
            district: shippingAddress[index].districts[0].name,
          }));
        }

        break;

      case 'district':
        const findIndex = shippingAddress[
          selectedDivisionLength
        ].districts.findIndex(address => address.name === value);

        if (findIndex === 0 || findIndex > 0) {
          setSelectedDistrictLength(findIndex);
          setState(prevS => ({
            ...prevS,
            district:
              shippingAddress[selectedDivisionLength].districts[findIndex].name,
            thana:
              shippingAddress[selectedDivisionLength].districts[findIndex]
                .cities[0].name,
          }));
        }

        break;

      case 'thana':
        const checkIndex = shippingAddress[selectedDivisionLength].districts[
          selectedDistrictLength
        ].cities.findIndex(address => address.name === value);

        if (checkIndex === 0 || checkIndex > 0) {
          setState(prevS => ({
            ...prevS,
            thana:
              shippingAddress[selectedDivisionLength].districts[
                selectedDistrictLength
              ].cities[checkIndex].name,
          }));
        }
        break;

      default:
        break;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPhoneNumber(state.phone))
      return setError('Invalid phone number');

    createShippingAddress({ shippingAddress: state });
    setError('');
  };

  useEffect(() => {
    if (!user?._id) return;

    setState(prevS => ({
      ...prevS,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
    }));
    return () => undefined;
  }, [user]);

  useEffect(() => {
    if (createShippingAddressApi.isLoading) return;

    if (!createShippingAddressApi.data?.success) return;
    setState(initialState);
    dispatch(
      showAlert({
        message: 'Your Shipping Address created',
        type: AlertType.Success,
      })
    );

    if (redirect?.trim()) {
      return router.replace(redirect);
    } else {
      router.replace(PATH_USER.shippingAddress);
    }
  }, [createShippingAddressApi, router, dispatch]);

  return (
    <div className="w-full h-full p-1 md:p-5 bg-white mt-3 md:mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <form onSubmit={onSubmit} className="w-full">
        {error && InputApiErrorMessage(error)}
        {createShippingAddressApi.isError &&
          //@ts-expect-error
          InputApiErrorMessage(createShippingAddressApi.error?.data?.message)}
        <div className="flex items-center justify-between">
          <div className="w-[48%]">
            <Input
              containerClassName="w-full"
              name="firstName"
              placeholder="First Name"
              value={state.firstName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputHandler(event.target.value, 'firstName')
              }
            />
          </div>
          <div className="w-[48%]">
            <Input
              containerClassName="w-full"
              name="lastName"
              placeholder="Last Name"
              value={state.lastName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputHandler(event.target.value, 'lastName')
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          <div className="w-[48%]">
            <PhoneInput
              international
              defaultCountry="BD"
              placeholder="Phone number"
              className="w-full h-[47px] text-sm bg-gray-50 rounded-[8px] border border-gray-300 px-2"
              value={state.phone ?? ''}
              onChange={(value: string) => {
                if (/^\+[0-9]{1,15}$/.test(value)) {
                  inputHandler(value, 'phone');

                  if (error === 'Invalid phone number') {
                    setError('');
                  }
                } else {
                  setError('Invalid phone number');
                }
              }}
            />
          </div>
          <div className="w-[48%]">
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
              value={state.division}
              options={shippingAddress.map(address => address.name)}
              renderInput={params => (
                <TextField placeholder="Division" {...params} />
              )}
              //@ts-expect-error
              onChange={(_event, value: string) =>
                inputHandler(value, 'division')
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          <div className="w-[48%]">
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
              value={state.district}
              options={shippingAddress[selectedDivisionLength].districts.map(
                address => address.name
              )}
              renderInput={params => (
                <TextField placeholder="District" {...params} />
              )}
              //@ts-expect-error
              onChange={(_event, value: string) =>
                inputHandler(value, 'district')
              }
            />
          </div>
          <div className="w-[48%]">
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
              value={state.thana}
              options={shippingAddress[selectedDivisionLength].districts[
                selectedDistrictLength
              ].cities.map(address => address.name)}
              renderInput={params => (
                <TextField placeholder="Thana" {...params} />
              )}
              //@ts-expect-error
              onChange={(_event, value: string) => inputHandler(value, 'thana')}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          <div className="w-[48%]">
            <Input
              containerClassName="w-full"
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputHandler(event.target.value, 'address')
              }
            />
          </div>
          <div className="w-[48%]">
            <Button
              disabled={createShippingAddressApi.isLoading}
              isLoading={createShippingAddressApi.isLoading}
              loadingColor="white"
              loadingSpinnerSize={40}
              type="submit"
              className="h-[41px] w-full rounded-[6px] flex items-center justify-center mt-[5px] bg-primary text-white font-medium active:scale-95 duration-150"
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
