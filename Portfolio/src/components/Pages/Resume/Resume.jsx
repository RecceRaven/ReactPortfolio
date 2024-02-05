import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Jane Doe</h1>
        <p>Email: janedoe@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/janedoe</p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>Highly motivated and skilled professional with extensive experience in software development, looking for opportunities to leverage coding skills in a challenging environment.</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>B.S. in Computer Science, University of Somewhere, 2015-2019</li>
          <li>M.S. in Software Engineering, Institute of Technology, 2019-2021</li>
        </ul>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Software Developer - XYZ Corp, Jan 2021 - Present</h3>
          <p>Developed and maintained multiple high-traffic web applications, leading to a 20% increase in customer satisfaction. Utilized technologies include React, Node.js, and AWS.</p>
        </div>
        <div>
          <h3>Junior Developer - ABC Technologies, Jul 2019 - Dec 2020</h3>
          <p>Assisted in the development of an internal project management tool, which improved team productivity by 15%. Gained experience in Agile methodologies and RESTful API integration.</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
