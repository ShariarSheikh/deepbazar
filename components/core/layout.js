import Head from "next/head";
import Header from "../core/Header";
import Footer from "../code/Footer";

const Layout = ({ children, pageName }) => {
  return (
    <main>
      <Head>
        <title>DeepBazar-Home</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
