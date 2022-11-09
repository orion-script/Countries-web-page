import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    if (mode) {
      document.body.classList.add("dark");
      setMode(false);
    }
    if (!mode) {
      document.body.classList.remove("dark");
      setMode(true);
    }
  };

  return (
    <Fragment>
      <div className="bg-white flex flex-row justify-between px-3 md:px-20 h-auto py-5 md:py-5 dark:bg-gray-700 dark:text-white shadow-lg">
        <div className="font-bold text-sm md:text-2xl">
          <h1>Where in the world?</h1>
        </div>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            toggleMode();
          }}
        >
          <FaMoon className="cursor-pointer" />
          <p className="px-2 font-bold text-xs md:text-base">Dark Mode</p>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;
