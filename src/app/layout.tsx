import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";

import "./globals.css";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
