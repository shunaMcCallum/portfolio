import React from 'react';
import './HomeContainer.scss';
import Contact from '../components/Contact';
import Header from '../components/Header';

const HomeContainer = () => {

    const header = "Shuna McCallum";
    const subHeader = "Software Engineer";

    return (
        <div className="page-container">

            <Header header={header} subHeader={subHeader} />

            <div className="homepage-content">
                <p> Hello and welcome! I'm Shuna.</p>
                <p> I'm a software engineer, recently graduated from the Professional Software Development bootcamp at CodeClan.</p>
                <p> My background is in opera planning - I decided to change career because I got tired of negotiating contracts with performing horses.</p>
                <p> Feel free to have a snoop around!</p>
                <div className="page-divider"></div>
                <h3 className="skills-header">Key Skills and Experience:</h3>
                <div className="skills-container">
                    <div className="skills-list">
                        <p><b>Languages, Databases and Frameworks</b></p>
                        <ul>
                            {/* ADD A LITTLE POP-UP WHICH SHOWS WHICH PROJECT(S) I'VE USED THESE THINGS ON */}
                            <li>Java & Spring</li>
                            <li>JavaScript, React & Express</li>
                            <li>Python & Flask</li>
                            <li>Dart & Flutter</li>
                            <li>HTML & CSS</li>
                            <li>SQLite, MongoDB, PostgreSQL</li>
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
                        <p><b>Development Methodologies</b></p>
                        <ul>
                            {/* ADD A LITTLE POP-UP WHICH SHOWS WHICH PROJECT(S) I'VE USED THESE THINGS ON */}
                            <li>Test-Driven Development</li>
                            <li>Agile development</li>
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default HomeContainer;