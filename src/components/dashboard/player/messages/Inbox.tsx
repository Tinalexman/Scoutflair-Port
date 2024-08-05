import React from "react";

const Inbox = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-custom bg-background-gray">
      <div className="h-20 w-full bg-white flex items-center justify-between">
        <div className="w-fit flex items-center"></div>
      </div>
    </div>
  );
};

export default Inbox;
