import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Inicio.css";
import profile from "../assets/profile.png";
import cvFile from "../assets/CV_Sergio_Vaella.pdf";


const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-content">
        <div className="texto">
          <h1>Hola, soy <span>Sergio Vaella</span></h1>
          <p>
            Ing. de Computación y Sistemas<br />con experiencia en{" "}
            <span className="typewriter">
                <Typewriter
                    words={["Gestión de Proyectos", "Desarrollo Web", "Desarrollo Móvil", "Diseño UX/UI"]}
                    loop={true}
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                />
            </span>
          </p>
          <div className="botones">
            <a href="#contacto" className="btn btn-oscuro">Contáctame</a>
            <a href={cvFile} download="CV_Sergio_Vaella.pdf" className="btn btn-claro">
              Descargar CV
            </a>
          </div>
        </div>
        <div className="foto">
          <img src={profile} alt="Foto de perfil" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
