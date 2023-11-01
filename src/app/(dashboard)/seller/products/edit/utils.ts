import {
  ProductImage,
  ProductSectionName,
  ProductSectionNameType,
} from '@/types/product.types';
import createFormData from '@/utils/createFormData';
import { EditorState, convertToRaw } from 'draft-js';

export interface InitialState {
  title: string;
  category: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  productSectionName: ProductSectionNameType;
  offerText: string;
  sellerId: string;
  inStock: boolean;
  images: string[] | File[];
  description: EditorState;
  specification: EditorState;
  tags: string[];
}

export type InputHandlerTypes =
  | string
  | number
  | boolean
  | ProductSectionNameType
  | (File | string)[]
  | EditorState;

export type FieldName =
  | 'title'
  | 'productSectionName'
  | 'offerText'
  | 'inStock'
  | 'description'
  | 'specification'
  | 'price'
  | 'discountPercent'
  | 'images'
  | 'category'
  | 'createTag';

export const initialState: InitialState = {
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
};

interface AppendDataToForm {
  data: InitialState;
  sellerId: string;
  productCurrentImages: ProductImage[];
}
export const appendDataToForm = (props: AppendDataToForm): FormData => {
  const formData = new FormData();
  const { data, sellerId, productCurrentImages } = props;

  const tags = data.tags.filter(tag => tag !== 'undefined');

  const imagesLinks: ProductImage[] = [];

  data.images.map(image => {
    if (typeof image === 'object')
      // @ts-ignore
      return formData.append('images', image, image.name);
    else {
      productCurrentImages.map(imgData => {
        if (imgData.defaultImg !== image) return undefined;
        imagesLinks.push(imgData);
      });
    }
  });

  if (imagesLinks.length > 0) {
    createFormData(formData, 'imagesLinks', imagesLinks);
  }

  createFormData(formData, 'title', data.title);

  createFormData(formData, 'price', data.price);
  createFormData(formData, 'discountPrice', data.discountPrice);
  createFormData(formData, 'discountPercent', data.discountPercent);

  createFormData(formData, 'productSectionName', data.productSectionName);
  createFormData(formData, 'sellerId', sellerId);

  createFormData(formData, 'offerText', data.offerText);
  createFormData(formData, 'inStock', data.inStock);
  createFormData(formData, 'category', data.category);
  createFormData(formData, 'tags', tags);

  createFormData(
    formData,
    'description',
    JSON.stringify(convertToRaw(data.description.getCurrentContent()))
  );

  createFormData(
    formData,
    'specification',
    JSON.stringify(convertToRaw(data.specification.getCurrentContent() ?? ''))
  );

  return formData;
};
