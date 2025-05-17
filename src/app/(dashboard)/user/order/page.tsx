'use client';
import { filterOrderStatusColor } from './utils';
import { FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import { useGetAllOrdersQuery } from '@/redux/services/orderApi';
import { useAppSelector } from '@/redux/hooks';
import { LoadingPage } from '@/components/common/loading';
import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//-------------------------------------
//-------------------------------------

const Page = () => {
  const user = useAppSelector(state => state.authSlice.user);
  const getOrders = useGetAllOrdersQuery({ userId: user._id });

  const router = useRouter();

  const goToDetailsOder = (id: string) => {
    router.push(`/user/order/${id}`);
  };
  return (
    <div className="w-full h-full p-1 mg:p-5 max-w-[1080px] mx-auto pt-3">
      <header>
        <h1 className="text-gray-600 font-medium">My Orders</h1>
      </header>

      {getOrders.isLoading && <LoadingPage />}

      {typeof getOrders.data !== 'undefined' &&
        getOrders.data.data.length === 0 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <FaClipboardList className="font-medium" />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px] text-center">
              You Haven't ordered any product
            </h1>

            <Link href={'/shop'}>
              <button className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200">
                Shop Now
              </button>
            </Link>
          </div>
        )}

      {typeof getOrders.data !== 'undefined' &&
        getOrders.data.data.length > 0 && (
          <div className="w-full h-full bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="w-full overflow-x-auto">
              <table className="w-full bg-white min-h-[300px]">
                <tr className="flex justify-between items-center w-full h-[56px] bg-[#f3f9fb] px-[18px]">
                  <th className="flex justify-start items-center min-h-[56px] w-full min-w-[160px]">
                    <h3 className="text-[13px] text-gray-600 font-semibold">
                      Order ID
                    </h3>
                  </th>
                  <th className="w-full text-start max-w-[110px] h-[22px]">
                    <h3 className="text-[13px] text-gray-600 font-semibold">
                      Status
                    </h3>
                  </th>
                  <th className="w-full text-start max-w-[110px] ml-[23px]">
                    <h3 className="text-[13px] text-gray-600 font-semibold">
                      Total
                    </h3>
                  </th>
                  <th className="w-full text-start min-w-[160px] ml-[23px]">
                    <h3 className="text-[13px] text-gray-600 font-semibold">
                      Received At
                    </h3>
                  </th>
                </tr>

                {getOrders.data.data.map(order => (
                  <tr
                    key={order._id}
                    onClick={() => goToDetailsOder(order._id)}
                    className="flex justify-between items-center w-full h-[56px] px-[18px] bg-white border-b border-gray-200"
                  >
                    <td className="flex justify-start items-center min-h-[56px] w-full min-w-[160px]">
                      <Image
                        src={order.imgUrl}
                        width={40}
                        height={40}
                        alt="product"
                      />
                      <h3 className="text-[13px] ml-2">{order.orderId}</h3>
                    </td>
                    <td
                      className={`${filterOrderStatusColor(
                        order.status
                      )} w-full max-w-[110px] h-[22px] text-center rounded-[6px]`}
                    >
                      <h3 className={`text-[13px]`}>{order.status}</h3>
                    </td>
                    <td className="w-full max-w-[110px] flex justify-start ml-[23px]">
                      <h3 className="text-[13px]">${order.totalAmount}</h3>
                    </td>
                    <td className="w-full flex min-w-[160px] justify-start ml-[23px]">
                      <h3 className="text-[13px]">
                        {dateFormat(order.createdAt)}
                      </h3>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        )}
    </div>
  );
};

export default Page;
