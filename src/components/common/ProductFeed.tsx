import { FC, ReactNode } from 'react';

//------------------------------------------
interface ProductsFeedProps {
  children: ReactNode;
}
//------------------------------------------
const ProductsFeed: FC<ProductsFeedProps> = ({ children }) => {
  return (
    <section className={`max-w-[570px] md:max-w-full m-auto mt-10`}>
      {/* product container */}
      <div className="w-full flex flex-wrap justify-between md:justify-start mt-2">
        {children}
      </div>
    </section>
  );
};

export default ProductsFeed;
