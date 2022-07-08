import React from 'react';
import './NavBar.css';

const NavBar = () => {
  
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-list-container">
                <ul className="nav-bar-list">
                    <li>
                        {/* <Link to="/">Home</Link> */}
                        Home
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