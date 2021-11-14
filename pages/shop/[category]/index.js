import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React from "react";
import ProductsFeed from "../../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../../utils/loading";
import axios from "axios";
import { categoryList } from "../../../utils/Data";

const index = ({ products }) => {
  const { category } = useRouter().query;
  const router = useRouter();

  if (router.isFallback) {
    <main className="max-w-[1366px] w-full m-auto mt-8 px-4">
      <h2 className="font-medium text-xl uppercase">{category}</h2>

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
        <title>DeepBazar-{category}</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1366px] w-full m-auto mt-8 px-4">
        <h2 className="font-medium text-xl uppercase">{category}</h2>
        <ProductsFeed sectionName="">
          {products?.map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      </main>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const paths = categoryList.slice(1).map((ctg) => ({
    params: { category: ctg.link },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://deepbazar.vercel.app";

  const { category } = params;

  //fetch category products
  const categoryProducts = await axios.get(
    server + process.env.NEXT_PUBLIC_VERCEL_UR_GET_CATEGORY_PRODUCTS + category
  );
  const products = await categoryProducts?.data?.data;

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
