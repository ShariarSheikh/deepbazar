import React from "react";
import Head from "next/head";
import PaymentCart from "./components/PaymentCart";
import YourOrder from "./components/YourOrder";

const index = () => {
  return (
    <div>
      <Head>
        <title>DeepBazar-Cart</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full lg:max-w-[1366px] max-w-[640px] lg:w-full m-auto mt-5 px-3 pb-10">
        <h1 className="text-xl font-semibold text-gray-600">Shopping Cart</h1>
        <p className="text-sm mt-2 font-medium">
          HomePage / Shop / Shopping Cart
        </p>
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse justify-between mt-4 relative">
          <PaymentCart />
          <YourOrder />
        </div>
      </main>
    </div>
  );
};

export default index;
