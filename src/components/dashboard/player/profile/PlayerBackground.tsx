import React from "react";

const PlayerBackground = () => {

  return (
    <>
      <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Player Background
          </h2>
          <div>
            <p className="text-black font-normal text-base mb-[8px]">
            Football Background
            </p>
            <input
              type="text"
              name="football_background"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Personal Statement or Biography
            </p>
            <input
              type="text"
              name="personal_statement"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>
      </div>
    </>
  );
};

export default PlayerBackground;