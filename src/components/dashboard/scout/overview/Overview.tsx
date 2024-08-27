import React from "react";
import Badges from "../common/Badges";
import Feed from "../common/Feed";
import Plan from "./Plan";
import Players from "../common/Players";
import Prospects from "../common/Prospects";
import Updates from "./Updates";

const Overview = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6 p-6">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full h-[8.5rem] grid grid-cols-2 gap-6">
          <Players />
          <Prospects />
        </div>
        <Plan />
        <Updates />
      </div>
      <div className="w-full flex flex-col gap-6">
        <Badges />
        <Feed />
      </div>
    </div>
  );
};

export default Overview;
