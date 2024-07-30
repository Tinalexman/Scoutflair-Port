import React from "react";
import Image from "next/image"
import Partners from "@/public/images/Frame 1000002056.png"
import Binoculars from "@/public/images/Frame 1000002059.png"
import InfoMapIcon from "@/public/images/Frame 1000002062.png"
import DataAnalyticsIcon from "@/public/images/Frame 1000002060.png"
import TalentDevIcon from "@/public/images/Frame 1000002061.png"
import sectionDesign from "@/public/images/pexels-photo-by-maciasu-x.png"

const PartnerSection: React.FC = () => {
    return (
        <section className="overflow-hidden bg-[#192B4D] xs:px-8 px-32 pt-10">
            <div className="flex flex-col gap-4">
                <p className="text-white">Our Partners</p>
                <Image src={Partners} alt="" />
            </div>
            <div className="flex flex-col gap-10 pt-20">
                <div className="flex justify-center">
                    <h1 className="text-white text-3xl ">Our Services</h1>
                </div>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="flex lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-[#4bbac1]"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <Image className="min-w-24 min-h-24" src={Binoculars} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-[6.045801162719727px]">
                            <p className="self-stretch text-[18.13740348815918px] font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-[13.603052139282227px] text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <Image className="min-w-24 min-h-24" src={InfoMapIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-[6.045801162719727px]">
                            <p className="self-stretch text-[18.13740348815918px] font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-[13.603052139282227px] text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <Image className="min-w-24 min-h-24" src={DataAnalyticsIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-[6.045801162719727px]">
                            <p className="self-stretch text-[18.13740348815918px] font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-[13.603052139282227px] text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <Image className="min-w-24 min-h-24" src={TalentDevIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-[6.045801162719727px]">
                            <p className="self-stretch text-[18.13740348815918px] font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-[13.603052139282227px] text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <Image
                    src={sectionDesign}
                    className="w-[351px] rotate-180 transform scale-x-[-1] opacity-[0.64] object-cover"
                    alt=""
                />
                <Image
                    src={sectionDesign}
                    className="w-[351px] rotate-180 opacity-[0.64] object-cover"
                    alt=""
                />
                <Image
                    src={sectionDesign}
                    className="w-[351px] rotate-180 transform scale-x-[-1] opacity-[0.64] object-cover"
                    alt=""
                />
                <Image
                    src={sectionDesign}
                    className="w-[351px] rotate-180 opacity-[0.64] object-cover"
                    alt=""
                />
            </div>
        </section>
    )
}

export default PartnerSection