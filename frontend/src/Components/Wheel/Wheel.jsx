import React from "react";
import "./Wheel.css";
import { Link, useNavigate } from "react-router-dom";

const Wheel = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="menu">
        <span className="navheading">NFS MOST-WANTED</span>
        <div className="menuopt">
          <button
            className="wheel1"
            onClick={() => handleButtonClick("/Search")}
            id="option4"
          ></button>
          <div>
            <span className="rise">Search</span>
          </div>
        </div>
        <div className="menuopt">
          <button
            className="wheel1"
            onClick={() => handleButtonClick("/About_us")}
            id="option2"
          ></button>
          <div>
            <span className="rise">About Us</span>
          </div>
        </div>
        <div className="menuopt">
          <button
            className="wheel1"
            onClick={() => handleButtonClick("/Vision")}
            id="option1"
          ></button>
          <div>
            <span className="rise">Vision</span>
          </div>
        </div>
        <div className="menuopt">
          <button
            className="wheel1 lastopt"
            onClick={() => handleButtonClick("/Features")}
            id="option3"
          ></button>
          <div>
            <span className="rise">Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
