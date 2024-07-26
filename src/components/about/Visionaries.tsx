import React from "react"
import Image from "next/image"
import Visionary1 from "@/public/images/frame-1000002098.jpeg"
import Visionary2 from "@/public/images/frame-1000002099.jpeg"
import Visionary3 from "@/public/images/frame-1000002100.jpeg"
import Visionary4 from "@/public/images/frame-1000002101.jpeg"

const Visionaries: React.FC = () => {
    return (
        <section id="visionaries" className="bg-[#192B4D] py-14 xs:px-8 px-32">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-white">
                    OUR VISIONARIES
                </p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold xs:text-center md:text-left text-white">
                        The Brains Behind Scoutflair
                    </p>
                    <p className="opacity-[0.92] text-lg text-center text-white">
                        Meet the brilliant minds driving Scoutflair’s success. Our team of experts combines innovation
                        and expertise to revolutionize scouting and analytics
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 pt-20 gap-4">
                <div>
                    <Image className="rounded-2xl" src={Visionary1} alt="" />
                </div>
                <div>
                    <Image className="rounded-2xl" src={Visionary2} alt="" />
                </div>
                <div>
                    <Image className="rounded-2xl" src={Visionary3} alt="" />
                </div>
                <div>
                    <Image className="rounded-2xl" src={Visionary4} alt="" />
                </div>                
            </div>
        </section>
    )
}

export default Visionaries