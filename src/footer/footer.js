import React from "react";
import "./footer.css";

const Footer = ({ copyright, title, lien }) => (
  <div className="footer">
    <h1>
      <i>{title}</i>
    </h1>
    <a className="lien" href="">
      {" "}
      {lien}
    </a>
    <p>{copyright}</p>
  </div>
);

export default Footer;
