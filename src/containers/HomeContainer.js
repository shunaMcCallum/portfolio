import React from 'react';
import './HomeContainer.css';

const HomeContainer = () => {

    return (
        <div className="page-container">
            
            <section className="border-wrapper">
            <div className="border"></div>
            </section>

            <div className="headers">
                <img id="profile-picture" src="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png" alt='profile_picture' />
                <h1>Shuna McCallum</h1>
                <h3>Software Developer</h3>
            </div>

            <section className="border-wrapper">
                <div className="border"></div>
            </section>

            <div className="homepage-content">
                <p>Junior Software Developer, recent graduate of Professional Software Development course at CodeClan.</p>
                <p>Key Skills include:</p>
                <p>Technology competencies include:</p>
                <p>Please click on Projects for examples of projects using the above skills and technologies.</p>
            </div>
        </div>
    )
}

export default HomeContainer;