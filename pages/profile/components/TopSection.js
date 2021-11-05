import React, { useEffect, useState } from "react";
import { AiOutlineUser, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  loginBox,
  profileImgUpdate,
} from "../../../redux/loginSlice/loginSlice";
import jsCookie from "js-cookie";

const TopSection = () => {
  const { imgError, imgStatus } = useSelector(loginBox);
  const [img, setImg] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const dispatch = useDispatch();

  //selectImg Img
  const selectImg = (e) => {
    setImg(e.target.files[0]);
  };

  //selectImg Img
  const uploadImg = () => {
    const id = jsCookie.get("uId");
    const isUpload = jsCookie.get("profileImg") ? false : true;
    const imagesFileName = jsCookie.get("profileImg")
      ? jsCookie.get("imagesFileName")
      : "";

    const data = new FormData();
    data.append("profileImg", img);
    data.append("id", id);
    data.append("isUpload", isUpload);
    !isUpload && data.append("imagesFileName", imagesFileName);

    dispatch(profileImgUpdate(data));
  };

  useEffect(() => {
    imgStatus === "success" && setImg("");
    const x = jsCookie.get("profileImg");
    setProfileImg(x);
  }, [imgStatus]);

  imgError && alert(imgError);

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
        {!profileImg && (
          <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
            <AiOutlineUser className="w-full h-full bg-gray-200 text-gray-600" />
          </div>
        )}

        {profileImg && (
          <img
            className="w-32 h-32 overflow-hidden p-3 rounded-full object-cover"
            src={profileImg}
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
              text-black bg-gray-50 absolute -right-20 shadow-lg border-2 border-blue-400 cursor-pointer"
              onClick={imgStatus !== "pending" && uploadImg}
            >
              {imgStatus === "pending" ? "Uploading" : "Upload"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
