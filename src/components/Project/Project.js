import React, { useState } from "react";
import "./Project.css";
import MainBtn from "../MainBtn/MainBtn";

import { faCode, faGlobe, faImage } from "@fortawesome/free-solid-svg-icons";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

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
    <div className="project-wrapper">
      <div className="project-image">
        <img src={imageLink} alt="Project Card" />
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
                <img className="uiux-modal-image" src={imageLink} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="modal-close">
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
