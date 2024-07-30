import React from "react";
import { FaqCardBlue, FaqCardWhite } from "../reusable/FaqCards";

const FaqSection: React.FC = () => {
    return (
        <section id="Faq-section" className="bg-[#192B4D] py-14 xs:px-8 px-32 gap-20">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-white">F.A.Q</p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold xs:text-center md:text-left text-white">
                        Got Questions? We’ve Got Answers!
                    </p>
                    <p className="opacity-[0.92] text-lg text-center text-white">
                        Explore our FAQ section for clear and concise answers to all your inquires. From common
                        queries to detailed explanations, we’ve got you covered.
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-3 gap-6 pt-20">                
                <FaqCardBlue 
                    question="How can I access Scoutflair?"
                    answer="Here for the first time? Learn how to access Scouflair and start leveraging our advance football analytics and insights today..." />
                <FaqCardWhite
                    question="Is Scoutflair free to use?"
                    answer="Yes, our platform offers both free and premium features, allowing users to access basic functionalities at no cost while offering advanced..." />
                <FaqCardWhite
                    question="What type of football data is available?"
                    answer="Our platform offers a comprehensive range of football data, including player statistics, match insights, and team performance metrics..." />
                <FaqCardWhite
                    question="Can I customize my dashboard?"
                    answer="Absolutely! Our platform allows you to personalize your dashboard, tailoring it to your specific preferences and needs for optimal usability..." />
                <FaqCardWhite
                    question="Does Scoutflair support fantasy football?"
                    answer="Our platform caters to fantasy football enthusuiasts with specialized features and tools tailored to enhance their experience..." />
                <FaqCardWhite
                    question="How frequently are matches updated?"
                    answer="Our platform delivers real-time match updates promptly, ensuring you stay informed with the latest development as they happen..." />
                <FaqCardWhite
                    question="Are there any specialized tools?"
                    answer="We offer advanced tools and anayltics designed specifically to enhance coaching strategies and performance analysis..." />
                <FaqCardWhite
                    question="How effective is the scouting support?"
                    answer="Our scouting support offers detailed insights and analytics, ensuring you identify and develop top talent effectively...." />
            </div>
        </section>
    )
}

export default FaqSection