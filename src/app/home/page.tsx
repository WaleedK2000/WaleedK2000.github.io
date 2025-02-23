"use client";

import RightLayout from "./local_components/right_layout";

import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center  min-h-[100vh]  ">
        <div className="  flex flex-row justify-center">
          <div className="flex flex-col md:flex-row gap-20 justify-center mx-5">
            <div className="flex  flex-col gap-10 md:w-2/5  my-auto ">
              <div className="flex flex-col gap-4 justify-center ">
                <div className="flex flex-row  justify-start">
                  <h1> 👋 Hi, I am</h1>
                </div>
                <div className="flex flex-row  justify-center">
                  <h1>Waleed Khalid Kayani</h1>
                </div>
              </div>
              <div>
                <p className="text-primary_text_color">
                  I am a software engineer with a passion for building software
                  that solves real-world problems. I am a full-stack developer
                  with experience in building applications using React, FAST
                  API, and AWS.
                </p>
              </div>
              <div>
                <button className="bg-primary_text_color text-white rounded-lg py-2 px-8 ">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="">
              <RightLayout />
            </div>
          </div>
        </div>
        <div className="h-[10%]">
          <div className="flex flex-row left-1/2 transform -translate-x-1/2 animate-bounce justify-center gap-5 absolute bottom-0 ">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col justify-center  min-h-[100vh] bg-primary_text_color text-white ">
        <div className="  flex flex-row justify-center">
          <div className="flex flex-col md:flex-row gap-20 justify-center mx-5">
            <div className="flex  flex-col gap-10 md:w-2/5  my-auto ">
              <div className="flex flex-col gap-4 justify-center ">
                <div className="flex flex-row  justify-start">
                  <h1 className="text-green-100"> 👋 Hi, I am</h1>
                </div>
                <div className="flex flex-row  justify-center">
                  <h1>Waleed Khalid Kayani</h1>
                </div>
              </div>
              <div>
                <p className="text-primary_text_color">
                  I am a software engineer with a passion for building software
                  that solves real-world problems. I am a full-stack developer
                  with experience in building applications using React, FAST
                  API, and AWS.
                </p>
              </div>
              <div>
                <button className="bg-primary_text_color text-white rounded-lg py-2 px-8 ">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="">
              <RightLayout />
            </div>
          </div>
        </div>
        <div className="h-[10%]">
          <div className="flex flex-row left-1/2 transform -translate-x-1/2 animate-bounce justify-center gap-5 absolute bottom-0 ">
            <ChevronDown size={24} />
          </div>
        </div>
      </section> */}
    </>
  );

  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //         <li className="mb-2">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
}
