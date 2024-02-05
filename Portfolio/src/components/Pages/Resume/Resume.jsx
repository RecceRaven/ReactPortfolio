import React from 'react';
import "../Resume/resume.css"
const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Anthony Ramdeen</h1>
        <p>Email: Anthonyramdeen@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/anthony</p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>A detail oriented,  and reliable worker with a  passion for problem solving, and working in harmony with technology.</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>Georges Vanier Secondary School - 2008 </li>
          <li>University of Toronto Full Stack Developer Bootcamp</li>
        </ul>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Soldier - Canadian Armed Forces, Oct 2009 - Present</h3>
          <p>Maintain a variety of firearms, vehicles, and equipment in austere environments. Deployed domestically to fight flooding, and forest fires. Work as part of a team or in a leadership role in both administrative and combat roles.</p>
        </div>
        <div>
          <h3>Custom Fabricator - Self Employed, Jan 2018 - Dec 2021</h3>
          <p>Set up and operate fabricating machines, such as saws, routers, grinders, and drill presses, to bend, cut, form, punch, and drill or otherwise form and assemble metal, wood, and plastic components.</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
