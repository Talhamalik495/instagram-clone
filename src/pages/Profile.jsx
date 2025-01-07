import React from "react";

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
      <div className="w-full h-full flex ">
        <p className="text-white">new</p>

        <div className="w-24 h-24 border-2 border-white flex  items-center bg-[#363636] rounded-full mx-48">
          <div className="w-20 h-20 bg-[#363636] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
