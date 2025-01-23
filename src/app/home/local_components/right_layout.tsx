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

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="w-20 h-20 border-primary_text_color border-2 rounded-lg items-center justify-center flex text-4xl text-primary_text_color "
        >
          {item.file}
        </div>
      ))}
    </div>
  );
}
