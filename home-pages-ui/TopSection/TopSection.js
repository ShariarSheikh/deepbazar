import React from "react";

const TopSection = () => {
  return (
    <section className="w-full max-h-[420px] h-[420px] relative">
      <div className="w-full h-full flex flex-col sm:flex-row items-center flex-grow sm:space-x-4 space-y-4 sm:space-y-0">
        {/* div-1 */}
        <div className="bg-red-200 w-full sm:w-6/12 h-56 sm:h-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
            src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            alt="category"
          />
        </div>

        {/* div-2 */}
        <div className="w-full sm:w-6/12 h-60 sm:h-full flex-grow flex flex-col space-y-4">
          <div className="h-[48%] w-full flex flex-row justify-between">
            <div className="w-[48%] overflow-hidden bg-green-200">
              <img
                className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                alt="category"
              />
            </div>

            <div className="w-[48%] overflow-hidden bg-blue-200">
              <img
                className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
                src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="category"
              />
            </div>
          </div>

          <div className="h-[48%] w-full overflow-hidden bg-red-200">
            <img
              className="w-full h-full object-cover cursor-pointer hover:scale-110 duration-200"
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt="category"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
