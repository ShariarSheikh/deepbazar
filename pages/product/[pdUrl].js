import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSingleProductByUrl,
  getProductApiState,
} from "../../redux/productsApi/productApiSlice";
import { useSelector } from "react-redux";
import pdEndpoint from "../../utils/pdEndpoint";
import InfoContainer from "../../components/PagesComponent/product/InfoContainer";
import ProductDescription from "../../components/PagesComponent/product/ProductDescription";
import ImgContainer from "../../components/PagesComponent/product/ImgContainer";
import FetchRelatedProducts from "../../components/PagesComponent/product/FetchRelatedProducts";
import { LoadingLayout } from "../../components/common/Loading/loading";
import Header from "../../components/core/Header/Header";
import Footer from "../../components/core/Footer/Footer";

const Product = () => {
  const { singlePdByUrl } = useSelector(getProductApiState);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.isReady) return undefined;
    dispatch(fetchSingleProductByUrl(router.query.pdUrl));
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>
          {pdEndpoint(singlePdByUrl.product?.title, singlePdByUrl.product?.id)}
        </title>
      </Head>
      <Header />
      <main className="page max-w-[1366px] w-full m-auto mt-8 px-4 pb-4">
        <div className="w-full flex flex-col lg:flex-row justify-between mt-4 transition-all duration-200">
          {/* for loading */}
          {singlePdByUrl.status === "pending" && (
            <div className="grid gap-4 lg:grid-cols-2 w-full max-w-7xl mx-auto">
              <div className="lg:h-[400px] h-[300px] relative">
                <LoadingLayout />
              </div>
              <div className="lg:h-[600px] h-[300px] relative">
                <LoadingLayout />
              </div>
            </div>
          )}

          {singlePdByUrl.status === "success" && (
            <>
              <ImgContainer images={singlePdByUrl.product?.images} />
              <InfoContainer data={singlePdByUrl.product} />
            </>
          )}
        </div>
        <ProductDescription description={singlePdByUrl.product?.description} />
        <FetchRelatedProducts category={singlePdByUrl.product?.category} />
      </main>
      <Footer />
    </>
  );
};

export default Product;
