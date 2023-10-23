import { ProductTypes } from '@/types/product.types';
import uniqueCodeGenerator from '@/utils/uniqeCodeGenerator';

export const productTags = {
  Watch: ['Analog', 'Digital', 'Luxury', 'Sports', 'Smartwatch'],
  'Smart Phone': ['Smartphone', 'Feature Phone', 'Accessories'],
  Camera: ['DSLR', 'Mirrorless', 'Compact', 'Action Cam'],
  Audio: ['Headphones', 'Speakers', 'Earbuds', 'Microphones'],
  Laptop: ['Gaming', 'Ultrabook', 'Business', '2-in-1'],
};

export const ProductSectionName = {
  NewArrivals: 'New Arrivals',
  FeaturedProducts: 'Featured Products',
  JustForYou: 'Just For You!',
} as const;

export type ProductSectionNameType =
  (typeof ProductSectionName)[keyof typeof ProductSectionName];

//@ts-expect-error
export const initialState: ProductTypes = {
  title: '',
  productCode: uniqueCodeGenerator(),
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
  description: '',
  specification: '',
  tags: [],
};

export function calculateDiscountedPrice(
  price: number,
  percentage: number
): number {
  return percentage <= 0 ? 0 : price * ((100 - percentage) / 100);
}
