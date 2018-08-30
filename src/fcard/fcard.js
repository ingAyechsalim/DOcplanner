import React from "react";
import "./stylefeature.css";

const FeatureCard = ({ icon, title, description }) => (
  <div className="fcard">
    <img className="iconefcard" src={icon} />
    <p>
      <strong>{title}</strong>
    </p>
    <p>{description}</p>
  </div>
);

export default FeatureCard;
