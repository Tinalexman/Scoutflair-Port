import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full bg-white shadow-custom-2 h-20 fixed z-10 text-black">
      <p className="text-lg font-lato font-bold ml-4">
        Welcome, Team ScoutFlair
      </p>
      <input
        className="mx-4 py-2 rounded-lg border p-4 bg-transparent border-gray-300 placeholder-gray-500 "
        placeholder="Search"
      />
      <div className="flex items-center gap-4 text-black">
        <IoNotificationsOutline size={20} />
        <IoMdSettings size={20} />

        {/* <img
            className="w-5 h-5 md:w-6 md:h-6"
            src={NotificationIcon}
            alt="Notification"
          />
          <Image
            className="w-5 h-5 md:w-6 md:h-6"
            src={SettingIcon}
            alt="Settings"
          /> */}
      </div>
    </div>
  );
};

export default TopBar;
