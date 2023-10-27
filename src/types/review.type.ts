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
  productId: string;
  star: number;
  ratingLevel: RatingLevelEnum;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
