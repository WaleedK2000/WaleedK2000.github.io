import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-green-100">
      {/* <Navbar /> */}
      <> {children}</>
    </div>
  );
}
