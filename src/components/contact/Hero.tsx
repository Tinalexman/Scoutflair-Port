import React from "react";
import Image from "next/image";
import emailpic from "@/public/images/3d render email message newsletter notification.png";
import backgroundImage from "@/public/images/image.png";

const ContactHero: React.FC = () => {
    return (
        <div className="w-full flex flex-row py-20 xs:px-8 md:px-[120px]" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <div className="py-8">
                <p className="text-[24px] md:text-[36px] lg:text-[40px] font-blac xs:text-center md:text-left text-white">
                    {"Let's Chat, Get In Touch With Us Today!"}
                </p>
                <p className="opacity-[0.92] text-base md:text-lg lg:text-xl font-medium xs:text-center md:text-left text-white">
                    Have questions or feedback? Our team is ready to assist you with any questions or support
                    you need. Send us a message, we will respond within 24 hours.
                </p>
            </div>
            <div className="flex justify-center items-center w-full md:w-auto h-full">
                <Image src={emailpic} alt="Email Notification" className="w-auto h-full max-h-[300px] md:max-h-none" />
            </div>
        </div>
    );
};

export default ContactHero;

// export const TestHero = () => {
//     return (

//     )
// }
