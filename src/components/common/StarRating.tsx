import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoMdStarHalf } from 'react-icons/io';

const StarRating: FC<{ rating: number }> = ({ rating }) => {
  // Convert the rating to a number between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, rating));

  // Create an array of stars, full and half, based on the rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (normalizedRating >= i + 1) {
      stars.push(<AiFillStar key={i} className="w-[19px] h-[19px]" />);
    } else if (normalizedRating > i) {
      stars.push(<IoMdStarHalf key={i} className="w-[21px] h-[21px]" />);
    } else {
      stars.push(
        <AiFillStar key={i} className="w-[19px] h-[19px] fill-gray-400" />
      );
    }
  }

  return <div className="flex items-center text-primary">{stars}</div>;
};

export default StarRating;
