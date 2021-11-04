import React, { useState } from "react";
import { AiOutlineUser, AiOutlineEdit, AiOutlineUpload } from "react-icons/ai";

const TopSection = ({ userImg }) => {
  const [img, setImg] = useState("");

  //selectImg Img
  const selectImg = (e) => {
    setImg(e.target.files[0]);
  };

  //selectImg Img
  const uploadImg = (e) => {
    console.log(img);
  };

  return (
    <div className="w-full relative mb-20">
      {/* cover photo */}
      <div className="min-h-[300px] max-h-[300px] overflow-hidden w-full z-10">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
          alt="cover photo"
        />
      </div>

      {/* user photo */}
      <div className="absolute -bottom-16 min-w-32 min-h-32 z-20 m-auto flex justify-center items-center rounded-full">
        {!userImg ? (
          <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
            <AiOutlineUser className="w-full h-full bg-gray-200 text-gray-600" />
          </div>
        ) : (
          <img
            className="w-32 h-32 overflow-hidden p-3 rounded-full"
            src={userImg}
            alt="user profile"
          />
        )}
        <div className="relative flex justify-center items-center">
          {/* select img */}
          <div className="w-12 h-12 overflow-hidden rounded-full flex justify-center items-center cursor-pointer relative right-6 border-2 border-blue-400">
            <input
              onChange={(e) => selectImg(e)}
              type="file"
              multiple={false}
              className="opacity-0 w-full h-12 z-30 absolute top-0 cursor-pointer"
            />
            <AiOutlineEdit
              className="hover:text-blue-400 active:scale-110 duration-200 w-12 h-12 p-3
           rounded-full text-black bg-gray-50"
            />
          </div>

          {img && (
            <div
              className="hover:text-blue-400 active:scale-110 duration-200 py-2 px-3 p-3 rounded-full 
              text-black bg-gray-50 absolute -right-14 shadow-lg border-2 border-blue-400"
              onClick={uploadImg}
            >
              Upload
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
