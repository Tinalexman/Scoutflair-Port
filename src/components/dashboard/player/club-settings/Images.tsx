"use client";

import { StaticImageData } from "next/image";
import React, { useState, useRef } from "react";

import { FaFileUpload } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface iImgData {
  src: string;
  name: string;
  size: number;
}

const AddImages = () => {
  const [images, setImages] = useState<iImgData[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const getDocSize = (length: number) => {
    let kb = length / 1024;
    let mb = kb / 1024;
    mb = Math.floor(mb);
    kb -= mb * 1024;
    if (mb !== 0) {
      return `${mb} MB`;
    } else {
      return `${kb.toFixed(2)} KB`;
    }
  };

  return (
    <div className="w-[340px] h-fit rounded-md gap-5 p-5 flex flex-col bg-white border border-border-gray shadow-custom-2">
      <h2 className="text-lg font-bold">Add Images</h2>
      <div className="flex flex-col">
        <h2 className="text-[16px] font-bold">Upload Image</h2>
        <p className="text-[14px]">Track your activities in real time</p>
      </div>
      <div
        onClick={handleClick}
        className="cursor-pointer flex flex-col justify-center items-center w-full h-[120px] px-5 gap-2 rounded border-2 border-border-gray border-dashed"
      >
        <FaFileUpload className="text-black-80" size={"32px"} />
        <p className="text-[12px] text-center">
          Drag & drop your images here or{" "}
          <span className="font-bold">choose images</span>
        </p>
        <p className="text-[10px]">100 MB maximum file size</p>
        <input
          accept="image/*"
          type="file"
          style={{ display: "none" }}
          ref={fileRef}
          onChange={(e) => {
            let files: FileList | null = e.target.files;
            if (files != null) {
              let img: iImgData[] = [];
              for (let i = 0; i < files.length; i++) {
                img.push({
                  src: URL.createObjectURL(files[i]),
                  name: files[i].name,
                  size: files[i].size,
                });
              }
              setImages([...images, ...img]);
            }
          }}
        />
      </div>

      <div className="flex flex-col gap-5 px-5 mt-5">
        {images.map((img, i) => (
          <div key={i} className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center">
              <img
                src={img.src}
                alt="img"
                width={60}
                height={60}
                className="size-[60px] object-cover rounded-lg"
              />
              <div className="flex flex-col max-w-[80px]">
                <h3 className="text-[14px] line-clamp-1">{img.name}</h3>
                <p className="text-[12px]">{getDocSize(img.size)}</p>
              </div>
            </div>
            <RiDeleteBin6Fill
              className="text-black cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setImages(images.filter((_, index) => index !== i));
              }}
              size={"22px"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddImages;
