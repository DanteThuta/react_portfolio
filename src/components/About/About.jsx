/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward, FaUser, FaUserAlt } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__meimage">
            <img src={Me} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons"></FaAward>
              <h5>Experience</h5>
              <small>+300 Courses</small>
            </article>
            <article className="about__card">
              <FaUserAlt className="about__icons"></FaUserAlt>
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icons"></FaAward>
              <h5>Projects</h5>
              <small>+100 Development</small>
            </article>
          </div>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            rerum blanditiis exercitationem inventore, ab porro temporibus
            dolorem asperiores vel quidem animi doloribus aspernatur maiores
            doloremque odio dignissimos consequatur ducimus voluptatibus?
          </p>
          <a href="" className="btn btn-primary about-btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
