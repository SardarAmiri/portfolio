import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Project from "./Project";
function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className="gradient"></div>
      <Project />
      <div className="gradient"></div>
      <Contact />
      <div className="gradient"></div>
      <Footer />
    </>
  );
}

export default Home;
