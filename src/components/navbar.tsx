"use client";

import React, { useState } from "react";

import clsx from "clsx";
import { useRouter } from "next/navigation";

import { IoMdMenu } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri";

export default function Navbar() {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "  md:w-full  md:h-[10vh] flex md:flex-row md:justify-between  fixed top-0 bg-primary_text_color md:bg-green-200 text-white text-primary_text_color px-10 py-2 z-10",
        {
          "max-md:h-full w-[60vw] flex-col ": navbarOpen,
          " h-[7vh] w-full flex-row justify-between ": !navbarOpen,
        }
      )}
    >
      <div className="my-auto  hidden md:block">
        <h2>W.K</h2>
      </div>
      <div
        className={clsx(" text-2xl text-primary_text_color   md:hidden", {
          "my-auto ": !navbarOpen,
          "flex flex-row justify-end h-[10vh] ": navbarOpen,
        })}
      >
        <button
          className="text-white  "
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <RiMenuFoldFill /> : <IoMdMenu />}
        </button>
      </div>
      <div
        className={`md:flex my-auto  ${
          navbarOpen ? "flex" : "hidden"
        }      flex-row  `}
      >
        <ul className="my-auto  flex flex-col  md:flex-row list-none gap-10  text-green-200 md:text-primary_text_color  ">
          <li
            className="hover:cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setNavbarOpen(false);
              router.push("/home");
            }}
          >
            Home
          </li>
          <li
            className="hover:cursor-pointer hover:text-yellow-400"
            onClick={() => router.push("/resume")}
          >
            Resume
          </li>

          <li>Project Portfolio</li>
        </ul>
      </div>
      <div className="my-auto hidden md:block">
        <button className="bg-green-200">Dark Mode</button>
      </div>
    </nav>
  );
}
