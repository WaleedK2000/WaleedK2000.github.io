import React from "react";
import Navbar from "@/components/navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen ">
      <Navbar />
      {children}
    </div>
  );
}
