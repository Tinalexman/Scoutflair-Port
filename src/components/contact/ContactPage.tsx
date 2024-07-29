import React from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import ContactHero from "./Hero";
import ContactSection from "./ContactSection";
import FaqSection from "../home/FaqSection";

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />            
            <ContactHero />
            <ContactSection />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default ContactPage