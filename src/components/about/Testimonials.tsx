import React from "react";
import Image from "next/image"
import TestimonialCard from "../reusable/TestimonialCard";
import testimonialPic1 from "@/public/images/ellipse-67.png"
import testimonialPic2 from "@/public/images/testimonial-pic-1.png"
import testimonialPic3 from "@/public/images/testimonial-pic-2.png"
import handImage from "@/public/images/hands-of-teenagers-showing-okay-sign.png"

const Testimonials: React.FC = () => {
    return (
        <div className="flex flex-col relative py-[56px] justify-center xs:px-8 px-32">
            <Image
                src={handImage}
                className="md:w-[518px] md:h-[345px] absolute right-0 top-0 opacity-40 object-cover"
                alt=""
            />            
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-[#946108]">
                    TESTIMONIALS
                </p>
                <div className="flex flex-col xs:justify-center md:justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold xs:text-center md:text-left text-black">
                        Real feedback, Real Results!
                    </p>
                    <p className="opacity-[0.92] text-lg text-center text-black">
                        Discover the impact of our services through authentic feedback from satisfied clients. Real
                        experienes, real improvemnts, real results.
                    </p>
                </div>
            </div>
            <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-10 pt-28">
                <TestimonialCard image={testimonialPic1} name="Chinedu Okonkwo" location="Abuja, Nigeria" testimonial="I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!" />
                <TestimonialCard image={testimonialPic2} name="Michael Adekunle" location="Lagos, Nigeria" testimonial="I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!" />
                <TestimonialCard image={testimonialPic3} name="Musa Abubakar" location="Kaduna, Nigeria" testimonial="I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!" />              
            </div>
            <Image
                src={handImage}               
                className="md:w-[518px] md:h-[345px] absolute bottom-0 left-0 rotate-180 opacity-40 object-cover"
                alt=""
            />
        </div>
    )
}

export default Testimonials