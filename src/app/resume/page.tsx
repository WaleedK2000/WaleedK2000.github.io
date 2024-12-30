import React from "react";
// import Image from "next/image";
import { workExperienceData } from "@/data/workExperienceData";

import WorkExperienceItem from "@/components/resume/workExperienceItem";
import EducationItem from "@/components/resume/educationItem";

export default function Resume() {
  return (
    <div className="min-h-[100vh] h-fit pb-8 ">
      <div className="h-[15vh] bg-primary_text_color text-white flex flex-col gap-5 justify-center items-center   pt-3 ">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl">Waleed Kayani</h2>
        </div>
        <div>
          <p className="text-white">waleedkayani14@yahoo.com | 03045113595 </p>
        </div>
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div>icon</div>
          <div>
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        {workExperienceData.map((workExperience) => (
          <WorkExperienceItem
            key={workExperience.company_name}
            {...workExperience}
          />
        ))}
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div>icon</div>
          <div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        <EducationItem />
      </div>
    </div>
  );
}
