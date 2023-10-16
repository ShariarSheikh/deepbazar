'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import PageTitle from '../../PageTitle';
import FormFirst from './FormFirst';
import { Form, Formik } from 'formik';
import { ProductTypes } from '@/types/product.types';
import Button from '@/components/common/Button';
import { EditorState, convertToRaw } from 'draft-js';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '@/components/common/Input';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBox from '@/components/common/CheckBox';
import {
  ProductSectionName,
  ProductSectionNameType,
  calculateDiscountedPrice,
  initialState,
  productTags,
} from './utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useCreateProductMutation } from '@/redux/services/productApi';
import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import createFormData from '@/utils/createFormData';
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

export default function CreateProduct() {
  const getCategory = useGetCategoryQuery();
  const [createProduct, { isLoading, data, isError, error }] =
    useCreateProductMutation();

  //STATE--------------------------------------------------------------------------
  const { user } = useAppSelector(state => state.authSlice);
  const [images, setImages] = useState<File[]>([]);
  const [editorState, setEditorState] = useState({
    productSpecification: EditorState.createEmpty(),
    productDescription: EditorState.createEmpty(),
  });

  const [inStock, setInStock] = useState<boolean>(false);
  const [productCategory, setProductCategory] = useState<string>('Smart Phone');
  const [productSection, setProductSection] = useState<ProductSectionNameType>(
    ProductSectionName.NewArrivals
  );

  const [selectAbleTags, setSelectAbleTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [price, setPrice] = useState<number>(0);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [priceError, setPriceError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  // USE HOOK
  const dispatch = useAppDispatch();

  //HANDLERS--------------------------------------------------------------------------
  //HANDLERS--------------------------------------------------------------------------

  //DISCOUNT PERCENT HANDLER
  const setDiscountPercentHandler = (discountPercentInput: number) => {
    if (discountPercentInput > 99 || discountPercentInput < 0) return undefined;

    setDiscountPercent(discountPercentInput);

    const discountPriceValue = calculateDiscountedPrice(
      price,
      discountPercentInput
    );

    if (typeof discountPriceValue == 'string')
      return setPriceError(discountPriceValue);
    setDiscountPrice(discountPriceValue);
    setPriceError('');
  };

  //DISCOUNT PRICE HANDLER
  const setPriceHandler = (priceValue: number) => {
    if (priceValue < 0) return undefined;

    setPrice(priceValue);
    if (!discountPercent) return undefined;
    const discountPriceValue = calculateDiscountedPrice(
      priceValue,
      discountPercent
    );

    if (typeof discountPriceValue == 'string')
      return setPriceError(discountPriceValue);
    setDiscountPrice(discountPriceValue);
  };

  // SELECT PRODUCT SECTION
  const productSectionHandler = (sectionName: ProductSectionNameType) =>
    setProductSection(sectionName);

  // SELECT PRODUCT CATEGORY
  const productCategoryHandler = (category: string) => {
    setProductCategory(category);
    //@ts-expect-error
    const tags = productTags[category];
    setSelectAbleTags(tags);
  };

  //TAG HANDLER
  const createTagHandler = (value: string) => {
    const input = value?.trim()?.toLocaleLowerCase();
    const isExit = selectedTags.find(tag => tag.toLocaleLowerCase() === input);

    if (isExit) return undefined;
    setSelectedTags(prevS => [...prevS, input]);
  };

  const removeTagHandler = (tag: string) => {
    const newTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newTags);
  };

  // CREATE HANDLER
  const onSubmit = async (values: ProductTypes): Promise<void> => {
    if (images?.length === 0)
      return setImageError('Please Select product image');
    if (imageError) setImageError('');

    const formData = new FormData();

    // formData.append('category', category);
    createFormData(formData, 'title', values.title);
    createFormData(formData, 'productCode', values.productCode);
    // createFormData(formData, 'images', [displayImage]);

    images?.forEach(file => formData.append('images', file, file.name));

    createFormData(formData, 'price', price);
    createFormData(formData, 'discountPrice', discountPrice);
    createFormData(formData, 'discountPercent', discountPercent);

    createFormData(formData, 'productSectionName', productSection);
    createFormData(formData, 'sellerId', user?._id);

    createFormData(formData, 'offerText', values.offerText);
    createFormData(formData, 'inStock', inStock);
    createFormData(formData, 'category', [productCategory]);
    createFormData(formData, 'tags', selectedTags);

    createFormData(
      formData,
      'description',
      JSON.stringify(
        convertToRaw(editorState.productDescription.getCurrentContent())
      )
    );

    createFormData(
      formData,
      'specification',
      JSON.stringify(
        convertToRaw(editorState.productSpecification.getCurrentContent())
      )
    );

    //@ts-expect-error
    await createProduct(formData);
  };
  // const rawContentState = convertToRaw(
  //   editorState.productDescription.getCurrentContent()
  // );
  // const markup = draftToHtml(rawContentState);

  // console.log(markup);

  //USE-EFFECT--------------------------------------------------------------------------
  useEffect(() => {
    if (!getCategory.isSuccess) return;

    setProductCategory(getCategory?.data?.data[0].name);
  }, [getCategory.isSuccess]);

  useEffect(() => {
    productCategoryHandler('Watch');
  }, []);

  useEffect(() => {
    if (!isLoading) return undefined;

    // eslint-disable-next-line no-console
    console.log(data);

    dispatch(
      showAlert({
        message: 'Your new product has been created congrucutaion',
        type: AlertType.Success,
      })
    );
  }, [isLoading, data]);
  // eslint-disable-next-line no-console
  console.log(error);

  return (
    <section className="w-full h-full md:p-5 max-w-[660px] mx-auto">
      <div className="w-full h-full">
        <PageTitle pageName="Create New Product" />
        {isError &&
          InputApiErrorMessage(
            //@ts-expect-error
            error?.data?.message
          )}
        <Formik initialValues={initialState} onSubmit={onSubmit}>
          <Form className="w-full h-full flex flex-col gap-5 justify-between rounded-[16px] relative">
            <div className="h-[56px] flex items-center justify-start space-x-2 mt-2">
              <CheckBox
                name="isStock"
                onClick={() => setInStock(prevS => !prevS)}
                isChecked={inStock}
                className="active:scale-95 duration-200"
              />
              <p className="text-[14px]">In Stock*</p>
            </div>

            <h3 className="text-gray-600 text-sm mt-2">
              Select Section Store For Product
            </h3>
            <div className="flex items-center justify-start space-x-3 text-sm md:text-base">
              <Button
                type="button"
                onClick={() =>
                  productSectionHandler(ProductSectionName.NewArrivals)
                }
                style={
                  ProductSectionName.NewArrivals === productSection
                    ? { background: '#008ECC', color: 'white' }
                    : { background: '#f3f9fb' }
                }
                className="py-1 px-2 active:scale-95 duration-150 rounded-[6px]"
              >
                {ProductSectionName.NewArrivals}
              </Button>
              <Button
                type="button"
                onClick={() =>
                  productSectionHandler(ProductSectionName.JustForYou)
                }
                style={
                  ProductSectionName.JustForYou === productSection
                    ? { background: '#008ECC', color: 'white' }
                    : { background: '#f3f9fb' }
                }
                className="py-1 px-2 active:scale-95 duration-150 rounded-[6px]"
              >
                {ProductSectionName.JustForYou}
              </Button>
              <Button
                type="button"
                onClick={() =>
                  productSectionHandler(ProductSectionName.FeaturedProducts)
                }
                style={
                  ProductSectionName.FeaturedProducts === productSection
                    ? { background: '#008ECC', color: 'white' }
                    : { background: '#f3f9fb' }
                }
                className="py-1 px-2 active:scale-95 duration-150 rounded-[6px]"
              >
                {ProductSectionName.FeaturedProducts}
              </Button>
            </div>

            <div className="w-full py-3 border-t border-b border-gray-200 rounded-[6x]">
              {priceError && (
                <p className="text-[11px] text-red-700 px-[3px] pt-[4px] pb-2">
                  {priceError}
                </p>
              )}
              <div className="flex items-center justify-between mb-2">
                <Input
                  placeholder="Price *"
                  name="price"
                  type="number"
                  value={price}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPriceHandler(parseInt(event.target.value, 10))
                  }
                  className="h-[48px] w-full"
                  containerClassName="max-w-[48%] w-full"
                />

                <Input
                  placeholder="Discount Percent"
                  name="discountPercent"
                  type="number"
                  value={discountPercent}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setDiscountPercentHandler(parseInt(event.target.value, 10))
                  }
                  className="h-[48px] w-full"
                  containerClassName="max-w-[48%] w-full"
                />
              </div>

              <div className="w-full h-[48px] flex items-center justify-center bg-gray-200 rounded-[6px]">
                <span className="text-sm">
                  Discounted Price: {(discountPrice || 0).toFixed(2)}
                </span>
              </div>
            </div>

            <FormFirst
              images={images}
              setImages={setImages}
              editorState={editorState}
              setEditorState={setEditorState}
            />
            <div>
              <h3 className="text-gray-600 text-sm mt-2">
                Select Category For Product
              </h3>
              <div className="flex items-center flex-wrap justify-start space-x-3 pt-1">
                {getCategory?.isSuccess &&
                  getCategory.data?.data.map(cat => (
                    <Button
                      type="button"
                      key={cat._id}
                      onClick={() => productCategoryHandler(cat.name)}
                      style={
                        cat.name === productCategory
                          ? { background: '#008ECC', color: 'white' }
                          : { background: '#f3f9fb' }
                      }
                      className="py-1 px-2 active:scale-95 duration-150 rounded-[6px]"
                    >
                      {cat.name}
                    </Button>
                  ))}
              </div>

              <h2 className="text-gray-600 p-1 text-sm mt-5">Select Tag</h2>
              <div className="flex items-center space-x-2 flex-wrap py-2">
                {selectedTags.map(tag => (
                  <div
                    key={tag}
                    className="flex items-center justify-center space-x-2 px-3 py-2 rounded-[6px] bg-primaryLight"
                  >
                    <span>{tag}</span>
                    <AiOutlineClose
                      onClick={() => removeTagHandler(tag)}
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <Autocomplete
                id="tag-id"
                sx={{
                  '& .MuiInputBase-root': {
                    width: '100%',
                    maxHeight: 41,
                    borderRadius: '6px',
                    background: '#f9fafb',
                    padding: '2px',
                    ':hover': {
                      outline: 'none',
                      border: 'none',
                    },
                  },
                }}
                options={selectAbleTags.map(tag => tag)}
                renderInput={params => <TextField {...params} />}
                //@ts-expect-error
                onChange={(_event, value: string) => createTagHandler(value)}
              />
            </div>

            <Button
              disabled={isLoading}
              isLoading={isLoading}
              loadingColor="white"
              loadingSpinnerSize={40}
              type="submit"
              className="w-full rounded-[8px] h-[48px] bg-primary text-white flex items-center justify-center font-bold mt-[20px] active:scale-95 duration-200 hover:bg-primaryDark"
            >
              Create Product
            </Button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
