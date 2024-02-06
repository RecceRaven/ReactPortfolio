import React from 'react';
import "../Portfolio/portfolio.css";

const Portfolio = () => {
  const portfolioLinks = [
    { title: 'Travel Weather', description: 'Using a 3rd Party API to find and display the weather in a given city', url: 'https://recceraven.github.io/TravelWeather/', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/289148655-b3905a16-bc0e-47df-9a0e-f8d88e3c5c99.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDk4MjEsIm5iZiI6MTcwNzEwOTUyMSwicGF0aCI6Ii8xNDk4NTA1NDEvMjg5MTQ4NjU1LWIzOTA1YTE2LWJjMGUtNDdkZi05YTBlLWY4ZDg4ZTNjNWM5OS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTA1MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZjkzZWY0ZWI4MGJmZmNkNjg3MTgzNzM3Yzg2YzM0MDdkYTEwNzliNzQxMDBkOTEyZTMzODc5ZmZmYTM4MTdjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jB3kKxLmRJZ1NJKEizGRvIDwnDZO_2mnqnRbrHHYmns' },
    { title: 'DoodleDrop', description: 'Using authenticated sessions and storing images in a database.', url: 'https://doodledrop-7357eeb23db1.herokuapp.com/login', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/297100909-e2607894-83fe-4613-acf0-d14e253e2afb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDk2NjgsIm5iZiI6MTcwNzEwOTM2OCwicGF0aCI6Ii8xNDk4NTA1NDEvMjk3MTAwOTA5LWUyNjA3ODk0LTgzZmUtNDYxMy1hY2YwLWQxNGUyNTNlMmFmYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTAyNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMTA0YWRlOTcyZDVkZGMxZmZkNzM0NGQ2ZjUyZWU2YjE1MmViMjcxMGRmY2MwOThiNmRmZmY0YTI4OWJhNjIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.myo0YhJeJzppZVhTGOgHvg7T3Tp-L72s1ClMr2ufgMg' },
    { title: 'Ecommerce Back End', description: 'CRUD operations in relational databases', url: 'https://github.com/RecceRaven/EcommerceBackEnd', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/300335673-add7176d-9692-470d-a08c-45f6e15e51ac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDk4NjcsIm5iZiI6MTcwNzEwOTU2NywicGF0aCI6Ii8xNDk4NTA1NDEvMzAwMzM1NjczLWFkZDcxNzZkLTk2OTItNDcwZC1hMDhjLTQ1ZjZlMTVlNTFhYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTA2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYmIxNzIwMTI3M2YxNjhlY2FkNGY3MjlkYmRmM2E3NTY3NjU5NDJjMmY1ZDg1NDFmYzNjMDBmMjIyZjEyODk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Jc_9N746NOeTJfHhnFCO56epIPMcWvtIjjEwUd11DH4' },
    { title: 'Employee Tracker', description: 'MySQL tables and using Inquirer to perform CRUD operations', url: 'https://github.com/RecceRaven/EmployeeTracker', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/298794029-0e95f0ea-ffe6-4a7e-b2cb-b46973486eec.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDk5MTUsIm5iZiI6MTcwNzEwOTYxNSwicGF0aCI6Ii8xNDk4NTA1NDEvMjk4Nzk0MDI5LTBlOTVmMGVhLWZmZTYtNGE3ZS1iMmNiLWI0Njk3MzQ4NmVlYy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTA2NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOGU0ZGFmNWMwYWJlOTZiZTFhYTVkMWNjMzhiMGQ3OWFiMTU5MTI2ZjEyZDJlOGQwYmRmMzkzNzczNTRiMGUyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.KgH7WjbHMSmgrY-VbPrHKDdZvBFZhaPLOYAMxGnmmM8' },
    { title: 'ReadMe Generator', description: 'Inuirer project. Uses input to create a ReadMe.md', url: 'https://github.com/RecceRaven/readMeGenerator', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/295111470-485cfd02-b90c-46a1-929c-b51c29819e87.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDk5NjgsIm5iZiI6MTcwNzEwOTY2OCwicGF0aCI6Ii8xNDk4NTA1NDEvMjk1MTExNDcwLTQ4NWNmZDAyLWI5MGMtNDZhMS05MjljLWI1MWMyOTgxOWU4Ny5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTA3NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YmEzZjRkODkyZGY2ZGVjODYwYzY5MzI1NWZiMDUzMmJmN2RlOThhODc2YjZlY2ZlYWUxY2YyNjhjOWEwZDlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ucCcp15cYr8iCMMhuxm9pW2ySGk2HQ_aoShd3sv2EFE' },
    { title: 'Note Taker', description: 'Storing values in local storage and deleting them', url: 'https://uoftnotetaker-92411d3db1ce.herokuapp.com/', imageUrl: 'https://private-user-images.githubusercontent.com/149850541/295107641-38d8b7c5-8d5c-4e56-ab13-c7d9eef744c2.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMTAwMzEsIm5iZiI6MTcwNzEwOTczMSwicGF0aCI6Ii8xNDk4NTA1NDEvMjk1MTA3NjQxLTM4ZDhiN2M1LThkNWMtNGU1Ni1hYjEzLWM3ZDllZWY3NDRjMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwNTA4NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMzc5NDMzOTE4ZmI2ODI5NDkzNzJmYmZiMzFhNTEwMTE0NjdmMzAyNjE5ZjM3MTJkMGZjNTQyNTU4MWRiMGMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QAqdy01yH6pPSAItVhJYV00a5l6DRSyHgJYVTwsNuRU' },
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
