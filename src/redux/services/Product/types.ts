import { ProductTypes } from '@/types/product.types';

export interface ProductListApi {
  data: { total: number; products: ProductTypes[] };
}
