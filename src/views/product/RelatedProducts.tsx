import ProductsFeed from '@/components/common/ProductFeed';
import { LoadingProductCart } from '@/components/common/loading';
import { ProductRelated } from '@/types/product.types';
import { FC } from 'react';

const FetchRelatedProducts: FC<{
  products: ProductRelated[];
  isLoading: boolean;
}> = ({ products, isLoading }) => {
  return (
    <div className="w-full">
      {isLoading && (
        <ProductsFeed>
          <LoadingProductCart />
          <LoadingProductCart />
        </ProductsFeed>
      )}

      {products?.length > 0 && (
        <ProductsFeed>
          {products.map(product => (
            <RelatedProductCart key={product.product_id} data={product} />
          ))}
        </ProductsFeed>
      )}
    </div>
  );
};

export default FetchRelatedProducts;

const RelatedProductCart: FC<{ data: ProductRelated }> = ({ data }) => {
  return (
    <div
      className="bg-white relative md:w-[32%] lg:w-[24%] max-w-[316px] w-[48%] h-[260px] xl:min-h-[380px] max-h-[380px]
   flex flex-col justify-between mb-5 md:mb-7 rounded-md xl:mb-12 hover:shadow-2xl transition-all duration-200 group md:ml-2"
    >
      <div className="w-full h-[180px] md:h-[290px] relative overflow-hidden p-2">
        <img
          className="h-full w-full object-cover cursor-default rounded-md"
          src={'https://via.placeholder.com/289x274'}
          alt={data.title}
        />
      </div>

      <div className="flex h-[80px] xl:h-[90px] flex-col items-center w-full py-3">
        <h2 className="text-gray-600 sm:text-xl font-normal cursor-default line-clamp-1">
          {data.title}
        </h2>
        <p className="font-semibold text-roboto mt-1 text-yellow-600">
          <span className="font-medium text-sm pl-1 ">{data.price}</span>
        </p>
      </div>
    </div>
  );
};
