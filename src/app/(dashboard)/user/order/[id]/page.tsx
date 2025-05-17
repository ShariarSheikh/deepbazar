'use client';

import { useGetOrderDetailsMutation } from '@/redux/services/orderApi';
import { LoadingPage } from '@/components/common/loading';
import { useEffect } from 'react';
import OrderDetails from './OrderDetails';

//-------------------------------------

//-------------------------------------

const Page = ({ params }: { params: { id: string } }) => {
  const [getOrder, getOrderDetails] = useGetOrderDetailsMutation();

  useEffect(() => {
    if (!params.id) return;
    getOrder({ orderId: params.id });
  }, [params.id]);

  return (
    <div className="w-full h-full p-1 mg:p-5 max-w-[1080px] mx-auto pt-3">
      <header>
        <h1 className="text-gray-600 font-medium">My Details</h1>
      </header>

      {getOrderDetails.isLoading && <LoadingPage />}

      {typeof getOrderDetails.data !== 'undefined' &&
        getOrderDetails.data.data._id && (
          <OrderDetails details={getOrderDetails.data.data} />
        )}
    </div>
  );
};

export default Page;
