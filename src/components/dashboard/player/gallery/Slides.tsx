"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Void from "@/public/images/Void.png";
import { convertDateWithDayName } from "@/functions/dateFunctions";
import { useGetUserGallery, ImageData } from "@/hooks/player";

import { Loader } from "@mantine/core";

function groupImagesByDay(images: ImageData[]): Map<string, ImageData[]> {
  const groups: Map<string, ImageData[]> = new Map();

  images.forEach((image) => {
    const imageDate = new Date(image.createdDate);
    const dateString = imageDate.toISOString().split("T")[0];

    if (!groups.has(dateString)) {
      groups.set(dateString, []);
    }
    groups.get(dateString)!.push(image);
  });

  return groups;
}

const Slides = () => {
  const [slides, setSlides] = useState<Map<string, ImageData[]>>(new Map());
  const [keys, setKeys] = useState<string[]>([]);
  const {
    loading: loadingGallery,
    data: gallery,
    success: loadedGalleries,
  } = useGetUserGallery();

  useEffect(() => {
    if (!loadingGallery && loadedGalleries) {
      const groupedImages = groupImagesByDay(gallery!);
      setSlides(groupedImages);
      setKeys(groupedImages.keys().toArray());
    }
  }, [loadingGallery, loadedGalleries]);

  return (
    <div className="w-full min-h-[80vh] shadow-custom rounded-[1rem] py-4 px-5 gap-6 bg-white flex flex-col">
      {!loadingGallery &&
        keys.length > 0 &&
        keys.map((slide, i) => {
          const dateHeader = slides.get(slide)![0]!.createdDate;
          const images = slides.get(slide)!;

          return (
            <div className="w-full flex flex-col gap-5" key={i}>
              <h2 className="text-14-16 text-dark text-medium">
                {convertDateWithDayName(dateHeader).toUpperCase()}
              </h2>
              <div className="w-full grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.mediaUrl}
                    alt="image"
                    width={100}
                    height={100}
                    className="object-cover rounded-md w-full h-[9rem]"
                  />
                ))}
              </div>
            </div>
          );
        })}
      {loadingGallery && (
        <div className="w-full h-full grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}
      {!loadingGallery && keys.length === 0 && (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-5">
          <Image
            src={Void}
            alt="no matches"
            width={100}
            height={100}
            className="w-32 h-auto object-cover"
          />

          <h2 className="text-dark text-12-14 font-medium">
            You have not posted any media yet
          </h2>
        </div>
      )}
    </div>
  );
};

export default Slides;
