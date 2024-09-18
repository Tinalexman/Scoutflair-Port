import React from "react";
import Ads from "../common/Ads";
import Feeds from "../common/Feeds";
import Posts from "../common/Posts";

const Spotlight = () => {
  return (
    <div className="w-full p-6 gap-6 grid grid-cols-[2fr_1fr]">
      <Posts />
      <div className="w-full flex flex-col gap-6">
        <Feeds />
        <Ads />
      </div>
    </div>
  );
};

export default Spotlight;
