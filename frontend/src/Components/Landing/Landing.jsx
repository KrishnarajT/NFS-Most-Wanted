import React from "react";
import vid from "../../Resources/Videos/bgvid.mp4";
import "../Landing/Landing.css";
var words = [
    "N F S",
    "NEED FOR SECURITY",
    "Check for Your Digital Footprint",
    "Stay safe Because",
    "Privacy is a myth",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

const Landing = () => {
  return (
    <div className="bg">
      <video src={vid} autoPlay muted />
      <div className="content">
        <h1 className="main-heading">NFS</h1>
        <h1>MOST WANTED</h1>
        <div className="word"></div>
        <div className="menu">
          <button className="wheel" id="option1"></button>
          <button className="wheel" id="option2"></button>
          <button className="wheel" id="option3"></button>
          <button className="wheel" id="option4"></button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
