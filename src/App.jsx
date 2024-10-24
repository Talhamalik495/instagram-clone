import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import { FaHouse } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="w-full bg-black p-96">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
