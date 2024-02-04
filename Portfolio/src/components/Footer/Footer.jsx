import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Developer's Portfolio</strong> by <a href="https://github.com/RecceRaven">Anthony Ramdeen</a>
                </p>
                <p>
                    <a href="https://github.com/RecceRaven" className="icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" className="icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourusername" className="icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
