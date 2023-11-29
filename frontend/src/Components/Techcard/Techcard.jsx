import React from "react";
import "./Techcard.css";
import fast from "../../Resources/Images/fast.png";
import reactimg from "../../Resources/Images/react.png";
import pyimg from "../../Resources/Images/py.png";

const Techcard = () => {
  return (
    <div className="techcardbodycontainer">
      <div class="techcontainer">
        <div class="techcard">
          <div class="techface techface1">
            <div class="techcontent">
              <img src={reactimg} />
              <h3 className="text">React</h3>
            </div>
          </div>
          <div class="techface techface2">
            <div class="techcontent">
              {" "}
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
            </div>
          </div>
        </div>
        <div class="techcard">
          <div class="techface techface1">
            <div class="techcontent">
              <img src={fast} />
              <h3 className="text">Fastapi</h3>
            </div>
          </div>
          <div class="techface techface2">
            <div class="techcontent">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
            </div>
          </div>
        </div>
        <div class="techcard">
          <div class="techface techface1">
            <div class="techcontent">
              <img src={pyimg} />
              <h3 className="text">Python</h3>
            </div>
          </div>
          <div class="techface techface2">
            <div class="techcontent">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techcard;
