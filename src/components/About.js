import React from 'react';
import Footer from './Footer';
import "../styles/App.css";
import "../styles/About.css";

function About() {
    return (
<div className="about-container">
            <img src="/Images/Profile-Pic.png"
             alt="Jack's Profile" 
             className="profile-pic" />

            <div className="bio">
                <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Footer />
            </div>
        </div>
    );
}

export default About;