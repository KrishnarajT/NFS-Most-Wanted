import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Loading from "../Components/Loading/Loading";
import "./Summary.css";

const Summary = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { state } = location;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!state || !state.responseData) {
    // Handle case where there is no data
    return (
      <div id="summarybody">
        <Navbar />
        <p>No data available</p>
      </div>
    );
  }

  const { gender, profession, images_links } = state.responseData;
  const links = images_links.filter((link) => !link.endsWith(".gif"));

  return (
    <div id="summarybody">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div id="Summary-main-container">
          <div id="data">
            <h2>Data:</h2>
            <p>Gender: {gender}</p>
            <p>Profession: {profession}</p>
          </div>
          {links && links.length > 0 && (
            <div id="links">
              <h2>Results:</h2>
              <div className="image-links">
                {links.map((link, index) => (
                  <div key={index} className="image-link">
                    <img src={link} alt={`Link ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Summary;
