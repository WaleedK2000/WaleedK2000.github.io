"use client";

import Image from "next/image";
import RightLayout from "./local_components/right_layout";

import ProfileLinks from "./local_components/profile_links";
import Experience from "./local_components/experience";
import Education from "./local_components/education";
import Portfolio from "./local_components/portfolio";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="bg-[#12240f] relative flex flex-col justify-center h-full md:h-[80vh] snap-start">
        <div className="absolute top-4 left-0 md:left-4">
          <Image
            src="/wk_logo_light.png"
            alt="WK Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="  flex flex-row justify-center">
          <div className="flex flex-col md:flex-row gap-20 justify-center mx-5 w-full ">
            <div className="flex  flex-col gap-10 md:w-2/5  my-auto  ">
              <div className="flex flex-col gap-4 justify-center ">
                <div className="flex flex-row  justify-start">
                  <h1> 👋 Hi, I am</h1>
                </div>
                <div className="flex flex-row  justify-center">
                  <h1>Waleed Kayani</h1>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-5 ">
                <ProfileLinks />
              </div>
            </div>

            <div className=" hidden md:block">
              <RightLayout />
            </div>
          </div>
        </div>
      </section>
      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 h-full  md:h-[80vh]  main-margin gap-10">
        <h1 className="text-[#12240f]">About</h1>
        <p className="text-[#12240f] px-2 lg:px-32 ">
          Full Stack Engineer with experience in building scalable web
          applications using Python, FastAPI, and React.js. I am skilled in
          designing secure, maintainable backend systems and developing modern
          frontend interfaces.
        </p>

        <p className="text-[#12240f] px-2 lg:px-32 ">
          I have worked on production-grade RESTful APIs, implemented secure
          authentication and RBAC systems, and integrated third-party services.
          My experience includes building responsive frontend interfaces using
          Vue.js and React.js, implementing CI/CD pipelines with GitHub Actions,
          and leveraging cloud infrastructure on AWS. I am passionate about
          creating systems that are reliable, performant, and deliver
          exceptional user experiences.
        </p>
      </section>
      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 h-full md:h-[80vh]  main-margin gap-10">
        <h1 className="text-[#12240f]">Expierence</h1>
        <Experience />
      </section>

      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 h-full md:h-[80vh]  main-margin gap-10">
        <h1 className="text-[#12240f]">Education</h1>
        <Education />
      </section>

      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 min-h-full md:min-h-[80vh] main-margin gap-10 overflow-y-auto">
        <h1 className="text-[#12240f]">Portfolio</h1>
        <div className="mx-32">
          <Portfolio />
        </div>
      </section>

      <section className="h-[20vh] bg-black"></section>
    </main>
  );
}
