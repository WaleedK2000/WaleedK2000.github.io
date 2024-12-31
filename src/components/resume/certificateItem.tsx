import { CertificateItemInterface } from "@/data/certificateData";
import React from "react";

export default function CertificateItem({
  title,
  date,
}: CertificateItemInterface) {
  return (
    <div>
      <div className="flex flex-row gap-1  mb-2  w-full ">
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div>
            <h3 className="text-2xl text-primary_text_color">{title}</h3>
          </div>
          <div className="flex flex-row gap-4">
            <p>{`${date}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
