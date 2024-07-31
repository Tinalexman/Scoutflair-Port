import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import Upload from "@/public/images/basil_file-upload-solid.png"
import Image from 'next/image';
import Link from 'next/link';

const PlayerImages = () => {
    const [playerImages, setPlayerImages] = useState("");
    
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Player Images/Videos
          </h2>

          <h5 className="font-lato font-semibold text-[14px] leading-[24px] text-black">Upload Image</h5>
          <p className="font-lato font-normal text-[12px] leading-[14px] text-black mb-[16px]">Track your activities in real time</p>

          <div className='mb-14 border-2 border-border-gray border-dotted w-full h-[115px] rounded-md'>
            <div className="flex flex-col gap-4 pt-4 items-center justify-center">
                <Image src={Upload} alt="" />
                <div>
                <p className='font-lato font-normal text-[12px] leading-[14px] text-black'>Drag & drop your files here or <Link href={''} className='font-extrabold'>choose file</Link></p>
                <p className='font-lato font-normal text-[8px] leading-[9px] text-center text-black'>100 MB maximum file size</p>
                </div>
            </div>
          </div>

        <div className="relative">
            <label className="text-black font-normal text-base mb-[8px]">
              Player&apos;s Availabilty
            </label>
            <div className="relative">
              <select
                name="player_availabilty"
                value={playerImages}
                onChange={(e) => setPlayerImages(e.target.value)}
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

export default PlayerImages;