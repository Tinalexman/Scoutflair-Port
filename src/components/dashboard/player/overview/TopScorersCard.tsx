import React from "react";

const TopScorerCard: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto">            
            <div className="w-full flex flex-col justify-start items-start rounded-bl-2xl rounded-br-2xl bg-white border-2 border-[#d1d1d1] rounded-2xl shadow-lg">
                <div className="flex justify-between items-center p-5 gap-8">
                    <div>
                        <p className="text-xl font-bold text-black">TOP SCORER</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <p className="text-base text-black opacity-92">View All</p>
                        <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 8.75L5 5L1.25 1.25" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="relative w-full h-36 bg-cover bg-no-repeat bg-center overflow-hidden shadow-md"
                    style={{ backgroundImage: "url('./frame-1000001965.png')" }}
                >
                    <div className="absolute inset-0 bg-[#041931]/[0.88] flex items-center p-4">
                        <img src="soccer-game-concept.png" className="w-1/2 h-auto mt-4 rounded-2xl" alt="soccer game concept" />
                        <div className="">
                            <p className="text-lg font-medium text-white">Alexander Balde</p>
                            <p className="text-sm font-medium text-white">34 Goals</p>
                        </div>
                        <img src="dinamo-zagreb-1.png" className="w-4 h-4 absolute right-4 top-4" alt="team logo" />
                    </div>
                </div>
                <div className="flex flex-col p-4 gap-7">
                    {Array(3).fill(0).map((_, index) => (
                        <div key={index} className="flex justify-between items-center w-full gap-4">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="ellipse-2373.png" alt="profile" />
                                <div className="flex flex-col">
                                    <p className="text-lg font-medium text-black">Samuel Burke</p>
                                    <div className="flex items-center gap-2">
                                        <img src="dinamarca-1.png" className="w-5 h-5 object-cover" alt="flag" />
                                        <p className="text-sm text-black opacity-88">Drift SC</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base font-medium text-black opacity-92">24 Goals</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopScorerCard;
