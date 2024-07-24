import React from "react";

const StandingsTable: React.FC = () => {
  return (
   <div className="w-full h-[500px]">
     <div
      className="w-full h-[500px] relative overflow-hidden rounded-2xl bg-white border-2 border-[#d1d1d1]"
      style={{ boxShadow: "0px 8px 10px 0 rgba(209,209,209,0.12)" }}
    >
      <div className="flex flex-col justify-center items-start gap-6 px-11 py-10 bg-white">
        <div className="h-16">
          <p className="absolute left-11 top-10 text-xl font-bold text-left text-black">
            LEAGUE STANDING
          </p>
          <div className="flex justify-start items-center absolute top-10 right-5 gap-2">
            <p className="opacity-[0.92] text-lg text-left text-black">
              2023/2024
            </p>
            <svg
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1.125L4.75 4.875L8.5 1.125"
                stroke="black"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center opacity-[0.88] gap-4">
          <div className="flex flex-col justify-start items-center relative gap-1.5">
            <div className="flex justify-start items-start relative gap-56">
              <div>
                <p className="text-sm pl-10 font-semibold text-left text-black">
                  Club
                </p>
              </div>
              <div className="flex gap-12 justify-center items-center relative">
                <p className="text-sm font-semibold text-left text-black">MP</p>
                <p className="text-sm font-semibold text-left text-black">W</p>
                <p className="text-sm font-semibold text-left text-black">D</p>
                <p className="text-sm font-semibold text-left text-black">L</p>
                <p className="text-sm font-semibold text-left text-black">GF</p>
                <p className="text-sm font-semibold text-left text-black">GA</p>
                <p className="text-sm font-semibold text-left text-black">
                  Pts
                </p>
              </div>
            </div>
            <svg
              width={616}
              height={1}
              viewBox="0 0 616 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                x1="-2.79753e-8"
                y1="0.68"
                x2={616}
                y2="0.679946"
                stroke="black"
                stroke-opacity="0.64"
                stroke-width="0.64"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-start items-start gap-[18px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="flex justify-start items-center relative gap-[168px]">
                <div className="flex justify-start items-center relative gap-3">
                  <p className="text-sm font-semibold text-left text-black">
                    {index + 1}
                  </p>
                  <div className="flex justify-start items-center relative gap-2">
                    <div className="flex flex-col justify-start items-center relative gap-[2.3672420978546143px]">
                      <img
                        src="dinamo-zagreb-1.png"
                        className="w-[21px] h-[21px] object-cover"
                      />
                    </div>
                    <p className="opacity-[0.84] text-lg font-medium text-left text-black">
                      Deltas FC
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-[50px] h-[21px]">
                  <p className="opacity-80 text-sm text-left text-black">65</p>
                  <p className="opacity-80 text-sm text-left text-black">24</p>
                  <p className="opacity-80 text-sm text-left text-black">67</p>
                  <p className="opacity-80 text-sm text-left text-black">7</p>
                  <p className="opacity-80 text-sm text-left text-black">5</p>
                  <p className="opacity-80 text-sm text-left text-black">20</p>
                  <p className="opacity-80 text-sm text-left text-black">24</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default StandingsTable;
