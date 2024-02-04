import React from 'react';

const AboutMe = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">About Me</h1>
        <div className="content">
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
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            <li>React & Redux</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
