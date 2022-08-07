import React from 'react';
import './HomeContainer.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const HomeContainer = () => {

    return (
        <div className="page-container">

            <section className="border-wrapper">
                <div className="border"></div>
            </section>

            <div className="headers">
                <img id="profile-picture" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt='profile_picture' />
                <h1>Shuna McCallum</h1>
                <h3>Software Developer</h3>
            </div>

            <section className="border-wrapper">
                <div className="border"></div>
            </section>

            <div className="homepage-content">
                <p>Junior Software Developer with a passion for solving puzzles and learning new skills, currently enrolled in the Professional Software Development bootcamp course at CodeClan.</p>
                <div className="page-divider"></div>
                <h2 className="skills-header">Key Skills and Experience:</h2>
                <div className="skills-container">
                    <div className="skills-list">
                        <p><b>Languages, Databases and Frameworks</b></p>
                        <ul>
                            {/* ADD A LITTLE POP-UP WHICH SHOWS WHICH PROJECT(S) I'VE USED THESE THINGS ON */}
                            <li>Java & Spring</li>
                            <li>JavaScript, React & Express</li>
                            <li>Python & Flask</li>
                            <li>C#</li>
                            <li>HTML & CSS</li>
                            <li>SQLite</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <p><b>Programming Design Principles</b></p>
                        <ul>
                            {/* ADD A LITTLE POP-UP WHICH SHOWS WHICH PROJECT(S) I'VE USED THESE THINGS ON */}
                            <li>Object-Oriented Programming</li>
                            <li>SOLID Principles</li>
                            <li>RESTful workflows</li>
                            <li>UX Design principles</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <p><b>Development Methodologies and Best Practice</b>s</p>
                        <ul>
                            {/* ADD A LITTLE POP-UP WHICH SHOWS WHICH PROJECT(S) I'VE USED THESE THINGS ON */}
                            <li>Test-Driven Development</li>
                            <li>Agile development</li>
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </div>
                </div>
                <div className="page-divider"></div>
            </div>
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomeContainer;