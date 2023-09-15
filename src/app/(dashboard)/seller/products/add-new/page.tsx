'use client';

import uniqueCodeGenerator from '@/utils/uniqeCodeGenerator';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import PageTitle from '../../PageTitle';
import FormFirst from './FormFirst';
import FormSecond from './FormSecond';
import { CreateProductStateInterface } from './types';

//-----------------------------------------------------------------------
const productCreateInitialState: CreateProductStateInterface = {
  productName: '',
  productSpecification: '',
  offerText: '',
  barCode: '',
  materials: '',
  measurement: '',
  color: '',
  size: '',
  variousType: '',
  status: '',
  productDescription: '',
  displayImage: null,
  productDetailsImage: [],
  productCode: uniqueCodeGenerator(),
  sellPrice: 0,
  discountPercent: 0,
  discountPrice: 0,
  minimumSellQuantity: 0,
  maximumSellQuantity: 0,
  weight: 0,
  unit: '',
  minimumSellAmount: 0,
  minimumSellAmountType: '',
  category: '',
  seller: '',
  searchKeyword: [],
  inStock: true,
  feature: false,
  callForPrice: false,
  storeOnly: false,
  onSale: false,
  display: false,
};

//-----------------------------------------------------------------------

export default function CreateProduct() {
  const [createProductState, setCreateProductState] =
    useState<CreateProductStateInterface>(productCreateInitialState);

  // INPUT HANDLER
  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setCreateProductState(prevState => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const toggleInputHandler = ({
    name,
    value,
  }: {
    name: string;
    value: boolean;
  }): void => {
    setCreateProductState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //
  const onCreateProduct = (): void => {};

  return (
    <section className="w-full h-full p-5 max-w-[1080px] mx-auto pt-3">
      <Head>
        <title>Create Product | DeepBazar</title>
      </Head>

      <div className="w-full h-full bg-white max-w-[1080px] mx-auto p-5 mt-10 rounded-[16px] shadow-md">
        <PageTitle pageName="Create New Product" />
        <form className="w-full h-full flex gap-5 justify-between rounded-[16px] relative">
          <FormFirst
            onCreateHandler={onCreateProduct}
            onInputChange={inputHandler}
            createProductState={createProductState}
            setCreateProductState={setCreateProductState}
          />
          <FormSecond
            toggleInputHandler={toggleInputHandler}
            onInputChange={inputHandler}
            createProductState={createProductState}
          />
        </form>
      </div>
    </section>
  );
}
