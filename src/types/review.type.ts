import { ProductImage } from './product.types';

export enum RatingLevelEnum {
  Required = 'Rating is Required *',
  VeryPoor = 'Very Poor',
  Poor = 'Poor',
  Neutral = 'Neutral',
  Good = 'Good',
  Excellent = 'Excellent',
}

export interface ReviewCreate {
  productId: string;
  star: number;
  ratingLevel: string;
  message: string;
}

export interface ReviewData {
  _id: string;
  user: {
    imgUrl: string;
    _id: string;
    name: string;
  };
  product: {
    images?: ProductImage[];
    title?: string;
    _id: string;
  };

  star: number;
  ratingLevel: RatingLevelEnum;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
