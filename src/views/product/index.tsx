import { LoadingLayout } from '@/components/common/loading';
import { SmartPhonesData } from '@/fakeDB/smartPhones';
import { FC } from 'react';
import AdditionalInformation from './AdditionalInformation';
import DisplayImage from './DisplayImage';
import Info from './Info';
import ProductDSpecification from './ProductDSpecification';

//-------------------------------------------------
interface IProps {
  data: SmartPhonesData;
  isLoading: boolean;
}
//-------------------------------------------------

const Product: FC<IProps> = ({ data, isLoading }) => {
  console.log(data);

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
      <ProductDSpecification
        specification={`<div class="html-content pdp-product-highlights"><ul class=""><li class="">Tshirt Size Chart Size :</li><li class="">M (CHEST 38 LENGTH 27)</li><li class="">L (CHEST 40 LENGTH 28)</li><li class="">XL (CHEST 42 LENGTH 29)</li><li class="">XXL (CHEST 44 LENGTH 29.5)</li><li class="" data-spm-anchor-id="a2a0e.pdp.product_detail.i0.7cc44f23WgiDJj"> SMUG is a clothing brand based in Bangladesh.We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident.We are manufacture export oriented quality garments product which maintaining all criteria for Asian export curriculum also trying to confirm exclusive design and using latest technology of garments. </li></ul></div>`}
      />

      <AdditionalInformation />
      {/* <FetchRelatedProducts
        isLoading={isLoading}
        products={data?.data.product.related_products || []}
      /> */}
    </div>
  );
};

export default Product;
