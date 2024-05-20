import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="gradient"></div>
      <About />
      <div className="gradient"></div>
      <Footer />
    </>
  );
}

export default AboutPage;
