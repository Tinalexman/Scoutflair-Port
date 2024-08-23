"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import AnalysisImage from "@/public/dashboard/player/match analysis.jpeg";
import { convertDateWithSlashesAndTime } from "@/src/functions/dateFunctions";

interface iAnalysis {
  image: string | StaticImageData;
  title: string;
  date: Date;
}

const Analysis = () => {
  const [analysis, setAnalysis] = useState<iAnalysis[]>(
    Array(3).fill({
      image: AnalysisImage,
      title:
        "Last Match (vs. ARISE FC): High pressing forced turnovers, created goal-scoring opportunities.",
      date: new Date(),
    })
  );

  return (
    <div className="flex flex-col rounded-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg text-center font-bold py-3">
          Match Analysis
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-8 px-6 py-5 w-full">
        {analysis.map((n, i) => (
          <div key={i} className="flex gap-2 items-start w-full">
            <Image
              src={n.image}
              alt="image"
              className="size-[68px] object-cover rounded-md"
              width={68}
              height={68}
            />
            <div className="flex flex-col justify-between items-start">
              <h2 className="text-black text-[12px] font-semibold">
                {n.title}
              </h2>
              <p className="text-[10px] text-black">
                {convertDateWithSlashesAndTime(n.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Analysis;
