import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import "./About.css";
import Techcard from "../Components/Techcard/Techcard";
import Projectdesc from "../Components/Projectdesc/Projectdesc.jsx";
import Projectdesc2 from "../Components/Projectdesc2/Projectdesc2.jsx";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="aboutbody">
        <div className="Devscard">
          <Card></Card>
        </div>
      </div>

      <div className=" about section-container">
        <section>
          <h1 className="about-heading"> Credits and Thanks</h1>
          <div>
            <br />
            <br />
            <p>
              {" "}
              This project was made as a part of the assignments for AIMLT
              Course at MIT WPU.
              <br></br>
              We are grateful to our teachers, and our parents for encouraging
              us to keep trying new stuff, without any restrictions.
              <br></br>
              None of this would be possible without their help.
              <br></br>
              <br></br>
              We are also grateful to our friends, for their inputs on the looks
              and features of the website, and for constantly encourating us to
              keep going.
            </p>
          </div>
        </section>
        <section>
          <h1 className="about-heading"> Technology Stack:</h1>
          <p>
            <Techcard />
          </p>
        </section>
        <section>
          <h1 className="about-heading">Go ahead...</h1>
          <div>
            <p>
              <Projectdesc />
            </p>
          </div>
        </section>
        <section>
          <h1 className="about-heading">Keep scrolling...</h1>
          <div>
            <p>
              <Projectdesc2 />
            </p>
          </div>
        </section>
        <section>
          <h1 className="about-heading">Ok, thats it.</h1>
        </section>
      </div>
    </div>
  );
};

export default About;
