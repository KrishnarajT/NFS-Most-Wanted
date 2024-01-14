import React from "react";
import "../Card/Card.css";
import karad from "../../Resources/Images/karad.jpeg";
import parth from "../../Resources/Images/parth.png";
import saubhagya from "../../Resources/Images/saubhagya.png";
import krishnaraj from "../../Resources/Images/krishnaraj.png";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Card = () => {
  return (
    <div>
      <h1 className="dev-heading">THE DEVELOPER TEAM</h1>
      <div className="devs">
        <div className="card">
          <div className="imgBx">
            <img alt="images" src={parth} />
          </div>
          <div className="details">
            <h2>
              Parth Zarekar <br />
              <span>CSF</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={krishnaraj} alt="images" />
          </div>
          <div className="details">
            <h2>
              Krishnaraj
              <br />
              <span>Qatari</span>
            </h2>
          </div>
        </div>
        <div className="card">
          <div class="imgBx">
            <img src={saubhagya} alt="images" />
          </div>
          <div className="details">
            <h2>
              Saubhagya Singh
              <br />
              <span>Tryhard</span>
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={karad} alt="images" />
          </div>
          <div className="details">
            <h2>
              Sourab Karad
              <br />
              <span>Thala</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="iconsabout">
        <div className="parth dev1">
          <a href="+91 8796180288">
            <FaSquarePhone size="2.5rem" color="white" />
          </a>
          <a href="https://github.com/Parth4123">
            <FaGithub size="2.5rem" color="white" />
          </a>
          <a href="mailto:parthzarekar@gmail.com">
            <FaSquareEnvelope size="2.5rem" color="white" />
          </a>
          <a href="https://wa.link/biyqac">
            <FaSquareWhatsapp size="2.5rem" color="white" />
          </a>
        </div>
        <div className="krishnaraj   dev1">
          <a href="+91 9834312135">
            <FaSquarePhone size="2.5rem" color="white" />
          </a>
          <a href="https://www.github.com/KrishnarajT">
            <FaGithub size="2.5rem" color="white" />
          </a>
          <a href="mailto:kpt.krishnaraj@gmail.com">
            <FaSquareEnvelope size="2.5rem" color="white" />
          </a>
          <a href="https://wa.link/zu05s5">
            <FaSquareWhatsapp size="2.5rem" color="white" />
          </a>
        </div>
        <div className="Saubhagya dev1">
          <a href="+91 7007084088">
            <FaSquarePhone size="2.5rem" color="white" />
          </a>
          <a href="https://www.github.com/SaubhagyaSingh">
            <FaGithub size="2.5rem" color="white" />
          </a>
          <a href="mailto: saubhagyasingh65@gmail.com">
            <FaSquareEnvelope size="2.5rem" color="white" />
          </a>
          <a href="https://wa.link/vphagl">
            <FaSquareWhatsapp size="2.5rem" color="white" />
          </a>
        </div>
        <div className="karad dev1">
          <a href="+91 6281819844">
            <FaSquarePhone size="2.5rem" color="white" />
          </a>
          <a href="https://github.com/sourab777karad">
            <FaGithub size="2.5rem" color="white" />
          </a>
          <a href="mailto: karadsaisourab9@gmail.com">
            <FaSquareEnvelope size="2.5rem" color="white" />
          </a>
          <a href="https://wa.me/qr/XXI2PFLHKZH6G1">
            <FaSquareWhatsapp size="2.5rem" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
