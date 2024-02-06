import React from 'react';
import "../Portfolio/portfolio.css";
import weather from "/Images/weather.jpg";
import doodle from "/Images/doodle.jpg";
import ecommerce from "/Images/Ecommerce.png";
import employee from "/Images/employee.jpg";
import read from "/Images/read.jpg";
import note from "/Images/note.jpg";
const Portfolio = () => {
  const portfolioLinks = [
    { title: 'Travel Weather', description: 'Using a 3rd Party API to find and display the weather in a given city', url: 'https://recceraven.github.io/TravelWeather/', imageUrl: weather },
    { title: 'DoodleDrop', description: 'Using authenticated sessions and storing images in a database.', url: 'https://doodledrop-7357eeb23db1.herokuapp.com/login', imageUrl: doodle },
    { title: 'Ecommerce Back End', description: 'CRUD operations in relational databases', url: 'https://github.com/RecceRaven/EcommerceBackEnd', imageUrl: ecommerce },
    { title: 'Employee Tracker', description: 'MySQL tables and using Inquirer to perform CRUD operations', url: 'https://github.com/RecceRaven/EmployeeTracker', imageUrl: employee },
    { title: 'ReadMe Generator', description: 'Inuirer project. Uses input to create a ReadMe.md', url: 'https://github.com/RecceRaven/readMeGenerator', imageUrl: read },
    { title: 'Note Taker', description: 'Storing values in local storage and deleting them', url: 'https://uoftnotetaker-92411d3db1ce.herokuapp.com/', imageUrl: note },
  ];

  return (
      <div className="columns is-multiline">
        {portfolioLinks.map((link, index) => (
          <div key={index} className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={link.imageUrl} alt={link.title} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">{link.title}</p>
                <p className="subtitle is-6">{link.description}</p>
                <a href={link.url} className="button" id="portBtn">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Portfolio;
