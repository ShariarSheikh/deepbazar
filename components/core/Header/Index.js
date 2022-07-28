import React, { useEffect, useState } from "react";
import BottomComp from "./components/BottomComp";
import TopComp from "./components/TopComp";
import JoinBox from "../../common/JoinBox";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import AddedPDCart from "../../common/AddedPDCart";
import { loginState } from "../../../redux/loginSlice/loginSlice";

const Index = () => {
  const { userData } = useSelector(loginState);
  const [hideLoginBox, setHideLoginBox] = useState(false);

  useEffect(() => {
    userData.status === "success" && setHideLoginBox(true);
  }, [userData.status]);

  return (
    <header className="max-w-[1366px] w-full m-auto">
      <TopComp />
      <BottomComp />
      <AddedPDCart />
      {!hideLoginBox && !Cookies.get("token") && <JoinBox />}
    </header>
  );
};

export default Index;
