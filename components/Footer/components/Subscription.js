import React from "react";

const Subscription = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 lg:mt-0 sm:w-[30%] md:w-1/4">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl text-gray-300">
          Subscription
        </p>

        <p className="lg:mt-5 mt-4 text-gray-300">
          Subscribe to newsletter from <br /> and get the latest updates
        </p>

        <div className="mt-7 w-full flex flex-col">
          <label className="text-gray-300 pb-1" htmlFor="Enter your email">Enter your email</label>
          <input type="text" placeholder="e.g.mail@gmail.com" className="py-2 px-2 outline-none rounded-sm"/>
          <button className="py-2 px-3 mt-4 bg-yellow-500 text-white active:scale-105 duration-200">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
