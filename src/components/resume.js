import React from 'react';
import Footer from './Footer';
import '../styles/Resume.css';
function Resume() {
    return (
<div className="resume-section">
      <div className="column">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </div>
      <div className="column">
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <Footer />
    </div>

    );
}

<Footer />
export default Resume;

//testing