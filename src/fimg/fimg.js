import React from "react";
import "./fimg.css";

const Fimg = ({ title, place, background }) => (
  <div className="fimg">
    <img className="imagescard" src={background} />
    <div className="descriptionplace">
      <h1 className="titleplace">{title}</h1>
      <input className="butoonVisit" type="button" value={place} />
    </div>{" "}
  </div>
);

export default Fimg;
