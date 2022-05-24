/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineCustomerService,
  AiOutlineMessage,
} from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />
      </a>
      <a href="#experience">
        {" "}
        <AiOutlineBook />
      </a>
      <a href="#service">
        {" "}
        <AiOutlineCustomerService />
      </a>
      <a href="#contact">
        {" "}
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
