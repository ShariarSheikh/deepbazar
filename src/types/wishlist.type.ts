export interface WishlistData {
  _id: string;
  title: string;
  imgUrl: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  user: {
    _id: string;
  };
  product: {
    _id: string;
  };
}
