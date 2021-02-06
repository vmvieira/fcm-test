import React from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Information from "./Information";
import Navbar from "./Navbar";
import Team from "./Team";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Information />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Homepage;
