/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

interface IProps {
  images: {
    cardSizeUrl: string;
    displayUrl: string;
    commentUrl: string;
    defaultUrl: string;
  };
}

const DisplayImage: FC<IProps> = ({ images }) => {
  return (
    <div className="relative w-full bg-white max-w-[370px] min-h-[436px] max-h-[435px]">
      <div
        className={`w-full h-full max-h-[370px] relative bg-[#f5f6f6] rounded-[6px] overflow-hidden`}
      >
        <img
          className="w-full h-full object-contain bg-gray-100"
          src={images.displayUrl}
          alt="main picture"
        />
      </div>

      <div
        className={`w-full bg-[#f5f6f6] h-[50px] flex flex-row space-x-2 overflow-hidden mt-2 px-2 rounded-[6px]`}
      >
        {[1, 2, 3, 4].map((v, i) => (
          <img
            key={i}
            className="object-cover cursor-pointer w-[50px] h-[50px] rounded-[6px] hover:scale-110 duration-150"
            src={images.displayUrl}
            alt="product"
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
