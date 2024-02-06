import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Header/header.css";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const getNavLinkClass = (isActive) => {
        return isActive ? "navbar-item navbar-item-active" : "navbar-item";
    };

    return (
        <header>
            <nav className="navbar is-fullwidth" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        Anthony Ramdeen
                    </a>
                    {/* Hamburger menu button, shown only on mobile */}
                    <a onClick={() => setIsActive(!isActive)} role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <NavLink to="/aboutme" className={({ isActive }) => getNavLinkClass(isActive)}>
                            About Me
                        </NavLink>

                        <NavLink to="/portfolio" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Portfolio
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Contact
                        </NavLink>

                        <NavLink to="/resume" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Resume
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
