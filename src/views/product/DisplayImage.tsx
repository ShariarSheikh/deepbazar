import Image from 'next/image';
import { FC, useRef, useState } from 'react';

const DisplayImage: FC = () => {
  const [displayImg, setDisplayImg] = useState<string>(
    'https://via.placeholder.com/400x400'
  );
  const displayImageContainerRef = useRef<HTMLDivElement>(null);

  // const displayImageWidth = displayImageContainerRef.current?.offsetWidth;
  // const displayImageHeight = displayImageContainerRef.current?.offsetHeight;

  // useEffect(() => {
  //   if (!displayImageHeight)
  //     return setDisplayImg('https://via.placeholder.com/400x400');

  //   return setDisplayImg(
  //     `https://via.placeholder.com/${displayImageWidth}x${displayImageHeight}`
  //   );
  // }, [displayImageHeight, displayImageWidth]);

  return (
    <div className="relative w-full lg:w-[47%] max-w-[768px] m-auto flex flex-col-reverse min-h-[450px] max-h-[450px]">
      {/* images list */}
      <div
        className={`w-full lg:w-[55px] h-[50px] flex flex-row space-x-5 lg:space-x-0 overflow-hidden mt-6`}
      >
        {[1, 2, 3, 4].map((v, i) => (
          <Image
            key={i}
            className="cursor-pointer z-20"
            src="https://via.placeholder.com/50x50"
            alt="product"
            layout="responsive"
            width={50}
            height={50}
          />
        ))}
      </div>

      {/* selected img */}
      <div
        ref={displayImageContainerRef}
        className={`w-full max-w-[582px] h-full min-h-[400px] lg:pl-[20px] relative`}
      >
        <Image
          className="w-full h-full object-contain bg-gray-100"
          src={displayImg}
          alt="main picture"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default DisplayImage;
