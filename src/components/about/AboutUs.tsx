import React from "react";
import Image from "next/image"
import InnovationImage from "@/public/images/Frame 1000002071.png"
import MissionImage from "@/public/images/Frame 1000002072.png"
import GoldButton from "../reusable/GoldButton";
import aboutUsBg from "@/public/images/aboutusbg.png"

const AboutUs: React.FC = () => {
    return (
        <div className="bg-[#192B4D] relative md:px-[120px]">
            <div
                className="absolute inset-0 opacity-10 bg-cover pointer-events-none"
                style={{ backgroundImage: `url(${aboutUsBg})` }}
            />
            <div className="relative z-10 flex flex-col text-center justify-center gap-32 py-14 xs:px-8 md:px-[120px]">
                <div className="flex flex-col justify-start items-center relative gap-6">
                    <p className="text-xl font-bold text-left text-white">ABOUT US</p>
                    <div className="flex flex-col justify-start items-center relative gap-1">
                        <p className="text-[32px] font-bold xs:text-center md:text-left text-white">
                            Driven by Passion, Guided by Expertise
                        </p>
                        <p className="lg:w-[762px] opacity-[0.92] text-lg text-center text-white">
                            At the heart of our company is a passion for sports and a commitment to excellence. Our expert
                            is dedicated to delivering innovative solutions that drives success.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="w-full flex lg:flex-row xs:flex-col gap-11">
                        <div className="lg:w-[620px] lg:h-[420px]">
                            <Image src={MissionImage} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-12 ml-auto">
                            <div className="flex flex-col justify-start items-start gap-12">
                                <div className="flex flex-col justify-start items-start lg:w-[618px] relative gap-6">
                                    <div className="w-full">
                                        <p className="opacity-[0.92] text-[26.622514724731445px] xs:text-center md:text-left uppercase text-white">
                                            MEET THE TEAM
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
                                        <p className="self-stretch lg:w-[618px] text-2xl font-bold xs:text-center md:text-left text-white">
                                            The Faces of Innovation
                                        </p>
                                        <p className="self-stretch lg:w-[618px] opacity-80 text-[23.960262298583984px] xs:text-center md:text-left text-white">
                                            Discover the dedicated professionals fueling our success. Meet the innovative minds shaping
                                            our vision and revolutionizing scouting analytics for your success
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex xs:justify-center md:justify-start">
                                    <GoldButton text="Learn More" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex lg:flex-row xs:flex-col-reverse xs:gap-y-10">
                        <div className="flex flex-col justify-start items-start gap-12">
                            <div className="flex flex-col justify-start items-start lg:w-[620px] relative gap-6">
                                <div className="w-full">
                                    <p className="opacity-[0.92] text-[24.78257179260254px] xs:text-center md:text-left uppercase text-white">
                                        OUR MISSION
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-start self-stretch relative gap-2">
                                    <p className="self-stretch lg:w-[620px] text-2xl font-bold xs:text-center md:text-left text-white">
                                        Our Purpose, Your Success
                                    </p>
                                    <p className="self-stretch lg:w-[620px] opacity-80 text-[22.30431365966797px] xs:text-center md:text-left text-white">
                                        At Scoutflair, our purpose is to elevate your scouting experience through cutting-edge
                                        analytics and personalized data gathering. We’re committed to providing tailored solutions
                                        that drive your success on and off the field.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full xs:justify-center md:justify-start">
                                <GoldButton text="Read More" />
                            </div>
                        </div>
                        <div className="lg:w-[620px] lg:h-[420px]">
                            <Image src={InnovationImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AboutUs