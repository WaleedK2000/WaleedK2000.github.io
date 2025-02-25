"use client";

import RightLayout from "./local_components/right_layout";

import { ChevronDown } from "lucide-react";
import ProfileLinks from "./local_components/profile_links";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center  min-h-[100vh]  ">
        <div className="  flex flex-row justify-center">
          <div className="flex flex-col md:flex-row gap-20 justify-center mx-5 w-full ">
            <div className="flex  flex-col gap-10 md:w-2/5  my-auto  ">
              <div className="flex flex-col gap-4 justify-center ">
                <div className="flex flex-row  justify-start">
                  <h1> 👋 Hi, I am</h1>
                </div>
                <div className="flex flex-row  justify-center">
                  <h1>Waleed Khalid Kayani</h1>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-5 ">
                <ProfileLinks />

                {/* <p className="text-primary_text_color">
                  I am a software engineer with a passion for building software
                  that solves real-world problems. I am a full-stack developer
                  with experience in building applications using React, FAST
                  API, and AWS.
                </p> */}
              </div>
              {/* <div>
                <button className="bg-primary_text_color text-white rounded-lg py-2 px-8 ">
                  Contact Me
                </button>
              </div> */}
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
      {false && (
        <section className="flex flex-col justify-center  min-h-[100vh]">
          <div className="flex flex-row justify-center m-auto w-1/2 gap-20 ">
            <div className=" w-1/3 px-5 py-8 flex flex-col gap-10  border border-primary_text_color rounded-lg  ">
              <div>backend logo</div>
              <div className="flex flex-row justify-center">
                {/* <p className="text-justify">
                Develop business logic and back-end system to support the
                product, create API, have vast experience with version control
                systems.
              </p> */}
              </div>
              <div className="">
                <h3>Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                </ul>
              </div>
              <div>
                <h3>Technologies</h3>
                <ul>
                  <li>FastAPI</li>
                  <li>Express</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
            <div className=" w-1/3 px-5 py-10 flex flex-col gap-4 ">
              <div>backend logo</div>
              <div>
                Develop business logic and back-end system to support the
                product, create API, have vast experience with version control
                systems.
              </div>
              <div></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
