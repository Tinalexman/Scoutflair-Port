import React from "react";

const ParentInfo = () => {

  return (
    <>
      <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Parent/Guardian Information (Minors)
          </h2>
          <div>
            <p className="text-black font-normal text-base mb-[8px]">
              Full Name:
            </p>
            <input
              type="text"
              name="full_name"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Address:
            </p>
            <input
              type="text"
              name="address"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>
      </div>
    </>
  );
};

export default ParentInfo;