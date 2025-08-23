// src/components/SobreMi.jsx
import React from "react";
import "./SobreMi.css";
import iconoDev from "../assets/dev-icon.png"; // Cambia la ruta si usas otro nombre

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <h2 className="titulo">Sobre mí</h2>
      <p className="descripcion">
        Soy estudiante de décimo ciclo de Ingeniería de Computación y Sistemas, 
        con 21 años de edad y muchas ganas de crecer profesionalmente. Me motiva aprender 
        nuevas tecnologías y desarrollar soluciones que aporten valor; actualmente busco 
        adquirir experiencia práctica en el sector tecnológico.
      </p>
      <div className="icono">
        <img src={iconoDev} alt="Icono desarrollador" />
      </div>
    </section>
  );
};

export default SobreMi;
