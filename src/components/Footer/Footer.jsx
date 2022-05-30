import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Dante Thuta
      </a>

      <ul className="permaLinks">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__social-icons">
        <a href="" className="footer__social-icon">
          <FaFacebook />
        </a>
        <a href="" className="footer__social-icon">
          <AiFillTwitterSquare />
        </a>
        <a href="" className="footer__social-icon">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Dante Portfolio{" "}
          <span className="copyright__letter">All Rights Reserved.</span>{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
