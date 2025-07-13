import  { useState} from "react";
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
  FaGlobe,
  FaCalendarAlt,
  FaCheckCircle,
  FaPaperPlane
} from 'react-icons/fa';

function Contact() {
  const [currentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mailto con los datos del formulario
    const subject = encodeURIComponent(formData.subject || 'Consulta desde Portfolio');
    const body = encodeURIComponent(
      `Hola Brayan,\n\nMi nombre es ${formData.name}\n\n${formData.message}\n\nSaludos!`
    );
    window.location.href = `mailto:rfreyrebrayaned@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      platform: "Email",
      handle: "rfreyrebrayaned@gmail.com",
      url: "mailto:rfreyrebrayaned@gmail.com",
      icon: FaEnvelope,
      description: "Respuesta en 24h",
      color: "hover:bg-blue-900/20 hover:border-blue-400/50",
      primary: true
    },
    {
      platform: "WhatsApp", 
      handle: "+51 998511769",
      url: "https://wa.me/998511769",
      icon: FaWhatsapp,
      description: "Respuesta rápida",
      color: "hover:bg-green-900/20 hover:border-green-400/50"
    },
    {
      platform: "LinkedIn",
      handle: "Brayan Rojas",
      url: "https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/",
      icon: FaLinkedin,
      description: "Red profesional",
      color: "hover:bg-blue-900/20 hover:border-blue-400/50"
    },
    {
      platform: "GitHub",
      handle: "@BryanRF",
      url: "https://github.com/BryanRF",
      icon: FaGithub,
      description: "Ver mi código",
      color: "hover:bg-gray-700/20 hover:border-gray-400/50"
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

  const availability = {
    status: "Respondo en menos de 24h",
    timezone: "UTC-5 (Lima, Perú)",
    bestTime: "9:00 AM - 6:00 PM PET"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Hablemos sobre tu <span className="font-normal text-white">proyecto</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-8">
            ¿Tienes una idea en mente? Me encanta colaborar en proyectos innovadores. 
            Contactame para discutir cómo puedo ayudarte a convertir tu visión en realidad.
          </p>

          {/* Availability Info */}
          <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 rounded-full border border-gray-800 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300">Disponible para nuevos proyectos</span>
          </div>

          {/* Location & Time */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Chiclayo, Perú 🇵🇪</span>
            </div>
            <div className="flex items-center justify-center">
              <FaClock className="mr-2" />
              <span className="font-mono">
                {currentTime.toLocaleTimeString('es-PE', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  second: '2-digit',
                  timeZone: 'America/Lima'
                })} PET
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form & Methods Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-light mb-8 text-white flex items-center">
              <FaPaperPlane className="mr-3 text-gray-400" />
              Envíame un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
              >
                <FaEnvelope className="mr-3 group-hover:scale-110 transition-transform" />
                Enviar mensaje
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                Al enviar el formulario se abrirá tu cliente de email
              </p>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-light mb-8 text-white">
              Otras formas de contacto
            </h2>
            
            {contactMethods.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-6 border border-gray-800 rounded-xl transition-all duration-300 group ${contact.color} ${contact.primary ? 'bg-gray-900/50' : 'bg-gray-900/20'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-gray-800/50 rounded-lg mr-4 group-hover:bg-gray-700/50 transition-colors">
                      <IconComponent className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium group-hover:text-white transition-colors">
                        {contact.platform}
                      </h3>
                      <p className="text-gray-400 text-sm">{contact.handle}</p>
                      <p className="text-gray-500 text-xs">{contact.description}</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Availability Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 p-8 bg-gray-900/30 rounded-2xl border border-gray-800"
        >
          <h3 className="text-xl font-medium mb-6 text-white flex items-center">
            <FaCalendarAlt className="mr-3 text-gray-400" />
            Disponibilidad y tiempos de respuesta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-gray-800/30 rounded-lg">
              <FaCheckCircle className="text-green-400 mr-3 text-lg" />
              <div>
                <div className="text-white font-medium text-sm">Estado</div>
                <div className="text-gray-400 text-sm">{availability.status}</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-800/30 rounded-lg">
              <FaGlobe className="text-blue-400 mr-3 text-lg" />
              <div>
                <div className="text-white font-medium text-sm">Zona horaria</div>
                <div className="text-gray-400 text-sm">{availability.timezone}</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-800/30 rounded-lg">
              <FaClock className="text-yellow-400 mr-3 text-lg" />
              <div>
                <div className="text-white font-medium text-sm">Mejor horario</div>
                <div className="text-gray-400 text-sm">{availability.bestTime}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-light mb-8 text-white">
            También me puedes encontrar en
          </h3>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 ${social.color} group`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="text-2xl text-gray-400 group-hover:scale-110 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-light mb-4 text-white">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              No importa si tienes una idea completamente desarrollada o solo un concepto inicial. 
              Me encanta ser parte del proceso creativo desde el principio.
            </p>
            
            <a
              href="https://wa.me/998511769?text=¡Hola! Me interesa trabajar contigo en un proyecto. ¿Podríamos conversar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <FaWhatsapp className="mr-3 group-hover:scale-110 transition-transform" />
              Empezar conversación
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;