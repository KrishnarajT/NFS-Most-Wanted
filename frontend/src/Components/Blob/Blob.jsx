import React from "react";
import "./Blob.css";

const Blob = () => {
  return (
    <div className="blobcontainer ">
      <div className="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <div className="blobcontent">
          <h2>Empowering Decision-Making through Intelligent Insights:</h2>
          <p className="text">
            Envision your AIML project as a tool that empowers individuals or
            organizations by providing intelligent insights for better
            decision-making. Whether it's in the realm of business, healthcare,
            or any other domain, the project aims to harness the power of AI and
            ML to deliver actionable and data-driven recommendations, ultimately
            enhancing the quality of decisions made.
          </p>
        </div>
      </div>

      <div className="square twitter">
        <span></span>
        <span></span>
        <span></span>
        <div className="blobcontent">
          <h2>Fostering Innovation and Problem-Solving:</h2>
          <p className="text">
            Position your project as a catalyst for innovation and
            problem-solving within a specific industry or field. Express the
            vision of leveraging AI and ML to tackle complex challenges, driving
            advancements, and fostering a culture of continuous improvement.
            This could involve developing cutting-edge algorithms, predictive
            models, or automation solutions that contribute to the evolution of
            practices within the chosen domain.
          </p>
        </div>
      </div>

      <div className="square github">
        <span></span>
        <span></span>
        <span></span>
        <div className="blobcontent">
          <h2>Ensuring Ethical and Inclusive AI Practices:</h2>
          <p className="text">
            Emphasize a commitment to ethical AI practices and inclusivity in
            your project's vision. Highlight the importance of developing AI
            models and systems that prioritize fairness, transparency, and
            accountability. Consider the ethical implications of the data used,
            potential biases in algorithms, and the overall impact on diverse
            user groups. Strive to create a project that not only achieves
            technical excellence but also aligns with ethical standards and
            societal values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blob;
