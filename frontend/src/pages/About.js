import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import "./About.css";


const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="aboutbody">
        <div className="Devs">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default About;
