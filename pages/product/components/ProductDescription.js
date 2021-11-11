import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row border-t border-gray-200 pt-5 mt-10">
      <div className="w-full lg:w-3/6">
        <p className="text-xl font-semibold">Description:</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full lg:w-3/6 lg:pl-10 mt-4 lg:mt-0">
        <ul className="list-disc pl-6 lg:p-0">
          <li className="text-gray-600">Lorem, ipsum dolor.</li>
          <li className="text-gray-600">Lorem, ipsum dolor.</li>
          <li className="text-gray-600">Lorem, ipsum dolor.</li>
          <li className="text-gray-600">Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
