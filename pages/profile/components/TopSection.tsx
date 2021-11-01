import React from "react";

const TopSection: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="min-h-[300px] max-h-[300px] overflow-hidden w-full z-10">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
          alt="cover photo"
        />
      </div>
      <div className="absolute -bottom-16 shadow-xl w-32 h-32 z-20 m-auto flex justify-center items-center bg-white rounded-full overflow-hidden">
        <img className="w-full h-full overflow-hidden p-3 rounded-full"
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
          alt="user profile"
        />
      </div>
    </div>
  );
};

export default TopSection;
