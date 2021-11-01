import React from "react";
import BottomComp from "./components/BottomComp";
import TopComp from "./components/TopComp";

const Index: React.FC = () => {
  return (
    <header className="max-w-[1366px] w-full m-auto">
      <TopComp />
      <BottomComp />
    </header>
  );
};

export default Index;
