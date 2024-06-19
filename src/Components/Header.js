import React from "react";
import "./Headers.css";
function Header() {
  return (
    <div className="container">
      <div className="title">
      <li className="titlename">
        <a href="#">Anbuvel S</a>
      </li>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        {/* <li>
          <a href="#">Experience</a>
        </li> */}
        <li>
          <a href="#">Contact</a>
        </li>
        <div className="downloadCv">
          {/* <a href="../Assets/anburesume.pdf" download={"resume"}>Download CV</a> */}
          <a href="#">Download CV</a>
        </div>
      </ul>
     
    </div>
  );
}

export default Header;
