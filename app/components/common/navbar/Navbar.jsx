"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Topbar from "../topbar/Topbar";
import LanguageDropDown from "../languagedropdown/languageDropDown";
import Dropdown from "../../dropdown/Dropdown";
import DropDownList from "../../account/Components/DropDownList";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const country = ["Pakistan", "China"];
  return (
    <nav className="max-w-screen-xl px-3 mx-auto rounded-t-2xl rounded-b-3xl sticky top-[5px] bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]  z-10">
      <Topbar />
      <div className="  flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
            NearMe
          </span>
        </Link>

        <Dropdown country={country} label="Select Country" />
        <Dropdown country={country} label="Select City" />
        <div className="w-[40%] relative ">
          <input
            type="search"
            placeholder="Search"
            className="w-full py-2 px-10 rounded-xl  focus:outline-none leading-tight  appearance-none"
          />
          <Icon
            icon="circum:search"
            className="absolute top-[5px] text-2xl left-3 font-bold text-[#52b9c5] "
          />
          <div className="absolute hover:bg-[#499ea8] top-0 text-md right-0  h-full font-medium bg-[#52b9c5] text-white rounded-r-lg p-2 flex items-center gap-1 cursor-pointer">
            <Icon icon="mdi:location" />
            <button>near me</button>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? "true" : "false"}>
          <Icon icon="heroicons-solid:menu" className="text-[2rem]" />
        </button>

        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <div className="text-white flex items-center gap-2 hover:bg-[#52b9c5] cursor-pointer py-2 px-2 rounded-lg">
              <Icon icon="ph:user" />
              <p>Login</p>
            </div> */}
            <DropDownList />
            {/* <div className="text-white flex items-center gap-2 hover:bg-[#52b9c5] cursor-pointer py-2 px-2 rounded-lg">
              <Icon icon="ph:user" />
              <p>Signup</p>
            </div> */}

            <LanguageDropDown />
            <div className="text-white flex items-center gap-2 cursor-pointer px-2 sm:my-0 my-2 ">
              <Link href="/cart">
                <Icon
                  icon="mdi:cart"
                  className="text-[1.5rem] hover:text-[#52b9c5]"
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
