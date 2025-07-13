import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from 'react-icons/fa';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const contactMethods = [
    {
      platform: "Email",
      handle: "rfreyrebrayaned@gmail.com",
      url: "mailto:rfreyrebrayaned@gmail.com",
      icon: FaEnvelope,
      description: "Respuesta en 24h",
      color: "hover:text-green-400",
      primary: true
    },
    {
      platform: "WhatsApp", 
      handle: "+51 998511769",
      url: "https://wa.me/998511769",
      icon: FaWhatsapp,
      description: "Respuesta rápida",
      color: "hover:text-green-500"
    },
    {
      platform: "LinkedIn",
      handle: "Brayan Rojas",
      url: "https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/",
      icon: FaLinkedin,
      description: "Red profesional",
      color: "hover:text-blue-400"
    },
    {
      platform: "GitHub",
      handle: "@BryanRF",
      url: "https://github.com/BryanRF",
      icon: FaGithub,
      description: "Ver mi código",
      color: "hover:text-gray-300"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@bryan.rfr",
      url: "https://www.instagram.com/bryan.rfr/",
      icon: FaInstagram,
      color: "hover:text-pink-400"
    },
    {
      platform: "TikTok", 
      handle: "@edu_rf",
      url: "https://www.tiktok.com/@edu_rf",
      icon: FaTiktok,
      color: "hover:text-white"
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header minimalista */}
    

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Hablemos sobre tu <span className="font-normal">proyecto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
            ¿Tienes una idea en mente? Me encanta colaborar en proyectos innovadores. 
            Contactame para discutir cómo puedo ayudarte a convertir tu visión en realidad.
          </p>

          {/* Location & Time */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Chiclayo, Perú</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>
                {currentTime.toLocaleTimeString('es-PE', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'America/Lima'
                })} PET
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-2xl font-light mb-8">Formas de contacto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactMethods.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group ${contact.primary ? 'bg-gray-900/30' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center">
                    <IconComponent className={`text-xl mr-4 text-gray-400 group-hover:text-white transition-colors duration-200 ${contact.color}`} />
                    <div>
                      <div className="font-medium">{contact.platform}</div>
                      <div className="text-sm text-gray-500">{contact.handle}</div>
                      <div className="text-xs text-gray-600">{contact.description}</div>
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

     

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-2xl font-light mb-8">También puedes encontrarme en</h2>
          
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
                    <IconComponent className={`text-xl mr-4 text-gray-400 group-hover:text-white transition-colors duration-200 ${social.color}`} />
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
          className="text-center"
        >
          <p className="text-gray-500">
            © 2024 Brayan Rojas. Construido con React y mucho ☕
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default Contact;