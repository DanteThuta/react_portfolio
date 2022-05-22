import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="www.linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="www.facebook.com" target="_blank">
        <BsFacebook />
      </a>
      <a href="www.twitter.com" target="_blank">
        <BsTwitter />
      </a>
      <a href="www.github.com" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
