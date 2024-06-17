import React, { useRef } from "react";
import "./Contact.css";

import { Element } from "react-scroll";
import { message } from "react-message-popup";

import Swal from "sweetalert2";

import { useForm } from "@formspree/react";
import MainBtn from "components/MainBtn/MainBtn";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("xayrrkpk");
  if (state.succeeded) {
    Swal.fire({
      title: "Wysłano wiadomość!",
      position: "top-end",
      icon: "success",
      showConfirmButton: false,
      iconColor: "grey",
      timer: 1500,
      timerProgressBar: true,
      width: "400px",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  const textToCopy = () => {
    const copyEmail = "maciek.chojnacki22@wp.pl";

    try {
      navigator.clipboard.writeText(copyEmail);

      message.success("Skopiowano", 4000).then(({ destory }) => {
        setTimeout(() => {
          destory();
        }, 2000);
      });
    } catch (error) {
      console.log("oops...");
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
              <a
                href="https://www.facebook.com/eeeeeeee1234567890/"
                target="_blank"
                className="text-decoration-none"
              >
                <MainBtn content="Facebook" icon={faFacebookSquare} />
              </a>
              <a
                href="https://github.com/elmaccho"
                target="_blank"
                className="text-decoration-none"
              >
                <MainBtn content="Github" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/maciej-chojnacki-085615284/"
                target="_blank"
                className="text-decoration-none"
              >
                <MainBtn content="Linkedin" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                className="form-input"
                name="Fullname"
                type="text"
                placeholder="Imię i nazwisko"
                required
              />
              <input
                className="form-input"
                name="Email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="form-input"
                name="Message"
                placeholder="Wiadomość"
                required
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
