"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

interface ExperienceButtonProps {
  company: string;
  role: string;
  isActive: boolean;
  onClick: () => void;
}

interface MobileAccordionItemProps {
  experience: Experience;
  isActive: boolean;
  onClick: () => void;
}

function ExperienceButton({
  company,
  role,
  isActive,
  onClick,
}: ExperienceButtonProps) {
  return (
    <div className="relative">
      <motion.button
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col justify-center py-4 pl-3 w-full md:w-72 text-left"
      >
        <h3 className="text-[#12240f]">{company}</h3>
        {role && <p className="opacity-80 text-[#12240f]">{role}</p>}
      </motion.button>
      {isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#12240f] origin-left"
        />
      )}
    </div>
  );
}

function MobileAccordionItem({
  experience,
  isActive,
  onClick,
}: MobileAccordionItemProps) {
  return (
    <div className="border-l-4 border-[#12240f]">
      <div className={` ${isActive ? " bg-[#12240f]/5" : " opacity-70"}`}>
        <motion.button
          onClick={onClick}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex justify-between items-start py-4 pl-3 pr-4 w-full text-left"
        >
          <div>
            <p className="font-semibold text-lg text-[#12240f]">
              {experience.company}
            </p>
            <p className="text-sm opacity-80 text-[#12240f]">
              {experience.role}
            </p>
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
              <ul className="text-sm leading-relaxed text-[#12240f] space-y-2 list-disc ml-4">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
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
      duration: "May 2024 – Current",
      responsibilities: [
        "Designed and developed scalable, production-grade RESTful backend APIs using FastAPI and Python, implementing secure authentication, RBAC, and third-party integrations.",
        "Built responsive and modular frontend interfaces using Vue.js, React js, and modern JavaScript practices, ensuring high performance, maintainability, and seamless integration with backend APIs.",
        "Integrated Sentry for real-time error tracking and performance monitoring, improving visibility into production issues.",
        "Implemented centralized logging, alerting, and uptime monitoring using BetterStack to enhance system observability and reliability.",
        "Optimized application responsiveness and load times through efficient API design, frontend state management, and performance-focused UI updates, ensuring smooth user experience across devices.",
        "Implemented CI/CD pipelines with GitHub Actions, enabling automated testing, deployments, and reducing developer load by 30%.",
      ],
    },
    {
      company: "Prismware Technologies",
      role: "Software Engineer",
      duration: "Sep 2023 – Mar 2024",
      responsibilities: [
        "Collaborated with designers, backend engineers, and product stakeholders to translate customer requirements into scalable and user-friendly frontend solutions.",
        "Developed high-quality, reusable, and testable React components, following modern JavaScript patterns to improve maintainability and reduce code duplication.",
        "Designed mobile-first, responsive layouts using modern CSS and component-based architecture, delivering consistent UX across desktop, tablet, and mobile screens",
        "Optimized frontend performance and user interactions by applying best practices in state management, component rendering, and API integration.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const activeExperience = experiences[activeIndex];

  const onClickExperience = (index: number) => {
    if (activeIndex === index) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  return (
    <main className="text-[#12240f] px-2 lg:px-32">
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
        <div className="flex flex-col border-[#12240f] border-l-4 h-min">
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
        <div className="flex flex-col gap-4  relative">
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
                <p className="font-semibold text-[#12240f]">
                  {activeExperience.duration}
                </p>
                <ul className="leading-relaxed text-[#12240f] space-y-2 list-disc ml-4">
                  {activeExperience.responsibilities.map(
                    (responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ),
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}
