import React from "react";
import Badges from "../common/Badges";
import Players from "../common/Players";
import Prospects from "../common/Prospects";
import Feed from "../common/Feed";
import AllPlayers from "./AllPlayers";

const Evaluations = () => {
  return (
    <div className="w-full flex flex-col p-6 gap-6">
      <div className="w-full h-[8.5rem] grid grid-cols-[2fr_1fr] gap-6">
        <div className="w-full h-full gap-6 flex">
          <Players />
          <Prospects />
        </div>
        <Badges />
      </div>
      <div className="w-full grid grid-cols-[2fr_1fr] gap-6">
        <AllPlayers />
        <div className="sticky top-6 self-start w-full h-full">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
