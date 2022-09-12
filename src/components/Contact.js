import React from 'react';
import "./Contact.scss"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

    return (
        <div className="contact-container">
            <div className="page-divider"></div>

            <div className="contact-section-logos">
                <div className="contact-logo-container">
                    <a href="mailto:shuna.mccallum@gmail.com"><FontAwesomeIcon className="contact-logo" icon={faEnvelope} /></a>
                </div>

                <div className="contact-logo-container">
                    <a href="https://www.linkedin.com/in/shuna-mccallum/"><FontAwesomeIcon className="contact-logo" icon={faLinkedin} /></a>
                </div>

                <div className="contact-logo-container">
                    <a href="https://github.com/shunaMcCallum"><FontAwesomeIcon className="contact-logo" icon={faGithub} /></a>
                </div>
            </div>

        </div>
    )

}

export default Contact;