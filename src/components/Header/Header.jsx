import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Header/header.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar is-fullwidth" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        Anthony Ramdeen
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink
                            to="/aboutme"
                            className={({ isActive }) => isActive ? "navbar-item is-active" : "navbar-item"}>
                            About Me
                        </NavLink>

                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "navbar-item is-active" : "navbar-item"}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-item is-active" : "navbar-item"}>
                            Contact
                        </NavLink>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? "navbar-item is-active" : "navbar-item"}>
                            Resume
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
