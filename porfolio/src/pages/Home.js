import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok,
  FaMapMarkerAlt,
  FaClock,
  FaCode,
  FaArrowRight,
  FaDownload,
  FaEnvelope
} from 'react-icons/fa';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Configuración de disponibilidad - Cambiar solo este valor
  const isAvailable = false; // Cambiar a false cuando esté bajo contrato

  // Cálculo automático de años de experiencia
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { 
      platform: "GitHub", 
      handle: "@BryanRF", 
      url: "https://github.com/BryanRF", 
      icon: FaGithub 
    },
    { 
      platform: "LinkedIn", 
      handle: "Brayan Rojas", 
      url: "https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/", 
      icon: FaLinkedin 
    },
    { 
      platform: "Instagram", 
      handle: "@bryan.rfr", 
      url: "https://www.instagram.com/bryan.rfr/", 
      icon: FaInstagram 
    },
    { 
      platform: "TikTok", 
      handle: "@edu_rf", 
      url: "https://www.tiktok.com/@edu_rf", 
      icon: FaTiktok 
    }
  ];

  const stats = [
    { label: "Años de experiencia", value: `${yearsOfExperience}+` },
    { label: "Proyectos completados", value: "15+" },
    { label: "Tecnologías dominadas", value: "10+" },
    { label: "Tazas de café", value: "∞" }
  ];

  // Disponibilidad dinámica basada en el estado
  const availability = {
    status: isAvailable ? "Disponible para proyectos" : "Actualmente bajo contrato",
    nextAvailable: isAvailable ? "Inmediato" : "A consultar",
    responseTime: "< 24h",
    canParticipate: isAvailable
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Status Badge */}
          <div className="flex items-center mb-8">
            <div className={`w-3 h-3 rounded-full mr-3 animate-pulse ${
              isAvailable ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm text-gray-400">{availability.status}</span>
          </div>

          {/* Main Intro */}
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Hola, soy <span className="font-normal">Brayan</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Software Developer & System Engineer
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            Ingeniero de sistemas con {yearsOfExperience} años de experiencia creando soluciones tecnológicas. 
            Me especializo en desarrollo full-stack, machine learning y arquitecturas escalables.  
            {isAvailable ? 
              " Actualmente disponible para nuevos proyectos y colaboraciones." : 
              " Actualmente trabajando."
            }
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Ver mi trabajo
              <FaArrowRight className="ml-2 text-sm" />
            </Link>
            
            <a
              href="mailto:brayan@ejemplo.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white hover:border-gray-400 transition-colors duration-200"
            >
              <FaEnvelope className="mr-2 text-sm" />
              Contactar
            </a>
            
            {isAvailable && (
              <button className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-400 hover:border-green-400 hover:bg-green-500/10 transition-colors duration-200">
                <FaDownload className="mr-2 text-sm" />
                Disponible para contratar
              </button>
            )}
            
            {!isAvailable && (
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-500 cursor-not-allowed opacity-60">
                <FaDownload className="mr-2 text-sm" />
                Actualmente ocupado
              </button>
            )}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-800"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-light mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Location & Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 pb-16 border-b border-gray-800"
        >
          <div className="flex items-center mb-4 sm:mb-0">
            <FaMapMarkerAlt className="text-gray-500 mr-3" />
            <span className="text-gray-300">Chiclayo, Perú</span>
          </div>
          
          <div className="flex items-center">
            <FaClock className="text-gray-500 mr-3" />
            <span className="text-gray-300">
              {currentTime.toLocaleTimeString('es-PE', { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'America/Lima'
              })} PET
            </span>
          </div>
        </motion.div>

        {/* Current Focus
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light mb-8">Proyectos Personales</h3>
          
          <div className="space-y-6">
            <div className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-medium">Proyectos de Machine Learning</h4>
                <FaCode className="text-gray-500 mt-1" />
              </div>
              <p className="text-gray-400 mb-4">
                Desarrollando sistemas de clasificación de imágenes y análisis de datos usando TensorFlow y Python.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">Docker</span>
              </div>
            </div>

            <div className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-medium">Aplicaciones Full-Stack</h4>
                <FaCode className="text-gray-500 mt-1" />
              </div>
              <p className="text-gray-400 mb-4">
                Creando aplicaciones web modernas con React, Node.js y bases de datos optimizadas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">PostgreSQL</span>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mb-16 p-6 border ${
            isAvailable ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'
          }`}
        >
          <div className="flex items-center mb-6">
            <h3 className="text-xl font-light mr-3">Disponibilidad</h3>
            <div className={`w-2 h-2 rounded-full ${
              isAvailable ? 'bg-green-500' : 'bg-red-500'
            } animate-pulse`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Estado actual</div>
              <div className="flex items-center">
               
                <span className={`${
                  isAvailable ? 'text-green-400' : 'text-red-400'
                }`}>{availability.status}</span>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Próxima disponibilidad</div>
              <div className="text-white">{availability.nextAvailable}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Tiempo de respuesta</div>
              <div className="text-white">{availability.responseTime}</div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">¿Puede participar?</div>
              <div className={`font-medium ${
                availability.canParticipate ? 'text-green-400' : 'text-red-400'
              }`}>
                {availability.canParticipate ? 'Sí, disponible' : 'No, ocupado'}
              </div>
            </div>
          </div>
          
          {!isAvailable && (
            <div className="mt-4 p-4 bg-gray-800/50 rounded border border-gray-700">
              <p className="text-sm text-gray-400">
                Actualmente no cuento con disponibilidad. Sin embargo, puedes contactarme 
                para discutir oportunidades futuras o consultas.
              </p>
            </div>
          )}
          
          {isAvailable && (
            <div className="mt-4 p-4 bg-green-900/20 rounded border border-green-800">
              <p className="text-sm text-green-300">
                ¡Perfecto timing! Estoy buscando nuevos proyectos emocionantes. 
                Contactame para discutir cómo puedo ayudarte.
              </p>
            </div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light mb-8">Conectemos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group"
                >
                  <div className="flex items-center">
                    <IconComponent className="text-xl mr-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                    <div>
                      <div className="font-medium">{social.platform}</div>
                      <div className="text-sm text-gray-500">{social.handle}</div>
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </a>
              );
            })}
          </div>
        </motion.div>



        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-16 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500">
            © 2024 Brayan Rojas. Construido con React y mucho ☕
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;