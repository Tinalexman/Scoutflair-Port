import React from "react";
import Image from "next/image"
import GoldButton from "../reusable/GoldButton";
import blogSampleImage from "@/public/images//frame-1000002081.jpeg"

const BlogSection: React.FC = () => {
    return (
        <section className="Blog-section py-14 xs:px-8 px-32">
            <div className="flex flex-col justify-start items-center relative gap-6 pb-20">
                <p className="text-xl font-bold text-left text-[#946108]">BLOG</p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold xs:text-center md:text-left text-black">
                        Stay Informed, Stay Ahead!
                    </p>
                    <p className="lg:w-[641px] opacity-[0.92] text-lg text-center text-black">
                        Stay informed with our latest news and blog updates and stay ahead of the game with
                        cutting-edge insights, tips, and trends that keep you ahead of the curve.
                    </p>
                </div>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-20">
                <div
                    className="flex flex-col justify-start items-start relative gap-[19.255014419555664px] px-[19.25px] pt-5 pb-7 rounded-2xl bg-[#4bbac1] border-[4.81px] border-[#d1d1d1]"
                    style={{ boxShadow: "0px 6.6px 8.3px 0 rgba(209,209,209,0.14)" }}
                >
                    <div className="w-full h-[320px] relative overflow-hidden rounded-2xl">
                        <Image
                            src={blogSampleImage}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start w-fit relative gap-[9.6px]">
                        <p className="w-fit text-base font-bold text-left text-white">
                            Manchester City Fc becomes the first English Club to win 4 Epl titles in a row
                        </p>
                        <p className="self-stretch w-fit opacity-[0.84] text-[14.441261291503906px] text-left text-white">
                            The 2023/2024 English Premier League ends with Manchester City Football Club lifting the
                            English Premier League for the Fourth Consecutive time
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-start relative gap-[19.255014419555664px] px-[19.25px] pt-5 pb-7 rounded-2xl bg-white border-[4.81px] border-[#d1d1d1]"
                    style={{ boxShadow: "0px 6.6px 8.3px 0 rgba(209,209,209,0.14)" }}
                >
                    <div className="w-full h-[320px] relative overflow-hidden rounded-2xl">
                        <Image
                            src={blogSampleImage}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start w-fit relative gap-[9.6px]">
                        <p className="w-fit text-base font-bold text-left text-black">
                            Manchester City Fc becomes the first English Club to win 4 Epl titles in a row
                        </p>
                        <p className="self-stretch w-fit opacity-[0.84] text-[14.441261291503906px] text-left text-black">
                            The 2023/2024 English Premier League ends with Manchester City Football Club lifting the
                            English Premier League for the Fourth Consecutive time
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-start relative gap-[19.255014419555664px] px-[19.25px] pt-5 pb-7 rounded-2xl bg-white border-[4.81px] border-[#d1d1d1]"
                    style={{ boxShadow: "0px 6.6px 8.3px 0 rgba(209,209,209,0.14)" }}
                >
                    <div className="w-full h-[320px] relative overflow-hidden rounded-2xl">
                        <Image
                            src={blogSampleImage}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start w-fit relative gap-[9.6px]">
                        <p className="w-fit text-base font-bold text-left text-black">
                            Manchester City Fc becomes the first English Club to win 4 Epl titles in a row
                        </p>
                        <p className="self-stretch w-fit opacity-[0.84] text-[14.441261291503906px] text-left text-black">
                            The 2023/2024 English Premier League ends with Manchester City Football Club lifting the
                            English Premier League for the Fourth Consecutive time
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <GoldButton text="View All" />
            </div>
        </section>
    )
};

export default BlogSection