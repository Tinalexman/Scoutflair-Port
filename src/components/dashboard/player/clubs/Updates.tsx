"use client";

import React, { useState } from "react";

const Updates = () => {
  const [updates, setUpdates] = useState<string[]>(Array(4).fill("Next home match pre camping is going to resume tomorrow, all players will be available except injured ones are out"));

  return (
    <div className="flex flex-col rounded-br-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg font-bold py-3 px-5">Updates</h2>
      </div>

      <div className="flex flex-col gap-2 w-full px-5 py-2">
        {updates.map((u, i) => (
          <div
            key={i}
            className="flex items-center w-full border  border-border-gray py-1 px-2 rounded-[8px]"
          >
            <p className="text-[14px] text-black">{u}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
