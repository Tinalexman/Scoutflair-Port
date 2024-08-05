"use client";

import React, { useState } from "react";

import { positions } from "@/src/constants/constants";

interface iPosition {
  role: string;
  jersey: number;
  name: string;
}

const Options = () => {
  const [more, setMore] = useState<string>("");
  const [options, setOptions] = useState<iPosition[]>(
    Array(11).fill({
      role: positions[0],
      jersey: 1,
      name: "",
    })
  );
  return (
    <div className="w-[450px] flex flex-col gap-5">
      <h2 className="text-lg font-bold">More Options</h2>

      <div className="flex flex-col gap-1 w-full">
        <p className="text-[14px]">Opponents Review (Optional)</p>
        <textarea
          value={more}
          onChange={(e) => setMore(e.target.value)}
          className="px-4 py-2 w-full resize-none h-[100px] text-black border border-border-gray rounded-lg bg-transparent"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Team Line Up (Optional)</h2>
        <div className="flex flex-col gap-2">
          {options.map((p, i) => (
            <div key={i} className="flex w-full justify-between items-center">
              <select
                className="text-black border py-1 border-border-gray rounded-lg bg-transparent"
                value={p.role}
              >
                {positions.map((pos, index) => (
                  <option key={index} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              <select
                className="text-black border py-1 border-border-gray rounded-lg bg-transparent"
                value={p.jersey}
              >
                {Array(100)
                  .fill(0)
                  .map((_, jerseyIndex) => (
                    <option key={jerseyIndex} value={jerseyIndex + 1}>
                      {jerseyIndex + 1}
                    </option>
                  ))}
              </select>
              <input
                type="text"
                value={p.name}
                placeholder="Full Name"
                onChange={(e) => {}}
                className="px-2 w-[180px] text-black border border-border-gray py-1 rounded-lg bg-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
