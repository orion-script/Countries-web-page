import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkMode.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onWindowMatch();

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
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
          onClick={toggleTheme}
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
