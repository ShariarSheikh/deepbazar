import Head from "next/head";
import Header from "../components/Header/Index";
import TopSection from "../pages-ui/main-page-ui/TopSection/TopSection";

export default function Index() {
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

      <main className="max-w-[1366px] w-full m-auto mt-16">
        <TopSection />
      </main>
    </div>
  );
}
