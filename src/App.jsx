import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonicals from "./components/Testimonicals/Testimonicals";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
