import React from "react";
import AvailableClubs from "./AvailableClubs";
import Gallery from "./Gallery";
import Information from "./Information";
import Updates from "./Updates";

const Clubs = () => {
  return (
    <div className="w-full font-lato flex gap-5">
      <div className="w-1/3">
        <AvailableClubs />
      </div>

      <div className="w-2/3 flex flex-col gap-5">
        <Information />
        <Gallery />
        <Updates />
      </div>
    </div>
  );
};

export default Clubs;
