import React from "react";

function Footer() {
  return (
    <footer>
      <h2>Sardar Amiri &middot; junior full-stack software engineer</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sardar-amiri/" target="_blank">
            <span class="fab fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/SardarAmiri" target="_blank">
            <span class="fab fa-github-square" aria-hidden="true"></span>
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span class="fas fa-envelope" aria-hidden="true"></span>
            <span class="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2024 Sardar Amiri. All rights reserved.</small>
      </p>
    </footer>
  );
}

export default Footer;
