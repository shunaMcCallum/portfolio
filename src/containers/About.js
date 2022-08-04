import React from 'react';
import "./About.css";

const About = () => {
    
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p> Hello! My name is Shuna and I'm a Junior Software Developer.</p>
            <p> I'm a career-changer with a background in planning and project management within the wonderful world of opera.</p>
            <p> I decided to start a new career in software development because I got tired of negotiating contracts with performing horses.
                That, and I wanted to be part of one of the most innovative industries out there and have more opportunity to make an imapct
                on the world through my work.</p>
            <p> If you'd like to learn more about me please click here: </p>
            <button>More About Me</button>
            <p> Or, if you'd like to see some of my projects please see an overview below and you can click through to see more about each
                one.</p>
            
            {/* add a new page and a button to reveal a longer story */}
            
        </div>
    )
}

export default About;