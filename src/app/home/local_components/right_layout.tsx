import React from "react";

import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiPulumi } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaDocker } from "react-icons/fa6";
import { SiGooglegemini } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { motion } from "framer-motion";


export default function RightLayout() {
  const items = [
    {
      title: "Python",
      file: <FaPython />,
    },
    {
      title: "Javascript",
      file: <IoLogoJavascript />,
    },
    {
      title: "C++",
      file: <TbBrandCpp />,
    },
    {
      title: "React JS",
      file: <FaReact />,
    },
    {
      title: "Google Gemini",
      file: <SiGooglegemini />,
    },
    {
      title: "Github",
      file: <FaGithub />,
    },
    {
      title: "FastAPI",
      file: <SiFastapi />,
    },
    {
      title: "Pulumi",
      file: <SiPulumi />,
    },
    {
      title: "AWS",
      file: <FaAws />,
    },
    {
      title: "Tailwind CSS",
      file: <RiTailwindCssFill />,
    },
    {
      title: "Docker",
      file: <FaDocker />,
    },
    {
      title: "Vite",
      file: <SiVite />,
    },
  ];

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};



  return (
    <motion.div
      className="grid grid-cols-4 gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariant}
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 border-primary_text_color border-2 rounded-lg flex items-center justify-center text-4xl text-primary_text_color"
        >
          {item.file}
        </motion.div>
      ))}
    </motion.div>
  );

}
