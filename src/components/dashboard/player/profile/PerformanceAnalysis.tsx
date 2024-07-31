import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';

const PerformanceAnalysis = () => {
    const [performanceAnalysis, setPerformanceAnalysis] = useState("");
    
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Performance Analysis Data
          </h2>
        <div className="relative">
            <label className="text-black font-normal text-base mb-[8px]">
            Jersey Number
            </label>
            <div className="relative">
              <select
                name="jersey_number"
                value={performanceAnalysis}
                onChange={(e) => setPerformanceAnalysis(e.target.value)}
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

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Goals:
            </p>
            <input
              type="text"
              name="goals"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Assist:
            </p>
            <input
              type="text"
              name="assist"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Pass Accuracy
            </p>
            <input
              type="text"
              name="pass_accuracy"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Total Shots:
            </p>
            <input
              type="text"
              name="total_shot"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Yellow Cards:
            </p>
            <input
              type="text"
              name="yellow_card"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Red Cards:
            </p>
            <input
              type="text"
              name="red_card"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Interceptions:
            </p>
            <input
              type="text"
              name="interception"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
            Tackles Won:
            </p>
            <input
              type="text"
              name="tackle_won"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          </div>
        </>
    )
}

export default PerformanceAnalysis;