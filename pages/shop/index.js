import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductsFeed from "../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../utils/loading";
import {
  fetchProductsData,
  getProducts,
} from "../../redux/getProductsSlice/getProductsSlice";

const index = () => {
  const { error, products, status } = useSelector(getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  if (error) {
    <div>{error}</div>;
  }

  return (
    <div>
      <Head>
        <title>DeepBazar-Shop</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4">
        {status === "pending" ? (
          <ProductsFeed sectionName="">
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
            <LoadingShoppingCart />
          </ProductsFeed>
        ) : (
          <ProductsFeed sectionName="">
            {products?.map((x) => (
              <ShoppingCart key={x.id} data={x} />
            ))}
          </ProductsFeed>
        )}
      </main>
    </div>
  );
};

export default index;
