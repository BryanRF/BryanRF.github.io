import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode, FaRocket, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop] = useState(true);

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-700/30'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20'
    },
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-500/20'
    },
    { 
      icon: FaEnvelope, 
      href: 'mailto:your@email.com',
      label: 'Email',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-500/20'
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Sobre Mí', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  const skills = [
    'React', 'Python', 'Machine Learning', 'Node.js', 'AWS', 'PostgreSQL'
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative z-10">
        <motion.div
          className="container mx-auto px-4 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Sección principal */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Información personal */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <motion.h3 
                  className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Brayan Rojas
                </motion.h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Desarrollador Full-Stack apasionado por crear soluciones innovadoras 
                  y experiencias digitales excepcionales. Especializado en tecnologías 
                  modernas y machine learning.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCode className="mr-2 text-cyan-400" />
                  <span>Construido con</span>
                  <FaHeart className="mx-2 text-red-500 animate-pulse" />
                  <span>y mucho</span>
                  <FaRocket className="ml-2 text-yellow-400" />
                </div>
              </div>

              {/* Skills tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-xs bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        borderColor: 'rgba(6, 182, 212, 0.3)',
                        color: 'rgb(34, 211, 238)'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">Conectemos</h4>
              <p className="text-gray-400 text-sm mb-4">
                ¿Tienes un proyecto en mente? ¡Hablemos!
              </p>
              <motion.a
                href="mailto:your@email.com"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-2" />
                Enviar mensaje
              </motion.a>
            </motion.div>
          </div>

          {/* Redes sociales */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.label}
                    className="relative group"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${link.color} ${link.bgColor} transition-all duration-300 backdrop-blur-sm group-hover:border-current`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {link.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Copyright y botón scroll to top */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800/50"
          >
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Brayan Rojas. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Hecho con React • Framer Motion • Tailwind CSS
              </p>
            </div>

            {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 10px 20px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                aria-label="Scroll to top"
              >
                <FaArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        {/* Efecto de ondas en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;