import React from "react";
import Link from "next/link";

const TopSection = () => {
  return (
    <section className="w-full max-h-[420px] h-[420px] relative">
      <div className="w-full h-full flex flex-col sm:flex-row items-center flex-grow sm:space-x-4 space-y-4 sm:space-y-0">
        {/* div-1 */}
        <div className="bg-red-200 w-full sm:w-6/12 h-56 sm:h-full relative overflow-hidden">
          <Link href="/shop/men-clothes" passHref>
            <img
              className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
              src="https://images.unsplash.com/photo-1513373319109-eb154073eb0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="category"
            />
          </Link>
        </div>

        {/* div-2 */}
        <div className="w-full sm:w-6/12 h-60 sm:h-full flex-grow flex flex-col space-y-4">
          <div className="h-[48%] w-full flex flex-row justify-between">
            <div className="w-[48%] overflow-hidden bg-green-200">
              <Link href="/shop/bags" passHref>
                <img
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt="category"
                />
              </Link>
            </div>

            <div className="w-[48%] overflow-hidden bg-blue-200">
              <Link href="/shop/baby-and-kids" passHref>
                <img
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
                  src="https://images.unsplash.com/photo-1542901689-8917f44e3541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                  alt="category"
                />
              </Link>
            </div>
          </div>

          <div className="h-[48%] w-full overflow-hidden bg-red-200">
            <Link href="/shop/women-clothes" passHref>
              <img
                className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2059&q=80"
                alt="category"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
