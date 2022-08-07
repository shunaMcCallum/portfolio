import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-list-container">
                <ul className="nav-bar-list">
                    <li>
                        <Link className="nav-link" to="/portfolio">Home</Link>
                    </li>

                    <li>
                        {/* <Link to="/pokemon">Pokemon</Link> */}
                        About
                    </li>
                    <li>
                        {/* <Link to="/pokemon">Pokemon</Link> */}
                        Projects
                    </li>
                    <li>
                        {/* <Link to="/pokemon">Pokemon</Link> */}
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;