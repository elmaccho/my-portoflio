import React from "react";
import "./Header.css";
import dots1 from "../../Images/header/Vector 1.svg";
import profilePicture from "../../Images/header/artworks-L49vhWJuy2FaudQW-wDuQQg-t500x500.png"

export default function Header() {
  return (
    <header>
      <div className="header-text">
        <h2>
          Cześć! <span className="dark-bg">Jestem Maciej</span>
        </h2>
        <h2>Web Developer</h2>
      </div>
      <div className="header-image">
        <img src={profilePicture} alt="Maciej Chojnacki"/>
      </div>

      <div className="dots1">
        <div className="gradient-background1"></div>
        <img src={dots1} alt="dots" />
      </div>
      <div className="dots2">
        <div className="gradient-background2"></div>
        <img src={dots1} alt="dots" />
      </div>
    </header>
  );
}
