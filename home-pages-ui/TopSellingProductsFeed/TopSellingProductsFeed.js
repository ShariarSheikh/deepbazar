import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsFeed from "../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import {
  fetchTopSelling,
  getTopSellingProduct,
} from "../../redux/getTopSelling/getTopSelling";
import { LoadingShoppingCart } from "../../utils/loading";

const TopSellingProductsFeed = () => {
  const { error, status, products } = useSelector(getTopSellingProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopSelling());
  }, []);

  if (error) {
    <div>{error}</div>;
  }

  return (
    <div>
      {status === "pending" ? (
        <ProductsFeed sectionName="Top Selling">
          <LoadingShoppingCart />
          <LoadingShoppingCart />
          <LoadingShoppingCart />
          <LoadingShoppingCart />
        </ProductsFeed>
      ) : (
        <ProductsFeed sectionName="Top Selling">
          {products?.slice(0, 8).map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      )}
    </div>
  );
};

export default TopSellingProductsFeed;
