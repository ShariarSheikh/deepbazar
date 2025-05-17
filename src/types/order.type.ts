interface OrderItem {
  title: string;
  imgUrl: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  productId: string;
  cartQuantity: number;
}

export const OrderStatus = {
  Pending: 'Pending',
  Received: 'Received',
  Rejected: 'Rejected',
} as const;

export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus];

export interface OrderCreateData {
  orderId: string;
  totalAmount: number;
  subtotalAmount: number;
  shippingFee: number;
  items: OrderItem[];
}

export interface OrderData {
  user: string;
  orderId: string;
  status: OrderStatusType;
  totalAmount: number;
  subtotalAmount: number;
  shippingFee: number;
  imgUrl: string;
  items: OrderItem[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
