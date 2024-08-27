import React from "react";
import Badges from "../common/Badges";
import Players from "../common/Players";
import Prospects from "../common/Prospects";
import Feed from "../common/Feed";
import AllPlayers from "./AllPlayers";

const Evaluations = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] p-6 gap-6">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full grid grid-cols-2 gap-6">
          <Players />
          <Prospects />
        </div>
        <AllPlayers />
      </div>
      <div className="w-full flex flex-col gap-6">
        <Badges />
        <Feed />
      </div>
    </div>
  );
};

export default Evaluations;
