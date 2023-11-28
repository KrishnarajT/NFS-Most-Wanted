import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="aboutbody">
        <div className="Devscard">
          <Card></Card>
        </div>
      </div>

      <div class=" about section-container">
        <section>
          <h1>Each section...</h1>
        </section>
        <section>
          <h1>Full screen and slanted...</h1>
        </section>
        <section>
          <h1>Go ahead...</h1>
        </section>
        <section>
          <h1>Keep scrolling...</h1>
        </section>
        <section>
          <h1>Ok, thats it.</h1>
        </section>
      </div>
    </div>
  );
};

export default About;
