import React from 'react';
import PopularBlogsImage from "@/public/images/frame-36303.png"

interface PopularBlogsProps {
    title: string;
}
const PopularBlogs: React.FC <PopularBlogsProps> = ({title}) => {
    return (
        <div className="w-full xs:px-8 md:px-[120px] py-8">
            <p className="text-2xl font-bold text-left text-black mb-8">
                {title}
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-2xl bg-white"
                    style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[136px] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${PopularBlogsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-start w-full gap-3 mt-4">
                        <p className="w-full text-base font-semibold text-left text-black">
                            Top 10 strategies for effective football scouting
                        </p>
                        <div className="flex justify-between w-full">
                            <p className="text-xs text-left text-black">
                                By, <span className="font-medium">Samuel</span>
                            </p>
                            <p className="text-xs text-left text-black opacity-72">2h ago</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-2xl bg-white"
                    style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[136px] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${PopularBlogsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-start w-full gap-3 mt-4">
                        <p className="w-full text-base font-semibold text-left text-black">
                            Top 10 strategies for effective football scouting
                        </p>
                        <div className="flex justify-between w-full">
                            <p className="text-xs text-left text-black">
                                By, <span className="font-medium">Samuel</span>
                            </p>
                            <p className="text-xs text-left text-black opacity-72">2h ago</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-2xl bg-white"
                    style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[136px] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${PopularBlogsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-start w-full gap-3 mt-4">
                        <p className="w-full text-base font-semibold text-left text-black">
                            Top 10 strategies for effective football scouting
                        </p>
                        <div className="flex justify-between w-full">
                            <p className="text-xs text-left text-black">
                                By, <span className="font-medium">Samuel</span>
                            </p>
                            <p className="text-xs text-left text-black opacity-72">2h ago</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-2xl bg-white"
                    style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[136px] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${PopularBlogsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-start w-full gap-3 mt-4">
                        <p className="w-full text-base font-semibold text-left text-black">
                            Top 10 strategies for effective football scouting
                        </p>
                        <div className="flex justify-between w-full">
                            <p className="text-xs text-left text-black">
                                By, <span className="font-medium">Samuel</span>
                            </p>
                            <p className="text-xs text-left text-black opacity-72">2h ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBlogs;
