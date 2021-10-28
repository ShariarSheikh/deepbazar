import Head from "next/head";
import Header from "../../components/Header/Index";

const index = () => {
  return (
    <div>
      <Head>
        <title>DeepBazar-Shop</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>this is all products</h1>
      </main>
    </div>
  );
};

export default index;
