import React from 'react';
import "./HomeContainer.scss";
import "./About.scss";
import Contact from '../components/Contact';
import Header from '../components/Header';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    const header = "About Me";
    const subHeader = "";

    return (
        <div className="page-container">

            <Header header={header} subHeader={subHeader} />

            <div className="about-container">
                <p className="intro-para"> Hello and thank you for checking out my website. In this section I wanted to provide
                    a little more explanation of my story and interests.</p>
                <div className="top-container">
                    <div className="top-paras">
                        <p> If you don't have time to read this full section, here are a few highlights about me:
                        </p>
                        <ul>
                            <li>I love to learn new things</li>
                            <li>I like to be pushed out of my comfort zone because challenging situations are learning experiences</li>
                            <li>Learning music from a young age developed my interest and skills in learning new things - like coding!</li>
                            <li>I love cycling! Exercise helps my mental health and has turned me into a much more positive person</li>
                            <li>I also love puzzles - word puzzles, number puzzles, jigsaw puzzles, and now coding puzzles!</li>
                            <li>And I love cats - I have a cat named Sushi and he's the fluffiest cat I've ever met</li>
                        </ul>
                    </div>
                    <figure className="about-image" id="top-image"><img src={require("../assets/images/about/bike_2.jpg")} alt="sq-sample26" />
                        <figcaption>
                            <h4>Cycling has become a big passion for me and helps my mental health</h4>
                        </figcaption>
                    </figure>
                </div>
                <div className="bottom-container">
                    <p> I am from Glasgow and most of my background is in music. I have degrees in Music and Cultural Policy and Management -
                        did I mention I enjoy learning?</p>
                    <p> My last job before switching to coding was Planning Manager at Scottish Opera, where I worked for 4 years.
                        I had some amazing experiences there - during my first week I was handed the task of hiring a performing horse - and
                        I learned so much in terms of soft skills, and about myself and what I value in my career.</p>
                    <p> The job challenged me a lot for a long time and I got so much out of it, however eventually the level of challenge
                        decreased, stress increased and the reward I got from my work wasn't really there any more. Eventually I decided it was
                        time to move on, and after a lot of soul searching I decided I wanted a career outside of the arts.</p>
                    <div className="bottom-section">
                        <figure className="about-image" id="bottom-image">
                            <img src={require("../assets/images/about/sushi_piano.jpg")} alt="sq-sample26" />
                            <figcaption>
                                <h4>Two of my other passions - music and cats! Sushi likes to help me practice piano.</h4>
                            </figcaption>
                        </figure>
                        <div className="bottom-paras">
                            <p> After speaking to a lot of family members, friends and people who had done the course at CodeClan before, I decided
                                the right move was to quit my job and enroll on the course. I've now graduated, and genuinely over the last 4 months
                                I've been the happiest I have been in a long time. The course, the people, the coding - it's suited me so well and it's
                                made me feel so excited to make programming my full-time job.</p>
                            <p className="last-para"> I had intended to launch this website while I was still searching for a job, but as I write this I
                                was offered a new position just yesterday. I'm joining Allied Vehicles in Glasgow as SQL Developer and I can't wait to get
                                started! I intend to keep this website up-to-date with the projects I get involved with there, plus any other stuff I get
                                up to in and around the world of tech in the future. Watch this space!</p>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h1>Technologies I use:</h1>
                    <div className="tech-logos">
                        <h2>Languages:</h2>
                        <div className="skills-sub-section">
                            <img className="tech-logo" id="java" src={require("../assets/images/logos/java.png")} />
                            <p className="logo-tag">Java</p>
                            <img className="tech-logo" id="javascript" src={require("../assets/images/logos/javascript.png")} />
                            <p className="logo-tag">JavaScript</p>
                            <img className="tech-logo" id="python" src={require("../assets/images/logos/python.png")} />
                            <p className="logo-tag">Python</p>
                            <img className="tech-logo" id="dart" src={require("../assets/images/logos/dart.png")} />
                            <p className="logo-tag">Dart</p>
                        </div>

                        <h2 className="skills-header">Front-end:</h2>
                        <div className="skills-sub-section">
                            <img className="tech-logo" id="react" src={require("../assets/images/logos/react.png")} />
                            <p className="logo-tag">React</p>
                            <img className="tech-logo" id="flutter" src={require("../assets/images/logos/flutter.png")} />
                            <p className="logo-tag">Flutter</p>
                            <img className="tech-logo" id="flask" src={require("../assets/images/logos/flask.png")} />
                            <p className="logo-tag">Flask</p>
                            <FontAwesomeIcon className="tech-logo" id="html" icon={faHtml5} />
                            <p className="logo-tag">HTML</p>
                            <FontAwesomeIcon className="tech-logo" id="css" icon={faCss3Alt} />
                            <p className="logo-tag">CSS</p>
                        </div>

                        <h2 className="skills-header">Back-end:</h2>
                        <div className="skills-sub-section">
                            <img className="tech-logo" id="spring" src={require("../assets/images/logos/spring.png")} />
                            <p className="logo-tag">Spring</p>
                            <img className="tech-logo" id="nodejs" src={require("../assets/images/logos/nodejs.png")} />
                            <p className="logo-tag">NodeJS</p>
                            <img className="tech-logo" id="postgres" src={require("../assets/images/logos/postgres.png")} />
                            <p className="logo-tag">PostgreSQL</p>
                            <img className="tech-logo" id="sqlite" src={require("../assets/images/logos/sqlite.png")} />
                            <p className="logo-tag">SQLite</p>
                            <img className="tech-logo" id="mongodb" src={require("../assets/images/logos/mongodb.png")} />
                            <p className="logo-tag">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default About;