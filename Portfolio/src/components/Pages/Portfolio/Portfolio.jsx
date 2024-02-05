import React from 'react';
import "../Portfolio/portfolio.css";

const Portfolio = () => {
  const portfolioLinks = [
    { title: 'Travel Weather', description: 'Description of Project 1', url: '#', imageUrl: 'path/to/image1.jpg' },
    { title: 'DoodleDrop', description: 'Description of Project 2', url: '#', imageUrl: 'path/to/image2.jpg' },
    { title: 'Ecommerce Back End', description: 'Description of Project 3', url: '#', imageUrl: 'path/to/image3.jpg' },
    { title: 'Employee Tracker', description: 'Description of Project 4', url: '#', imageUrl: 'path/to/image4.jpg' },
    { title: 'ReadMe Generator', description: 'Description of Project 5', url: '#', imageUrl: 'path/to/image5.jpg' },
    { title: 'Note Taker', description: 'Description of Project 6', url: '#', imageUrl: 'path/to/image6.jpg' },
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
                <a href={link.url} className="button">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Portfolio;
