import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ProductsFeed from "../../../components/common/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../../components/common/ShoppingCart/ShoppingCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByCategories,
  getProductApiState,
} from "../../../redux/productsApi/productApiSlice";
import { LoadingShoppingCart } from "../../../components/common/Loading/loading";
import Header from "../../../components/core/Header/Header";
import Footer from "../../../components/core/Footer/Footer";

const index = () => {
  const { pdByCategories } = useSelector(getProductApiState);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.isReady) return;

    dispatch(fetchProductByCategories(router.query.category));
  }, [router.isReady, router.asPath]);

  return (
    <>
      <Head>
        <title>DeepBazar -{router.isReady && router.query?.category}</title>
      </Head>
      <Header />
      <div className="page max-w-[1366px] w-full m-auto mt-8 px-4">
        <h2 className="font-medium text-xl uppercase">
          {router.query.category}
        </h2>
        {pdByCategories.status === "pending" && (
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
        {pdByCategories.status === "success" &&
          pdByCategories.products.length > 0 && (
            <ProductsFeed sectionName="">
              {pdByCategories.products?.map((x) => (
                <ShoppingCart key={x.id} data={x} />
              ))}
            </ProductsFeed>
          )}
        {pdByCategories.status === "rejected" && (
          <p className="p-10 text-sm text-red-500">{pdByCategories.error}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default index;
