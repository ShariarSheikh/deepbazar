'use client';

import ItemContainer from '../ItemContainer';
import ShippingInfo from './ShippingInfo';

const Page = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between relative">
      <ItemContainer />
      <ShippingInfo />
    </div>
  );
};

export default Page;
