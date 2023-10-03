export const ProductStatus = {
  Pending: 'Pending',
  Approved: 'Active',
  Testing: 'Testing',
} as const;

export const ProductSectionName = {
  NewArrivals: 'New Arrivals',
  FeaturedProducts: 'Featured Products',
  JustForYou: 'Just For You!',
} as const;

export type ProductStatusType =
  (typeof ProductStatus)[keyof typeof ProductStatus];
export type ProductSectionNameType =
  (typeof ProductSectionName)[keyof typeof ProductSectionName];
