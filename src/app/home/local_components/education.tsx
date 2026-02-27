"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  description?: string;
  highlights?: string[];
  courses?: string[];
  honors?: string[];
}

function EducationCard({
  education,
  index,
}: {
  education: Education;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline dot and line */}

      {/* Content card */}
      <motion.div
        className="md:ml-12 mb-8"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="bg-[#d0e8ca]/30 backdrop-blur-sm rounded-lg p-5 cursor-pointer border-2 border-[#d0e8ca]/30 hover:border-[#d0e8ca] transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-[#12240f]">{education.degree}</h3>
              <p className="font-medium text-[#12240f]/80">
                {education.institution}
              </p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
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
          </div>

          {/* Duration and GPA */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#12240f]/70 mb-2">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {education.duration}
            </span>
            {education.gpa && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                GPA: {education.gpa}
              </span>
            )}
          </div>

          {/* Expandable details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 border-t border-[#d0e8ca]/20">
                  {education.description && (
                    <p className="text-sm text-[#12240f]/80 mb-3 leading-relaxed">
                      {education.description}
                    </p>
                  )}

                  {education.highlights && education.highlights.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-semibold text-[#12240f]/70 uppercase tracking-wide">
                        Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {education.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-[#12240f]/80 flex items-start gap-2"
                          >
                            <span className="text-[#12240f] mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {education.courses && education.courses.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {education.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#d0e8ca]/20 text-[#12240f] rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {education.honors && education.honors.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="font-semibold text-[#12240f]/70 uppercase tracking-wide">
                        Honors & Awards
                      </p>
                      <ul className="space-y-1.5">
                        {education.honors.map((honor, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-[#12240f]/80 flex items-start gap-2"
                          >
                            <span className="text-[#12240f] mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{honor}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution:
        "FAST National University of Computing and Emerging Sciences, Islamabad",
      duration: "2019 – 2023",
      gpa: "3.43",
      honors: [
        "Deans List Spring '21 (Jun 2021)",
        "Deans List Fall '20 (Feb 2020)",
        "Deans List Fall '19 (Jan 2019)",
      ],
    },
  ];

  return (
    <main className="text-[#12240f] py-6">
      <div className="relative">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </main>
  );
}
