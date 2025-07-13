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
  FaWhatsapp,
  FaArrowRight,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { whatsappConfig } from '../data/projectData';
import StarfieldBackground from '../components/StarfieldBackground';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  
  const handleGeneralWhatsApp = () => {
    const message = "¡Hola! Me interesan tus proyectos y me gustaría conocer más sobre tu trabajo. ¿Podríamos conversar?";
    const link = `https://wa.me/${whatsappConfig.defaultNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };
  
  // Configuración de disponibilidad - Cambiar solo este valor
  const isAvailable = false; // Cambiar a false cuando esté bajo contrato

  // Cálculo automático de años de experiencia
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  useEffect(() => {
    setIsVisible(true);
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
    { 
      label: "Años de experiencia", 
      value: `${yearsOfExperience}+`,
      icon: FaCode
    },
    { 
      label: "Proyectos completados", 
      value: "15+",
      icon: FaRocket
    },
    { 
      label: "Tecnologías dominadas", 
      value: "10+",
      icon: FaCode
    },
    { 
      label: "Tazas de café", 
      value: "∞",
      icon: FaClock
    }
  ];

  // Disponibilidad dinámica basada en el estado
  const availability = {
    status: isAvailable ? "Disponible para proyectos" : "Actualmente bajo contrato",
    nextAvailable: isAvailable ? "Inmediato" : "A consultar",
    responseTime: "< 24h",
    canParticipate: isAvailable
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo de estrellas */}
      <StarfieldBackground numStars={200} numPlanets={8} numShips={10} numSatellites={5} numMoons={5} speed={0.8} />
      
      {/* Overlay sutil para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
      
      {/* Contenido principal */}
      <motion.div 
        className="relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Main Container */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 p-8 rounded-3xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
          >
          

            {/* Main Title */}
            <motion.h1 
              className="text-6xl md:text-8xl font-light mb-6 leading-tight tracking-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="font-normal bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Bryan RF
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-400 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Software Developer & System Engineer
            </motion.h2>

            {/* Descripción */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Desarrollador Full-Stack con experiencia en soluciones digitales para web, móvil y escritorio. 
              Me adapto a distintos entornos y desafíos, con un enfoque en la <span className="text-white font-medium">eficiencia</span>, 
              la <span className="text-white font-medium">calidad</span> y 
              la <span className="text-white font-medium">experiencia del usuario</span>.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/projects"
                className="group flex items-center justify-center px-10 py-4 border-2 border-gray-600 text-white rounded-lg hover:border-gray-400 hover:bg-gray-900/50 transition-all duration-300 font-medium"
              >
                <FaRocket className="mr-3 group-hover:scale-110 transition-transform" />
                Mis proyectos y más sobre mí
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="text-3xl mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="text-4xl md:text-5xl font-light mb-3 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {/* Location */}
            <motion.div 
              className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-gray-400 mr-4 text-xl" />
                <h3 className="font-medium text-white text-lg">Ubicación</h3>
              </div>
              <p className="text-gray-400 mb-4 text-lg">Chiclayo, Perú 🇵🇪</p>
              <div className="flex items-center text-gray-400 bg-gray-800/50 p-4 rounded-lg">
                <FaClock className="mr-3" />
                <span className="font-mono">
                  {currentTime.toLocaleTimeString('es-PE', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'America/Lima'
                  })} UTC-5
                </span>
              </div>
            </motion.div>

            {/* Availability Detail */}
            <motion.div 
              className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full mr-4 ${
                  isAvailable 
                    ? 'bg-green-400 animate-pulse' 
                    : 'bg-yellow-400 animate-pulse'
                }`}></div>
                <h3 className="font-medium text-white text-lg">Estado actual</h3>
              </div>
              <p className="text-gray-400 mb-4 text-lg">{availability.status}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Próximo disponible:</span>
                  <span className="font-medium text-white">{availability.nextAvailable}</span>
                </div>
                <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Tiempo de respuesta:</span>
                  <span className="font-medium text-white">{availability.responseTime}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mb-20 p-8 rounded-3xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-medium mb-10 text-center text-white">
              Conecta conmigo
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-8 rounded-2xl border border-gray-800 hover:border-gray-600 bg-gray-900/20 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/40"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="text-3xl mb-4 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-white" />
                    <div className="text-base font-medium mb-2 text-white">{social.platform}</div>
                    <div className="text-sm text-gray-400 text-center">{social.handle}</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            id="contact"
            variants={itemVariants}
            className="text-center p-10 rounded-3xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <FaEnvelope className="text-5xl mx-auto mb-6 text-gray-400" />
            </motion.div>
            
            <h3 className="text-3xl font-medium mb-4 text-white">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Envíame un correo o conversemos por WhatsApp sobre cómo puedo ayudarte a materializar tu visión digital
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:rfreyrebrayaned@gmail.com"
                className="group inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 hover:scale-105 transform"
              >
                <FaEnvelope className="mr-3 group-hover:scale-110 transition-transform" />
                rfreyrebrayaned@gmail.com
              </a>

              <button
                onClick={handleGeneralWhatsApp}
                className="group flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                <FaWhatsapp className="mr-3 group-hover:scale-110 transition-transform" />
                Conversemos por WhatsApp
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;