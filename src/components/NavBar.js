import React from 'react';
import './NavBar.scss';
import { useNavigate } from "react-router-dom";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const navigate = useNavigate();

    const handleHomeButtonClick = () => {
        navigate("/portfolio")
    }

    const handleAboutButtonClick = () => {
        navigate("/portfolio/about")
    }

    const handleProjectsButtonClick = () => {
        navigate("/portfolio/projects")
    }

    return (
        <div className="nav-bar-container">
            <div className="contact-logos">
                <div className="logo-container">
                    <a href="mailto:shuna.mccallum@gmail.com"><FontAwesomeIcon className="logo" icon={faEnvelope} /></a>
                </div>

                <div className="logo-container">
                    <a href="https://www.linkedin.com/in/shuna-mccallum/"><FontAwesomeIcon className="logo" icon={faLinkedin} /></a>
                </div>

                <div className="logo-container">
                    <a href="https://github.com/shunaMcCallum"><FontAwesomeIcon className="logo" icon={faGithub} /></a>
                </div>
            </div>
            <div className="nav-bar-list-container">
                <button className="home-button" onClick={handleHomeButtonClick}>Home</button>
                <button className="home-button" onClick={handleAboutButtonClick}>About</button>
                <button className="home-button" onClick={handleProjectsButtonClick}>Projects</button>
            </div>
        </div>
    )

}

export default NavBar;