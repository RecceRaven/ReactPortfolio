import React from 'react';
import "../AboutMe/aboutMe.css";
const AboutMe = () => {
  return (
    <section className="section about-me">
      <div className="about-me-container">
        <div className="social-links">
          <a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://linkedin.com/in/yourUsername" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://twitter.com/yourUsername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="bio-content">
          <p>
            Hello! I'm Anthony Ramdeen, a passionate web developer with a focus on creating
            engaging and efficient user experiences. With a background in [Your Background],
            I've developed a keen eye for design and a strong understanding of user-centric
            principles.
          </p>
          <p>
            I specialize in frontend technologies, including React, JavaScript, HTML, and CSS,
            but I'm always exploring new technologies and frameworks to expand my skill set. My
            goal is to build applications that not only meet user needs but also are scalable,
            maintainable, and performant.
          </p>
     
        </div>
        <div className="profile-picture">
          <img src="https://avatars.githubusercontent.com/u/149850541?v=4" alt="Anthony Ramdeen"/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
