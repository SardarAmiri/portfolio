import React from "react";

function Project() {
  return (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <article>
          <div className="text">
            <h4>Bootcamp Project</h4>
            <h3>NcNews Front-end</h3>
            <p className="blackbox">
              Developed a React.js single-page application (SPA) for a news app
              replicating Reddit's functionality, utilizing URL endpoints for
              routing. Implemented article display, voting, and commenting
              features, ensuring a seamless user experience. Managed complex
              data sorting and filtering from the backend API using React’s
              component-based architecture. Deployed the application to Netlify
              to demonstrate its features and functionality.
              <a href="https://ncnews-fun.netlify.app" target="_blank">
                <span> </span>Demo
              </a>
              <span> </span>
              Source
              <a
                href="https://github.com/SardarAmiri/nc_news-fronend"
                target="_blank"
              >
                <span> </span>GitHub
              </a>
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Axios</li>
            </ul>
          </div>
          <img src="images/ncnews-frontend.png" alt="NcNews-Frontend" />
        </article>
        <article className="reverse">
          <div className="text">
            <h4>Bootcamp Project</h4>
            <h3>Neon Active</h3>
            <p className="blackbox">
              This collaborative mobile app project designed to help users to
              track thier progress effortlessly.The backend is built with
              JavaScript and Node.js, Express framework. We chose MongoDB as our
              database to store user data, progress logs, and gamification
              elements.To maintain high code quality we adopted Test-Driven
              Development (TDD) practices. For user authentication, we
              implemented JWT (JSON Web Token) to provide a secure and seamless
              login experience, safeguarding user data and privacy.
              <a
                href="https://northcoders.com/project-phase/neon-active"
                target="_blank"
              >
                <span> </span> Demo
              </a>
              <span> </span>GitHub <span> </span>
              <a
                href="https://github.com/SardarAmiri/Neon-active-back-end"
                target="_blank"
              >
                this
              </a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Bcrypt.js</li>
              <li>Axios</li>
            </ul>
          </div>
          <img src="images/neonActive.png" alt="Neon-Active" />
        </article>
        <article>
          <div className="text">
            <h4>Bootcamp Project</h4>
            <h3>NcNews Back-end</h3>
            <p className="blackbox">
              The NCNews backend API is a RESTful service designed to mimic a
              backend system similar to Reddit, handling database requests for
              users, topics, articles, and comments. Built with Node.js and
              Express, the API interacts with a PostgreSQL database to perform
              robust CRUD operations, ensuring efficient data management.
              Following Test-Driven Development (TDD) practices, the API is
              thoroughly tested for reliability and performance.{" "}
              <a href="https://ni-nc-news.onrender.com/api" target="_blank">
                Demo{" "}
              </a>{" "}
              Source
              <a
                href="https://github.com/SardarAmiri/NcNews-Backend"
                target="_blank"
              >
                {" "}
                GitHub
              </a>
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Express.js</li>
              <li>Jest</li>
              <li>SuperTest</li>
            </ul>
          </div>
          <img src="images/ncnews-backend.png" alt="Nc News Backend" />
        </article>
      </section>
    </div>
  );
}

export default Project;
