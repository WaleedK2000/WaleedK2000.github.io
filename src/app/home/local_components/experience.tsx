"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

function ExperienceButton({ company, role, isActive, onClick }) {
  return (
    <div className={`border-b-4 ${
          isActive
          ? "border-[#12240f] bg-[#12240f]/5"
          : "border-b-transparent border-[#12240f] opacity-70 hover:opacity-100"
        }`} >

    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex flex-col justify-center py-4 pl-3  w-72 text-left
        `}
        >
      <p className="font-semibold text-lg text-[#12240f]">{company}</p>
      {role && (
        <p className="text-sm opacity-80 text-[#12240f]">{role}</p>
      )}
    </motion.button>
      </div>
  );
}



export default function Experience() {
  const experiences = [
  
    {
      company: "Codeaza Technologies",
      role: "Full Stack Engineer",
      duration: "Jan 2022 – Apr 2024",
      description:
        "Developed full-stack solutions using React, FastAPI, and cloud services. Led feature design, API development, and deployment workflows while ensuring scalability and security.",
    },
      {
      company: "Prismware Technologies",
      role: "Associate Software Engineer",
      duration: "May 2019 – Present",
      description:
        "Worked on building and maintaining scalable web applications, collaborating closely with cross-functional teams. Responsibilities included feature development, performance optimization, and improving overall user experience using modern frontend and backend technologies.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(4);
  const activeExperience = experiences[activeIndex];

  return (
    <main className="flex flex-row  text-[#12240f] gap-10">
      {/* Left: Buttons */}
      <div className="flex flex-col border-[#12240f] border-l-4">
        {experiences.map((exp, index) => (
          <ExperienceButton
            key={index}
            company={exp.company}
            role={exp.role}
            isActive={activeIndex == index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Right: Details */}
     <div className="flex flex-col gap-4 max-w-xl relative">
  { activeExperience &&  <AnimatePresence mode="wait">
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <p className="font-semibold text-sm text-[#12240f]">
        {activeExperience.duration}
      </p>
      <p className="text-sm leading-relaxed text-[#12240f]">
        {activeExperience.description}
      </p>
    </motion.div>
  </AnimatePresence>}
</div>

    </main>
  );
}
