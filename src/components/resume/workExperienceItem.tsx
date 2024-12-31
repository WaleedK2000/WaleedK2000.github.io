import React from "react";
import { WorkExperienceItemInterface } from "@/data/workExperienceData";

import { IoLocationSharp } from "react-icons/io5";

export default function WorkExperienceItem({
  position_title,
  company_name,
  location,
  start_date,
  end_date,
  responsibilities,
}: WorkExperienceItemInterface) {
  return (
    <div>
      <div className="flex flex-row    w-full ">
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div>
            <h3 className="text-2xl text-primary_text_color">
              {position_title}
            </h3>
          </div>
          <div className="flex flex-row gap-4">
            <p>{`${start_date} - ${end_date}`}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between ">
        <div>
          <h3>{company_name}</h3>
        </div>

        <div className="flex flex-row gap-3">
          <div className="text-primary_text_color my-auto ">
            <IoLocationSharp />
          </div>
          <div className="my-auto">
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className=" text-lg ">
        <ul className="space-y-3 list-disc mt-6 ml-6">
          {responsibilities.map((responsibility) => (
            <li className="text-justify" key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
