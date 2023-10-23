export interface ProductRelated {
  product_id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductImage {
  isDefault: boolean;
  defaultImg: string;
  cardImg: string;
  displayImg: string;
  commentImg: string;
  smallImg: string;
  publicId: string;
}

export interface ProductTypes {
  _id: string;
  status: ProductStatusType;
  title: string;
  productCode: string;
  category: string;
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

  images: ProductImage[];

  description: string;
  specification?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SellerProductList {
  _id: string;
  createdAt: Date;
  price: number;
  status: ProductStatusType;
  imgUrl: string;
  title: string;
}

export const ProductStatus = {
  Pending: 'Pending',
  Approved: 'Active',
  Testing: 'Testing',
  Rejected: 'Rejected',
} as const;

export type ProductStatusType =
  (typeof ProductStatus)[keyof typeof ProductStatus];

export const ProductSectionName = {
  NewArrivals: 'New Arrivals',
  FeaturedProducts: 'Featured Products',
  JustForYou: 'Just For You!',
} as const;

export type ProductSectionNameType =
  (typeof ProductSectionName)[keyof typeof ProductSectionName];
