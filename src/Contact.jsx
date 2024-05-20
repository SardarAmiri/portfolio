import React from "react";

function Contact() {
  return (
    <div className="section-plum">
      <section id="contact">
        <p>Let's collaborate to create something extraordinary together.</p>
        <ul className="contact">
          <li className="icon">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>

            <span className="social-contact">
              <a href="sardaramiri1122@gmail.com">sardaramiri1122@gmail.com</a>
            </span>
          </li>
          <li className="icon">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>

            <span className="social-contact">
              <a
                href="https://www.linkedin.com/in/sardar-amiri/"
                target="_blank"
              >
                linkedin.com/in/sardar-amiri{" "}
              </a>
            </span>
          </li>
          <li className="icon">
            <span className="fab fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>

            <span className="social-contact">
              <a href="https://github.com/SardarAmiri" target="_blank">
                github.com/SardarAmiri{" "}
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
