'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { LoadingPage } from '@/components/common/loading';
import { useGetOrderByIdMutation } from '@/redux/services/orderApi';
import { useState } from 'react';
import OrderDetails from '../order/[id]/OrderDetails';

//-------------------------------------

//-------------------------------------

const Page = () => {
  const [getOrder, getOrderDetails] = useGetOrderByIdMutation();

  const [orderId, setOrderId] = useState<string>('');

  const findOrderHandler = () => {
    getOrder({ orderId: orderId });
  };

  return (
    <div className="w-full h-full p-1 md:p-5 max-w-[1080px] mx-auto pt-3">
      <header className="">
        <h1 className="text-gray-600 font-medium">Track Order</h1>
      </header>

      <div className="w-full h-full min-h-[300px] p-1 md:p-5 bg-white mt-3 rounded-[6px]">
        <div className="flex items-center space-x-3">
          <Input
            placeholder="Order Id"
            className="h-[38px]"
            value={orderId}
            onChange={event => setOrderId(event.target.value)}
          />
          <Button
            disabled={getOrderDetails.isLoading}
            isLoading={getOrderDetails.isLoading}
            loadingColor="white"
            loadingSpinnerSize={40}
            onClick={findOrderHandler}
            className="w-[90px] h-[33px] border border-primary flex justify-center items-center rounded-[6px] text-primary hover:text-white font-bold text-sm hover:bg-primary active:scale-95 duration-200"
          >
            <span>Search</span>
          </Button>
        </div>
        <div className="pt-[20px] w-full h-hull">
          {!getOrderDetails.data?.data._id && (
            <h1 className="text-center text-gray-600 pt-20">
              {getOrderDetails.isError
                ? 'Order not found'
                : 'Search your order'}
            </h1>
          )}

          {getOrderDetails.isLoading && <LoadingPage />}
          {typeof getOrderDetails.data !== 'undefined' &&
            getOrderDetails.data.data._id && (
              <OrderDetails details={getOrderDetails.data.data} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Page;
