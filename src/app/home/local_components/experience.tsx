"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceButton({ company, role, isActive, onClick }) {
  return (
    <div className={`border-b-4 ${
          isActive
          ? "border-[#12240f] bg-[#12240f]/5"
          : "border-b-transparent border-[#12240f] opacity-70 hover:opacity-100"
        }`}>
      <motion.button
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col justify-center py-4 pl-3 w-full md:w-72 text-left"
      >
        <p className="font-semibold text-lg text-[#12240f]">{company}</p>
        {role && (
          <p className="text-sm opacity-80 text-[#12240f]">{role}</p>
        )}
      </motion.button>
    </div>
  );
}

function MobileAccordionItem({ experience, isActive, onClick }) {
  return (
    <div className="border-l-4 border-[#12240f]">
      <div className={` ${
            isActive
            ? " bg-[#12240f]/5"
            : " opacity-70"
          }`}>
        <motion.button
          onClick={onClick}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex justify-between items-start py-4 pl-3 pr-4 w-full text-left"
        >
          <div>
            <p className="font-semibold text-lg text-[#12240f]">{experience.company}</p>
            <p className="text-sm opacity-80 text-[#12240f]">{experience.role}</p>
          </div>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#12240f] ml-2 flex-shrink-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-3 pr-4 py-4">
              <p className="font-semibold text-sm text-[#12240f] mb-2">
                {experience.duration}
              </p>
              <p className="text-sm leading-relaxed text-[#12240f]">
                {experience.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

  const [activeIndex, setActiveIndex] = useState(-1);
  const activeExperience = experiences[activeIndex];

  const onClickExperience = (index) => {
    if (activeIndex === index) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  return (
    <main className="text-[#12240f]">
      {/* Mobile Accordion (below md breakpoint) */}
      <div className="md:hidden flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <MobileAccordionItem
            key={index}
            experience={exp}
            isActive={activeIndex === index}
            onClick={() => onClickExperience(index)}
          />
        ))}
      </div>

      {/* Desktop Side-by-Side Layout (md and above) */}
      <div className="hidden md:flex md:flex-row gap-10">
        {/* Left: Buttons */}
        <div className="flex flex-col border-[#12240f] border-l-4">
          {experiences.map((exp, index) => (
            <ExperienceButton
              key={index}
              company={exp.company}
              role={exp.role}
              isActive={activeIndex === index}
              onClick={() => onClickExperience(index)}
            />
          ))}
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-4 max-w-xl relative">
          {activeExperience && (
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}