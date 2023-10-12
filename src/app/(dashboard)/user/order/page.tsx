'use client';
import { NextPage } from 'next';
import SearchBar from './SearchBar';
import { filterOrderStatusColor, orders } from './utils';
import { FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  return (
    <div className="w-full h-full p-1 mg:p-5 max-w-[1080px] mx-auto pt-3">
      <header>
        <h1 className="text-gray-600 font-medium">My Orders</h1>
      </header>

      {1 < 2 ? (
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
      ) : (
        <div className="w-full h-full bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="w-full flex py-5 px-1 md:px-5">
            <SearchBar />
          </div>
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
                    Received
                  </h3>
                </th>
              </tr>

              {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
              {orders.map(order => (
                <tr
                  key={order.id}
                  className="flex justify-between items-center w-full h-[56px] px-[18px] bg-white border-b border-gray-200"
                >
                  <td className="flex justify-start items-center min-h-[56px] w-full min-w-[160px]">
                    <h3 className="text-[13px]">{order.orderId}</h3>
                  </td>
                  <td
                    className={`${filterOrderStatusColor(
                      order.status
                    )} w-full max-w-[110px] h-[22px] text-center rounded-[6px]`}
                  >
                    <h3 className={`text-[13px]`}>{order.status}</h3>
                  </td>
                  <td className="w-full max-w-[110px] flex justify-start ml-[23px]">
                    <h3 className="text-[13px]">{order.total}</h3>
                  </td>
                  <td className="w-full flex min-w-[160px] justify-start ml-[23px]">
                    <h3 className="text-[13px]">{order.received}</h3>
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
