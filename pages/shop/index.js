import Head from "next/head";
import React from "react";
import ProductsFeed from "../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../utils/loading";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const index = ({ products }) => {
  const router = useRouter();

  if (router.isFallback) {
    <main className="max-w-[1366px] w-full m-auto mt-10 px-4">
      <ProductsFeed sectionName="">
        <LoadingShoppingCart />
        <LoadingShoppingCart />
        <LoadingShoppingCart />
        <LoadingShoppingCart />
      </ProductsFeed>
    </main>;
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
        <ProductsFeed sectionName="">
          {products?.map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://deepbazar.vercel.app";

  //fetch all products
  const allProducts = await axios.get(
    server + process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_ALL
  );
  const products = await allProducts?.data?.data;

  if (!products) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products: products,
    },
    revalidate: 10, // In seconds
  };
};

export default index;
