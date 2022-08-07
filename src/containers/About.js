import React from 'react';
import "./About.css";

const About = () => {
    
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p> Hello! I'm Shuna.</p>
            <p> I'm a career-changer with a background in opera planning.</p>
            <p> I decided to move to software development because I got tired of negotiating contracts with mu horses.</p>
            <p className="about-final-para"> If you'd like to learn more about me please click here: </p>
            <button className="about-button">Learn More</button>
            <div className="page-divider"></div>
            
            
            {/* add a new page and a button to reveal a longer story */}
            
        </div>
    )
}

export default About;