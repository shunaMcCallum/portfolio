import React from 'react';
import './HomeContainer.css';

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
                <p>Junior Software Developer with a passion for problem solving and learning new skills, currently enrolled in the Professional Software Development course at CodeClan.</p>
                <h2>Key Skills and Experience:</h2>
                <div className="skills-container">
                    <div className="skills-list">
                        <p><b>Programming and Database Languages</b></p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript, ReactJS</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQLite</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <p><b>Programming Design Principles</b></p>
                        <ul>
                            <li>Object-Oriented Programming</li>
                            <li>SOLID Principles</li>
                            <li>RESTful workflows</li>
                            <li>UX Design principles</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <p><b>Development Methodologies and Best Practice</b>s</p>
                        <ul>
                            <li>Test-Driven Development</li>
                            <li>Agile development</li>
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;