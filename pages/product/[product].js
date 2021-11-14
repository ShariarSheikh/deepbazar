import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React from "react";
import ImgContainer from "./components/ImgContainer";
import InfoContainer from "./components/InfoContainer";
import ProductDescription from "./components/ProductDescription";
import FetchRelatedProducts from "./components/FetchRelatedProducts";
import axios from "axios";

const Product = ({ pdItem }) => {
  const router = useRouter();

  if (router.isFallback) {
    <div className="h-[50vh] flex justify-center items-center font-roboto font-semibold">
      <p>Loading...</p>
    </div>;
  }
  return (
    <div>
      <Head>
        <title>DeepBazar-{pdItem?.title}</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1366px] w-full m-auto mt-8 px-4 pb-4">
        <div className="w-full flex flex-col lg:flex-row justify-between mt-4 transition-all duration-200">
          <ImgContainer images={pdItem?.images} />
          <InfoContainer data={pdItem && pdItem} />
        </div>
        <ProductDescription description={pdItem?.description} />
        <FetchRelatedProducts category={pdItem?.category} />
      </main>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://deepbazar.vercel.app";

  const { data } = await axios.get(
    server + process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_ALL
  );
  const products = await data?.data;

  const paths = products.map((pd) => ({
    params: { product: pd.id.toString() },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://deepbazar.vercel.app";

  const { product } = params;

  //fetch category products
  const oneProduct = await axios.get(
    server +
      `${process.env.NEXT_PUBLIC_VERCEL_UR_GET_SINGLE_PRODUCT}id=${Number(
        product
      )}`
  );
  const pdItem = await oneProduct?.data?.data;

  return {
    props: {
      pdItem: pdItem || null,
    },
    revalidate: 10, // In seconds
  };
};

export default Product;
