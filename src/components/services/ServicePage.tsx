import React from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import PartnerSection from "../home/PartnerSection";
import ServiceHero from "./ServiceHero";

const ServicePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ServiceHero />
            <PartnerSection />
            <Footer />
        </div>
    )
}

export default ServicePage