import React from "react";
import AddBioData from "@/src/components/dashboard/player/club-settings/BioData";
import AddImages from "@/src/components/dashboard/player/club-settings/Images";

const AddNewClub = () => {
  return (
    <div className="w-full font-lato flex flex-col gap-5 text-black">
      <div className="w-[860px] h-12 flex items-center text-lg font-bold bg-white shadow-custom-2 border border-border-gray px-5">
        <h2>Add New</h2>
      </div>

      <div className="flex gap-5">
        <AddBioData />
        <div className="flex flex-col gap-10">
          <AddImages />
          <button className="w-full bg-primary text-white text-lg font-bold py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewClub;
