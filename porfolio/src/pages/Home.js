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
  FaLaptopCode,
  FaCoffee,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaDatabase,
  FaCloud,
  FaDocker,
} from 'react-icons/fa';
import { whatsappConfig } from '../data/projectData';
import Header from '../components/Header';
import { currentAge } from '../utils/ageCalculator';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  
  const handleGeneralWhatsApp = () => {
    const message = "¡Hola! Me interesan tus proyectos y me gustaría conocer más sobre tu trabajo. ¿Podríamos conversar?";
    const link = `https://wa.me/${whatsappConfig.defaultNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };
  
  const isAvailable = true;
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
      icon: FaGithub,
    },
    { 
      platform: "LinkedIn", 
      handle: "Brayan Rojas", 
      url: "https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/", 
      icon: FaLinkedin,
    },
    { 
      platform: "Instagram", 
      handle: "@bryan.rfr", 
      url: "https://www.instagram.com/bryan.rfr/", 
      icon: FaInstagram,
    },
    { 
      platform: "TikTok", 
      handle: "@edu_rf", 
      url: "https://www.tiktok.com/@edu_rf", 
      icon: FaTiktok,
    }
  ];


  const stats = [
    { 
      label: "Años de experiencia", 
      value: `${yearsOfExperience}+`,
      icon: FaCode,
    },
    { 
      label: "Proyectos completados", 
      value: "15+",
      icon: FaRocket,
    },
    { 
      label: "Tecnologías dominadas", 
      value: "10+",
      icon: FaLaptopCode,
    },
    { 
      label: "Tazas de café", 
      value: "∞",
      icon: FaCoffee,
    }
  ];

  const technicalSkills = [
    {
      category: "Lenguajes y Frameworks",
      skills: ["Python (Django)", "PHP (Laravel)", "Java (Android, Spring)", "JavaScript/TypeScript", "Vue.js", "Quasar", "Next.js", "Flutter (Dart)", "PrimeVue", "NestJS"],
      icon: FaCode,
    },
    {
      category: "Bases de Datos",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "DynamoDB"],
      icon: FaDatabase,
    },
    {
      category: "Cloud y DevOps",
      skills: ["AWS (S3, DynamoDB)", "Docker", "Firebase", "Nginx", "Linux", "cronjobs"],
      icon: FaCloud,
    },
    {
      category: "Herramientas y CI/CD",
      skills: ["Git", "GitHub", "Postman", "Jenkins", "GitLab CI"],
      icon: FaDocker,
    },
    {
      category: "Inteligencia Artificial",
      skills: ["Python", "OpenCV", "TensorFlow", "Detección de objetos", "Moderación inteligente"],
      icon: FaLightbulb,
    }
  ];

  const softSkills = [
    "Liderazgo técnico",
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Pensamiento analítico",
    "Resolución de problemas",
    "Gestión del tiempo",
    "Toma de decisiones",
    "Aprendizaje rápido",
    "Vocación por la enseñanza",
    "Proactividad",
    "Adaptabilidad",
    "Responsabilidad y compromiso"
  ];

  const languages = [
    { lang: "Español", level: "Nativo" },
    { lang: "Inglés", level: "Intermedio" }
  ];

  const availability = {
    status: isAvailable ? "Disponible para proyectos" : "Actualmente bajo contrato",
    nextAvailable: isAvailable ? "Inmediato" : "A consultar",
    responseTime: "< 24h",
    canParticipate: isAvailable
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Hero Section - Solo 2 colores */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal-xl mb-8 relative z-10"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 border-4 border-black rounded-full overflow-hidden shadow-brutal bg-white">
                <img 
                  src="/avatar.svg" 
                  alt="Brayan Eduardo Rojas Freyre" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Nombre Completo - Montserrat */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black  mb-6 leading-none text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BRAYAN EDUARDO
              <br />
              ROJAS FREYRE
            </h1>

            {/* Título Profesional - Inclinado */}
            <div className="flex justify-center mb-8">
              <div 
                className="inline-block px-6 py-3 border-4 border-black rounded-xl font-black text-base md:text-lg bg-primary shadow-brutal transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <FaGraduationCap className="inline mr-2" />
                Ingeniero de Sistemas & Developer Full Stack
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl mb-10 max-w-4xl leading-relaxed font-medium">
              Desarrollador Full-Stack con experiencia en soluciones digitales para web, móvil y escritorio. 
              Me adapto a distintos entornos y desafíos, con un enfoque en la <span className="font-black">eficiencia</span>, 
              la <span className="font-black">calidad</span> y 
              la <span className="font-black">experiencia del usuario</span>.
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/projects"
                className="neo-button-primary inline-flex items-center text-lg"
              >
                <FaRocket className="mr-3" />
                Ver Proyectos
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid - Blanco y Negro con bordes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const tiltClass = index % 2 === 0 ? 'neo-card-tilted-left' : 'neo-card-tilted-right';
              return (
                <motion.div 
                  key={index} 
                  className={`bg-white neo-card-tilted ${tiltClass} p-6 text-center`}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent className="text-4xl mx-auto mb-4 text-black" />
                  <div className="text-4xl md:text-5xl font-black mb-2 text-black">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold  text-black">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sobre Mí Section - Solo Primary Color */}
      <section className="neo-section bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal-xl mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap className="text-5xl text-black" />
              <h3 className="neo-subtitle">Sobre Mí</h3>
            </div>
            
            <div className="space-y-6 text-lg font-bold text-black">
              <p className="flex items-start gap-3">
                <FaHeart className="text-2xl mt-1 flex-shrink-0" />
                <span>Me apasiona programar y enseñar programación. Disfruto compartiendo conocimientos y ayudando a otros a crecer en este campo, desde nivel básico hasta intermedio en cualquier lenguaje.</span>
              </p>
              <p className="flex items-start gap-3">
                <FaLightbulb className="text-2xl mt-1 flex-shrink-0" />
                <span>Pude aprender muchas tecnologías para desarrollo móvil, web y escritorio gracias a mis aspiraciones y mi curiosidad constante por entender cómo funcionan las cosas.</span>
              </p>
              <p className="flex items-start gap-3">
                <FaRocket className="text-2xl mt-1 flex-shrink-0" />
                <span>Cada proyecto es una oportunidad para aprender algo nuevo y aplicar soluciones creativas a problemas reales.</span>
              </p>
            </div>
          </motion.div>

          {/* Location & Availability Grid - Blanco/Negro con acentos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Location Card */}
            <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-3xl mr-4 text-black" />
                <h3 className="text-2xl font-black ">Ubicación</h3>
              </div>
              <p className="text-xl font-bold mb-6">Chiclayo, Perú 🇵🇪</p>
              <div className="flex items-center bg-gray-light border-4 border-black p-4 rounded-xl shadow-brutal-sm">
                <FaClock className="mr-3 text-xl" />
                <span className="font-mono font-bold text-lg">
                  {currentTime.toLocaleTimeString('es-PE', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'America/Lima'
                  })} UTC-5
                </span>
              </div>
            </div>

            {/* Availability Card - Secondary Color */}
            <div className=" border-4 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center mb-6">
                <div className={`w-5 h-5 rounded-full mr-4 ${isAvailable ? 'bg-green-700 animate-pulse' : 'bg-black'}`}></div>
                <h3 className="text-2xl font-black  text-black">Disponibilidad</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white border-4 border-black p-4 rounded-xl shadow-brutal-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Próximo disponible:</span>
                    <span className="font-black">{availability.nextAvailable}</span>
                  </div>
                </div>
                <div className="bg-white border-4 border-black p-4 rounded-xl shadow-brutal-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Tiempo de respuesta:</span>
                    <span className="font-black">{availability.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Section - Blanco y Negro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal-xl mb-12"
          >
            <h3 className="neo-subtitle mb-10">
              Habilidades Técnicas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-light border-4 border-black rounded-2xl p-6 shadow-brutal"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="text-3xl text-black" />
                      <h4 className="text-lg font-black ">{skillGroup.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <li key={idx} className="text-sm font-bold text-black flex items-start">
                          <span className="mr-2">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills & Languages - Blanco y Negro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Soft Skills */}
            <div className="md:col-span-2 bg-white border-4 border-black rounded-2xl p-8 shadow-brutal">
              <h4 className="text-2xl font-black  mb-6">Habilidades Blandas</h4>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="bg-gray-light border-4 border-black px-4 py-2 rounded-lg shadow-brutal-sm">
                    <span className="text-sm font-bold text-black">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-brutal">
              <h4 className="text-2xl font-black  mb-6">Idiomas</h4>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="bg-gray-light border-4 border-black p-4 rounded-xl shadow-brutal-sm">
                    <div className="font-black text-lg mb-1">{lang.lang}</div>
                    <div className="text-sm font-bold">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links - Blanco y Negro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal-xl mb-12"
          >
            <h3 className="neo-subtitle mb-10">
              Conecta Conmigo
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
                    className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col items-center shadow-brutal hover-lift"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="text-4xl mb-4 text-black" />
                    <div className="text-lg font-black mb-2 text-black">{social.platform}</div>
                    <div className="text-sm font-bold text-black text-center">{social.handle}</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section - Primary Color */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal-xl text-center"
          >
            <FaEnvelope className="text-6xl mx-auto mb-6 text-black" />
            
            <h3 className="text-3xl md:text-5xl font-black  mb-6">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bold">
              Envíame un correo o conversemos por WhatsApp sobre cómo puedo ayudarte a materializar tu visión digital
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:rfreyrebrayaned@gmail.com"
                className="neo-button bg-white text-black hover:bg-gray-100"
              >
                <FaEnvelope className="inline mr-3" />
                Email
              </a>

              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;