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
                    

                I am a web developer with 4 years of coding experience, specializing in JavaScript and React. I recently completed a Web Development bootcamp at Washington University, where I honed my skills in building responsive and interactive web applications. Throughout my internship, I worked on a collaborative team to develop a web application, gaining valuable experience in both front-end and back-end development with technologies like React, Node.js, and MongoDB.

I thrive in team environments and enjoy the process of collaborating with others to bring ideas to life. As I continue to grow in my career, I'm excited to apply my skills and contribute to projects that challenge me to think critically and creatively.
</p>
<Footer />
            </div>
        </div>
    );
}

export default About;