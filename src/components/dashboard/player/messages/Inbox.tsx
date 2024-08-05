import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import { iChatUser, iMessage } from "./types";
import Other from "@/public/dashboard/player/Ellipse 2386.png";
import Current from "@/public/dashboard/player/Ellipse 2387.png";

import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";

import { convertTime } from "@/src/functions/dateFunctions";

const Inbox = () => {
  const [otherUser, setOtherUser] = useState<iChatUser>({
    id: "dummyID",
    image: Other,
    name: "Joshua Fayomi",
    count: 1,
    timestamp: new Date(),
    lastMessage: "Hello, How are you?",
  });
  const [status, setStatus] = useState<string>("Typing...");
  const currentUserID: string = "currentUserID";
  const currentUserImage: string | StaticImageData = Current;
  const currentUserName: string = "Noraly Faheema";

  const [messages, setMessages] = useState<iMessage[]>([
    {
      id: "dummyMessageID",
      senderID: otherUser.id,
      senderName: otherUser.name,
      senderImage: otherUser.image,
      timestamp: new Date(),
      content: "How are you doing?",
    },
    {
      id: "dummyMessageID",
      senderID: currentUserID,
      senderImage: currentUserImage,
      senderName: currentUserName,
      timestamp: new Date(),
      content: "I am fine. Thank you.",
    },
    {
      id: "dummyMessageID",
      senderID: otherUser.id,
      senderName: otherUser.name,
      senderImage: otherUser.image,
      timestamp: new Date(),
      content: "I need weed. Urgently.......",
    },
    {
      id: "dummyMessageID",
      senderID: currentUserID,
      senderImage: currentUserImage,
      senderName: currentUserName,
      timestamp: new Date(),
      content: "Yo?? You good??",
    },
    {
      id: "dummyMessageID",
      senderID: currentUserID,
      senderImage: currentUserImage,
      senderName: currentUserName,
      timestamp: new Date(),
      content: "This is unlike you",
    },
    {
      id: "dummyMessageID",
      senderID: otherUser.id,
      senderName: otherUser.name,
      senderImage: otherUser.image,
      timestamp: new Date(),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, earum.",
    },
    {
      id: "dummyMessageID",
      senderID: currentUserID,
      senderImage: currentUserImage,
      senderName: currentUserName,
      timestamp: new Date(),
      content: "You need help. Immediate help",
    },
  ]);

  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-custom bg-background-gray relative">
      <div className="h-20 w-full bg-white flex items-center justify-between px-5">
        <div className="w-fit gap-2 flex items-center">
          <Image
            src={otherUser.image}
            alt="chat user"
            className="size-12"
            width={48}
            height={48}
          />
          <div className="flex flex-col w-full">
            <h3 className="text-md font-semibold truncate text-black">
              {otherUser.name}
            </h3>
            <p className="text-sm font-normal truncate text-bright-green">
              {status}
            </p>
          </div>
        </div>
        <div className="w-fit gap-10 flex items-center text-black">
          <FaPhoneAlt size={16} className="cursor-pointer" />
          <FaVideo size={16} className="cursor-pointer" />
          <CgMoreO size={16} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 w-full h-[calc(100%-5rem)] pb-32 overflow-y-scroll scrollbar-custom ">
        {messages.map((message, i) => {
          return (
            <div
              key={i}
              id={message.id === "" ? `message-${i}` : message.id}
              className={`w-full flex gap-3 ${
                message.senderID === otherUser.id
                  ? "justify-start"
                  : "justify-end"
              } items-start`}
            >
              <div className="flex gap-2 items-end">
                {message.senderID === otherUser.id && (
                  <Image
                    src={otherUser.image}
                    alt="sender image"
                    width={40}
                    height={40}
                    className="size-10 rounded-full"
                  />
                )}

                <div
                  className={`flex flex-col gap-[2px] max-w-[70%] ${
                    message.senderID === otherUser.id
                      ? "items-start"
                      : "items-end"
                  }`}
                >
                  <div
                    className={`${
                      message.senderID === otherUser.id
                        ? "bg-white text-black rounded-bl-none"
                        : "bg-[#0000FF] text-white rounded-br-none"
                    }  rounded-lg flex flex-col`}
                  >
                    <p
                      className="font-semibold text-md px-3 pt-1"
                      style={{
                        wordWrap: "break-word",
                        width: "inherit",
                      }}
                    >
                      {message.senderName}
                    </p>
                    <p
                      style={{
                        wordWrap: "break-word",
                        width: "inherit",
                      }}
                      className="px-3 pt-1 pb-2 text-sm"
                    >
                      {message.content}
                    </p>
                  </div>

                  <div
                    className={` 
                      text-[10px] text-black font-semibold`}
                  >
                    {convertTime(new Date(message.timestamp))}
                  </div>
                </div>

                {message.senderID === currentUserID && (
                  <Image
                    src={currentUserImage}
                    alt="sender image"
                    width={40}
                    height={40}
                    className="size-10 rounded-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-4 right-4 h-16 bg-background-gray ">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full pl-6 pr-16 rounded-[16px] h-12 text-black bg-white"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-2 rounded-md text-white size-8 grid place-items-center">
            <IoIosSend size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
