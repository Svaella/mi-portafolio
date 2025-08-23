// src/components/Proyectos.jsx
import React, { useState } from "react";
import "./Proyectos.css";
import ModalProyecto from "./ModalProyecto";
import { proyectosWeb, proyectosMovil } from "../data/proyectosData";


const Proyectos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section id="proyectos" className="proyectos">
      <h2 className="titulo-proyecto">Proyectos</h2>
      <div className="categoria">
        <h3>Web</h3>
        <div className="grid">
          {proyectosWeb.map((proyecto, index) => (
            <div key={index} className="card">
              <div className="imagen">{proyecto.imagen && <img src={proyecto.imagen} alt={proyecto.titulo} />}</div>
              <div className="info">
                <h4>{proyecto.titulo}</h4>
                <p>{proyecto.descripcion}</p>
                <button onClick={() => abrirModal(proyecto)}>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="categoria">
        <h3>Móvil</h3>
        <div className="grid">
          {proyectosMovil.map((proyecto, index) => (
            <div key={index} className="card">
              <div className="imagen">{proyecto.imagen && <img src={proyecto.imagen} alt={proyecto.titulo} />}</div>
              <div className="info">
                <h4>{proyecto.titulo}</h4>
                <p>{proyecto.descripcion}</p>
                <button onClick={() => abrirModal(proyecto)}>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalAbierto && (
        <ModalProyecto proyecto={proyectoSeleccionado} onClose={cerrarModal} />
      )}
    </section>
  );
};

export default Proyectos;