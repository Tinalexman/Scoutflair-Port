import React from "react";
import Image from "next/image"
import contactImage from "@/public/images/Img-frame-contact.png"

const ContactSection: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center relative w-full px-4 py-8 md:py-16"
            style={{ filter: "drop-shadow(0px 12px 17px rgba(0,0,0,0.14))" }}
        >
            <div className="flex flex-col md:flex-row bg-white rounded-2xl w-full max-w-6xl overflow-hidden">
                <div className="w-full md:w-[50%] h-auto bg-white p-8 rounded-tl-2xl rounded-bl-2xl">
                    <Image src={contactImage} alt=""  className="w-[585px] h-[926px]"/>
                </div>
                <form className="flex flex-col justify-start items-center w-full md:w-[50%] p-6 md:p-12 bg-white rounded-tr-2xl rounded-br-2xl">
                    <p className="w-full text-2xl md:text-[32px] font-bold text-center text-black mb-8">
                        Write us a message
                    </p>
                    <div className="flex flex-col justify-start items-center w-full gap-6 md:gap-8">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-xl text-left text-black">Name</p>
                                <input type="text" className="w-full h-12 p-2.5 rounded-lg border border-black" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-xl text-left text-black">Email</p>
                                <input type="email" className="w-full h-12 p-2.5 rounded-lg border border-black" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-xl text-left text-black">Phone Number</p>
                                <input type="tel" className="w-full h-12 p-2.5 rounded-lg border border-black" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <p className="text-xl text-left text-black">Message</p>
                            <textarea className="w-full h-44 p-2.5 rounded-lg border border-black"></textarea>
                        </div>
                        <button
                            className="w-full h-12 mt-4 p-2.5 rounded-lg bg-[#f2a725] text-black font-bold"
                            style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }} type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
