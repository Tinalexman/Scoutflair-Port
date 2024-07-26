import React from "react";
import Navbar from "../reusable/Navbar";
import Hero from "./Hero";
import PartnerSection from "./PartnerSection";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import BlogSection from "./BlogSection";
import FaqSection from "./FaqSection";
import Footer from "../reusable/Footer";
// import Sportualogo from "../assets/Sportualogo.svg"
// import maptivelogo from "../assets/maptivelogo.svg"
// import talentcomlogo from "../assets/talentcomlogo.svg"
// import testlogo from "../assets/test.svg"

const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <PartnerSection />
            <Testimonials />
            {/* <Testsection /> */}
            <AboutUs />
            <BlogSection />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default LandingPage