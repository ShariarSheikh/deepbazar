import React from "react";
import Head from "next/head";
import PaymentCart from "../../components/PagesComponent/cart/PaymentCart";
import YourOrder from "../../components/PagesComponent/cart/YourOrder";
import Layout from "../../components/core/layout";

const index = () => {
  return (
    <Layout pageName="cart">
      <Head>
        <title>DeepBazar-Cart</title>
      </Head>

      <main className="page w-full lg:max-w-[1366px] max-w-[640px] lg:w-full m-auto mt-5 px-3 pb-10">
        <h1 className="text-xl font-semibold text-gray-600">Shopping Cart</h1>
        <p className="text-sm mt-2 font-medium">Home / Cart</p>
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse justify-between mt-4 relative">
          <PaymentCart />
          <YourOrder />
        </div>
      </main>
    </Layout>
  );
};

export default index;
