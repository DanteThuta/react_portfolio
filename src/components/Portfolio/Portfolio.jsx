/* eslint-disable array-callback-return */
import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/portfolio1.jpg";
import Portfolio2 from "../../assets/portfolio2.jpg";
import Portfolio3 from "../../assets/portfolio3.jpg";
import Portfolio4 from "../../assets/portfolio4.jpg";
import Portfolio5 from "../../assets/portfolio5.png";
import Portfolio6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: Portfolio1,
      title: "This is the project Title",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
    {
      id: 2,
      img: Portfolio2,
      title: "This is the project Title 2",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
    {
      id: 3,
      img: Portfolio3,
      title: "This is the project Title 3",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
    {
      id: 4,
      img: Portfolio4,
      title: "This is the project Title 4",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
    {
      id: 5,
      img: Portfolio5,
      title: "This is the project Title 5",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
    {
      id: 6,
      img: Portfolio6,
      title: "This is the project Title 6",
      repo: "www.github.com",
      livedemo: "https://dribbble.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>Check out My Projects</h5>
      <h2>Client Favorites</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, img, title, repo, livedemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a
                  href="www.github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://dribbble.com"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
