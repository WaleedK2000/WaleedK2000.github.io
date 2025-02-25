import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";

import "./globals.css";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waleed Kayani",
  description:
    "This is my personal website where I write about tech and life. I am a software engineer and I love to write about my experiences. I also write about my projects and the things I am working on.",
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
