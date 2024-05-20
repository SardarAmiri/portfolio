import React from "react";

function Footer() {
  return (
    <footer>
      <h2>Jen Kramer &middot; Educator</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/jen4web" target="_blank">
            <span class="fab fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/jen4web" target="_blank">
            <span class="fab fa-github-square" aria-hidden="true"></span>
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:jen@example.com">
            <span class="fas fa-envelope" aria-hidden="true"></span>
            <span class="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2021 Jen Kramer. All rights reserved.</small>
      </p>
    </footer>
  );
}

export default Footer;
