/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Dante Thuta</h1>
        <h2>Web Developer</h2>
        <h5 className="text-white"> Lorem ipsum dolor sit amet consectetur.</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="me">
          <img src={Me} alt="Image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
