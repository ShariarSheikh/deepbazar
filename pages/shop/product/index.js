import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import ImgContainer from "./components/ImgContainer";
import InfoContainer from "./components/InfoContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  getSingleProduct,
} from "../../../redux/getSingleProductSlice/getSingleProductSlice";
import ProductDescription from "./components/ProductDescription";
import FetchRelatedProducts from "../../../utils/FetchRelatedProducts";

const index = () => {
  const { category, name, id } = useRouter().query;
  const { error, status, products } = useSelector(getSingleProduct);

  const dispatch = useDispatch();
  const query = {
    category,
    id,
    name,
  };

  useEffect(() => {
    category && name && id && dispatch(fetchSingleProduct(query));
  }, [category, id, name]);

  if (error) {
    <div>error</div>;
  }
  return (
    <div>
      <Head>
        <title>DeepBazar-{name}</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1366px] w-full m-auto mt-8 px-4 pb-4">
        <h2 className="font-semibold text-xl uppercase"></h2>

        <div className="w-full flex flex-col lg:flex-row justify-between mt-4 transition-all duration-200">
          <ImgContainer images={products?.images} status={status} />
          <InfoContainer data={products} status={status} />
        </div>
        <ProductDescription
          description={products?.description}
          status={status}
        />
        <FetchRelatedProducts category={products?.category} />
      </main>
    </div>
  );
};

export default index;
