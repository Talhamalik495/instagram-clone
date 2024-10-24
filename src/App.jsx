import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="w-[260px] h-full bg-black border-r-2 border-white-200 fixed">
        <h1>Instagram</h1>
        <div>
          <h1>Home</h1>
          <h1>Search</h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
      <div className="w-full bg-black p-96">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
