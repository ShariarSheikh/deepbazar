import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginBox, openLoginBox } from "../../redux/loginSlice/loginSlice";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Index = () => {
  const [showUi, setShowUi] = useState("login");
  const isLoginBox = useSelector(loginBox);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = isLoginBox.open ? "hidden" : "auto";
  }, [isLoginBox.open]);

  
  return (
    <div
      className={`fixed top-0 right-0 ${
        isLoginBox.open ? "w-full" : "w-0"
      } min-h-screen bg-black bg-opacity-60`}
    >
      <div className="w-full min-h-screen flex justify-end items-center z-20">
        <div
          className={`${
            isLoginBox.open ? "w-[400px]" : "w-0"
          } overflow-hidden relative rounded-md transition-all duration-200`}
        >
          <h1
            onClick={() => dispatch(openLoginBox())}
            className="cursor-pointer bg-white w-full flex justify-end py-3 pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-7 w-7 text-black "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </h1>

          {showUi === "login" && <Login setShowUi={setShowUi} />}
          {showUi === "signUp" && <SignUp setShowUi={setShowUi} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
