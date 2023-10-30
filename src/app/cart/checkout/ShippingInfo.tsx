import Button from '@/components/common/Button';
import { useAppSelector } from '@/redux/hooks';
import { useGetUserAllShippingAddressQuery } from '@/redux/services/shippingAddressApi';
import { PATH_USER } from '@/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ShippingInfo = () => {
  const getShippingAddress = useGetUserAllShippingAddressQuery();

  const cart = useAppSelector(state => state.cartSlice);
  const user = useAppSelector(state => state.authSlice.user);
  const [isAllowToCheckout, setIsAllowToCheckout] = useState<boolean>(false);

  // const router = useRouter();
  const pathname = usePathname();

  const gotToCheckoutHandler = () => {};

  useEffect(() => {
    getShippingAddress.refetch();
  }, [pathname]);

  useEffect(() => {
    if (getShippingAddress.isLoading) return;

    if (
      typeof getShippingAddress.data === 'undefined' ||
      getShippingAddress.data.data?.length === 0
    )
      return undefined;

    setIsAllowToCheckout(true);
  }, [getShippingAddress.isLoading]);

  useEffect(() => {
    if (isAllowToCheckout && !user?._id) {
      setIsAllowToCheckout(false);
    }
  }, [user?._id]);

  return (
    <div className="w-full bg-white rounded-[6px] max-w-[100%] h-full min-h-[395px] lg:max-w-[360px] flex flex-col items-start justify-start px-2 py-2 lg:py-6 lg:px-4">
      <div className="w-full h-full">
        <h1 className="text-xl font-semibold pb-3 border-b border-gray-200">
          Shipping Address
        </h1>

        <ul className="text-gray-600">
          {!user?._id && (
            <li className="flex items-center justify-between mb-[15px] mt-[15px]">
              <span>Please login first</span>
              <span className="font-semibold underline text-primary">
                <Link
                  href={{
                    pathname: '/auth',
                    query: {
                      redirect: '/cart/checkout',
                    },
                  }}
                >
                  Login
                </Link>
              </span>
            </li>
          )}

          {user?._id && getShippingAddress.isLoading ? (
            <p className="text-center text-sm text-gray-600">Loading...</p>
          ) : null}

          {user?._id &&
          typeof getShippingAddress.data !== 'undefined' &&
          getShippingAddress.data.data?.length > 0
            ? getShippingAddress.data.data.map(address => {
                if (!address.isDefault) return null;

                return (
                  <div
                    key={address._id}
                    className="flex flex-col items-center justify-between gap-y-4 mb-[15px]"
                  >
                    <div
                      style={{
                        borderColor: '#17a55c',
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
                        <span className="text-green-600 text-sm font-medium">
                          Default Shipping Address
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {user?._id &&
          typeof getShippingAddress.data !== 'undefined' &&
          getShippingAddress.data.data?.length === 0 ? (
            <div className="flex items-center justify-center py-3 cursor-pointer underline text-primary">
              <Link
                href={{
                  pathname: PATH_USER.newShippingAddress,
                  query: {
                    redirect: '/cart/checkout',
                  },
                }}
              >
                Please Add shipping address
              </Link>
            </div>
          ) : null}
        </ul>

        <div className="w-full h-full mt-6">
          <h1 className="text-xl font-semibold pb-3 border-b border-gray-200">
            Order Summary
          </h1>

          <ul className="text-gray-600">
            <li className="flex items-center justify-between mb-[15px] mt-[15px]">
              <span>Sub Total</span>
              <span className="font-semibold">${cart.subtotal}</span>
            </li>
            <li className="flex items-center justify-between mb-[12px]">
              <span>Tax</span>
              <span className="font-semibold">$0.00</span>
            </li>
            <li className="flex items-center justify-between mb-[12px]">
              <span>Shipping</span>
              <span className="font-semibold text-primary">Free</span>
            </li>
            <li className="flex items-center justify-between mb-[20px]">
              <span>Total</span>
              <span className="font-semibold">${cart.totalAmount}</span>
            </li>
          </ul>
        </div>

        <Button
          disabled={!isAllowToCheckout}
          type="submit"
          onClick={gotToCheckoutHandler}
          className={`${
            isAllowToCheckout
              ? 'shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] bg-primary cursor-pointer active:scale-95 duration-150'
              : 'bg-primary bg-opacity-40 cursor-not-allowed'
          }  flex justify-center items-center w-full mt-[10px] h-[42px] rounded-[6px] text-white text-[13px]`}
        >
          Checkout Now
        </Button>
      </div>
    </div>
  );
};

export default ShippingInfo;
