import ProductAdditionalInfo from '@/components/common/ProductAdditionalInfo';
import { LoadingLayout } from '@/components/common/loading';
import { SmartPhonesData } from '@/fakeDB/smartPhones';
import { FC } from 'react';
import DisplayImage from './DisplayImage';
import Info from './Info';

//-------------------------------------------------
interface IProps {
  data: SmartPhonesData;
  isLoading: boolean;
}
//-------------------------------------------------

const Product: FC<IProps> = ({ data, isLoading }) => {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-between transition-all duration-200">
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

        {data?._id && (
          <>
            <DisplayImage images={data?.images} />
            <Info data={data} />
          </>
        )}
      </div>
      <ProductAdditionalInfo isEditable={false} productId={data._id} />
    </div>
  );
};

export default Product;
