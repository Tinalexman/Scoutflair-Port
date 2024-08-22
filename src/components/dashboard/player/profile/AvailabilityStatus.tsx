import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';

const AvailabilityStatus = () => {
    const [playerAvailability, setPlayerAvailabilty] = useState("");
    
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Availabilty Status
          </h2>
        <div className="relative">
            <label className="text-black font-normal text-base mb-[8px]">
              Player&apos;s Availabilty
            </label>
            <div className="relative">
              <select
                name="player_availabilty"
                value={playerAvailability}
                onChange={(e) => setPlayerAvailabilty(e.target.value)}
                className="rounded-[10px] text-base text-black border border-border-black h-[40px] w-full pl-4 pr-10 outline-none appearance-none"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <FiChevronDown className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          </div>
        </>
    )
}

export default AvailabilityStatus;