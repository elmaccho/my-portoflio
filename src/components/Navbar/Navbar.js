import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CVdownload from "components/CVdownload/CVdownload";

export default function Navbar({isOpen, closeMenu}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${isOpen ? 'toggle' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <button className="closeMenuBtn" onClick={closeMenu}>
        <FontAwesomeIcon icon={faXmark}/>
      </button>
      <div className="page-title">
        <h1>Maciej Chojnacki</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
      <div className="navbar-content">
        <div className="navbar-links">
          <Link activeClass="active" spy={true} className="nav-item" to="start" smooth={true} duration={500}>Start</Link>
          <Link activeClass="active" spy={true} className="nav-item" to="about" smooth={true} duration={500} offset={-100}>O mnie</Link>
          <Link activeClass="active" spy={true} className="nav-item" to="projects" smooth={true} duration={500}>Projekty</Link>
          <Link activeClass="active" spy={true} className="nav-item" to="contact"  smooth={true}>Kontakt</Link>
        </div>
        <CVdownload/>
      </div>
    </nav>
  );
}
