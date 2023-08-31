import { CSSProperties, FC } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

//-------------------------
interface IProps {
  reviews: {
    total: number;
    star: number;
  };
  containerStyles?: CSSProperties;
}

const ReviewStar: FC<IProps> = ({ reviews, containerStyles }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { total, star } = reviews;
  return (
    <div style={containerStyles} className="flex items-center">
      <div className="flex items-center space-x-1">
        <FaStar className="text-primary text-[12px]" />
        <FaStar className="text-primary text-[12px]" />
        <FaStar className="text-primary text-[12px]" />
        <FaStarHalfAlt className="text-primary text-[12px]" />
        <FaRegStar className="text-primary text-[12px]" />
      </div>
      <p className="text-[10px] font-medium text-gray-500 pt-[5px] ml-[8px]">
        ({total})
      </p>
    </div>
  );
};

export default ReviewStar;