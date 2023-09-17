import CheckBox from '@/components/common/CheckBox';
import { ChangeEvent } from 'react';

import Input from '@/components/common/Input';
import { CreateProductStateInterface } from './types';

interface IProps {
  createProductState: CreateProductStateInterface;
  // setCreateProductState: Dispatch<SetStateAction<CreateProductStateInterface>>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleInputHandler: ({
    name,
    value,
  }: {
    name: string;
    value: boolean;
  }) => void;
}

function FormSecond({
  createProductState,
  onInputChange,
  toggleInputHandler,
}: IProps) {
  return (
    <div className="h-full w-full max-w-[360px] relative p-[24px] bg-white shadow-card rounded-[16px]">
      <div className="w-full grid grid-cols-2">
        <div className="h-[56px] flex items-center justify-start space-x-2">
          <CheckBox
            name="isStock"
            onClick={(value: boolean) =>
              toggleInputHandler({ name: 'inStock', value: !value })
            }
            isChecked={createProductState.inStock}
            className="active:scale-95 duration-200"
          />
          <p className="text-[14px]">In Stock*</p>
        </div>
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Product Code"
          name="productCode"
          type="text"
          value={createProductState.productCode || ''}
          // onChange={onInputChange}
          readOnly
          disabled
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Sell Price"
          name="sellPrice"
          type="number"
          value={createProductState.sellPrice || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Discount Percent"
          name="discountPercent"
          type="number"
          value={createProductState.discountPercent || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Discount Price"
          name="discountPrice"
          type="number"
          value={createProductState.discountPrice || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Minimum Sell Quantity"
          name="minimumSellQuantity"
          type="number"
          value={createProductState.minimumSellQuantity || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Maximum Sell Quantity"
          name="maximumSellQuantity"
          type="number"
          value={createProductState.maximumSellQuantity || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Weight"
          name="weight"
          type="number"
          value={createProductState.weight || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Unit"
          name="unit"
          type="number"
          value={createProductState.unit}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Minimum Sell Amount"
          name="minimumSellAmount"
          type="number"
          value={createProductState.minimumSellAmount || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Minimum Sell Amount Type"
          name="minimumSellAmountType"
          type="text"
          value={createProductState.minimumSellAmountType || ''}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Main Category"
          name="MainCategory"
          type="text"
          value={createProductState.category}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Seller"
          name="Seller"
          type="text"
          value={createProductState.seller}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Search Keyword"
          name="searchKeyword"
          type="text"
          value={createProductState.searchKeyword}
          onChange={onInputChange}
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>
    </div>
  );
}

export default FormSecond;
