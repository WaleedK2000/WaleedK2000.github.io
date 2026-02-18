import React from "react";
import { HonorsAwardItemInterface } from "@/data/honorsAwardsData";

export default function HonorsAwardItem({
  title,
  date,
  institution,
  description,
}: HonorsAwardItemInterface) {
  return (
    <div>
      <div className="flex flex-row gap-1 mb-2 w-full">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div>
            <h3 className="text-2xl text-primary_text_color">{title}</h3>
          </div>
          <div className="flex flex-row gap-4">
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <p className="text-lg italic">{institution}</p>
      </div>

      <div className="text-lg">
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}
