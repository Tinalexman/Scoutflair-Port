import React from "react";

const ScoutCard: React.FC = () => {
    return (
        <div
            className="flex flex-col justify-start items-center relative gap-4 p-2 rounded-xl bg-white border-[0.48px] border-[#d1d1d1]/[0.56]"
            style={{
                boxShadow:
                    "0px 4px 8px 0 rgba(0,0,0,0.08), 0px 4px 8px 0 rgba(0,0,0,0.08), 0px 4px 8px 0 rgba(0,0,0,0.08)",
            }}
        >
            <img className="flex-grow-0 flex-shrink-0" src="ellipse-2374.png" />
            <div className="flex flex-col justify-start items-center gap-3">
                <div className="flex flex-col justify-start items-center relative">
                    <p className="text-lg font-medium text-left text-black">
                        Andrew Tate
                    </p>
                    <div className="flex flex-col justify-start items-center relative">
                        <p className="opacity-[0.96] text-base text-left text-black">
                            22 years
                        </p>
                        <p className="opacity-[0.92] text-xs text-left text-black">
                            Defender
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                    <div className="flex justify-start items-center relative gap-[25px]">
                        <p className="text-xs text-left text-black">Mentality</p>
                        <div className="w-[88px] h-1.5">
                            <div className="w-[88px] h-1.5 absolute left-[75.5px] top-[7px] rounded-md bg-[#d9d9d9]" />
                            <div className="w-[52px] h-1.5 absolute left-[75.5px] top-[7px] rounded-tl-md rounded-bl-md bg-[#03e80c]" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center relative gap-[34px]">
                        <p className="text-xs text-left text-black">Balance</p>
                        <div className="w-[88px] h-1.5">
                            <div className="w-[88px] h-1.5 absolute left-[75.5px] top-[7px] rounded-md bg-[#d9d9d9]" />
                            <div className="w-[75px] h-1.5 absolute left-[75.5px] top-[7px] rounded-tl-md rounded-bl-md bg-[#03e80c]" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center relative gap-[15px]">
                        <p className="text-xs text-left text-black">Composure</p>
                        <div className="w-[88px] h-1.5">
                            <div className="w-[88px] h-1.5 absolute left-[75.5px] top-[7px] rounded-md bg-[#d9d9d9]" />
                            <div className="w-[39px] h-1.5 absolute left-[75.5px] top-[7px] rounded-tl-md rounded-bl-md bg-[#e8d103]" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center relative gap-[18px]">
                        <p className="text-xs text-left text-black">Aggression</p>
                        <div className="w-[88px] h-1.5">
                            <div className="w-[88px] h-1.5 absolute left-[75.5px] top-[7px] rounded-md bg-[#d9d9d9]" />
                            <div className="w-[66px] h-1.5 absolute left-[75.5px] top-[7px] rounded-tl-md rounded-bl-md bg-[#03e80c]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoutCard