import { ProductImage } from '@/types/product.types';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface IProps {
  images: ProductImage[];
}

const DisplayImage: FC<IProps> = ({ images }) => {
  const [image, setImage] = useState<ProductImage>({
    isDefault: false,
    defaultImg: '',
    cardImg: '',
    displayImg: '',
    commentImg: '',
    smallImg: '',
    publicId: '',
  });

  useEffect(() => {
    const selectDefault = images.find(imgData => imgData.isDefault);
    setImage(selectDefault ?? image);
  }, [images]);

  const onSelectImage = (imageData: ProductImage) => {
    if (imageData.publicId === image.publicId) return undefined;
    setImage(imageData);
  };

  return (
    <div className="relative w-full bg-white max-w-[450px] min-h-[350px] max-h-[350px] lg:min-h-[475px] lg:max-h-[475px]">
      <div
        className={`w-full h-[292px] max-h-[292px] lg:h-[450px] lg:max-h-[450px] relative bg-[#f5f6f6] rounded-[6px] overflow-hidden`}
      >
        <Image
          className="w-full h-full object-contain bg-gray-100"
          src={image.displayImg}
          alt="main picture"
          fill
        />
      </div>

      <div
        className={`w-full bg-[#f5f6f6] h-[50px] flex flex-row space-x-2 overflow-hidden mt-2 px-2 rounded-[6px]`}
      >
        {images.map(imageData => (
          <div
            key={imageData.publicId}
            onClick={() => onSelectImage(imageData)}
            className="relative cursor-pointer active:scale-95 duration-150 w-[50px] h-[50px] rounded-[6px] bg-primaryLight"
          >
            <Image
              className="rounded-[8px]"
              fill
              src={imageData.commentImg}
              alt="product list image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
