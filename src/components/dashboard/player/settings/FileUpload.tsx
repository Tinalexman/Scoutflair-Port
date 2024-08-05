import React from "react";
import Image from 'next/image';
import Upload from "@/public/images/basil_file-upload-solid.png"
import Link from "next/link";

const FileUpload = () => {
    
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">

          <h5 className="font-lato font-semibold text-[14px] leading-[24px] text-black">Upload File</h5>
          <p className="font-lato font-normal text-[12px] leading-[14px] text-black mb-[16px]">Track your activities in real time</p>

          <div className='border-2 border-border-gray border-dotted w-full h-[115px] rounded-md'>
            <div className="flex flex-col gap-4 pt-4 items-center justify-center">
                <Image src={Upload} alt="" />
                <div>
                <p className='font-lato font-normal text-[12px] leading-[14px] text-black'>Drag & drop your files here or <Link href={''} className='font-extrabold'>choose file</Link></p>
                <p className='font-lato font-normal text-[8px] leading-[9px] text-center text-black'>100 MB maximum file size</p>
                </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default FileUpload;