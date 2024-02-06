import React from 'react';
import "../Resume/resume.css";

const Resume = () => {
  // Make sure to replace 'YOUR_FILE_ID' with the actual ID of your Google Drive file
  const resumeDownloadLink = "https://www.mediafire.com/file/ylyrkomhgnna7zf/Resume_%25288%2529.pdf/file";

  return (
    <div>
      <div className="columns">
        {/* Personal Information & Summary */}
        <div className="column is-one-third">
          <div className="box">
            <header>
              <h1 className="title is-4">Anthony Ramdeen</h1>
              <p id="info">Email: Anthonyramdeen@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/anthony</p>
            </header>
            <section className="mt-5">
              <h2 className="title is-5">Summary</h2>
              <p>A detail oriented, and reliable worker with a passion for problem solving, and working in harmony with technology. I am
                a well rounded team player with skills in developing web assets, building physical assets, and coordinating small party tasks.
              </p>
            </section>
          </div>
        </div>

        {/* Education */}
        <div className="column is-one-third">
          <div className="box" id="cenColumn">
            <section>
              <h2 className="title is-5">Education</h2>
              <ul>
                <li>Georges Vanier Secondary School - 2008</li>
                <li>University of Toronto Full Stack Developer Bootcamp - 2024</li>
              </ul>
            </section>
            <section>
              <h2 className="title is-5">Skills</h2>
              <div className="columns">
                <div className="column">
                  <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>React</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Experience */}
        <div className="column is-one-third">
          <div className="box">
            <section>
              <h2 className="title is-5">Experience</h2>
              <div>
                <h3 className="subtitle is-6">Soldier - Canadian Armed Forces, Oct 2009 - Present</h3>
                <p>Maintain a variety of firearms, vehicles, and equipment in austere environments. Deployed domestically to fight flooding, and forest fires. 
                  Work as part of a team or in a leadership role in both administrative and combat roles.</p>
              </div>
              <div>
                <h3 className="subtitle is-6">Custom Fabricator - Self Employed, Jan 2018 - Dec 2021</h3>
                <p>Set up and operate fabricating machines, such as saws, routers, grinders, and drill presses, to bend, cut, form, punch, drill or otherwise form and assemble metal, wood, and plastic components.</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Download Resume Button on a new line */}
      <div className="has-text-centered" style={{ marginTop: '20px' }}>
        <a href={resumeDownloadLink} target="_blank" rel="noopener noreferrer" className="button is-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
