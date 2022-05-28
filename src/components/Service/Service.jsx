import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "./service.css";

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer:</h5>
      <h2>The Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Component */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development Component */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation Component */}
      </div>
    </section>
  );
};

export default Service;
