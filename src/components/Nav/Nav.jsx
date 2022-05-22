import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineCustomerService,
  AiOutlineMessage,
} from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        {" "}
        <AiOutlineHome />
      </a>
      <a href="#" className="active">
        {" "}
        <AiOutlineUser />
      </a>
      <a href="#experience" className="active">
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
