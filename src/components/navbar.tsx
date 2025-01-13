"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import clsx from "clsx";

export default function Navbar() {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "  md:w-full  h-full md:h-[10vh] flex md:flex-row md:justify-between  fixed top-0 bg-primary_text_color md:bg-green-200 text-white text-primary_text_color px-10 py-2 z-10",
        {
          "h-full w-[60vw] flex-col ": navbarOpen,
          "h-[10vh] w-full flex-row justify-between ": !navbarOpen,
        }
      )}
    >
      <div className="my-auto  hidden md:block">
        <h2>W.K</h2>
      </div>
      <div className=" md:hidden">
        <button
          className="text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? "Close" : "Open"}
        </button>
      </div>
      <div
        className={`md:flex my-auto  ${
          navbarOpen ? "flex" : "hidden"
        }      flex-row  `}
      >
        <ul className="my-auto  flex flex-col  md:flex-row list-none gap-10  text-green-200 md:text-primary_text_color  ">
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              setNavbarOpen(false);
              router.push("/home");
            }}
          >
            Home
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => router.push("/resume")}
          >
            Resume
          </li>

          <li>Project Portfolio</li>
          <li>Magic Moments</li>
        </ul>
      </div>
      <div className="my-auto hidden md:block">
        <button className="bg-green-200">Dark Mode</button>
      </div>
    </nav>
  );
}
