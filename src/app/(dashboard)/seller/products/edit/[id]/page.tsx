'use client';

import {
  ChangeEvent,
  FormEvent,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import PageTitle from '../../../PageTitle';
import Button from '@/components/common/Button';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '@/components/common/Input';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBox from '@/components/common/CheckBox';
import {
  calculateDiscountedPrice,
  productSections,
  productTags,
} from '../../add-new/utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useGetSellerProductQuery,
  useUpdateProductMutation,
} from '@/redux/services/productApi';
import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useRouter } from 'next/navigation';
import { PATH_SELLER } from '@/utils/routes';
import { LoadingPage } from '@/components/common/loading';
import ReactDraftWysiwyg from '@/components/common/ReactDraftWysiwyg';
import { Upload } from '@/components/common/Upload';
import {
  FieldName,
  InitialState,
  InputHandlerTypes,
  appendDataToForm,
  initialState,
} from '../utils';
import { EditorState, convertFromRaw } from 'draft-js';
import { ProductSectionName } from '@/types/product.types';

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

export default function CreateProduct({ params }: { params: { id: string } }) {
  const getProduct = useGetSellerProductQuery({
    productId: params.id,
  });

  const [updateProduct, { isLoading, error: updateError, isError, isSuccess }] =
    useUpdateProductMutation();

  //GLOBAL SATE AND QUERY---------------------
  const getCategory = useGetCategoryQuery();
  const { user } = useAppSelector(state => state.authSlice);

  //PRODUCT STATES-----------------------
  const [selectAbleTags, setSelectAbleTags] = useState<string[]>([]);
  const [initialStateData, setInitialStateData] =
    useState<InitialState>(initialState);

  const [error, setError] = useState<{ fieldName: string; error: string }>({
    fieldName: '',
    error: '',
  });

  // USE HOOK
  const dispatch = useAppDispatch();
  const router = useRouter();

  //HANDLERS--------------------------------------------------------------------------
  //HANDLERS--------------------------------------------------------------------------
  const removeTagHandler = (tag: string) => {
    const newTags = initialStateData.tags.filter(value => value !== tag);
    setInitialStateData(prevS => ({
      ...prevS,
      tags: newTags,
    }));
  };

  const inputHandler = (value: InputHandlerTypes, fieldName: FieldName) => {
    switch (fieldName) {
      //
      case 'price':
        if (typeof value !== 'number')
          return errorHandler('price', 'Number not allow');

        setInitialStateData(prevS => {
          let discountPrice: number = prevS.discountPrice;

          if (initialStateData.discountPercent) {
            discountPrice = calculateDiscountedPrice(
              value,
              prevS.discountPercent
            );
          }

          return {
            ...prevS,
            [fieldName]: value,
            discountPrice: discountPrice,
          };
        });
        break;
      //
      case 'discountPercent':
        if (typeof value !== 'number')
          return errorHandler('discountPercent', 'Number not allow');

        if (value > 99 || value < 0) return;
        setInitialStateData(prevS => ({
          ...prevS,
          [fieldName]: value,
          discountPrice: calculateDiscountedPrice(prevS.price, value),
        }));
        break;
      //
      case 'category':
        if (typeof value !== 'string') return;
        const tags = productTags[value];
        setSelectAbleTags(tags);
        setInitialStateData(prevS => ({
          ...prevS,
          category: value,
        }));
        break;
      //
      case 'createTag':
        if (typeof value !== 'string') return;
        const input = value?.trim()?.toLocaleLowerCase();
        const isExit = initialStateData.tags.find(
          tag => tag.toLocaleLowerCase() === input
        );

        if (isExit) return undefined;
        setInitialStateData(prevS => ({
          ...prevS,
          tags: [...prevS.tags, input],
        }));

      default:
        setInitialStateData(prevS => ({
          ...prevS,
          [fieldName]: value,
        }));
        break;
    }
  };

  const errorHandler = (fieldName: string, error: string) => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });

    setError({ fieldName, error });
  };

  // CREATE HANDLER
  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const product = appendDataToForm({
      sellerId: user?._id ?? '',
      data: initialStateData,
      productCurrentImages: getProduct.data?.data.images ?? [],
    });

    await updateProduct({
      productId: getProduct.data?.data?._id || '',
      //@ts-expect-error
      product: product,
    });
  };

  //USE-EFFECT--------------------------------------------------------------------------

  useEffect(() => {
    if (getProduct.isLoading || !getProduct.data?.data) return undefined;
    const product = getProduct.data?.data;
    const imgData = product?.images.map(imgData => imgData.defaultImg);

    setInitialStateData(prevS => ({
      ...prevS,
      images: imgData,
      title: product.title,
      productSectionName: product.productSectionName,
      offerText: product.offerText ?? '',
      inStock: product.inStock,
      price: product.price,
      discountPrice: product.discountPrice ?? 0,
      discountPercent: product.discountPercent ?? 0,
      category: product.category,
      tags: product.tags,
      description: EditorState.createWithContent(
        convertFromRaw(JSON.parse(product.description))
      ),
      specification: EditorState.createWithContent(
        convertFromRaw(JSON.parse(product.specification ?? ''))
      ),
    }));

    const tags = productTags[product.category];
    setSelectAbleTags(tags);
  }, [params.id, getProduct.isLoading, getProduct.data?.data]);

  useEffect(() => {
    if (!isSuccess) return undefined;

    dispatch(
      showAlert({
        message: 'Your new product has been Updated',
        type: AlertType.Success,
      })
    );

    setInitialStateData({
      title: '',
      category: '',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
      productSectionName: ProductSectionName.NewArrivals,
      offerText: '',
      sellerId: '',
      inStock: true,
      images: [],
      description: EditorState.createEmpty(),
      specification: EditorState.createEmpty(),
      tags: [],
    });
    router.replace(PATH_SELLER.products.manage);
  }, [isSuccess, router, dispatch]);

  useEffect(() => {
    if (!isError) return;
    //@ts-expect-error
    errorHandler('Update Error', updateError?.data?.message);
  }, [isError, updateError]);

  const displayImageHandler = useCallback(
    (acceptedFiles: File[]) => {
      const currentLength =
        acceptedFiles?.length + initialStateData.images.length;

      const maximumImgLength = 3;
      if (currentLength >= maximumImgLength)
        return errorHandler('Image', 'Maximum image length is 2');

      const value =
        initialStateData.images.length > 0 ? initialStateData.images : [];
      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      //@ts-expect-error
      setInitialStateData(prevS => ({
        ...prevS,
        images: [...value, ...newFiles],
      }));
    },
    [initialStateData.images]
  );

  const removeDisplayImage = (inputFile: File | string) => {
    const filtered =
      initialStateData.images &&
      initialStateData.images?.filter(file => file !== inputFile);

    //@ts-expect-error
    setInitialStateData(prevS => ({
      ...prevS,
      images: filtered,
    }));
  };

  const removeAllDetailsImage = () =>
    setInitialStateData(prevS => ({
      ...prevS,
      images: [],
    }));

  if (getProduct.isLoading) return <LoadingPage />;
  if (getProduct.isError) return router.back();

  return (
    <section className="w-full h-full md:p-5 max-w-[660px] mx-auto">
      <div className="w-full h-full">
        <PageTitle pageName="Create New Product" />
        {error.error && InputApiErrorMessage(error.error)}
        <form
          onSubmit={onSubmit}
          className="w-full h-full flex flex-col gap-5 justify-between rounded-[16px] relative"
        >
          <div className="h-[56px] flex items-center justify-start space-x-2 mt-2">
            <CheckBox
              name="isStock"
              onClick={() => inputHandler(!initialStateData.inStock, 'inStock')}
              isChecked={initialStateData.inStock}
              className="active:scale-95 duration-200"
            />
            <p className="text-[14px]">In Stock*</p>
          </div>

          <h3 className="text-gray-600 text-sm mt-2">
            Select Section Store For Product
          </h3>
          <div className="flex items-center justify-start space-x-3 text-sm md:text-base">
            {productSections.map(section => (
              <Button
                key={section}
                type="button"
                onClick={() => inputHandler(section, 'productSectionName')}
                style={
                  section === initialStateData.productSectionName
                    ? { background: '#008ECC', color: 'white' }
                    : { background: '#f3f9fb' }
                }
                className="py-1 px-2 active:scale-95 duration-150 rounded-[6px]"
              >
                {section}
              </Button>
            ))}
          </div>

          <div className="w-full py-3 border-t border-b border-gray-200 rounded-[6x]">
            <div className="w-full flex items-center justify-between mb-2">
              <Input
                placeholder="Price *"
                name="price"
                type="number"
                value={initialStateData.price}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  inputHandler(parseInt(event.target.value, 10), 'price')
                }
                className="h-[48px] w-full"
                containerClassName="w-full"
              />

              <Input
                placeholder="Discount Percent"
                name="discountPercent"
                type="number"
                value={initialStateData.discountPercent}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  inputHandler(
                    parseInt(event.target.value, 10),
                    'discountPercent'
                  )
                }
                className="h-[48px] w-full"
                containerClassName="w-full"
              />
            </div>

            <div className="w-full h-[48px] flex items-center justify-center bg-gray-200 rounded-[6px]">
              <span className="text-sm">
                Discounted Price:
                {(initialStateData.discountPrice || 0).toFixed(2)}
              </span>
            </div>
          </div>

          <Input
            placeholder="Product Name *"
            name="title"
            value={initialStateData.title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              inputHandler(event.target.value, 'title')
            }
            className="h-[48px] w-full"
            containerClassName="w-full"
          />

          <div className="mt-[24px]">
            <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
              Product Specification
            </h1>

            <Suspense fallback={<p>Loading..</p>}>
              <ReactDraftWysiwyg
                toolbarClassName="border borderColor"
                toolbarStyle={{
                  border: 'none',
                }}
                wrapperClassName="border borderColor rounded-[8px] prose"
                editorStyle={{ minHeight: '200px', maxHeight: '650px' }}
                editorClassName="border borderColor"
                editorState={initialStateData.specification}
                onEditorStateChange={data =>
                  inputHandler(data, 'specification')
                }
              />
            </Suspense>
          </div>

          <div className="mt-[24px] w-full">
            <Input
              placeholder="Offer Text"
              name="offerText"
              value={initialStateData.offerText}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputHandler(event.target.value, 'offerText')
              }
              className="h-[48px] w-full"
              containerClassName="w-full"
            />
          </div>

          <div className="mt-[24px]">
            <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
              Product Description *
            </h1>
            <Suspense fallback={<p>Loading..</p>}>
              <ReactDraftWysiwyg
                toolbarClassName="border borderColor"
                toolbarStyle={{
                  border: 'none',
                }}
                wrapperClassName="border borderColor rounded-[8px]"
                editorStyle={{ minHeight: '200px', maxHeight: '650px' }}
                editorClassName="border borderColor"
                editorState={initialStateData.description}
                onEditorStateChange={data => inputHandler(data, 'description')}
              />
            </Suspense>
          </div>

          <div className="mt-[24px]">
            <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
              Display Image * (Maximum 2 File)
            </h1>
            <Upload
              thumbnail
              multiple
              maxFiles={2}
              maxSize={2 * 1024 * 1024} // Limit to 2MB
              files={initialStateData.images}
              onDrop={displayImageHandler}
              onRemove={removeDisplayImage}
              onRemoveAll={removeAllDetailsImage}
              accept={{
                'image/*': ['.svg', '.png', '.jpeg', '.webp', '.jpg'],
              }}
              placeholderClassName="min-h-[240px]"
              className="border border-gray-200 rounded-[6px]"
            />
          </div>

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
                    onClick={() => inputHandler(cat.name, 'category')}
                    style={
                      cat.name === initialStateData.category
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
              {initialStateData.tags.map(tag => (
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
              defaultValue={selectAbleTags[0]}
              options={selectAbleTags.map(tag => tag)}
              renderInput={params => (
                <TextField label="Select Tags" {...params} />
              )}
              //@ts-expect-error
              onChange={(_event, value: string) =>
                inputHandler(value, 'createTag')
              }
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
            Update Product
          </Button>
        </form>
      </div>
    </section>
  );
}
