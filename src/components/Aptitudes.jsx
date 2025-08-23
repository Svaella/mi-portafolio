// Aptitudes.jsx
import React from "react";
import "./Aptitudes.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import Dart from "../assets/dart.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";
import Docker from "../assets/docker.png";
import ReactIcon from "../assets/react.png";
import Angular from "../assets/angular.png";
import Java from "../assets/java.png";
import PostgreSQL from "../assets/postgresql.png";
import GoogleCloud from "../assets/googlecloud.png";
import BrainLight from "../assets/brainlight.png";

const developerSkills = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JS", icon: JS },
  { name: "Dart", icon: Dart },
  { name: "Python", icon: Python },
  { name: "Git", icon: Git },
  { name: "Docker", icon: Docker },
  { name: "React", icon: ReactIcon },
  { name: "Angular", icon: Angular },
  { name: "Java", icon: Java },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Google Cloud", icon: GoogleCloud }
];

const softSkills = [
  {
    title: "Trabajo colaborativo",
    description:
      "Trabajar eficazmente con otros, compartir conocimientos y contribuir a un ambiente de equipo positivo son vitales para obtener resultados exitosos del proyecto."
  },
  {
    title: "Pesamiento Crítico",
    description:
      "Trabajar eficazmente con otros, compartir conocimientos y contribuir a un ambiente de equipo positivo son vitales para obtener resultados exitosos del proyecto."
  },
  {
    title: "Adaptabilidad",
    description:
      "Trabajar eficazmente con otros, compartir conocimientos y contribuir a un ambiente de equipo positivo son vitales para obtener resultados exitosos del proyecto."
  }
];

export default function Aptitudes() {
  return (
    <section id="aptitudes" className="aptitudes-section">
      <h2 className="aptitudes-title">Aptitudes</h2>

      <div className="skills-category">
        <div className="section-heading">
          <h3>Developer</h3>
        </div>
        <div className="skills-grid">
          {developerSkills.map((skill, index) => (
            <div key={index} className="skill-box fade-in">
              <div className="skill-border-animate" />
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <div className="section-heading">
          <h3>Soft Skills</h3>
        </div>
        <div className="soft-skills-container">
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item fade-in">
                <div className="text-content">
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="soft-skill-icon">
            <img src={BrainLight} alt="Soft Skills" className="cyan-filter" />
          </div>
        </div>
      </div>
    </section>
  );
}
