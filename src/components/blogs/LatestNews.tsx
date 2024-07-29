import React from 'react';
import LatestNewsImage from "@/public/images/frame-36257.jpeg"

interface LatestNewsProps {
    title: string
}
const LatestNews: React.FC <LatestNewsProps> = ({title}) => {
    return (
        <div className="w-full xs:px-8 md:px-[120px] py-8">
            <p className="text-2xl font-bold text-left text-black mb-8">{title}</p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-[13.17px] bg-white"
                    style={{ boxShadow: "0px 4.937705px 8.229508px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[130.03px] relative overflow-hidden rounded-tl-[13.17px] rounded-tr-[13.17px] bg-cover bg-no-repeat bg-center"  style={{backgroundImage: `url(${LatestNewsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-center w-full gap-[8.23px] px-[13.17px] mt-[13.17px]">
                        <div className="flex flex-col justify-start items-start w-full gap-[9.88px]">
                            <div className="flex flex-col justify-start items-start w-full gap-[6.58px]">
                                <p className="w-full text-[13.17px] font-semibold text-left text-black">
                                    Manchester City FC becomes the first English Club to win 4 EPL in a row
                                </p>
                                <p className="w-full opacity-[0.88] text-[9.88px] text-left text-black">
                                    The 2023/2024 English Premier League ends with Manchester City Football Club lifting
                                    the English Premier League for the Fourth Consecutive time
                                </p>
                            </div>
                            <p className="w-full opacity-[0.96] text-[11.52px] text-left text-[#f2a725]">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-[13.17px] bg-white"
                    style={{ boxShadow: "0px 4.937705px 8.229508px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[130.03px] relative overflow-hidden rounded-tl-[13.17px] rounded-tr-[13.17px] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${LatestNewsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-center w-full gap-[8.23px] px-[13.17px] mt-[13.17px]">
                        <div className="flex flex-col justify-start items-start w-full gap-[9.88px]">
                            <div className="flex flex-col justify-start items-start w-full gap-[6.58px]">
                                <p className="w-full text-[13.17px] font-semibold text-left text-black">
                                    Manchester City FC becomes the first English Club to win 4 EPL in a row
                                </p>
                                <p className="w-full opacity-[0.88] text-[9.88px] text-left text-black">
                                    The 2023/2024 English Premier League ends with Manchester City Football Club lifting
                                    the English Premier League for the Fourth Consecutive time
                                </p>
                            </div>
                            <p className="w-full opacity-[0.96] text-[11.52px] text-left text-[#f2a725]">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-[13.17px] bg-white"
                    style={{ boxShadow: "0px 4.937705px 8.229508px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[130.03px] relative overflow-hidden rounded-tl-[13.17px] rounded-tr-[13.17px] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${LatestNewsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-center w-full gap-[8.23px] px-[13.17px] mt-[13.17px]">
                        <div className="flex flex-col justify-start items-start w-full gap-[9.88px]">
                            <div className="flex flex-col justify-start items-start w-full gap-[6.58px]">
                                <p className="w-full text-[13.17px] font-semibold text-left text-black">
                                    Manchester City FC becomes the first English Club to win 4 EPL in a row
                                </p>
                                <p className="w-full opacity-[0.88] text-[9.88px] text-left text-black">
                                    The 2023/2024 English Premier League ends with Manchester City Football Club lifting
                                    the English Premier League for the Fourth Consecutive time
                                </p>
                            </div>
                            <p className="w-full opacity-[0.96] text-[11.52px] text-left text-[#f2a725]">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-center h-[263px] p-4 rounded-[13.17px] bg-white"
                    style={{ boxShadow: "0px 4.937705px 8.229508px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="w-full h-[130.03px] relative overflow-hidden rounded-tl-[13.17px] rounded-tr-[13.17px] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${LatestNewsImage.src})`}}/>
                    <div className="flex flex-col justify-start items-center w-full gap-[8.23px] px-[13.17px] mt-[13.17px]">
                        <div className="flex flex-col justify-start items-start w-full gap-[9.88px]">
                            <div className="flex flex-col justify-start items-start w-full gap-[6.58px]">
                                <p className="w-full text-[13.17px] font-semibold text-left text-black">
                                    Manchester City FC becomes the first English Club to win 4 EPL in a row
                                </p>
                                <p className="w-full opacity-[0.88] text-[9.88px] text-left text-black">
                                    The 2023/2024 English Premier League ends with Manchester City Football Club lifting
                                    the English Premier League for the Fourth Consecutive time
                                </p>
                            </div>
                            <p className="w-full opacity-[0.96] text-[11.52px] text-left text-[#f2a725]">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
