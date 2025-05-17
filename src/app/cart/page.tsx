'use client';

import ItemContainer from './ItemContainer';
import Checkout from './Checkout';

const CartPage = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between relative">
      <ItemContainer />
      <Checkout />
    </div>
  );
};

export default CartPage;
