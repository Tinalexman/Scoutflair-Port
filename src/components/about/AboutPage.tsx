import React from "react"
import Navbar from "../reusable/Navbar"
import Hero from "./Hero"
import AboutUs from "./AboutUs"
import Testimonials from "./Testimonials"
import Footer from "../reusable/Footer"
import Visionaries from "./Visionaries"

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Testimonials />
            <Visionaries />
            <Footer />
        </div>
    )
}

export default AboutPage