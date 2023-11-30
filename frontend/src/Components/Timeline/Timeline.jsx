import React from "react";
import "./Timeline.css"; // Assuming you have a separate CSS file

const Timeline = () => {
  return (
    <div className="Features">
      <section id="timeline">
        <ul className="line">
          <li>
            <div className="cont">
              <h3>Why name it NFS MOSTWANTED?</h3>
              <p>
                Its a racing game launched on 30 October 2012 Its an integral
                part of your childhood and the Abbreviation Need For Security
                aligns with our vision
              </p>
              <time>16 nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>What it does?</h3>
              <p>
                We provide you with the opportunity to have a look at your
                Digital Footprint and bring out information publicly available
                about you.
              </p>
              <time>16 nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>How does it work?</h3>
              <p>
                We are using BeautifulSoup (Bs4) to webscrap information based
                on the details you provide and train a ML model using Scikit
                learn and naive bayes algorithm.
              </p>
              <time>16 nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>What information can you get from us?</h3>
              <p>
                We are Currently under Development and can find the gender and
                occupation and find images related to the information you give
                us.
              </p>
              <time>16 nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Future Scope?</h3>
              <p>
                We plan on creating the most versatile web application which
                would find everything and anything available about a person
                making it a Forensic tool.We are currently short of FUNDS
              </p>
              <time>16 nov, 2016</time>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
