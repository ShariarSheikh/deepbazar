import Head from "next/head";
import React from "react";
import TopSection from "../home-pages-ui/TopSection/TopSection";
import TopSellingProductsFeed from "../home-pages-ui/TopSellingProductsFeed/TopSellingProductsFeed";
import NewProductsFeed from "../home-pages-ui/NewProductsFeed/NewProductsFeed";
import Banner from "../home-pages-ui/Banner/Banner";
import axios from "axios";

const Index = ({ products }) => {
  return (
    <div>
      <Head>
        <title>DeepBazar-Home</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4">
        <TopSection />
        <TopSellingProductsFeed products={products?.topSellingProducts} />
        <Banner />
        <NewProductsFeed products={products?.newProducts} />
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://deepbazar.vercel.app/";

  //fetch topSellingProducts
  const fetchTopSellingProducts = await axios.get(
    server + process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_TOP_SELLING
  );
  const topSellingProducts = await fetchTopSellingProducts?.data?.data;

  //fetch new products
  const fetchNewProducts = await axios.get(
    server + process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_NEW_PRODUCT
  );
  const newProducts = await fetchNewProducts?.data?.data;

  const products = {
    topSellingProducts,
    newProducts,
  };
  return {
    props: {
      products: products,
    },
    revalidate: 10, // In seconds
  };
};

export default Index;
