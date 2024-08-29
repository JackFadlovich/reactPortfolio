import React from 'react';
import Footer from './Footer';
import "../styles/App.css";
import "../styles/Portfolio.css";
function Portfolio() {
    return (
      <div className="portfolio-container">
      <div className="portfolio-item">
          <img src="Images/Note-Taker-SS.png" alt="Project 1" />
          <h3>Note Taker</h3>
          <a href="https://notetaker-yanp.onrender.com" target="_blank" rel="noopener noreferrer">View Deployed App</a>
          <a href="https://github.com/ZolarEclipse/noteTaker" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="portfolio-item">
          <img src="Images/Payroll-Tracker-SS.png" alt="Project 2" />
          <h3>Payroll Tracker</h3>
          <a href="https://zolareclipse.github.io/payrollTracker/" target="_blank" rel="noopener noreferrer">View Deployed App</a>
          <a href="https://github.com/ZolarEclipse/payrollTracker" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
    </div>
)
}

<Footer />
export default Portfolio;