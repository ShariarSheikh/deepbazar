import React, { useEffect, useState } from "react";
import BottomComp from "./components/BottomComp";
import TopComp from "./components/TopComp";
import JoinBox from "../JoinBox/Index";
import { useSelector } from "react-redux";
import { loginBox } from "../../redux/loginSlice/loginSlice";
import Cookies from "js-cookie";
import CartItemsBox from "../CartItemsBox/CartItemsBox";

const Index = () => {
  const isLogin = useSelector(loginBox);
  const [hideLoginBox, setHideLoginBox] = useState(false);

  useEffect(() => {
    isLogin?.userStatus === "success" && setHideLoginBox(true);
  }, [isLogin?.userStatus]);

  return (
    <header className="max-w-[1366px] w-full m-auto">
      <TopComp />
      <BottomComp />
      <CartItemsBox />
      {!hideLoginBox && !Cookies.get("token") && <JoinBox />}
    </header>
  );
};

export default Index;
