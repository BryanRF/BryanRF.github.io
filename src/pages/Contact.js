import { useState, useEffect } from "react";
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      primary: true
    },
    {
      platform: "WhatsApp", 
      handle: "+51 998511769",
      url: "https://wa.me/998511769",
      icon: FaWhatsapp,
      description: "Respuesta rápida"
    },
    {
      platform: "LinkedIn",
      handle: "Brayan Rojas",
      url: "https://www.linkedin.com/in/brayan-rojas-freyre-48933834a/",
      icon: FaLinkedin,
      description: "Red profesional"
    },
    {
      platform: "GitHub",
      handle: "@BryanRF",
      url: "https://github.com/BryanRF",
      icon: FaGithub,
      description: "Ver mi código"
    }
  ];

  const socialLinks = [
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

  const availability = {
    status: "Respondo en menos de 24h",
    timezone: "UTC-5 (Lima, Perú)",
    bestTime: "9:00 AM - 6:00 PM PET"
  };

  return (
    <div className="min-h-screen bg-body">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="neo-title mb-6">
            Hablemos sobre tu proyecto
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 font-bold text-default">
            ¿Tienes una idea en mente? Me encanta colaborar en proyectos innovadores. 
            Contactame para discutir cómo puedo ayudarte a convertir tu visión en realidad.
          </p>

          {/* Availability Info */}
          <div className="inline-flex items-center px-6 py-3 bg-primary border-4 border-default rounded-full shadow-brutal-sm mb-8">
            <div className="w-3 h-3 bg-black rounded-full animate-pulse mr-3"></div>
            <span className="font-black text-black">Disponible para nuevos proyectos</span>
          </div>

          {/* Location & Time */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 text-default font-bold">
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              <span>Chiclayo, Perú 🇵🇪</span>
            </div>
            <div className="flex items-center justify-center">
              <FaClock className="mr-2 text-xl" />
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
            className="p-8 bg-default border-4 border-default rounded-3xl shadow-brutal-xl"
          >
            <h2 className="text-2xl font-black  mb-8 text-default flex items-center">
              <FaPaperPlane className="mr-3" />
              Envíame un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-default text-sm font-black  mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="neo-input w-full"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-default text-sm font-black  mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="neo-input w-full"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-default text-sm font-black  mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="neo-input w-full"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label className="block text-default text-sm font-black  mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="neo-input w-full resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="neo-button-primary w-full flex items-center justify-center text-lg group"
              >
                <FaEnvelope className="mr-3 group-hover:scale-110 transition-transform" />
                Enviar mensaje
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-default text-sm text-center font-bold">
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
            <h2 className="text-2xl font-black  mb-8 text-default">
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
                    className={`flex items-center justify-between p-6 border-4 border-default rounded-2xl shadow-brutal hover-lift group ${contact.primary ? 'bg-primary' : 'bg-default'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-default border-4 border-default rounded-lg mr-4 shadow-brutal-sm">
                        <IconComponent className={`text-2xl ${contact.primary ? 'text-default' : 'text-default'}`} />
                      </div>
                      <div>
                        <h3 className={`font-black ${contact.primary ? 'text-black' : 'text-default'}`}>
                          {contact.platform}
                        </h3>
                        <p className={`text-sm font-bold ${contact.primary ? 'text-black' : 'text-default'}`}>{contact.handle}</p>
                        <p className={`text-xs font-bold ${contact.primary ? 'text-black' : 'text-default'}`}>{contact.description}</p>
                      </div>
                    </div>
                    <FaArrowRight className={`${contact.primary ? 'text-black' : 'text-default'} group-hover:translate-x-1 transition-all`} />
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
          className="mb-16 p-8 bg-default border-4 border-default rounded-3xl shadow-brutal-xl"
        >
          <h3 className="text-xl font-black  mb-6 text-default flex items-center">
            <FaCalendarAlt className="mr-3" />
            Disponibilidad y tiempos de respuesta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-gray-light border-4 border-default rounded-xl shadow-brutal-sm">
              <FaCheckCircle className="text-default mr-3 text-2xl" />
              <div>
                <div className="text-default font-black text-sm ">Estado</div>
                <div className="text-default text-sm font-bold">{availability.status}</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-light border-4 border-default rounded-xl shadow-brutal-sm">
              <FaGlobe className="text-default mr-3 text-2xl" />
              <div>
                <div className="text-default font-black text-sm ">Zona horaria</div>
                <div className="text-default text-sm font-bold">{availability.timezone}</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-light border-4 border-default rounded-xl shadow-brutal-sm">
              <FaClock className="text-default mr-3 text-2xl" />
              <div>
                <div className="text-default font-black text-sm ">Mejor horario</div>
                <div className="text-default text-sm font-bold">{availability.bestTime}</div>
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
          <h3 className="text-xl font-black  mb-8 text-default">
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
                  className="p-4 bg-white border-4 border-black rounded-xl shadow-brutal hover-lift group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="text-3xl text-black group-hover:scale-110 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="p-8 bg-secondary border-4 border-default rounded-3xl shadow-brutal-xl">
            <h3 className="text-3xl font-black  mb-4 text-default">
              ¿Listo para comenzar?
            </h3>
            <p className="text-default font-bold mb-6 max-w-2xl mx-auto text-lg">
              No importa si tienes una idea completamente desarrollada o solo un concepto inicial. 
              Me encanta ser parte del proceso creativo desde el principio.
            </p>
            
            <a
              href="https://wa.me/998511769?text=¡Hola! Me interesa trabajar contigo en un proyecto. ¿Podríamos conversar?"
              target="_blank"
              rel="noopener noreferrer"
               className="neo-button bg-green-500 text-black dark:bg-black dark:text-white hover:opacity-80 inline-flex items-center transition-all duration-200"
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