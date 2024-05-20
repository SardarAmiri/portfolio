import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link href="index.html">
              <span className="fas fa-code" aria-hidden="true"></span>
              <span>Sardar Amiri</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="about.html">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/jen4web/" target="_blank">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.github.com/jen4web" target="_blank">
            <span className="fab fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0"
            target="_blank"
            className="button"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
