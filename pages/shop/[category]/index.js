import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryList,
  getCategoryList,
} from "../../../redux/getCategoryListSlice/getCategorySlice";
import ProductsFeed from "../../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../../utils/loading";

const index = () => {
  const { error, status, products } = useSelector(getCategoryList);
  const { category } = useRouter().query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList(category));
  }, [category]);

  if (error) {
    <div>error</div>;
  }

  return (
    <div>
      <Head>
        <title>DeepBazar-{category}</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1366px] w-full m-auto mt-8 px-4">
        <h2 className="font-medium text-xl uppercase">{category}</h2>

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
