import React from "react";
import DeepBazar from "./components/DeepBazar";
import Information from "./components/Information";
import MenuList from "./components/MenuList";
import Subscription from "./components/Subscription";
import Works from "./components/Works";

const Index = () => {
  return (
    <footer className="w-full bg-black min-h-[400px] py-4">
      <div className="w-full flex justify-start flex-wrap max-w-[1366px] m-auto pt-3 px-3">
        <DeepBazar />
        <MenuList />
        <Information />
        <Works/>
        <Subscription/>
      </div>
    </footer>
  );
};

export default Index;
