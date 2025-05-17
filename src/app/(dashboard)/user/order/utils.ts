import { OrderStatus, OrderStatusType } from '@/types/order.type';

const filterOrderStatusColor = (status: OrderStatusType): string => {
  let className: string;

  switch (status) {
    case OrderStatus.Received:
      className = 'bg-green-600 bg-opacity-[16%] text-green-400';
      return className;

    case OrderStatus.Pending:
      className = 'bg-blue-600 bg-opacity-[16%] text-blue-400';
      return className;

    case OrderStatus.Rejected:
      className = 'bg-red-600 bg-opacity-[16%] text-red-400';
      return className;

    default:
      className = '';
      return className;
  }
};

export { filterOrderStatusColor };
