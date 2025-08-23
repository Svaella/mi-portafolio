import React from "react";
import "./Contacto.css";
import SendIcon from "../assets/send.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png";
import Email from "../assets/correo.png";

export default function Contacto() {
  return (
    <section id="contacto" className="contact-section">
      <h2 className="contact-title">Contáctame</h2>
      <p className="contact-subtext">
        Para cualquier oferta o consulta, no dudes en contactarme a través de:
      </p>

      <div className="contact-content">
        <div className="contact-info-box">
          <div className="contact-item">
            <img src={Linkedin} alt="Linkedin" className="icon" />
            <span>link</span>
          </div>
          <div className="contact-item">
            <img src={Whatsapp} alt="WhatsApp" className="icon" />
            <span>+51 973 143 397</span>
          </div>
          <div className="contact-item">
            <img src={Email} alt="Correo" className="icon" />
            <span>sergio.vh2806@gmail.com</span>
          </div>
        </div>

        <div className="contact-image">
          <img src={SendIcon} alt="Enviar mensaje" />
        </div>
      </div>
    </section>
  );
}
