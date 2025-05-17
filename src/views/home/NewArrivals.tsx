import { ProductListType } from '@/types/product.types';
import Link from 'next/link';
import { FC } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProductCart from './ProductCart';

//---------------------------------------------
interface IProps {
  data: ProductListType[];
}
//---------------------------------------------

const NewArrivals: FC<IProps> = ({ data }) => {
  return (
    <section className="w-full relative mt-[22px] md:mt-[40px] lg:mt-[60px] lg:min-h-[500px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-sm md:text-[28px] font-bold">New Arrivals</h1>
        </div>
        <Link href={'/shop'}>
          <button className="text-sm md:text-[28px] text-primary font-bold flex items-center space-x-1 hover:underline">
            <p>More</p> <MdKeyboardArrowRight className="text-primary" />
          </button>
        </Link>
      </div>

      <div className="md:mt-[40px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[8px] lg:gap-4">
        {data.map(product => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
