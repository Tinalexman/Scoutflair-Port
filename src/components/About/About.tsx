"use client"
import React from "react";
import Navbar from "../reusable/Navbar";
import Image from "next/image";
import Bg from "@/public/images/Frame_5.png";
import Scout from "@/public/images/scout-logo.png";
import Faygroup from "@/public/images/faygroup-logo.png";
import Sleek from "@/public/images/sleek-logo.png";
import Valuegate from "@/public/images/valuegate-logo.png";
import Academy from "@/public/images/academy-logo.png";
import Frame8 from "@/public/images/Frame_8.png";
import Frame9 from "@/public/images/Frame_9.png";
import Frame10 from "@/public/images/Frame_10.png";
import Frame11 from "@/public/images/Frame_11.png";
import Frame12 from "@/public/images/Frame_12.png";
import Frame13 from "@/public/images/Frame_13.png";
import Frame14 from "@/public/images/Frame_14.png";
import Frame15 from "@/public/images/Frame_15.png";
import Frame16 from "@/public/images/Frame_16.png";
import Frame17 from "@/public/images/Frame_17.png";
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../reusable/Footer";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-ghostwhite pt-40 pb-10 px-[106px]">
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="font-merriweather font-bold text-[42px] leading-[58px] text-black-50 w-[600px]">
              Changing How Football Talent is Found & Fostered
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-base text-black-50 font-lato font-normal flex-1 text-right">
              We are transforming the way football talent is discovered and
              nurtured. Through cutting-edge data and insightful scouting, we
              connect emerging players with top scouts and clubs, ensuring no
              talent goes unnoticed.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Image src={Bg} alt={""} />
        </div>
      </div>

      <div className="bg-primary w-full h-[80px] overflow-hidden relative flex justify-center">
      <motion.div
        className="flex items-center w-max"
        animate={{ x: ["0%", "-50%"] }} // Moves left infinitely
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        <Image src={Scout} alt={""} className="w-[100px] mx-4" />
        <Image src={Faygroup} alt={""} className="w-[100px] mx-4" />
        <Image src={Sleek} alt={""} className="w-[100px] mx-4" />
        <Image src={Valuegate} alt={""} className="w-[100px] mx-4" />
        <Image src={Academy} alt={""} className="w-[100px] mx-4" />
        {/* Duplicate for seamless scrolling */}
        <Image src={Scout} alt={""} className="w-[100px] mx-4" />
        <Image src={Faygroup} alt={""} className="w-[100px] mx-4" />
        <Image src={Sleek} alt={""} className="w-[100px] mx-4" />
        <Image src={Valuegate} alt={""} className="w-[100px] mx-4" />
        <Image src={Academy} alt={""} className="w-[100px] mx-4" />
      </motion.div>
    </div>

      <div className="py-20 px-[106px] bg-ghostwhite">
        <div className="flex gap-5">
          <div className="bg-primary rounded-[20px] text-white pt-8 pb-24 pl-8 pr-14 flex-1">
            <div className="flex items-center gap-2 justify-center border border-white w-[136px] h-[22px] rounded-[100px] text-white font-merriweather font-normal text-sm">
              <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
              Our Dream
            </div>

            <h2 className="font-manrope font-bold text-3xl w-[320px] mt-6">
              From the Streets to the Stadium – Making Dreams Reality
            </h2>
            <p className="font-lato font-medium text-base mt-12">
              Our dream is to create a world where every talented footballer, no
              matter where they come from, has the opportunity to be seen and
              succeed. We bridge the gap between grassroots passion and
              professional opportunities, using data-driven scouting and
              innovation to connect players with the right clubs and scouts. By
              leveling the playing field, we help turn raw potential into
              thriving football careers, ensuring that no talent goes unnoticed.
            </p>
          </div>
          <div className="flex-1 flex">
            <div className="flex flex-col justify-between">
              <Image src={Frame8} alt={""} />
              <Image src={Frame9} alt={""} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-[4rem]">
            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-2 justify-center border border-primary w-[136px] h-[22px] rounded-[100px] text-primary font-merriweather font-normal text-sm">
                <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                Our Mission
              </div>
              <p className="font-manrope font-bold text-2xl text-black-50 w-[500px] mt-3">
                Empowering Players, Transforming Scouting
              </p>
              <p className="font-lato font-normal text-base text-black-50 w-[480px] mt-5">
                We are redefining football scouting by empowering players with a
                platform to showcase their skills, track progress, and connect
                with the right opportunities. At the same time, we equip scouts
                with advanced data-driven insights to make informed recruitment
                decisions. By bridging the gap between raw talent and
                professional opportunities, we are creating a more transparent,
                efficient, and impactful scouting ecosystem that benefits both
                players and the football industry at large.
              </p>
            </div>
            <div className="">
              <div className="flex gap-5 items-start">
                <Image src={Frame10} alt="" className="w-[300px] h-[320px]" />
                <Image
                  src={Frame11}
                  alt=""
                  className="w-[300px] h-[280px] self-end"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between gap-[4rem] w-full">
              <div className="flex gap-5 items-start w-[25%] h-full">
                <Image
                  src={Frame12}
                  alt=""
                  className="w-[300px] h-[280px] self-end"
                />
                <Image src={Frame13} alt="" className="w-[300px] h-[320px]" />
              </div>

            <div className="flex flex-col justify-end w-[40%]">
              <div className="flex items-center gap-2 justify-center border border-primary w-[136px] h-[22px] rounded-[100px] text-primary font-merriweather font-normal text-sm">
                <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                Our Vision
              </div>
              <p className="font-manrope font-bold text-2xl text-black-50 w-[500px] mt-3">
                Breaking Barriers, Creating Football Legends
              </p>
              <p className="font-lato font-normal text-base text-black-50 w-[480px] mt-5">
                We are revolutionizing football scouting by eliminating barriers
                that prevent talented players from being discovered. Our
                platform ensures that every aspiring footballer, regardless of
                background, location, or resources, has the opportunity to
                showcase their skills and get noticed. By leveraging advanced
                data-driven insights and innovative scouting solutions, we
                connect players with scouts and clubs that can propel their
                careers forward. Our vision is to create a football ecosystem
                where raw talent is recognized, nurtured, and transformed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialCarousel />

      <div className="py-20 px-[106px] bg-ghostwhite">
            <div className="flex items-center gap-2 justify-center border border-black-50 w-[136px] h-[22px] rounded-[100px] text-black-50 font-merriweather font-normal text-sm">
              <span className="w-[6px] h-[6px] rounded-full bg-black-50"></span>
              Meet the Team
            </div>

            <h2 className="font-manrope font-bold text-black-50 text-4xl mt-6">
            The Minds Behind the Mission
            </h2>

            <div className="mt-10 flex items-center justify-between">
              <Image src={Frame14} alt={""} className="w-[270px] h-[370px]" />
              <Image src={Frame15} alt={""} className="w-[270px] h-[370px]" />
              <Image src={Frame16} alt={""} className="w-[270px] h-[370px]" />
              <Image src={Frame17} alt={""} className="w-[270px] h-[370px]" />
            </div>
          </div>

          <HeroSection />
      <Footer />
    </>
  );
};

export default AboutPage;
