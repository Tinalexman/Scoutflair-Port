import React from "react";
import Details from "./Details";
import Analysis from "./Analysis";
import Notes from "./Notes";
import Connections from "./Connections";
import Formations from "./Formations";
import SetPieces from "./SetPieces";

const Tactics = () => {
  return (
    <div className="flex flex-col gap-5 font-lato w-full">
      <Details />
      <div className="w-full flex gap-5 justify-between">
        <div className="flex flex-col gap-5 w-2/3 h-[900px]">
          <Formations />
          <SetPieces />
        </div>
        <div className="w-1/3 h-[900px]">
          <Connections />
        </div>
      </div>
      <Notes />
      <Analysis />
    </div>
  );
};

export default Tactics;
