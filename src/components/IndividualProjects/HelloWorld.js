import React from 'react';
import "./Project.scss";
import Header from '../Header';
import CarouselHello from '../Carousel/CarouselHelloWorld';
import '../Carousel/Reset.css';
import ReactPlayer from 'react-player';
import Contact from '../Contact';

const HelloWorld = () => {
    const header = "My Projects";
    const subHeader = "Educational App";

    return (
        <div className="project-container">
            <Header header={header} subHeader={subHeader} />
            <h1> Hello World </h1>
            <p className="project-intro"> This was the second project I completed as part of the Professional Software Development course at CodeClan.
                <br></br>I had a blast working with two of my classmates and sharing the experience of building a full-stack React application together. </p>

            <CarouselHello />

            <div className="project-brief-container">
                <h2> Project brief: </h2>
                <p className="project-brief"> The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way.
                    <br></br> The app should allow the user to: </p>
                <ul className="project-brief-list">
                    <li className="project-brief-list-item"> View some educational content on a particular topic </li>
                    <li className="project-brief-list-item"> Be able to interact wit hthe page to move through content </li>
                    <li className="project-brief-list-item"> Use an API to bring in content or a database to store information </li>
                    <li className="project-brief-list-item"> Integrate charts or maps into your application </li>
                </ul>
            </div>


            <p className="project-para"> This was a group project which we completed in 5 days. This was another opportunity to experience implementing agile development methodologies and building a full-stack application through the full software development life cycle.</p>

            <div className="project-demo-container">
                <h2> App Demo </h2>
                <div className="project-demo-wrapper">
                    <ReactPlayer
                        className="project-demo-video"
                        url={require('../../assets/videos/hello_world_compressed.mp4')}
                        width="100%"
                        height="100%"
                        controls={true} />
                </div>
            </div>

            <h3 className="project-list-header"> Technologies used: </h3>
            <div className="project-logos">
                <img className="project-logo" id="javascript" src={require("../../assets/images/logos/javascript.png")} />
                <p className="logo-tag">JavaScript</p>
                <img className="project-logo" id="react" src={require("../../assets/images/logos/react.png")} />
                <p className="logo-tag">React</p>
                <img className="project-logo" id="mongodb" src={require("../../assets/images/logos/mongodb.png")} />
                <p className="logo-tag">MongoDB</p>
                <img className="project-logo" id="nodejs" src={require("../../assets/images/logos/nodejs.png")} />
                <p className="logo-tag">NodeJS</p>
                <p className="project-logo">Express</p>
                <p className="logo-tag">Express</p>
                <p className="project-logo">API</p>
                <p className="logo-tag">API</p>
            </div>

            <h3 className="project-list-header"> Key learnings from the project: </h3>
            <ul className="project-lists">
                <li> How much better it is working in a team! </li>
                <li> The importance of good communication </li>
                <li> The importance of planning (again) </li>
            </ul>

            <h3 className="project-list-header"> Things I was most proud of: </h3>
            <ul className="project-lists">
                <li> My team and I built a fun app that we were really proud of </li>
                <li> We were all still friends at the end of the project! </li>
                <li> We overcame all the issues we faced building the app and everything worked smoothly in the end </li>
                <li> I centered another div </li>
            </ul>

            <Contact />
        </div>
    )
}

export default HelloWorld;