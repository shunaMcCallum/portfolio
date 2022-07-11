import React from 'react';
import "./Projects.css";

const Projects = () => {
  
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-images-container">
                <img className="projects-image" src={require("../images/gym_app_homepage.png")} />
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
                <img className="projects-image" src="https://pixel-mate.com/images/design/box-1-web-apps.png" />
            </div>
        </div>
    )
}

export default Projects