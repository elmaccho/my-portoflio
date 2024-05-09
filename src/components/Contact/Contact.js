import React from "react";
import "./Contact.css";

import { Element } from "react-scroll";
import { message } from 'react-message-popup'

import MainBtn from "../MainBtn/MainBtn";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const textToCopy = () => {
    const copyEmail = "maciek.chojnacki22@wp.pl";

    try {
        navigator.clipboard.writeText(copyEmail);
    
        message.success('Skopiowano', 4000).then(({ destory }) => {
            setTimeout(() => {
              destory()
            }, 2000)
          })
    } catch (error) {
        console.log('oops...');
    }
  };

  return (
    <Element name="contact">
      <div className="contact-wrapper">
        <div className="contact-row">
          <hr />
          <h2>Kontakt</h2>
          <hr />
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              Jestem otwarty na nowe znajomości i projekty, więc pisz śmiało :)
            </p>
            <div className="link-wrapper">
              <MainBtn
                content="maciek.chojnacki22@wp.pl"
                icon={faEnvelope}
                onClickEvent={textToCopy}
              />
              <MainBtn 
                content="Facebook" 
                icon={faFacebookSquare} 
              />
              <MainBtn 
                content="Github" 
                icon={faGithub} 
              />
              <MainBtn 
                content="Linkedin" 
                icon={faLinkedin} 
              />
            </div>
          </div>
          <div className="form">
            <form>
              <input
                className="form-input"
                type="text"
                placeholder="Imię i nazwisko"
              />
              <input className="form-input" type="email" placeholder="Email" />
              <textarea
                className="form-input"
                placeholder="Wiadomość"
              ></textarea>

              <button className="form-button" type="submit">
                Wyślij
              </button>
            </form>
          </div>
        </div>
        <div className="contact-row">
          <hr />
          <h2>Kontakt</h2>
          <hr />
        </div>
      </div>
    </Element>
  );
}
