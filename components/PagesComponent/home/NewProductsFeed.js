import React from "react";
import ProductsFeed from "../../common/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../common/ShoppingCart/ShoppingCart";

const NewProductsFeed = ({ products }) => {
  return (
    <div>
      <ProductsFeed sectionName="New Arrivals" mt={12}>
        {products?.slice(0, 8).map((x) => (
          <ShoppingCart key={x.id} data={x} />
        ))}
      </ProductsFeed>
    </div>
  );
};

export default NewProductsFeed;
