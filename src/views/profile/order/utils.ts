enum StatusType {
  Accepted = 'Accepted',
  Received = 'Received',
  Delivered = 'Delivered',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected',
}

const filterOrderStatusColor = (status: string): string => {
  let className: string;

  switch (status) {
    case StatusType.Accepted:
      className = 'bg-green-600 bg-opacity-[16%] text-green-400';
      return className;

    case StatusType.Received:
      className = 'bg-blue-600 bg-opacity-[16%] text-blue-400';
      return className;

    case StatusType.Delivered:
      className = 'bg-green-600 bg-opacity-[16%] text-green-400';
      return className;

    case StatusType.Rejected:
      className = 'bg-red-600 bg-opacity-[16%] text-red-400';
      return className;

    default:
      className = '';
      return className;
  }
};

export { filterOrderStatusColor };

export const orders = [
  {
    id: 1,
    orderId: 'ORD-3439560-005416',
    status: 'Accepted',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 2,
    orderId: 'ORD-3439560-005416',
    status: 'Received',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 3,
    orderId: 'ORD-3439560-005416',
    status: 'Delivered',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 4,
    orderId: 'ORD-3439560-005416',
    status: 'Rejected',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 5,
    orderId: 'ORD-3439560-005416',
    status: 'Accepted',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 6,
    orderId: 'ORD-3439560-005416',
    status: 'Accepted',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
  {
    id: 7,
    orderId: 'ORD-3439560-005416',
    status: 'Accepted',
    total: '৳ 1,000.00',
    received: '07.02.23 at 12:03 PM',
  },
];
