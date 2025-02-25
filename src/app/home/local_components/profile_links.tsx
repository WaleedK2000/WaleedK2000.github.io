import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function ProfileLinks() {
  const items = [
    {
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/WaleedK2000",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/waleed-kayani/",
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      link: "mailto:waleedkayani14@yahoo.com",
    },
  ];

  return (
    <div className="flex flex-row justify-center gap-5 ">
      {items.map((item) => (
        <div
          key={item.title}
          onClick={() => window.open(item.link, "_blank")}
          className="text-3xl text-primary_text_color hover:text-accent hover:cursor-pointer "
        >
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileLinks;
