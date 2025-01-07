import React from "react";
import { images } from "../../lib/post";

function Profile() {
  return (
    <div className=" bg-black h-full  bg-white-700 flex  flex-col  py-10">
      <div className=" w-full h-full text-white flex gap-20 px-2 py-2 justify-center items-center ">
        <div className="w-36 h-36 rounded-full bg-white"></div>
        <div className="flex flex-col gap-5">
          <div className="w-full flex gap-2">
            <p className="text-xl">talhaKing999Boy</p>
            <button className="px-4 rounded-md py-1 bg-[#363636] font-medium text-sm">
              Edit Profile
            </button>
            <button className="px-4 rounded-md py-1 bg-[#363636] font-medium text-sm">
              View Archive
            </button>
          </div>
          <div className="flex gap-7">
            <p>
              20 <span className="text-[#363636]">posts</span>
            </p>
            <p>274 followers</p>
            <p>1 following</p>
          </div>
          <div>
            <p>Muhammad Talha</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  mt-12 mb-20">
        <div className="w-24 h-24 border-2 border-gray-300 flex  items-center  bg-[#363636] rounded-full mx-48">
          <div className="w-20 h-20 bg-[#363636] rounded-full"></div>
        </div>
        <p className="ml-56">New</p>
      </div>
      <div className="flex justify-center gap-20 pt-4 pb-4 border-t-2 border-[#262626]">
        <div>
          <p>Posts</p>
        </div>
        <div>
          <p>Reels</p>
        </div>
        <div>
          <p>Saved</p>
        </div>
        <div>
          <p>Taged</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image) => {
          return (
            <div key={image.id} className="w-[297px] h-[297px]">
              <img src={image.url} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
