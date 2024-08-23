import React from "react";
import Basic from "./Basic";
import Notifications from "./Notifications";
import Languages from "./Languages";
import Accounts from "./Accounts";
import DeleteAccount from "./DeleteAccount";

const BasicSettings = () => {
  return (
    <div className="w-full shadow-custom rounded bg-white flex flex-col justify-between items-center">
      <div className="w-full flex flex-col shadow-custom-1 h-16 px-5 justify-center">
        <h2 className="text-dark font-bold text-16-19">Basic Settings</h2>
        <h2 className="text-placeholder text-12-14">
          Manage your essential settings
        </h2>
      </div>
      <div className="flex flex-col w-full mt-10 gap-5">
        <Basic />
        <Notifications />
        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-2 px-5">
            <Languages />
            <Accounts />
          </div>
          <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
        </div>
        <div className="flex flex-col w-full">
          <DeleteAccount />
          <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
        </div>
      </div>
      <button className="bg-primary-2 text-white text-14-16 font-bold rounded-lg py-2 px-16 mt-12 mb-14">
        Save Changes
      </button>
    </div>
  );
};

export default BasicSettings;
