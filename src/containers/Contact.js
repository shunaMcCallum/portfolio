import React from 'react';
import "./Contact.css"


const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <div className="contact-logos">
            <div className="email">
                <a href="mailto:shuna.mccallum@gmail.com"><img className="logo" alt="email-logo" src="https://icons-for-free.com/iconfiles/png/512/email+gmail+mail+message+service+icon-1320183404410750774.png" /></a>
            </div>

            <div className="linked-in">
                <a href="https://www.linkedin.com/in/shuna-mccallum/"><img className="logo" alt="linked-in-logo" src="https://www.freeiconspng.com/uploads/linkedin-linkedin-icon-flat-icon-linkedin-png-social-icon-png-11.png" /></a>
            </div>

            <div className="git-hub">
                <a href="https://github.com/shunaMcCallum"><img className="logo" alt="git-hub-logo" src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png" /></a>
                </div>
            </div>
        </div>
    )

}

export default Contact;