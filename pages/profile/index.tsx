import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Index";
import axios from "axios";

export const getServerSideProps = async ({ req, res }) => {
  const { token } = req.cookies;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_VERCEL_UR_PROFILE,
      config
    );
    const data = response.data;
    return {
      props: { user: data },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

const index = (props) => {
  const { user } = props.user.data;

  return (
    <div>
      <Head>
        <title>{user.name}-profile</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4">
        <h1>User Profile</h1>
        <h1>User Profile</h1>
      </main>
    </div>
  );
};

export default index;
