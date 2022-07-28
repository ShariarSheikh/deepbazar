import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { loginState, logout } from "../../redux/loginSlice/loginSlice";
import { useDispatch } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";

const index = () => {
  const {
    userData: { user },
  } = useSelector(loginState);
  const router = useRouter();
  const dispatch = useDispatch();

  //logout user
  const logOutHandler = () => {
    dispatch(logout());
    router.replace("/");
  };

  return (
    <div>
      <Head>
        <title>{user?.name}-profile</title>
        <meta
          name="description"
          content="biggest ecommerce platform in bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1366px] w-full m-auto mt-10 px-4 min-h-[60vh]">
        <div className="w-full relative mb-20">
          {/* cover photo */}
          <div className="min-h-[300px] max-h-[300px] overflow-hidden w-full z-10">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
              alt="cover photo"
            />
          </div>

          {/* user photo */}
          <div className="absolute -bottom-16 min-w-32 min-h-32 z-20 m-auto flex justify-center items-center rounded-full">
            {!user?.profileImg && (
              <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
                <AiOutlineUser className="w-full h-full bg-gray-200 text-gray-600" />
              </div>
            )}

            {user?.profileImg && (
              <img
                className="w-32 h-32 overflow-hidden p-3 rounded-full object-cover"
                src={user?.profileImg}
                alt="user profile"
              />
            )}
          </div>
        </div>
        <h1 className="text-start font-semibold text-2xl">
          {user?.name?.toLocaleUpperCase()}
        </h1>

        <div className="mt-5 py-5 bg-gray-200 w-full px-5 flex justify-between">
          <p
            className="font-semibold cursor-pointer text-gray-600 mb-2"
            onClick={() => logOutHandler()}
          >
            LogOut
          </p>
          <p
            className="font-semibold cursor-pointer text-gray-600 mb-2"
            onClick={() => router.push("/")}
          >
            Home
          </p>
        </div>
      </main>
    </div>
  );
};

export default index;
