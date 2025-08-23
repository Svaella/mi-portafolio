// src/components/ModalProyecto.jsx
import React from "react";
import "./ModalProyecto.css";
import ProyectoLink from "../assets/external-link.png";

const ModalProyecto = ({ proyecto, onClose }) => {
  if (!proyecto) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-info">
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.descripcion}</p>

          {proyecto.funcionalidades && (
            <>
              <h4>Funcionalidades:</h4>
              <ul>
                {proyecto.funcionalidades.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <h4>Tecnologías usadas</h4>
          <div className="tech-list">
            {proyecto.tecnologias.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-buttons">
            <div className="main-buttons">
              {proyecto.linkFrontend && (
                <a href={proyecto.linkFrontend} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver Frontend
                </a>
              )}
              {proyecto.linkBackend && (
                <a href={proyecto.linkBackend} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver Backend
                </a>
              )}
            </div>

            {proyecto.linkDemo && (
              <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                <img src={ProyectoLink} alt="Demo externa" />
              </a>
            )}
          </div>
        </div>

        <div className="modal-img">
          <img src={proyecto.imagen} alt={proyecto.nombre} />
        </div>
      </div>
    </div>
  );
};

export default ModalProyecto;
