import React from "react";

function Project() {
  return (
    <div class="section-blue">
      <section id="projects">
        <h2>About Jen Kramer</h2>
        <article>
          <div class="text">
            <h3>Just the highlights</h3>
            <p class="blackbox">
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like
              <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                this
              </a>
              , and multiple links look <a href="#">like this</a> and
              <a href="#">like this</a>.
            </p>
            <h4>My favorite technologies include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>UX</li>
            </ul>
          </div>
          <img
            src="img/pexels-christina-morillo-1181267.jpg"
            alt="Christina Morillo at Pexels."
          />
        </article>
      </section>
    </div>
  );
}

export default Project;
