import Head from "next/head";
import React from "react";
import TopSection from "../home-pages-ui/TopSection/TopSection";
import TopSellingProductsFeed from "../home-pages-ui/TopSellingProductsFeed/TopSellingProductsFeed";
import NewProductsFeed from "../home-pages-ui/NewProductsFeed/NewProductsFeed";
import Banner from "../home-pages-ui/Banner/Banner";

const Index = () => {
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
        <TopSellingProductsFeed />
        <Banner />
        <NewProductsFeed />
      </main>
    </div>
  );
};

export default Index;
