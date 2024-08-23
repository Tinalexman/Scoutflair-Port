import React from "react";
import Badges from "./Badges";
import Feed from "./Feed";
import Plan from "./Plan";
import Players from "./Players";
import Prospects from "./Prospects";
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
