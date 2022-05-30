import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jhcaotc",
        "template_po06lwp",
        form.current,
        "PdUjRo2xOO5ncnE3E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>How to Contact </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__icon" />
            <h5>Email</h5>
            <h2>dantethuta97@gmail.com</h2>
            <a href="mailto:dantethuta97@gmail.com" className="contact__link">
              Email Me!{" "}
            </a>
          </article>
          <article className="contact__option">
            <AiFillMessage className="contact__icon" />
            <h5>Facebook</h5>
            <h2>Dante Thuta</h2>
            <a href="http://m.me/devin.crise">Message Me! </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__icon" />
            <h5>WhatApps</h5>
            <a href="mailto:dantethuta97@gmail.com">Message Me! </a>
          </article>
        </div>
        {/* Form Section */}
        <form
          action=""
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Primary Email"
            required
          />
          <textarea
            rows="7"
            cols="5"
            placeholder="Enter Your Thoughts"
            name="message"
          ></textarea>

          <button className="btn btn-primary contact__btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
