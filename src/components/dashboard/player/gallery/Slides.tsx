"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Pic from "@/public/images/frame-36303.png";
import { convertDateWithDayName } from "@/src/functions/dateFunctions";
import { useGetUserGallery } from "@/src/hooks/player";
import UploadMedia from "./UploadMedia";


interface iSlide {
  images: (StaticImageData | string)[];
  date: Date;
}

const Slides = () => {
  const [slides, setSlides] = useState<iSlide[]>(
    Array(4).fill({
      images: Array(6).fill(Pic),
      date: new Date(),
    })
  );

  const [showUploadModal, shouldShowUploadModal] = useState<boolean>(false);
  const { loading: loadingGallery, data: gallery, success: loadedGalleries } = useGetUserGallery();



  return (
    <>
      <div className="flex flex-col gap-6 w-full items-end">
        <button onClick={() => shouldShowUploadModal(true)} className="w-[120px] flex gap-1 items-center justify-center h-10 rounded text-white bg-primary-2 font-medium">
          Upload
        </button>
        <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-6 bg-white flex flex-col">
          {slides.map((slide, i) => (
            <div className="w-full flex flex-col gap-5" key={i}>
              <h2 className="text-14-16 text-dark text-medium">
                {convertDateWithDayName(slide.date).toUpperCase()}
              </h2>
              <div className="w-full grid grid-cols-3 gap-4">
                {slide.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="image"
                    width={100}
                    height={100}
                    className="object-cover rounded-md w-full h-[5rem]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        showUploadModal && <UploadMedia close={() => shouldShowUploadModal(false)} />
      }
    </>
  );
};

export default Slides;
