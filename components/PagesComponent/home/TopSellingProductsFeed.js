import React from "react";
import ProductsFeed from "../../common/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../common/ShoppingCart/ShoppingCart";

const TopSellingProductsFeed = ({ products }) => {
  return (
    <div>
      <ProductsFeed sectionName="Top Selling">
        {products?.slice(0, 8).map((x) => (
          <ShoppingCart key={x.id} data={x} />
        ))}
      </ProductsFeed>
    </div>
  );
};

export default TopSellingProductsFeed;
