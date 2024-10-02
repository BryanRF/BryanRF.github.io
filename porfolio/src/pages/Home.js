import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Asegúrate de crear este archivo para los estilos personalizados
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok, FaCat, FaBook, FaGamepad } from 'react-icons/fa';
function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "El potencial humano es infinito.";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <div className="min-h-screen text-cyan-300 font-mono">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/bryan.rfr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/BryanRF"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.tiktok.com/@edu_rf"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FaTiktok className="w-6 h-6" />
        </a>
      </div>
      <div className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)">
            <circle className="pulse" cx="5%" cy="50%" r="2" fill="#4fd1c5" />
            <circle className="pulse" cx="95%" cy="30%" r="3" fill="#63b3ed" />
            <circle className="pulse" cx="80%" cy="70%" r="2" fill="#f6ad55" />
            <circle className="pulse" cx="10%" cy="10%" r="4" fill="#f687b3" />
          </g>
        </svg>

        <div className="relative z-10 text-center px-4 py-8 md:py-0">
          <h2 className="greeting font-mono mb-4 md:mb-6 text-white">
            Hola, <span className="text-cyan-300">soy Brayan ✌</span>
          </h2>

          <h2 className="mb-6 md:mb-8 text-3xl md:text-5xl lg:text-6xl font-bold mx-auto dark:text-gray-200 text-gray-800 text-center py-2">
            Software Developer
          </h2>
          <div className="bg-gray-900 bg-opacity-60 p-4 md:p-8 rounded-lg shadow-xl border border-cyan-600 max-w-2xl mx-auto backdrop-filter backdrop-blur-sm">
            <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-300">
              Ingeniero de sistemas, con 2 años de experiencia en el desarrollo
              de soluciones tecnológicas.
            </p>

            <div className="">
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-cyan-300">
                Sobre mi:
              </h5>
              <ul className="mb-4 md:mb-6 space-y-2 text-gray-200 text-sm md:text-base">
                <li className="flex items-center justify-center">
                  <i className="fas fa-cat text-yellow-400 mr-2"></i>Me gustan
                  los gatos
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-book text-indigo-400 mr-2"></i>Lector
                  ávido de ciencia ficción
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-gamepad text-red-400 mr-2"></i>Gamer en
                  mis tiempos libres
                </li>
              </ul>
              <h5 className="text-lg md:text-xl font-semibold mb-2 text-cyan-300">
                Skills:
              </h5>
              <span align="center" className="mb-2">
                <a href="https://skillicons.dev">
                  <img
                    src="https://skillicons.dev/icons?i=git,aws,vue,firebase,java,firebase,linux,nextjs,py,react,php&perline=14"
                    alt="Skills"
                  />
                </a>
              </span>
              <br />
              <div className="container mt-2">
                <Link to="/projects" className="button type--C">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text">Mis proyectos</span>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <h3
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white typing-effect"
              id="typing-header"
            >
              {typedText}
            </h3>
          </div>
        </div>

        <div className="absolute bottom-5 left-2 floating hidden md:block">
          <svg
            className="text-2xl md:text-4xl lg:text-5xl w-12 h-12 md:w-16 md:h-16 text-cyan-300 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </div>
        <div
          className="absolute top-5 right-2 floating hidden md:block"
          style={{ animationDelay: "-2s" }}
        >
          <svg
            className="text-2xl md:text-4xl lg:text-5xl w-12 h-12 md:w-16 md:h-16 text-blue-300 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
