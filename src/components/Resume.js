import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <section className="section" id="tech-skills">
        <h2>Technical Skills</h2>
        <p>
          JavaScript, HTML, CSS, C#, Python, SQL, NoSQL, MySQL, MongoDB, Express, React, Node, Handlebars, jQuery,
          Bootstrap, GraphQL, WordPress.
        </p>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <p>
          <strong>Interned as a full stack developer</strong> <span className="dates">2021-Present</span>
        </p>
        <p>
          <strong>The Study Bar</strong> <span className="location">Saint Louis, MO</span>
        </p>
        <p>Developing applications to help students with managing their work and time.</p>
        <p>Key accomplishments:</p>
        <ul>
          <li>Co-developed a user-friendly, secure website from scratch to enhance study management.</li>
          <li>Created an organizer used by over 50 students daily to help streamline their studies.</li>
        </ul>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <p>
          <strong>Certificate in Full Stack Web Development</strong>
        </p>
        <p>
          Washington University <span className="location">Saint Louis, MO</span>
        </p>
      </section>
    </div>
  );
}

export default Resume;
