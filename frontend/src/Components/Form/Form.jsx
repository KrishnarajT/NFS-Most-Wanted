import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="formbody">
      <div className="formcontainer">
        <div className="text">Contact us Form</div>
        <form className="form" action="#">
          <div className="form-row">
            <div className="input-data">
              <input type="text" required placeholder="Enter your First Name" />
              <div className="underline"></div>
              <label htmlFor="" className="formlabel"></label>
            </div>
            <div className="input-data">
              <input type="text" required placeholder="Enter your Last Name" />
              <div className="underline"></div>
              <label htmlFor="" className="formlabel"></label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                placeholder="Enter your Email Address"
              />
              <div className="underline"></div>
              <label htmlFor="" className="formlabel"></label>
            </div>
            <div className="input-data">
              <input
                type="text"
                required
                placeholder="Enter your Website Name"
              />
              <label htmlFor="" className="formlabel"></label>
            </div>
          </div>
          <div className="form-row formlabel">
            <div className="input-data textarea formlabel">
              <textarea
                rows="8"
                cols="80"
                required
                placeholder="Write your message"
              ></textarea>
              <br />
              <div className="underline formlabel"></div>
              <label htmlFor="" className="formlabel"></label>
              <br />
              <div className="form-row submit-btn aloo">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
