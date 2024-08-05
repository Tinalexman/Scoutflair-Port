import React, { useState, FC } from "react";

import { FiEdit } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";

import Image, { StaticImageData } from "next/image";
import Person from "@/public/dashboard/player/Ellipse 2386.png";

import { BsFillPinAngleFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";

import TimeAgo from "javascript-time-ago";

import { iChatUser } from "./types";
const ChatList = () => {
  const [pinnedUsers, setPinnedUsers] = useState<iChatUser[]>(
    Array(4).fill({
      image: Person,
      name: "Noraly Faheema",
      count: 1,
      timestamp: new Date(),
      lastMessage: "Hello, How are you?",
    })
  );

  const [allUser, setAllUsers] = useState<iChatUser[]>(
    Array(15).fill({
      image: Person,
      name: "Noraly Faheema",
      count: 1,
      timestamp: new Date(),
      lastMessage: "Hello, How are you?",
    })
  );

  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="w-full h-full flex flex-col bg-white px-5 py-3 gap-5 overflow-y-scroll scrollbar-custom">
      <div className="w-full flex items-center justify-between text-black">
        <h2 className="text-lg font-bold">Messages</h2>
        <div className="w-fit flex gap-3 items-center">
          <FiEdit size={22} />
          <LuSearch size={22} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-2">
        <div className="flex gap-1 text-black items-center text-[12px]">
          <BsFillPinAngleFill />
          Pinned
        </div>
        {pinnedUsers.map((pu, i) => (
          <ChatTile
            key={i}
            timestamp={timeAgo.format(pu.timestamp, "mini-minute-now")}
            count={pu.count}
            image={pu.image}
            name={pu.name}
            lastMessage={pu.lastMessage}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-3 mt-2">
        <div className="flex gap-1 text-black items-center text-[12px]">
          <LuMessagesSquare />
          All Messages
        </div>
        {allUser.map((pu, i) => (
          <ChatTile
            key={i}
            timestamp={timeAgo.format(pu.timestamp, "mini-minute-now")}
            count={pu.count}
            image={pu.image}
            name={pu.name}
            lastMessage={pu.lastMessage}
          />
        ))}
      </div>
    </div>
  );
};

const ChatTile: FC<{
  image: string | StaticImageData;
  name: string;
  count: number;
  lastMessage: string;
  timestamp: string;
}> = ({ image, name, count, lastMessage, timestamp }) => {
  return (
    <div className="grid grid-cols-[2fr_4fr_1fr] border-b cursor-pointer border-border-gray pb-1 place-content-center place-items-center w-full text-black">
      <Image src={image} alt="chat user" className="size-12" />
      <div className="flex flex-col w-full">
        <h3 className="text-md font-semibold truncate">{name}</h3>
        <p className="text-sm font-normal truncate">{lastMessage}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[10px]">{timestamp}</p>
        {count > 0 && (
          <div className="size-4 bg-error rounded-full text-[10px] text-white grid place-items-center">
            {count}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
