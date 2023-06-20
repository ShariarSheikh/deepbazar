const Payment = () => {
  return (
    <div className="w-full lg:w-[48%] h-auto mt-6 lg:mt-0 relative">
      <div className="h-auto w-full max-w-[645px]">
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

        <div className="py-5 px-3 bg-gray-50 w-full mb-4 flex flex-row justify-between">
          <div>
            <p className="uppercase text-base font-semibold text-gray-600">
              Shipping Address <span className={`pl-6 text-green-600`}>✔</span>
            </p>
            <h1 className="mt-2 font-semibold font-roboto text-sm">
              Bangladesh, <span className="pl-1 pr-1">Dhaka</span>
            </h1>
          </div>
          <div>
            <button className="py-2 px-3 cursor-pointer bg-blue-600 rounded-md text-white active:scale-105 duration-200">
              Change
            </button>
          </div>
        </div>

        <div className="min-h-[500px] flex flex-col relative">
          <div className="w-full py-5 px-3 bg-gray-50">
            <h1 className="uppercase text-base font-semibold text-gray-600">
              Payment Method
            </h1>
          </div>

          {/* <div className="h-full w-full py-5 px-3">
          <h1>cart id </h1>
          <input type="text" />
        </div> */}

          <div className="absolute bottom-0 w-full">
            <button className="w-full py-3 text-center bg-black text-yellow-400 rounded-sm active:scale-105 duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
