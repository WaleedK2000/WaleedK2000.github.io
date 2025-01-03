"use client";

import React from "react";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="nav-bar-panel  ">
      <div className="my-auto">
        <h2>W.K</h2>
      </div>
      <div className="flex flex-row  ">
        <ul className="my-auto  flex flex-row list-none gap-10 text-primary_text_color  ">
          <li onClick={() => router.push("/home")}>Home</li>
          <li onClick={() => router.push("/resume")}>Resume</li>

          {/* <li>Project Portfolio</li>
          <li>Magic Moments</li> */}
        </ul>
      </div>
      <div className="my-auto">
        <button className="bg-green-200">Dark Mode</button>
      </div>
    </div>
  );
}
