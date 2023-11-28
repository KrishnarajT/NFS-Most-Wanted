import React from "react";
import "../Card/Card.css";
import aboutus from "../../Resources/Images/aboutus.webp";
import search from "../../Resources/Images/search.webp";
import vision from "../../Resources/Images/wheel.png";
import performance from "../../Resources/Images/performance.png";

const Card = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={aboutus} />
            <h3>Design</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={search} />
            <h3>Code</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={vision} />
            <h3>Launch</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={performance} />
            <h3>Launch</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
