import React from "react";
import AvailableAcademies from "./AvailableAcademies";
import Gallery from "./Gallery";
import Information from "./Information";
import Updates from "./Updates";

const Academies = () => {
  return (
    <div className="w-full font-lato flex p-5 gap-5">
      <div className="w-1/3">
        <AvailableAcademies />
      </div>

      <div className="w-2/3 flex flex-col gap-5">
        <Information />
        <Gallery />
        <Updates />
      </div>
    </div>
  );
};

export default Academies;
