import React from "react";
import Basic from "./Basic";
import Notifications from "./Notifications";

const BasicSettings = () => {
  return (
    <div className="w-full h-full shadow-custom rounded bg-white flex flex-col justify-between items-center">
      <div className="w-full flex flex-col shadow-custom-1 h-16 px-5 justify-center">
        <h2 className="text-dark font-bold text-16-19">Basic Settings</h2>
        <h2 className="text-placeholder text-12-14">
          Manage your essential settings
        </h2>
      </div>
      <div className="flex flex-col w-full mt-10 gap-5">
        <Basic />
        <Notifications />
      </div>
    </div>
  );
};

export default BasicSettings;
