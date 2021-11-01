import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import ProductsFeedOne from "../pages-ui/main-page-ui/ProductsFeedOne/ProductsFeedOne";
import TopSection from "../pages-ui/main-page-ui/TopSection/TopSection";
import JoinBox from "../components/JoinBox/Index";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { loginBox } from "../redux/loginSlice/loginSlice";

const Index = () => {
  const isLogin = useSelector(loginBox);
  const [hideLoginBox, setHideLoginBox] = useState(false);

  useEffect(() => {
    isLogin?.userStatus === "success" && setHideLoginBox(true);
  }, [isLogin?.userStatus]);

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
      <Header />

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4">
        <TopSection />
        <ProductsFeedOne />
      </main>

      <Footer />

      {!hideLoginBox && !Cookies.get("token") && <JoinBox />}
    </div>
  );
};

export default Index;
