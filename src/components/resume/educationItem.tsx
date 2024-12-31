import React from "react";
import { EducationItemInterface } from "@/data/educationData";
import { IoLocationSharp } from "react-icons/io5";

export default function EducationItem({
  degree,
  institution_name,
  location,
  start_date,
  end_date,
  grade,
}: EducationItemInterface) {
  return (
    <div>
      <div className="flex flex-row gap-1  mb-2  w-full ">
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div>
            <h3 className="text-2xl text-primary_text_color">{degree}</h3>
          </div>
          <div className="flex flex-row gap-4">
            <p>{`${start_date} - ${end_date}`}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between ">
        <div>
          <h3>{institution_name}</h3>
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
      {grade && <div>{grade}</div>}
    </div>
  );
}
