import { ProductSectionName } from '@/types/product.types';
import createFormData from '@/utils/createFormData';
import { EditorState, convertToRaw } from 'draft-js';

export interface ProductTags {
  [category: string]: string[];
}

export const productTags: ProductTags = {
  Watch: ['Analog', 'Digital', 'Luxury', 'Sports', 'Smartwatch'],
  'Smart Phone': ['Smartphone', 'Feature Phone', 'Accessories'],
  Camera: ['DSLR', 'Mirrorless', 'Compact', 'Action Cam'],
  Audio: ['Headphones', 'Speakers', 'Earbuds', 'Microphones'],
  Laptop: ['Gaming', 'Ultrabook', 'Business', '2-in-1'],
};

export const productSections = [
  ProductSectionName.NewArrivals,
  ProductSectionName.JustForYou,
  ProductSectionName.FeaturedProducts,
];

export type ProductSectionNameType =
  (typeof ProductSectionName)[keyof typeof ProductSectionName];

export interface ProductInitialState {
  title: string;
  category: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  productSectionName: ProductSectionNameType;
  offerText: string;
  sellerId: string;
  ratings: {
    star: number;
    totalReviews: number;
  };
  totalAnswers: number;
  totalWishlist: number;
  inStock: boolean;
  images: string[];
  description: EditorState;
  specification: EditorState;
  tags: string[];
}

export const initialState: ProductInitialState = {
  title: '',
  category: '',
  price: 0,
  discountPrice: 0,
  discountPercent: 0,
  productSectionName: ProductSectionName.NewArrivals,
  offerText: '',
  sellerId: '',
  ratings: {
    star: 0,
    totalReviews: 0,
  },
  totalAnswers: 0,
  totalWishlist: 0,
  inStock: true,
  images: [],
  description: EditorState.createEmpty(),
  specification: EditorState.createEmpty(),
  tags: [],
};

export function calculateDiscountedPrice(
  price: number,
  percentage: number
): number {
  return percentage <= 0 ? 0 : price * ((100 - percentage) / 100);
}

interface AppendDataToForm {
  data: ProductInitialState;
  sellerId: string;
}
export const appendDataToForm = (props: AppendDataToForm): FormData => {
  const formData = new FormData();
  const { data, sellerId } = props;

  const tags = data.tags.filter(tag => tag !== 'undefined');

  //@ts-expect-error
  data.images?.forEach(file => formData.append('images', file, file.name));

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
