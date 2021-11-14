import React from "react";
import Image from "next/image";

const ImgContainer = ({ images }) => {
  return (
    <div className="relative w-full lg:w-[47%] max-w-[768px] m-auto flex flex-col-reverse min-h-[400px] max-h-[400px]">
      {/* images list */}
      <div
        className={`w-full lg:w-[55px] flex flex-row space-x-5 lg:space-x-0 overflow-hidden mt-6`}
      >
        {images?.map((x, k) => (
          <Image
            key={k}
            className="cursor-pointer z-20"
            src={x}
            alt="product"
            layout="responsive"
            width={50}
            height={50}
          />
        ))}
      </div>

      {/* selected img */}
      <div className={`w-full h-[400px] lg:pl-[20px]`}>
        {images?.slice(0, 1).map((x) => (
          <Image
            key={x}
            className="w-full h-full object-cover bg-gray-100"
            src={x}
            alt="main picture"
            layout="fill"
            placeholder="blur"
            blurDataURL
          />
        ))}
      </div>
    </div>
  );
};

export default ImgContainer;
