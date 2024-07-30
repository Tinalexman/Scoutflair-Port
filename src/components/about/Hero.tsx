import React from "react";
import Image from "next/image"
import HeroImage from "@/public/images/frame-36284.png"

const Hero: React.FC = () => {
    return (
        <div className="xs:px-8 px-32">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div>
                        <p className="opacity-[0.96] text-[40px] font-bold xs:text-center md:text-left text-black py-24">
                            We are passionate about transforming the football industry through, innovative technology,
                            scouting, analytics and advance insights.
                        </p>
                    </div>                   
                </div>
                <div className="pb-24">
                    <Image className="rounded-2xl" src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero