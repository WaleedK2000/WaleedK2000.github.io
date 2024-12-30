import React from "react";

interface WorkExperienceItemProps {
  position_title: string;
  company_name: string;
  location: string;
  start_date: string;
  end_date: string;

  responsibilities: string[];
}

export default function WorkExperienceItem({
  position_title,
  company_name,
  location,
  start_date,
  end_date,
  responsibilities,
}: WorkExperienceItemProps) {
  return (
    <>
      <div className="flex flex-row gap-1  mb-2 mt-10 w-full ">
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
          <div>logo</div>
          <p>{location}</p>
        </div>
      </div>

      <div className="mt-6 ml-6 text-lg ">
        <ul className="space-y-3 list-disc ">
          {responsibilities.map((responsibility) => (
            <li className="text-justify" key={responsibility}>
              {responsibility}
            </li>
          ))}

          {/* <li>Implemented visually appealing and user-friendly UI designs,</li>
          <li>
            Improved API loading times by 50% through strategic indexing and
            materialized view implementation, resulting in enhanced user
            experience and increased system efficiency.
          </li>
          <li>
            Designed and developed reusable React JS components, enhancing code
            modularity, reducing duplication, and improving application
            maintainability.
          </li>
          <li>
            Built robust backend logic using Python & FAST API, handlings
            complex business rules and data processing.
          </li>
          <li>
            Developed github workflow and pulumi pipelines for CI/CD and
            automated deployment of applications on AWS.
          </li>
          <li>
            Developed solutions according to customer needs with modern tools
            such as React JS, FAST API, PostgreSQL & Dockers.
          </li> */}
        </ul>
      </div>
    </>
  );
}
