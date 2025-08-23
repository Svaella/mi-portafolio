// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./sections/Inicio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Aptitudes from "./components/Aptitudes";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Aptitudes />
      <Contacto />
    </>
  );
}

export default App;
