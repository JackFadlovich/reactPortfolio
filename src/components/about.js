import React from 'react';

import "../styles/App.css";

function About() {
    return (
<div className="about-container">
            <img src="/Images/Profile-Pic.png"
             alt="Jack's Profile" 
             className="profile-pic" />

            <div className="bio">
                <p>According to all known laws of aviation, there is no way a bee should be able to fly.
                 Its wings are too small to get its fat little body off the ground. 
                 The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. 
                 Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second.
                 Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those.
                 Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's.</p>
            </div>
        </div>
    );
}

export default About;