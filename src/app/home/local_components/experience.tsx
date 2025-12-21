"use client";

import { useState } from "react";

function ExperienceButton({ company, role, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center pl-3 border-l-4 border-b-4 w-72 text-left transition-all
        ${
          isActive
            ? "border-[#12240f] bg-[#12240f]/5"
            : "border-b-transparent border-[#12240f] opacity-70 hover:opacity-100"
        }`}
    >
      <p className="font-semibold text-lg text-[#12240f]">{company}</p>
      {role && (
        <p className="text-sm opacity-80 text-[#12240f]">{role}</p>
      )}
    </button>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Prismware Technologies",
      role: "Associate Software Engineer",
      duration: "May 2019 – Present",
      description:
        "Worked on building and maintaining scalable web applications, collaborating closely with cross-functional teams. Responsibilities included feature development, performance optimization, and improving overall user experience using modern frontend and backend technologies.",
    },
    {
      company: "Codeaza Technologies",
      role: "Full Stack Engineer",
      duration: "Jan 2022 – Apr 2024",
      description:
        "Developed full-stack solutions using React, FastAPI, and cloud services. Led feature design, API development, and deployment workflows while ensuring scalability and security.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <main className="flex flex-row gap-10 text-[#12240f]">
      {/* Left: Buttons */}
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <ExperienceButton
            key={index}
            company={exp.company}
            role={exp.role}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Right: Details */}
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="font-semibold text-sm text-[#12240f]">{activeExperience.duration}</p>
        <p className="text-sm leading-relaxed text-[#12240f]">
          {activeExperience.description}
        </p>
      </div>
    </main>
  );
}
