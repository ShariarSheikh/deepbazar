export interface CreateProductStateInterface {
  productName: string;
  productSpecification: string;
  offerText: string;
  barCode: string;
  materials: string;
  measurement: string;
  color: string;
  size: string;
  variousType: string;
  status: string;
  productDescription: string;
  displayImage: null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productDetailsImage: string[] | any[];
  productCode: string;
  sellPrice: number;
  discountPercent: number;
  discountPrice: number;
  minimumSellQuantity: number;
  maximumSellQuantity: number;
  weight: number;
  unit: string;
  minimumSellAmount: number;
  minimumSellAmountType: string;
  category: string;
  seller: string;
  searchKeyword: string[];
  inStock: boolean;
  feature: boolean;
  callForPrice: boolean;
  storeOnly: boolean;
  onSale: boolean;
  display: boolean;
}
