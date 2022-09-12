import React from 'react';
import "./Project.scss";
import Header from '../Header';
import CarouselGym from '../Carousel/CarouselGym';
import '../Carousel/Reset.css';
import ReactPlayer from 'react-player';
import Contact from '../Contact';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GymProject = () => {
    const header = "My Projects";
    const subHeader = "Gym Management App";

    return (
        <div className="project-container">
            <Header header={header} subHeader={subHeader} />
            <h1> the gym... </h1>
            <p className="project-intro"> This is the first project I completed as part of the Professional Software Development course at CodeClan.
                <br></br>I like to look back at this project to see how much my skills have developed in a few months. </p>

            <CarouselGym />

            <div className="project-brief-container">
                <h2> Project Brief </h2>
                <p className="project-brief"> A local gym has asked you to build software to help manage menberships and register members for classes.
                    <br></br> The app should allow the user to: </p>
                <ul className="project-brief-list">
                    <li> Create, view, edit and delete Members </li>
                    <li> Create, view, edit and delete Classes </li>
                    <li> Book Members into Classes </li>
                    <li> View all Members booked into a particular Class </li>
                    <li> Give Classes have a maximum capacity - Members can only be booked if there is space </li>
                    <li> Mark Members and Classes as active/inactive - inactive Members and Classes will not appear when creating bookings </li>
                </ul>
            </div>

            <p className="project-para"> This was a solo project with five days given to complete it. I implemented agile development methodologies to manage the project and included user experience in the planning.
                I designed the app using an MVC pattern and implemented Test Driven Development throughout the build.</p>

            <div className="project-demo-container">
                <h2> App Demo </h2>
                <div className="project-demo-wrapper">
                    <ReactPlayer
                        className="project-demo-video"
                        url={require('../../assets/videos/gym_app_compressed.mp4')}
                        width="100%"
                        height="100%"
                        controls={true} />
                </div>
            </div>

            <h3 className="project-list-header"> Technologies used: </h3>
            <div className="project-logos">
                <img className="project-logo" id="python" src={require("../../assets/images/logos/python.png")} />
                <p className="logo-tag">Python</p>
                <img className="project-logo" id="flask" src={require("../../assets/images/logos/flask.png")} />
                <p className="logo-tag">Flask</p>
                <FontAwesomeIcon className="project-logo" id="html" icon={faHtml5} />
                <p className="logo-tag">HTML</p>
                <FontAwesomeIcon className="project-logo" id="css" icon={faCss3Alt} />
                <p className="logo-tag">CSS</p>
                <img className="project-logo" id="sqlite" src={require("../../assets/images/logos/sqlite.png")} />
                <p className="logo-tag">SQLite</p>
            </div>

            <h3 className="project-list-header"> Key learnings from the project: </h3>
            <ul className="project-project-lists">
                <li> The importance of planning </li>
                <li> Take regular breaks </li>
                <li> Keep on top of your project admin (planning and documentation) </li>
            </ul>

            <h3 className="project-list-header"> Things I was most proud of: </h3>
            <ul className="project-lists">
                <li> I made a fully functioning app that persists data in only 5 days </li>
                <li> I made use of all the technical skills and design knowledge I'd gained on the course so far </li>
                <li> I created functionality I hadn't been taught in class, without any guidance from instructors </li>
                <li> I centered a div </li>
            </ul>

            <Contact />
        </div>
    )
}

export default GymProject;