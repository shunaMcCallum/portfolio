import React from 'react';
import "./Projects.css";
import { useNavigate } from "react-router-dom";

const Projects = ({ projectButtonClick }) => {
    const navigate = useNavigate();


    const handleButtonClick = () => {
        navigate("/portfolio/gym_app")
    }

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-images-container">
                <img className="projects-image" id="gym-project" src={require("../images/gym_app_homepage.png")} />
                <div className="projects-description">
                    <p id="gym-project">Web application which allows gyms to manage members and fitness classes. Technologies used:</p>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>SQLite3</li>
                    </ul>
                    <div className="more-info">
                    <p id="gym-project">Click here to see more including demo: </p>
                    <button className="projects-button" onClick={handleButtonClick}>More info</button>
                    </div>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src={require("../images/studio_ghibli_filmpage.png")} />
                <div className="projects-description">
                    <p id="ghibli-project">Movie site displaying information on films made by Studio Ghibli. Technologies used:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>External API</li>
                        <li>CSS</li>
                    </ul>
                    <div className="more-info">
                    <p id="ghibli-project">Click here to see more including demo: </p>
                    <button className="projects-button">More info</button>
                    </div>
                </div>
            </div>
            <div className="projects-images-container">
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
                <div className="projects-description">
                    <p id="education-project">Interactive educational application all about countries of the world. Techologies used:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Note.js</li>
                        <li>External API</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>CSS</li>
                        <li>Leaflet</li>
                    </ul>
                    <div className="more-info">
                    <p id="education-project">Click here to see more including demo: </p>
                    <button className="projects-button">More info</button>
                    </div>
                </div>               
            </div>
            <div className="projects-page-divider"></div>
        </div>
    )
}

export default Projects