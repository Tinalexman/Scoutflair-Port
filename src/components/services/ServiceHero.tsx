import React from "react";
import Image from "next/image"
import serviceHeroImage from "@/public/images/businesswoman-using-a-tablet-to-analysis-graph-company-finance-strategy-statistics-success-concept-and-planning-for-future-in-office-room..png"

const ServiceHero: React.FC = () => {
    return (
        <div className="flex flex-row px-[120px] pt-32">
            <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
                    <p className="self-stretch opacity-[0.96] text-[40px] font-bold text-left text-black">
                        Our Core Services
                    </p>
                    <p className="self-stretch opacity-[0.88] text-xl text-left text-black">
                        Welcome to the home of strategic scouting and footballing intelligence. Get familiar with our
                        core services
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src={serviceHeroImage}
                    className=" object-cover -rotate-45"                    
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceHero