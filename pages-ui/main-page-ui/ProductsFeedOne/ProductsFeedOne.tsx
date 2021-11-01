import React from "react";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";

const ProductsFeedOne: React.FC = () => {
  return (
    <section className="max-w-[570px] md:max-w-full m-auto mt-12">
      <h1 className="font-medium">New Products</h1>

      {/* product container */}
      <div className="w-full flex flex-wrap justify-between md:justify-between mt-2">
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
      </div>

      <h1 className="font-medium">Top Selling</h1>

      {/* product container */}
      <div className="w-full flex flex-wrap justify-between mt-2">
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
      </div>
    </section>
  );
};

export default ProductsFeedOne;
