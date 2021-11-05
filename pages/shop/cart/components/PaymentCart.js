import React from "react";

const PaymentCart = () => {
  return (
    <div className="w-full lg:w-[48%] h-auto mt-6 lg:mt-0 relative">
      <div className="h-auto w-full max-w-[645px]">
        <CheckLogIn />
        <ShippingAddress />
        <PaymentSystem />
      </div>
    </div>
  );
};

export default PaymentCart;

const CheckLogIn = () => {
  return (
    <div className="py-5 px-3 bg-gray-50 w-full mb-4 flex flex-row justify-between">
      <div>
        <p className="uppercase text-base font-semibold text-gray-600">
          Login <span className={`pl-6 text-green-600`}>✔</span>
        </p>
        <h1 className="mt-2 font-semibold font-roboto text-sm">
          lala <span className="pl-8">01837*****</span>
        </h1>
      </div>
      <div>
        <button className="py-2 px-3 cursor-pointer bg-blue-600 rounded-md text-white active:scale-105 duration-200">
          Change
        </button>
      </div>
    </div>
  );
};

const ShippingAddress = () => {
  return (
    <div className="py-5 px-3 bg-gray-50 w-full mb-4 flex flex-row justify-between">
      <div>
        <p className="uppercase text-base font-semibold text-gray-600">
          Shipping Address <span className={`pl-6 text-green-600`}>✔</span>
        </p>
        <h1 className="mt-2 font-semibold font-roboto text-sm">
          Dhaka, <span className="pl-1 pr-1">Kishorejang,</span>
          Bhairab, <span className="pl-1">Kuliarchor</span>
        </h1>
      </div>
      <div>
        <button className="py-2 px-3 cursor-pointer bg-blue-600 rounded-md text-white active:scale-105 duration-200">
          Change
        </button>
      </div>
    </div>
  );
};

const PaymentSystem = () => {
  return (
    <div className="min-h-[500px] flex flex-col relative">
      <div className="w-full py-5 px-3 bg-gray-50">
        <h1 className="uppercase text-base font-semibold text-gray-600">
          Payment Method
        </h1>
      </div>

      <div className="h-full w-full py-5 px-3">
        <h1>cart id </h1>
        <input type="text" />
      </div>

      <div className="absolute bottom-0 w-full">
        <button className="w-full py-3 text-center bg-black text-yellow-400 rounded-sm active:scale-105 duration-200">
          Order Now
        </button>
      </div>
    </div>
  );
};
