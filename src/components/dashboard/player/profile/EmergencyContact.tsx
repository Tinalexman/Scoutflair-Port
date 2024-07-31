import React from "react";

const EmergencyContact = () => {
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Emergency Contact
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
            Relationship
            </p>
            <input
              type="text"
              name="relationship"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Phone Number
            </p>
            <input
              type="text"
              name="phone_number"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          </div>
        </>
    )
}

export default EmergencyContact;