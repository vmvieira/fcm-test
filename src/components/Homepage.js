import React from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Information from "./Information";
import Navbar from "./Navbar";
import Team from "./Team";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Information />
      <Team />
      <About />
      <Footer />
    </>
  );
}

export default Homepage;
