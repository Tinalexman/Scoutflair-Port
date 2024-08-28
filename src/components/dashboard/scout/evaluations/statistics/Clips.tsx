"use client";

import React, { useState } from "react";

interface iClip {
  name: string;
  image: string;
  date: Date;
}

const Clips = () => {
  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-dark font-bold text-16-19">Player&apos;s Clips</h2>
        <p className="text-14-16 font-medium text-dark">Edit</p>
      </div>

      <button className="bg-primary-2 rounded-lg text-white text-14-24 w-[180px] py-2">
        View All Players
      </button>
    </div>
  );
};

export default Clips;
