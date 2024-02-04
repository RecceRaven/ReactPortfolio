import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Developer's Name
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink exact to="/" activeClassName="is-active" className="navbar-item">
                        About Me
                    </NavLink>
                    <NavLink to="/portfolio" activeClassName="is-active" className="navbar-item">
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" activeClassName="is-active" className="navbar-item">
                        Contact
                    </NavLink>
                    <NavLink to="/resume" activeClassName="is-active" className="navbar-item">
                        Resume
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
