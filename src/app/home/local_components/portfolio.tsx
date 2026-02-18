"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "@/data/projectData";

interface ProjectCardProps {
  project: typeof projectData[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div
        className="bg-[#d0e8ca]/30 backdrop-blur-sm rounded-lg p-5 cursor-pointer border-2 border-[#d0e8ca]/30 hover:border-[#12240f] transition-colors w-full max-w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#12240f]">{project.title}</h3>
            {(project.start_date || project.end_date) && (
              <p className="text-sm font-medium text-[#12240f]/70 mt-1">
                {project.start_date && project.end_date
                  ? `${project.start_date} - ${project.end_date}`
                  : project.start_date || project.end_date}
              </p>
            )}
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
                <ul className="space-y-2">
                  {project.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-sm text-[#12240f]/80 flex items-start gap-2 break-words"
                    >
                      <span className="text-[#12240f] mt-1 flex-shrink-0">•</span>
                      <span className="text-justify break-words">{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <main className="text-[#12240f] py-6 max-w-full">
      <div className="relative w-full">
        {projectData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
