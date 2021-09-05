import Head from "next/head";
import Header from "../components/Header/Index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeepBazar</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>Welcome to DeepBazar</h1>
      </main>
    </div>
  );
}
