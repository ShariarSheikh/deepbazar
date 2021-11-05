import React from "react";

const ImgContainer = ({ images, status }) => {
  return (
    <div className="relative w-full lg:w-[47%] max-w-[768px] m-auto flex flex-col-reverse lg:flex-row min-h-[400px] max-h-[400px]">
      {/* images list */}
      <div
        className={`w-full lg:w-[55px] flex flex-row lg:flex-col lg:space-y-4 space-x-5 lg:space-x-0 overflow-hidden mt-6 lg:mt-0 ${
          status === "pending" ? "pulse-animation" : ""
        }`}
      >
        {images?.map((x) => (
          <img
            key={x}
            className="w-[50px] h-[50px] cursor-pointer bg-gray-100"
            src={x}
            alt="product"
          />
        ))}
      </div>

      {/* selected img */}
      <div
        className={`w-full h-[400px] lg:pl-[20px] ${
          status === "pending" ? "pulse-animation" : ""
        }`}
      >
        {images?.slice(0, 1).map((x) => (
          <img
            key={x}
            className="w-full h-full object-cover bg-gray-100"
            src={x}
            alt="main picture"
          />
        ))}
      </div>
    </div>
  );
};

export default ImgContainer;
