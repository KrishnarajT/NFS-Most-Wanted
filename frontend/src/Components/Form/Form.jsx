import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import "../Button/Button.css";

const Form = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    workplace: "",
    city: "",
    github: "",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // State to hold the response from the POST request
  const [postResponse, setPostResponse] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error for the current field when the user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    // Check if required fields are empty
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if no errors
  };

  // Handle form submission
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    // Validate the form
    if (validateForm()) {
      try {
        // Send form data as JSON to the server
        response = await axios.post("http://localhost:8000/submit", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);

        // Instead of extracting specific fields from response.data,
        // send the entire response.data object to the "/Summary" page
        navigate("/Summary", { state: { responseData: response.data } });
      } catch (error) {
        console.error("Error submitting form:", error);
        response = {
          gender: "Male",
          profession: "Arts",
          images_links: [
            "/images/branding/searchlogo/1x/googlelogo_desk_heirloom_color_150x55dp.gif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAQVvd5YZz0viFU9zHyYwu64yecsCgLwp8lQ6-wmm-zW2Zg3MhL7zNwZPuXM&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs0EEB5Y2Hz0JzS-r-6sEL2abXXLS9zRFlvHHIF0c47Qa8xgAIdp61y4fV3w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1lk3_vMQjZpLBXxVvNITpDbzQWYZEWkVi2g7fcn-FJYAW-3aYqMMtz2mYlE&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5Hq38epmFrKef8KQgL2_x8IsuaKlvcX3CF7vD-37ksoEZ1_e2-S0vwNMfA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PyIS_-vOZih-UTpqeCCjM28S70_9xspnCODmpb3PkMu5DoLZzfRFDixUYe4&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL-JTR9kiTbkVJqEfccqog1dgNpn0fp0-YGdV-5Ymr8TLdsoMkr_Kars1IrI&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGFDoRSWlxozIdDds_a54kQucUuTKPoFwYIGDeSSGb8fQh80rooYNxZxrxQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG8ZyXS-oPscs-olAidA-_U2BXwAozsVGLEsKgKUWIqPXFywPkHSLYGfcnA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01LARAUiTiMC3LnVPq_gexxcT7pN6nO6rFAWuQJyEyJVB7SyqP_eWQ-H951A&s",
          ],
        };
        navigate("/Summary", { state: { responseData: response } });
      }
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
  };

  return (
    <div className="formbody">
      <div className="formcontainer">
        <div className="formtext">Wanna Find something Crazy?</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                placeholder="Enter your First Name"
              />
              <div className="underline"></div>
              <label htmlFor="first_name" className="formlabel"></label>
              <div className="error-message">{formErrors.first_name}</div>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
                placeholder="Enter your Last Name"
              />
              <div className="underline"></div>
              <label htmlFor="last_name" className="formlabel"></label>
              <div className="error-message">{formErrors.last_name}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your Email Address"
              />
              <div className="underline"></div>
              <label htmlFor="email" className="formlabel"></label>
              <div className="error-message">{formErrors.email}</div>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="workplace"
                value={formData.workplace}
                onChange={handleInputChange}
                required
                placeholder="Enter your Workplace"
              />
              <label htmlFor="workplace" className="formlabel"></label>
              <div className="error-message">{formErrors.workplace}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="Enter your City"
              />
              <div className="underline"></div>
              <label htmlFor="city" className="formlabel"></label>
              <div className="error-message">{formErrors.city}</div>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                required
                placeholder="Enter your GitHub ID"
              />
              <label htmlFor="github" className="formlabel"></label>
              <div className="error-message">{formErrors.github}</div>
            </div>
          </div>
          <div className="mybutton">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
