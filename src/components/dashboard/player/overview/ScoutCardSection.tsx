import React from "react";
import ScoutCard from "./ScoutCard";

const ScoutCardSection: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full relative gap-6 pl-12 pr-[50px] pt-3 pb-5 rounded-2xl bg-white border-2 border-[#d1d1d1]"
      style={{ boxShadow: "0px 8px 10px 0 rgba(209,209,209,0.12)" }}
    >
      <p className="text-xl font-bold text-left text-black">SCOUT REPORT</p>
      <div className="flex justify-start items-start opacity-[0.88] gap-8">
        <div className="grid grid-cols-3 gap-5">
          <ScoutCard />
          <ScoutCard />
          <ScoutCard />
        </div>
      </div>
    </div>
  );
};

export default ScoutCardSection;
