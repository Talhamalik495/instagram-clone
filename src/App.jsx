import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, BrowserRouter, Route, Routes } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import SideBar from "./components/SideBar";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
