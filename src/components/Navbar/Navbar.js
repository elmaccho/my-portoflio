import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({isOpen, closeMenu}) {
  return (
    <nav className={isOpen ? 'toggle' : ''}>
      <button className="closeMenuBtn" onClick={closeMenu}>
        <FontAwesomeIcon icon={faXmark}/>
      </button>
      <div className="page-title">
        <h1>Maciej Chojnacki</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
      <div className="navbar-content">
        <div className="navbar-links">
          <a href="#">Start</a>
          <a href="#">O mnie</a>
          <a href="#">Projekty</a>
          <a href="#">Kontakt</a>
        </div>
        <MainBtn content="Pobierz CV" />
      </div>
    </nav>
  );
}
