import React from 'react';
import "./Projects.scss";
import "./HomeContainer.scss";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Contact from '../components/Contact';

const Projects = () => {
    const header = "My Projects";
    const subHeader = "";

    const navigate = useNavigate();

    const handleGymButtonClick = () => {
        navigate("/shunamccallum.github.io/projects/the_gym")
    }

    const handleEducationButtonClick = () => {
        navigate("/shunamccallum.github.io/projects/hello_world")
    }

    const handleMusicButtonClick = () => {
        navigate("/shunamccallum.github.io/projects/music_elephant")
    }

    return (
        <div className="page-container">
            <Header header={header} subHeader={subHeader} />
            <p>Below are some of the projects I have worked on through my bootcamp course and self-study.</p>
            <div className="projects-container">

                <div className="projects">
                    <figure className="projects-image" id="gym-image">
                        <img src={require("../assets/images/gym_app/homepage.png")} alt="sq-sample26" />
                        <figcaption>
                            <h4>Web application which allows gyms to manage members and fitness classes.</h4>
                        </figcaption>
                    </figure>
                    <div className="more-info">
                        <button className="projects-button" onClick={handleGymButtonClick}>More info</button>
                    </div>
                </div>

                <div className="projects">
                    <figure className="projects-image" id="hello-image">
                        <img src={require("../assets/images/hello_world/flag_page_top.png")} alt="sq-sample26" />
                        <figcaption>
                            <h4>Interactive educational application designed to teach children about countries of the world.</h4>
                        </figcaption>
                    </figure>
                    <div className="more-info">
                        <button className="projects-button" onClick={handleEducationButtonClick}>More info</button>
                    </div>
                </div>

                <div className="projects">
                    <figure className="projects-image" id="music-image">
                        <img src={require("../assets/images/music_elephant/timeline_little_progress.png")} alt="sq-sample26" />
                        <figcaption>
                            <h4>Music theory mobile educational application.</h4>
                        </figcaption>
                    </figure>
                    <div className="more-info">
                        <button className="projects-button" onClick={handleMusicButtonClick}>More info</button>
                    </div>
                </div>

            </div>
            <Contact />
        </div>
    )
}

export default Projects