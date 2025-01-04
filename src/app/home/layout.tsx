import React from "react";
import Navbar from "@/components/navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-green-100 h-screen ">
      <Navbar />
      {children}
    </div>
  );
}
