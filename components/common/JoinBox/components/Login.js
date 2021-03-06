import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginState, loginUser } from "../../../../redux/loginSlice/loginSlice";
import Cookies from "js-cookie";

const Login = () => {
  const { userData } = useSelector(loginState);
  const [email, setEmail] = useState("deepBazar@gmail.com");
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();
  //onsubmit
  const onSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    if (!email || !password) {
      alert(
        `Please enter your ${!email && "email"} ${!password && "password"}`
      );
    } else {
      dispatch(loginUser(user));
    }
  };

  useEffect(() => {
    if (userData.status === "success") {
      Cookies.set("user", JSON.stringify(userData.user), { expires: 7 });
      setEmail(""), setPassword("");
    }
  }, [userData?.status]);

  return (
    <div className="w-full h-screen bg-white px-3">
      <h1 className="text-xl font-roboto font-semibold text-center">
        Login DeepBazar
      </h1>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-[360px] m-auto mt-9 pb-8"
      >
        <div className="flex flex-col mb-4">
          {userData.status === "rejected" && (
            <p className="text-red-400 py-3">{userData.error}</p>
          )}

          <label htmlFor="Email">Email</label>
          <input
            className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="Password">Password</label>
          <input
            className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            readOnly
          />
        </div>

        {userData.status === "pending" ? <LoadingButton /> : <LoginButton />}

        {/* <div className="w-full mt-6 text-gray-500 font-medium text-center">
          <p
            className="mb-1  cursor-pointer hover:text-blue-400"
            onClick={() => setShowUi("signUp")}
          >
            Don't have an account? <span>SignUp</span>
          </p>
          <p className="mb-2 cursor-pointer hover:text-blue-400">
            Forgot password?
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default Login;

const LoginButton = () => {
  return (
    <button
      className="w-full mt-5 h-10 rounded-sm cursor-pointer
     bg-black text-yellow-400 font-medium active:scale-105 duration-200"
      type="submit"
    >
      Login
    </button>
  );
};

const LoadingButton = () => {
  return (
    <button
      className="w-full mt-5 h-10 rounded-sm cursor-wait
     bg-gray-400 text-gray-800 font-medium active:scale-105 duration-200"
    >
      Loading...
    </button>
  );
};
