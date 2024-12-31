import { ProjectItemInterface } from "@/data/projectData";
import React from "react";

export default function ProjectItem({
  title,
  start_date,
  end_date,
  description,
}: ProjectItemInterface) {
  return (
    <div>
      <div className="flex flex-row gap-1  mb-2  w-full ">
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div>
            <h3 className="text-2xl text-primary_text_color">{title}</h3>
          </div>
          <div className="flex flex-row gap-4">
            <p>{`${start_date} - ${end_date}`}</p>
          </div>
        </div>
      </div>
      <div>
        <ul className="space-y-3 list-disc text-lg mt-6 ml-6  ">
          {description.map((desc) => (
            <li className="text-justify" key={desc}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
