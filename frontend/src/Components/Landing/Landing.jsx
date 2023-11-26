import React from "react";
import vid from "../../Resources/Videos/bgvid.mp4";
import "../Landing/Landing.css";

const Landing = () => {
  return (
    <div className="bg">
      <video src={vid} autoPlay muted />
      <div className="content">
        <h1 className="main-heading">NFS</h1>
        <h1>MOST WANTED</h1>
        <div className="word"></div>
        <div className="menu">
          <button className="wheel" id="option4"></button>
          <button className="wheel" id="option2"></button>
          <button className="wheel" id="option1"></button>
          <button className="wheel" id="option3"></button>
          <div className="Options rise">
            <span>Search</span>
            <span> About us</span>
            <span> Vision</span>
            <span id="lastopt"> Key Features</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
