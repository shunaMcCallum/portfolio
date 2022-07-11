import React from 'react';
import "./Projects.css";

const Projects = () => {
  
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-images-container">
                <img className="projects-image" id="gym-project" src={require("../images/gym_app_homepage.png")} />
                <div className="projects-description">
                <p  id="gym-project">Class project as part of the CodeClan Professional Software Development course. This web application contains full CRUD
                    functionality, allowing gyms to manage members and fitness classes. Built using an MVC pattern. Technologies used:</p>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>SQLite3</li>
                    </ul>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
                <div className="projects-description">
                    <p id="ghibli-project">Homework assignment. Technologies used:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Note.js</li>
                        <li>External API</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
                <div className="projects-description">
                    <p id="education-project">Educational app. Technologies used:</p>
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
                </div>
            </div>
        </div>
    )
}

export default Projects