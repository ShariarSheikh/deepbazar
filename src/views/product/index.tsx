import { LoadingLayout } from '@/components/common/loading';
import { useProductDetailsByIdQuery } from '@/redux/services/Product';
import DisplayImage from './DisplayImage';
import Info from './Info';
import ProductDescription from './ProductDescription';
import FetchRelatedProducts from './RelatedProducts';

const Product = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useProductDetailsByIdQuery(productId);

  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-between mt-4 transition-all duration-200">
        {/* for loading */}
        {isLoading && (
          <div className="grid gap-4 lg:grid-cols-2 w-full max-w-7xl mx-auto">
            <div className="lg:h-[400px] h-[300px] relative">
              <LoadingLayout />
            </div>
            <div className="lg:h-[600px] h-[300px] relative">
              <LoadingLayout />
            </div>
          </div>
        )}

        {data?.data.product._id && (
          <>
            <DisplayImage />
            <Info data={data.data.product} />
          </>
        )}
      </div>
      <ProductDescription description={data?.data.product.description ?? ''} />
      <FetchRelatedProducts
        isLoading={isLoading}
        products={data?.data.product.related_products || []}
      />
    </div>
  );
};

export default Product;
