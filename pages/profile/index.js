import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Index";
import axios from "axios";
import Cookies from "cookie";
import jsCookie from "js-cookie";
import TopSection from "./components/TopSection";
import { useRouter } from "next/dist/client/router";

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
    res.setHeader(
      "Set-Cookie",
      Cookies.serialize("token", "", {
        httpOnly: true,
        maxAge: 0,
      })
    );

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

  const router = useRouter();

  const logOutHandler = (text) => {
    if (text === "logout") {
      jsCookie.remove("token");
      jsCookie.remove("userName");
      jsCookie.remove("profileImg");
      router.push("/");
    } else if (text === "delete") {
      alert("delete your account");
    }
  };

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

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4 min-h-[60vh]">
        <TopSection userImg={user.profileImg} />
        <h1 className="text-start font-semibold text-2xl">
          {user.name.toLocaleUpperCase()}
        </h1>

        <div className="mt-5 py-5 bg-gray-200 w-full px-5 flex justify-between">
          <p
            className="font-semibold cursor-pointer text-gray-600 mb-2"
            onClick={() => logOutHandler("logout")}
          >
            LogOut
          </p>
          <p
            className="font-semibold cursor-pointer text-red-600 mb-2"
            onClick={() => logOutHandler("delete")}
          >
            Delete Account
          </p>
        </div>
      </main>
    </div>
  );
};

export default index;
