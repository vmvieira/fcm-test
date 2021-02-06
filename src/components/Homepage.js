import React from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Information from "./Information";
import Navbar from "./Navbar";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Information />
      <Team />
      <Footer />
    </>
  );
}

export default Homepage;
