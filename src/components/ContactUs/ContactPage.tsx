import React from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import Image from "next/image";
import ContactImage from "@/public/images/contact-image.png";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-ghostwhite pt-40 pb-20">
        <div className="px-[106px] flex gap-10">
          {/* Left Section - Form */}
          <div className="bg-white py-8 rounded-[20px] pl-[24px] pr-[52px] flex-1">
            {/* Get in touch Badge */}
            <div className="flex items-center gap-2 justify-center border border-primary-2 w-[136px] h-[22px] rounded-[100px] text-primary font-merriweather font-normal text-sm">
              <span className="w-[6px] h-[6px] rounded-full bg-primary-2"></span>
              Get in touch
            </div>

            {/* Heading */}
            <h2 className="font-manrope font-bold text-black-50 text-3xl my-4 w-[500px]">
              Scouting Talent? Chasing Dreams? Let’s Talk
            </h2>

            {/* Description */}
            <p className="font-lato font-normal text-base text-black-50">
              Whether you&apos;re scouting the next big star or chasing your
              football dreams, we&apos;re here to help. Reach out and let&apos;s
              make it happen!
            </p>

            {/* Divider */}
            <hr className="border-[#D1D1D1] border-[1px] w-full my-4" />

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="fname"
                    className="font-lato text-black-50 font-normal text-base mb-1"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder=""
                    className="border border-primary p-3 rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="lname"
                    className="font-lato text-black-50 font-normal text-base mb-1"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lname"
                    placeholder=""
                    className="border border-primary p-3 rounded-lg w-full"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="font-lato text-black-50 font-normal text-base mb-1"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="border border-primary p-3 rounded-lg w-full"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="font-lato text-black-50 font-normal text-base mb-1"
                >
                  Message:
                </label>
                <textarea
                  placeholder=""
                  className="border border-primary p-3 rounded-lg w-full h-32 resize-none"
                ></textarea>
              </div>
              <div className="pt-5">
              <button className="border border-orange-50 bg-transparent text-black-50 font-medium font-poppins text-base flex items-center justify-center rounded-3xl w-full h-[40px]">
                Send Message
              </button>
              </div>
            </form>
          </div>

          {/* Right Section - Image & Contact Info */}
          <div className="flex-1">
            <Image
              src={ContactImage}
              alt="Customer support"
              className="w-full h-auto"
            />
            {/* Contact Info */}
            <div className="bg-white px-[19px] py-[19px] mt-5 rounded-[20px] shadow-md">
              <div className=" bg-[#DEDEDEB2] flex items-center pl-5 py-3 gap-3 rounded-2xl mb-3">
                <div className="flex items-center justify-center bg-primary w-[60px] h-[60px] rounded-full">
                <FiMail className="text-white text-2xl" />
                </div>
                <div>
                  <p className="font-lato font-medium text-black-50 text-base">Email Address</p>
                  <p className="font-lato font-normal text-black-50 text-xs">
                    Contact@scoutfair.com
                  </p>
                </div>
              </div>
              <div className=" bg-[#DEDEDEB2] flex items-center pl-5 py-3 gap-3 rounded-2xl">
                <div className="flex items-center justify-center bg-primary w-[60px] h-[60px] rounded-full">
              <FiPhone className="text-white text-2xl" />
              </div>
                <div>
                  <p className="font-lato font-medium text-black-50 text-base">Phone Number</p>
                  <p className="font-lato font-normal text-black-50 text-xs">
                  +2348129296919
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
