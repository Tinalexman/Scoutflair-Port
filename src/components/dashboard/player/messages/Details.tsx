import React, { useState } from "react";
import { iChatUser } from "./types";

import Image, { StaticImageData } from "next/image";
import Person from "@/public/dashboard/player/Ellipse 2386.png";

import { FaFolder, FaLink } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import { IoMdImages } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { TbMessageCog } from "react-icons/tb";

import Highlight from "@/public/dashboard/player/frame-1000001965.png";

const Details = () => {
  const [otherUser, setOtherUser] = useState<iChatUser>({
    id: "dummyID",
    image: Person,
    name: "Joshua Fayomi",
    count: 1,
    timestamp: new Date(),
    lastMessage: "Hello, How are you?",
  });
  const [status, setStatus] = useState<string>("Online");
  const [allFiles, setAllFiles] = useState<number>(347);
  const [allLinks, setAllLinks] = useState<number>(147);

  const [docsSize, setDocsSize] = useState<string>("235 files, 3456MB");
  const [picsSize, setPicsSize] = useState<string>("235 files, 3456MB");
  const [videosSize, setVideoSize] = useState<string>("235 files, 3456MB");
  const [linksSize, setLinkSize] = useState<string>("235 files, 3456MB");
  const [otherSize, setOtherSize] = useState<string>("235 files, 3456MB");

  const [highlights, setHighlights] = useState<(string | StaticImageData)[]>(
    Array(4).fill(Highlight)
  );

  return (
    <div className="w-full h-full flex flex-col items-center bg-white px-5 pt-10 gap-10 overflow-y-scroll scrollbar-custom">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={otherUser.image}
          alt="image"
          width={48}
          height={48}
          className="rounded-full size-12 object-cover"
        />
        <h3 className="text-md font-semibold truncate text-black">
          {otherUser.name}
        </h3>
        <p className="text-sm font-normal truncate text-bright-green">
          {status}
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-primary rounded flex items-center py-2 px-3 gap-2 text-white">
          <FaFolder size={20} />
          <div className="flex flex-col h-fit">
            <p className="text-[10px]">All files</p>
            <h3 className="text-md font-semibold">{allFiles}</h3>
          </div>
        </div>
        <div className="bg-[#EDE8E8] rounded flex items-center py-2 px-3 gap-2 text-black text-opacity-[0.72]">
          <FaLink size={20} />
          <div className="flex flex-col h-fit">
            <p className="text-[10px]">All links</p>
            <h3 className="text-md font-semibold">{allLinks}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full text-black justify-between items-center">
          <p className="text-[10px] ">Files Type</p>
          <FiMoreVertical size={14} />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center w-fit">
              <div className="bg-[#4BBAC1] rounded flex items-center p-3 gap-2 text-white">
                <FaFolder size={20} />
              </div>
              <div className="flex flex-col h-fit text-black">
                <h3 className="text-md font-semibold">Documents</h3>
                <p className="text-[10px]">{docsSize}</p>
              </div>
            </div>
            <IoIosArrowForward size={16} className="text-black" />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center w-fit">
              <div className="bg-[#CF9E21] rounded flex items-center p-3 gap-2 text-white">
                <IoMdImages size={20} />
              </div>
              <div className="flex flex-col h-fit text-black">
                <h3 className="text-md font-semibold">Pictures</h3>
                <p className="text-[10px]">{picsSize}</p>
              </div>
            </div>
            <IoIosArrowForward size={16} className="text-black" />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center w-fit">
              <div className="bg-[#CF7070] rounded flex items-center p-3 gap-2 text-white">
                <BiSolidMoviePlay size={20} />
              </div>
              <div className="flex flex-col h-fit text-black">
                <h3 className="text-md font-semibold">Videos</h3>
                <p className="text-[10px]">{videosSize}</p>
              </div>
            </div>
            <IoIosArrowForward size={16} className="text-black" />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center w-fit">
              <div className="bg-[#69E98D] rounded flex items-center p-3 gap-2 text-white">
                <FaLink size={20} />
              </div>
              <div className="flex flex-col h-fit text-black">
                <h3 className="text-md font-semibold">Links</h3>
                <p className="text-[10px]">{linksSize}</p>
              </div>
            </div>
            <IoIosArrowForward size={16} className="text-black" />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 items-center w-fit">
              <div className="bg-[#3771C8] rounded flex items-center p-3 gap-2 text-white">
                <TbMessageCog size={20} />
              </div>
              <div className="flex flex-col h-fit text-black">
                <h3 className="text-md font-semibold">Others</h3>
                <p className="text-[10px]">{otherSize}</p>
              </div>
            </div>
            <IoIosArrowForward size={16} className="text-black" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-4 pb-10">
        <h3 className="text-md font-semibold truncate text-black">
          Highlights
        </h3>
        <div className="grid grid-cols-2 w-full gap-4">
          {highlights.map((highlight, i) => {
            return (
              <Image
                key={i}
                src={highlight}
                alt="highlight image"
                width={150}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
