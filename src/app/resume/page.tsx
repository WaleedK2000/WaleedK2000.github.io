import React from "react";
// import Image from "next/image";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { PiPresentationFill } from "react-icons/pi";
import { PiCertificateFill } from "react-icons/pi";

import WorkExperienceItem from "@/components/resume/workExperienceItem";
import CertificateItem from "@/components/resume/certificateItem";
import EducationItem from "@/components/resume/educationItem";
import ProjectItem from "@/components/resume/projectItem";

import { educationData } from "@/data/educationData";
import { projectData } from "@/data/projectData";
import { certificateData } from "@/data/certificateData";
import { workExperienceData } from "@/data/workExperienceData";
export default function Resume() {
  return (
    <div className="min-h-[100vh] h-fit pb-8 ">
      <div className="h-[15vh] bg-primary_text_color text-white flex flex-col gap-5 justify-center items-center   pt-3 ">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl">Waleed Kayani</h2>
        </div>
        <div>
          <p className="text-white">waleedkayani14@yahoo.com | 0304 - 5113595 </p>
        </div>
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div className="text-2xl font-semibold text-primary_text_color ">
            <HiBuildingOffice2 />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        <div className="space-y-5">
          {workExperienceData.map((workExperience) => (
            <WorkExperienceItem
              key={workExperience.company_name}
              {...workExperience}
            />
          ))}
        </div>
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div className="text-2xl font-semibold text-primary_text_color">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        <div className="space-y-5">
          {educationData.map((education) => (
            <EducationItem
              key={education.institution_name + education.end_date}
              {...education}
            />
          ))}
        </div>
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div className="text-2xl font-semibold text-primary_text_color">
            <PiPresentationFill />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Projects</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        <div className="space-y-5">
          {projectData.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>

      <div className=" lg:mx-40 mt-10 px-3 ">
        <div className="flex flex-row gap-3">
          <div className="">
            <PiCertificateFill className="text-2xl font-semibold text-primary_text_color" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Certificates</h3>
          </div>
        </div>
        <hr className="border-t-2 border-primary_text_color " />

        <div className="space-y-5">
          {certificateData.map((certificates) => (
            <CertificateItem key={certificates.title} {...certificates} />
          ))}
        </div>
      </div>
    </div>
  );
}
