"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import AnalysisImage from "@/public/dashboard/player/match analysis.jpeg";

import { FaPlay } from "react-icons/fa";

const Gallery = () => {
  const [images, setImages] = useState<(string | StaticImageData)[]>(
    Array(4).fill(AnalysisImage)
  );

  const [videos, setVideos] = useState<(string | StaticImageData)[]>(
    Array(2).fill(AnalysisImage)
  );

  return (
    <div className="flex flex-col overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg font-bold py-3 px-5">Gallery</h2>
      </div>
      <div className="flex gap-5 w-full text-black px-5">
        <div className="w-1/2 flex flex-col gap-5 py-3">
          <div className="flex w-full justify-between items-center">
            <h2 className=" font-bold text-[16px]">Photos</h2>
            <p className="text-[12px] cursor-pointer">See all</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((im, i) => (
              <Image
                key={i}
                src={im}
                alt="image"
                width={200}
                height={200}
                className="w-full h-[140px] rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 py-3">
          <div className="flex w-full justify-between items-center">
            <h2 className=" font-bold text-[16px]">Videos</h2>
            <p className="text-[12px] cursor-pointer">See all</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {videos.map((vd, i) => (
              <div key={i} className="w-full h-[140px] relative">
                <Image
                  src={vd}
                  alt="image"
                  width={200}
                  height={140}
                  className="w-full h-full rounded-lg object-cover bg-blend-darken brightness-75"
                />
                <div className="flex w-full h-full justify-center items-center absolute top-0 left-0">
                  <div className="flex gap-2 items-center w-fit">
                    <div className="size-[30px] rounded-full bg-white cursor-pointer flex justify-center items-center">
                      <FaPlay className="text-[#FF0000]" size={"14px"} />
                    </div>
                    <p className="text-[14px] text-white">Watch</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
