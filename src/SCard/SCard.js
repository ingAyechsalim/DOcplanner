import React from "react";
import "./SCard.css";

const SCard = ({ imcard, title, description, background }) => (
  <div className="Scard" style={{ background: background }}>
    <h>
      <i>{title}</i>
    </h>
    <p>{description}</p>
    <img className="imagescard" src={imcard} />
  </div>
);

export default SCard;
