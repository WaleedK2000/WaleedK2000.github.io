"use client";

import RightLayout from "./local_components/right_layout";

import ProfileLinks from "./local_components/profile_links";
import Experience from "./local_components/experience";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      <section className="bg-[#12240f]  flex flex-col justify-center  h-[80vh] snap-start">
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

              </div>

            </div>

            <div className="">
              <RightLayout />
            </div>
          </div>
        </div>


      </section>
      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 h-[80vh] px-52 gap-10" >
        <h1 className="text-[#12240f]" >About</h1>
        <p className="text-[#12240f]">
          My name is Waleed Kayani. I'm a full-stack software engineer with a strong focus on backend systems, cloud infrastructure, and scalable web applications. I work primarily with Python, FastAPI, AWS, and modern DevOps tooling, and I enjoy building systems that are reliable, secure, and easy to maintain.
          My day-to-day work involves designing APIs, deploying cloud-native services, and migrating systems from monolithic setups to containerized, production-ready architectures. Alongside backend engineering, I also deliver full-stack solutions using React—bridging solid backend logic with clean, usable interfaces.
        </p>

        <p className="text-[#12240f]">
          I started my journey with a Computer Science degree from FAST NUCES, where my interest in security and systems engineering led me to build a breach and attack simulation tool as my final year project. Since then, I’ve continued to deepen my expertise through hands-on industry experience, working with CI/CD pipelines, Infrastructure as Code, and AI-powered integrations in real-world applications.Whether you’re looking to build a scalable product, modernize existing systems, or collaborate on something meaningful, I enjoy working on problems where engineering decisions create real impact.
        </p>

      </section>
      <section className=" snap-start bg-[#d0e8ca] flex flex-col pt-24 h-[80vh] px-52 gap-10" >
        <h1 className="text-[#12240f]" >Expierence</h1>
      <Experience />
       
      </section>
      <section className="h-[20vh] bg-black" ></section>
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
    </main>
  );
}
