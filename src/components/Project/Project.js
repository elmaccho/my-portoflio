import React, { useState } from "react";
import "./Project.css";
import MainBtn from "components/MainBtn/MainBtn";

import { faCode, faGlobe, faImage } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Button, Modal } from "react-bootstrap";

import mainpage from "Images/projects/Startpageall.png";
import register1 from "Images/projects/Rejestracja1edu.png";
import register2 from "Images/projects/Rejestracja2edu.png";
import login from "Images/projects/logowanieedutech.png";

export default function Project({
  title = "",
  hasCode = false,
  hasLive = false,
  isImage = false,
  codeLink = "",
  liveLink = "",
  imageLink = "",
  techList = [],
  projectType = "",
}) {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

  return (
    <div className="project-wrapper"  data-aos="fade-up">
      <div className="project-image">
        <img className="project-img" src={imageLink} alt="Project Card" />
      </div>
      <div className="tech-container">
        {techList.map((tech, index) => (
          <button className="tech-button" key={index}>
            {tech}
          </button>
        ))}
      </div>
      <div className="project-title">{title && <h3>{title}</h3>}</div>
      <div className="action-wrapper">
        {hasCode && (
          <a href={`${codeLink}`} target="_blank">
            <MainBtn content="Zobacz kod " icon={faCode}></MainBtn>
          </a>
        )}
        {hasLive && (
          <a href={`${liveLink}`} target="_blank">
            <MainBtn dark={true} content="Odwiedź stronę " icon={faGlobe} />
          </a>
        )}
        {isImage && (
          <div>
            <MainBtn
              dark={true}
              content="Podgląd "
              icon={faImage}
              onClickEvent={() => setLgShow(true)}
            />
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {title !== "Projekt Strony EduTech" ? (
                  <img className="uiux-modal-image" src={imageLink} />
                ) : (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Logowanie</Accordion.Header>
                        <Accordion.Body>
                          <img className="uiux-modal-image" src={login} alt="Project Card" />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Rejestracja</Accordion.Header>
                        <Accordion.Body>
                          <img className="uiux-modal-image" src={register1} alt="Project Card" />
                          <img className="uiux-modal-image" src={register2} alt="Project Card" />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Strona główna</Accordion.Header>
                        <Accordion.Body>
                          <img className="uiux-modal-image" src={mainpage} alt="Project Card" />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="modal-close"
                >
                  Zamknij
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
