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
          <a href="https://github.com/JackFadlovich/noteTaker" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="portfolio-item">
          <img src="Images\Screenshot 2024-09-05 125051.png" alt="Project 2" />
          <h3>Payroll Tracker</h3>
          <a href="https://JackFadlovich.github.io/payrollTracker/" target="_blank" rel="noopener noreferrer">View Deployed App</a>
          <a href="https://github.com/JackFadlovich/payrollTracker" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="portfolio-item">
        <img src="Images/Book-Search-Pic.png" alt="Project 3" />
        <h3>Book Search</h3>
        <a href="https://mern-book-search-nqrw.onrender.com/" target="_blank" rel="noopener noreferrer">View Deployed App</a>
        <a href="https://github.com/JackFadlovich/mern-book-search" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="portfolio-item">
            <img src="Images/Weather-Dashboard-SS.png" alt="Project 4" />
            <h3>Weather Dashboard</h3>
            <a href="https://JackFadlovich.github.io/weatherDashboard/" target="_blank" rel="noopener noreferrer">View Deployed App</a>
            <a href="https://github.com/JackFadlovich/weatherDashboard" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
        </div>
      <Footer />
    </div>
    
)
}


export default Portfolio;