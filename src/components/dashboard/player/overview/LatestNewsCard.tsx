"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import NewsImage from "@/public/dashboard/player/frame-1000001962.jpeg";

import { IoIosArrowForward } from "react-icons/io";

interface iNews {
  image: StaticImageData | string;
  header: string;
  content: string;
}

const LatestNewsCard: React.FC = () => {
  const [news, setNews] = useState<iNews[]>(
    Array(5).fill({
      image: NewsImage,
      header: "Golden Shoe 2022/2023 League's Top Scorer",
      content:
        "The race is once more this season, who is going to be crowned the league's leading goal scorer",
    })
  );

  return (
    <div className="font-lato flex flex-col shadow-custom-2 justify-start items-start relative gap-4 p-4 rounded-2xl bg-white border-2 border-border-gray">
      <div className="flex justify-between items-center w-full">
        <p className="text-xl font-bold text-left text-black">
          LATEST NEWS
        </p>
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-base text-left text-black-92">View All</p>
          <IoIosArrowForward size={"16px"} className="text-black" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        {news
          .map((data, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-3 w-full"
            >
              <Image
                src={data.image}
                alt="news image"
                width={80}
                height={80}
                className="size-20 object-cover rounded-2xl"
              />

              <div className="flex flex-col justify-start items-start flex-grow gap-1">
                <p className="text-base font-semibold text-left text-black">
                  {data.header}
                </p>
                <p className="opacity-[0.92] line-clamp-2 text-[10px] text-left text-black">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LatestNewsCard;
