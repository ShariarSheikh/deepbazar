export interface ProductRelated {
  product_id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductTypes {
  product_id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  inventory: {
    stock: number;
    availability: boolean;
  };
  attributes: {
    color: string;
    size: string;
  };
  reviews: {
    average_rating: number;
    total_reviews: number;
  };
  related_products: ProductRelated[];
  product_url: string;
  _id?: string;
  createdAt: Date;
  updatedAt: Date;
}
