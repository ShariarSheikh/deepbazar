import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/core/Footer/Footer";
import Header from "../components/core/Header/Header";
import Banner from "../components/PagesComponent/home/Banner";
import NewProductsFeed from "../components/PagesComponent/home/NewProductsFeed";
import TopSection from "../components/PagesComponent/home/TopSection";
import TopSellingProductsFeed from "../components/PagesComponent/home/TopSellingProductsFeed";
import {
  fetchNewProducts,
  fetchTopSelling,
  getProductApiState,
} from "../redux/productsApi/productApiSlice";

const Index = () => {
  const { topSellingProducts, newProducts } = useSelector(getProductApiState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSelling(10));
    dispatch(fetchNewProducts());
  }, []);

  return (
    <>
      <Head>
        <title>DeepBazar</title>
      </Head>
      <Header />
      <main className="page max-w-[1366px] w-full m-auto mt-10 px-4">
        <TopSection />
        {topSellingProducts.status === "pending" && <p>Loading.....</p>}
        {topSellingProducts.status === "rejected" && (
          <p className="text-sm text-red-500">{topSellingProducts.error}</p>
        )}
        {topSellingProducts.status === "success" && (
          <TopSellingProductsFeed products={topSellingProducts.products} />
        )}
        <Banner />

        {newProducts.status === "pending" && <p>Loading.....</p>}
        {newProducts.status === "rejected" && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {newProducts.status === "success" && (
          <NewProductsFeed products={newProducts?.products} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Index;
