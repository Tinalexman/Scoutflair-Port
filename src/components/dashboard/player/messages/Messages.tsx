"use client";

import React from "react";
import ChatList from "./ChatList";
import Details from "./Details";
import Inbox from "./Inbox";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

const Messages = () => {
  TimeAgo.setDefaultLocale("en");
  TimeAgo.addDefaultLocale(en);

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] w-full h-full font-lato">
      <ChatList />
      <Inbox />
      <Details />
    </div>
  );
};

export default Messages;
