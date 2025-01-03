"use client";

import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <div className="nav-bar-panel  ">
      <div className="my-auto">
        <h2>W.K</h2>
      </div>
      <div className="flex flex-row  ">
        <div className="my-auto  flex flex-row list-none gap-10 text-primary_text_color  ">
          <Link href={"/home"} passHref={true} key={"home"}>
            {"Home"}
          </Link>

          <Link href={"/resume"}>Resume</Link>

          {/* <li>Project Portfolio</li>
          <li>Magic Moments</li> */}
        </div>
      </div>
      <div className="my-auto">
        <button className="bg-green-200">Dark Mode</button>
      </div>
    </div>
  );
}
