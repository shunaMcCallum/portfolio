import React from 'react';
import "./Projects.css";

const Projects = () => {

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-images-container">
                <img className="projects-image" id="gym-project" src={require("../images/gym_app_homepage.png")} />
                <div className="projects-description">
                    <p id="gym-project">Web application which allows gyms to manage members and fitness classes. Built following an MVC pattern in Python, HTML and CSS,
                        with SQLite database supporting the back-end. Technologies used:</p>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>SQLite3</li>
                    </ul>
                    <p id="gym-project">This project gave me valuable experience in planning and building a full app from scratch, creating code that can be read and understood
                        by others, working with databases and passing data from the back-end to the front-end of an app.</p>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src={require("../images/studio_ghibli_filmpage.png")} />
                <div className="projects-description">
                    <p id="ghibli-project">Movie database site displaying information on films made by Studio Ghibli. This was a homework assignment built over one weekend using
                        ReactJS, Google Charts and an external API. Technologies used:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>External API</li>
                        <li>CSS</li>
                    </ul>
                    <p id="ghibli-project">This project developed my front-end development skills and gave valuable experience of passing data through different components of an app,
                        as well as working with data stored in different formats. I created interactive user interfaces which enabled me to build a responsive application. Adding
                        charts provided a more in-depth experience for the user and gave me experience in learning a new skill from scratch outside of CodeClan’s curriculum. </p>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
                <div className="projects-description">
                    <p id="education-project">Interactive educational web application based around countries of the world. Front-end built in React JS and back-end built using Express
                        and MongoDB database. Techologies used:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Note.js</li>
                        <li>External API</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>CSS</li>
                        <li>Leaflet</li>
                    </ul>
                    <p id="education-project">This project provided experience of building a full-stack application as part of a team. I drew on my previous working experience to take
                        the lead on planning and managing each stage of the project. I also built components which I had not coded before, and very much enjoyed taking part in group
                        programming sessions. This project built on my experience of creating interactive applications, and building features to provide a more in-depth experience for
                        the user, such as a dynamic background and the ability to create a user profile which can track which countries users have studied. </p>
                </div>
            </div>
        </div>
    )
}

export default Projects