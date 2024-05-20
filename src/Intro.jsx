import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section id="intro">
      <p className="name">
        Hi, my name is <span>Sardar Amiri.</span>
      </p>
      <h2>I'm a junior full-stack software engineer</h2>
      <p>
        with experience using JavaScript, React, HTML, CSS, NodeJS, PSQL, and
        more. If you'd like to know more, feel free to reach out below
      </p>
      <p>
        <a href="#contact">Contact Me</a>.
      </p>
    </section>
  );
}

export default Intro;
