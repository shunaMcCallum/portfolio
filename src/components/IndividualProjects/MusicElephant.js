import React from 'react';
import "./Project.scss";
import Header from '../Header';
import CarouselMusic from '../Carousel/CarouselMusic';
import '../Carousel/Reset.css';
import ReactPlayer from 'react-player';
import Contact from '../Contact';

const MusicElephant = () => {
    const header = "My Projects";
    const subHeader = "Music Theory App";

    return (
        <div className="project-container">
            <Header header={header} subHeader={subHeader} />
            <h1> Music Elephant </h1>
            <p className="project-intro"> This was the final project I completed as part of the Professional Software Development course at CodeClan.
                <br></br>My team and I decided to give ourselves an extra challenge and build the app using a framework we hadn't been taught on the course.
                <br></br>We really enjoyed taking on the extra challenge and teaching ourselves a new bit of tech! </p>

            <CarouselMusic />

            <div className="project-brief-container">
                <h2> Project brief: </h2>
                <p className="project-brief"> Build an application which teaches users music theory in a fun and interesting way.
                    <br></br> The app will: </p>
                <ul className="project-brief-list">
                    <li> Combine displayed information with interactive quizzes for users to test their knowledge </li>
                    <li> Break music theory into different topics which will be repeated in Beginner, Intermediate and Advanced sections </li>
                    <li> Display lessons in a timeline format which will allow users to track their progress </li>
                    <li> Block access to lessons until the user has completed all quizzes in the previous section </li>
                </ul>
            </div>


            <p className="project-para"> We were given ten days to complete this project. We gave ourselves a few days to learn as much as we could about Flutter before diving into coding. One of my teammates
                was unable to run the software required to build our application, so we hit some speedbumps from an early stage of the project. But, we overcame everything and managed
                to build a really cool app with quite a few bits of logic that were way more advanced than anything we had programmed before!
            </p>

            <div className="project-demo-container">
                <h2> App Demo </h2>
                <div className="project-demo-wrapper">
                    <ReactPlayer
                        className="project-demo-video"
                        url={require('../../assets/videos/music_video_compressed.mp4')}
                        width="100%"
                        height="100%"
                        controls={true} />
                </div>
            </div>

            <h3 className="project-list-header"> Technologies used: </h3>
            <div className="project-logos">
                <img className="project-logo" id="dart" src={require("../../assets/images/logos/dart.png")} />
                <p className="logo-tag">Dart</p>
                <img className="project-logo" id="flutter" src={require("../../assets/images/logos/flutter.png")} />
                <p className="logo-tag">Flutter</p>
                <img className="project-logo" id="java" src={require("../../assets/images/logos/java.png")} />
                <p className="logo-tag">Java</p>
                <img className="project-logo" id="spring" src={require("../../assets/images/logos/spring.png")} />
                <p className="logo-tag">Spring</p>
                <img className="project-logo" id="postgres" src={require("../../assets/images/logos/postgres.png")} />
                <p className="logo-tag">PostgreSQL</p>
            </div>

            <h3 className="project-list-header"> Key learnings from the project: </h3>
            <ul className="project-lists">
                <li> How quickly I can pick up new technologies </li>
                <li> Again, the importance of planning </li>
                <li> How to overcome technical challenges, and pivot your plans to do so! </li>
                <li> A lot about how apps built using different frameworks can be structured in different ways </li>
            </ul>

            <h3 className="project-list-header"> Things I was most proud of: </h3>
            <ul className="project-lists">
                <li> My team and I successfully built a functioning app in a brand new framework and using a programming language we hadn't used before </li>
                <li> We had very little guidance from our instructors, who didn't have much experience with Flutter </li>
                <li> We overcame a few fairly major challenges on the way and still managed to build a working app the fulfilled our brief </li>
                <li> I got to combine my old passion for music with my new passion for software development! </li>
            </ul>

            <Contact />
        </div>
    )
}

export default MusicElephant;