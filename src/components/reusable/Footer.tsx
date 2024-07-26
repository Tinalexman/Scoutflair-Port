import React from "react";
import Image from "next/image"
import Scoutflairlogo from "@/public/icons/Scoutflairlogo.svg"
import ballImage from "@/public/images/still-life-of-colombia-national-soccer-team.png"

const Footer: React.FC = () => {
    return (
        <div
            className="w-full relative overflow-hidden"
            style={{ background: "linear-gradient(179.79deg, rgba(177,207,241,0.48) 0.29%, #fff 133.37%)" }}
        >
            <Image
                src={ballImage}
                className="w-full h-auto absolute right-0 top-0 opacity-[0.08] object-cover"
                style={{ maxWidth: '100%', maxHeight: '' }}
                alt=""
            />
            <div className="flex flex-col justify-start items-center relative pt-8 gap-8">
                <div className="flex flex-row justify-around w-full gap-8 px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col items-start gap-10 w-full sm:w-auto">
                        <div className="flex items-center gap-4">
                            <img className="w-14 h-14" src={Scoutflairlogo} alt="Scoutflair Logo" />
                            <p className="text-2xl font-bold text-black">
                                Scout<span className="font-normal">Flair</span>
                            </p>
                        </div>
                        <p className="max-w-sm xs:hidden md:flex text-base text-black">
                            At ScoutFlair, our mission is to provide football enthusiasts, coaches, and analysts with the tools they need to unlock the game's hidden insights.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full sm:w-auto">
                        <p className="text-2xl font-semibold text-black">Quick Links</p>
                        <div className="flex flex-col gap-4">
                            <a href="#about" className="text-xl text-black">About</a>
                            <a href="#services" className="text-xl text-black">Services</a>
                            <a href="#resources" className="text-xl text-black">Resources</a>
                            <a href="#contact" className="text-xl text-black">Contact Us</a>
                        </div>
                    </div>
                    <div className="flex xs:hidden md:flex flex-col gap-4 w-full sm:w-auto">
                        <p className="text-2xl font-semibold text-black">Useful Links</p>
                        <div className="flex flex-col gap-4">
                            <a href="#faq" className="text-xl text-black">F.A.Q</a>
                            <a href="#privacy" className="text-xl text-black">Privacy</a>
                            <a href="#cookies" className="text-xl text-black">Cookies</a>
                            <a href="#terms" className="text-xl text-black">Terms and Conditions</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-9 w-full sm:w-auto">
                        <p className="text-2xl font-semibold text-black">Stay Connected</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-2.5 p-1 bg-white border border-black rounded-xl">
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    className="px-4 py-2 text-sm text-black bg-transparent outline-none w-full"
                                />
                                <button
                                    className="w-full py-2.5 text-sm font-bold text-black bg-[#f2a725] rounded-lg"
                                    style={{ boxShadow: "0px 12px 17px 2px rgba(0,0,0,0.14)" }}
                                >
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 opacity-80">
                                <p className="text-xl text-black">No 14, Wuse 24, Abuja, Nigeria</p>
                                <p className="text-xl text-black">support@scoutflair.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#192b4d] py-4">
                    <div className="flex justify-center items-center">
                        <p className="text-lg text-white">ScoutFlair 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
