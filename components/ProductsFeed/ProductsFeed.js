import React from "react";

const ProductsFeed = ({ children, sectionName}) => {
  return (
    <section className={`max-w-[570px] md:max-w-full m-auto mt-10`}>
      <h1 className="font-medium">{sectionName && sectionName}</h1>

      {/* product container */}
      <div className="w-full flex flex-wrap justify-between md:justify-start mt-2">
        {children}
      </div>
    </section>
  );
};

export default ProductsFeed;
