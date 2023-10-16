import { ProductSectionNameType } from '@/app/(dashboard)/seller/products/add-new/utils';

export interface ProductRelated {
  product_id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductTypes {
  _id: string;
  title: string;
  productCode: string;
  category: string[];
  productSectionName: ProductSectionNameType;
  sellerId: string;
  ratings: {
    star: number;
    totalReviews: number;
  };
  totalAnswers: number;
  totalWishlist: number;

  price: number;
  discountPrice?: number;
  discountPercent?: number;

  offerText?: string;
  inStock: boolean;

  images: Array<{
    isDefault: boolean;
    defaultImg: string;
    cardImg: string;
    displayImg: string;
    commentImg: string;
    publicId: string;
  }>;

  description: string;
  specification?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
