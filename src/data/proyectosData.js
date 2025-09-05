// src/data/proyectosData.js
import PropredictImg from "../assets/Propredict-img.png";
import BuscadorPeliculasImg from "../assets/FindyourMovie-img.png";
import IMCCalculatorImg from "../assets/IMCalculator-img.png";
import ProyectoLink from "../assets/external-link.png";
import AtensionImg from "../assets/Atension-img.png";
import EvalHTAImg from "../assets/EvalHTA-img.png";
import EvalHTAVideo from "../assets/Recorrido de la App.mp4";

// Datos de los proyectos

const proyectosWeb = [
  {
    id: 1,
    titulo: "Pro Predict",
    descripcion: "Aplicación Web para predecir el precio de venta de una vivienda en el Perú, mediante un modelo de machine learning.",
    imagen: PropredictImg,
    funcionalidades: ["Funcionalidad 1", "Funcionalidad 2", "Funcionalidad 3"],
    tecnologias: ["HTML", "CSS", "JavaScript", "Python", "FastAPI", "Machine Learning"],
    linkFrontend: "https://github.com/Svaella/pro_predict_frontend.git",
    linkBackend: "https://github.com/Svaella/pro_predict_backend.git",
    demo: ProyectoLink,
    linkDemo: "https://cute-puppy-e35046.netlify.app/"
  },
  {
    id: 2,
    titulo: "Buscador de Películas",
    descripcion: "Aplicación web que permite buscar películas usando la API de OMDb. Muestra resultados con póster, año y título, y ofrece una vista detallada con sinopsis y género de la película deseada",
    imagen: BuscadorPeliculasImg,
    funcionalidades: ["Buscar películas por título o palabra clave usando la API de OMDb", "Mostrar resultados con póster, título y año en tarjetas organizadas", "Visualizar detalles de cada película en un modal (sinopsis, año, género)"],
    tecnologias: ["HTML", "CSS3", "JavaScript(Vanilla)","OMDb API"],
    linkFrontend: "https://github.com/Svaella/buscador-peliculas.git",
    linkBackend: "https://github.com/Svaella/buscador-peliculas.git",
    demo: ProyectoLink,
    linkDemo: "https://find-your-movie-ptf.netlify.app/"
  },
  {
    id: 3,
    titulo: "IMC Calculator",
    descripcion: "Página Web para calcular el Índice de Masa Corporal (IMC) con recomendaciones personalizadas.",
    imagen: IMCCalculatorImg,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkFrontend: "https://github.com/Svaella/imc-calculator.git",
    linkBackend: "https://github.com/Svaella/imc-calculator.git",
    demo: ProyectoLink,
    linkDemo: "https://imc-calculator-health.netlify.app/"
  }
];

const proyectosMovil = [
  {
    id: 4,
    titulo: "aTensión",
    descripcion: "Aplicación Móvil para valorar el riesgo de desarrollar Hipertensión Arterial y evaluar tu nivel de conocimiento sobre la enfermedad.",
    imagen: AtensionImg,
    tecnologias: ["Flutter", "Dart", "Python", "FastAPI", "Machine Learning"],
    linkFrontend: "#",
    linkBackend: "https://github.com/Svaella/app_atension_api.git"
  },
  {
    id: 5,
    titulo: "EvalHTA",
    descripcion: "Aplicación Móvil para valorar el riesgo de desarrollar Hipertensión Arterial enfocada en comparar y evaluar modelos de Machine Learning.",
    imagen: EvalHTAImg,
    tecnologias: ["Flutter", "Dart", "Python", "FastAPI", "Machine Learning"],
    linkFrontend: "https://github.com/Svaella/TallerEvalHTA-frontend.git",
    linkBackend: "https://github.com/Svaella/TallerEvalHTA.git",
    demo: ProyectoLink,
    linkDemo: EvalHTAVideo
  },
  
  
];

export { proyectosWeb, proyectosMovil };
