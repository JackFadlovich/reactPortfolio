import React from 'react';
import Footer from './Footer';
function Portfolio() {
    return (
        <div className="portfolio-section">
        <h1>My Projects</h1>
        <div className="portfolio-item">
            <a href="https://notetaker-yanp.onrender.com/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Images/Note-Taker-SS.png`} alt="Note Taker" />
            </a>
            <p>Note Taker</p>
        </div>
    </div>
)
}

<Footer />
export default Portfolio;