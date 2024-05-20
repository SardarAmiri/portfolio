import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fas fa-code" aria-hidden="true"></span>
              <span>Sardar Amiri</span>
            </Link>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sardar-amiri/" target="_blank">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/SardarAmiri" target="_blank">
            <span className="fab fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.dropbox.com/scl/fi/114b1t72chs3o260zq167/CV-open-relocation.pdf?rlkey=nccv5ded1rrcmw3gc6tdulvgu&st=5q3egnkj&dl=0"
            target="_blank"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
