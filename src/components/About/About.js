import React from "react";
import "./About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faVuejs,
  faReact,
  faPhp,
  faLaravel,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <div className="about-wrapper" id="about">
        <div className="tech-wrapper">
          <h2 className="title">Technologie z którymi pracuję</h2>
          <div className="frontend-wrapper">
            <h3>Frontend</h3>
            <div className="tech-content">
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faHtml5} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faCss3} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faJs} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faBootstrap} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faVuejs} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faReact} className="tech-icon" />
              </div>
            </div>
          </div>
          <div className="backend-wrapper">
            <h3>Backend</h3>
            <div className="tech-content">
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faPhp} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faDatabase} className="tech-icon" />
              </div>
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faLaravel} className="tech-icon" />
              </div>
            </div>
          </div>
          <div className="design-wrapper">
            <h3>Design</h3>
            <div className="tech-content">
              <div className="tech-ellypse">
                <FontAwesomeIcon icon={faFigma} className="tech-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-text-wrapper">
          <h2>
            O <span className="dark-bg">mnie</span>
          </h2>
          <p>
            Jestem Maciej, a moja przygoda z programowaniem stron internetowych
            rozpoczęła się w 2022 roku. Specjalizuję się zarówno w obszarze
            Frontendu, jak i Backendu. Moją pracą jest implementacja responsywnych
            interfejsów użytkownika, głównie przy użyciu technologii takich jak
            HTML, CSS i JavaScript. Zależy mi na tym, aby strony były nie tylko
            atrakcyjne wizualnie, ale także łatwe w nawigacji. Ponadto, jako osoba
            odpowiedzialna za Backend, dbam o funkcjonalność stron, wykorzystując
            język PHP oraz różne frameworki.
          </p>
          <p>
            Poza pracą, uwielbiam aktywność fizyczną, taką jak gra w piłkę
            siatkową, sztuki walki oraz wędrówki po górach. Aktywność fizyczna
            jest dla mnie nie tylko sposobem na utrzymanie formy, ale także
            źródłem radości i równowagi między życiem zawodowym a osobistym.
          </p>
        </div>
      </div>
    </Element>
  );
}
