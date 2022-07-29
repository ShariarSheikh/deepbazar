import React from "react";
import ProductsFeed from "../../components/common/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../components/common/ShoppingCart/ShoppingCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  getProductApiState,
} from "../../redux/productsApi/productApiSlice";
import { LoadingShoppingCart } from "../../components/common/Loading/loading";
import Layout from "../../components/core/Layout/index";

const index = () => {
  const { allProducts } = useSelector(getProductApiState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <Layout pageName="shop">
      <div className="page max-w-[1366px] w-full m-auto mt-10 px-4">
        {allProducts.status === "pending" && (
          <ProductsFeed sectionName="">
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
          </ProductsFeed>
        )}

        {allProducts.status === "success" && allProducts.products.length > 0 && (
          <ProductsFeed sectionName="">
            {allProducts.products?.map((x) => (
              <ShoppingCart key={x.id} data={x} />
            ))}
          </ProductsFeed>
        )}

        {allProducts.status === "rejected" && (
          <p className="p-10 text-sm text-red-500">{allProducts.error}</p>
        )}
      </div>
    </Layout>
  );
};

export default index;
