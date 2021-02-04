import React from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Information from "./Information";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Information />
      <About />
      <Footer />
    </>
  );
}

export default Homepage;
