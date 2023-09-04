import Pagination from '@/components/common/Pagination';
import { FC, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import FilterWithCalender, {
  CalenderFilterableList,
} from './FilterWithCalender';
import SearchBar from './SearchBar';
import { filterOrderStatusColor } from './utils';

//----------------------------------
interface Order {
  id: number;
  orderId: string;
  status: string;
  total: string;
  received: string;
}
interface IProps {
  orders: Order[];
  mode?: 'overview' | undefined;
}

const Order: FC<IProps> = ({ orders, mode }) => {
  const totalPages = 100;
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenDateFilter, setIsOpenDateFilter] = useState<boolean>(false);
  const [isOpenCalender, setIsOpenCalender] = useState<boolean>(false);

  const filterProductBasedOnDate = (date: CalenderFilterableList): void => {
    if (date === CalenderFilterableList.CustomRange) {
      return setIsOpenCalender(prevState => !prevState);
    }
    return undefined;
  };

  return (
    <div className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
      {mode !== 'overview' && (
        <header className="flex justify-between items-center">
          <h1 className="text-gray-600 font-medium">My Orders</h1>

          <div className="flex items-center space-x-3">
            <button className="px-[16px] py-[6px] border border-primary flex items-center rounded-[6px] text-primary hover:text-white font-bold text-sm hover:bg-primary active:scale-95 duration-200">
              <span>Export</span>
              <FiDownload className="ml-2" />
            </button>
          </div>
        </header>
      )}

      <div className="w-full h-full bg-white mt-10 rounded-[16px] shadow-md">
        {mode !== 'overview' && (
          <div className="w-full flex py-5 px-5">
            <SearchBar />

            <FilterWithCalender
              isOpenCalender={isOpenCalender}
              isOpenDateFilter={isOpenDateFilter}
              setIsOpenCalender={setIsOpenCalender}
              setIsOpenDateFilter={setIsOpenDateFilter}
              filterProductBasedOnDate={filterProductBasedOnDate}
            />
          </div>
        )}

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
              <h3 className="text-[13px] text-gray-600 font-semibold">Total</h3>
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
        <div className="h-[56px] rounded-b-[16px] flex items-center justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
