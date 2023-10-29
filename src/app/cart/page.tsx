'use client';
import type { Metadata } from 'next';
import Order from './Order';

const metadata: Metadata = {};

const CartPage = () => {
  metadata.title = 'Cart Page - DeepBazar';
  return (
    <div className="w-full flex flex-col items-center mt-4 relative">
      <Order />
    </div>
  );
};

export default CartPage;
