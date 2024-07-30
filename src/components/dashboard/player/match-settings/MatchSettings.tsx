import React from "react";
import Information from "./Information";
import Options from "./Options";

const MatchSettings = () => {
  return (
    <div className="w-full font-lato flex flex-col items-center gap-5 text-black">
      <div className="w-full h-12 flex items-center text-lg font-bold bg-white shadow-custom-2 border border-border-gray px-5">
        <h2>Add New</h2>
      </div>

      <div className="flex p-5 w-full justify-between bg-white shadow-custom-2 border border-border-gray">
        <Information />
        <Options />
      </div>

      <button className="w-[300px] bg-primary text-white text-lg font-bold py-2 rounded-lg">
        Save
      </button>
    </div>
  );
};

export default MatchSettings;
