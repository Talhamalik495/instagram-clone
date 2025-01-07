import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="w-full h-full">
      <div className="w-[18%] h-full fixed top-0 left-0 border-r-[1px] border-[#262626]">
        <SideBar />
      </div>
      <div className="w-[82%] ml-[18%] bg-black text-white h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
