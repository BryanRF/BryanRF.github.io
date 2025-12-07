import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { generateCV } from '../utils/cvGenerator';
import TextType from './TextType';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState({});
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
      options: [
        'Sobre Trabajo',
        'Aprende Conmigo',
        'Descargar CV'
      ]
    }
  ]);

  const handleTypingDone = (index) => {
    setVisibleOptions(prev => ({ ...prev, [index]: true }));
  };

  // Auto-scroll al final cuando cambian los mensajes o las opciones visibles
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, visibleOptions, isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 // Small delay after typing finishes
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const responses = {
    'Sobre Trabajo': {
      text: '¡Genial! ¿Qué tipo de proyecto tienes en mente?',
      options: [
        'Landing Pages',
        'SaaS / Sistemas Administrativos',
        'Apps Móviles',
        'Aplicaciones Web',
        'Aplicaciones Desktop',
        'Machine Learning / IA',
        'Volver al inicio'
      ]
    },
    'Aprende Conmigo': {
      text: '¡Excelente! Me encanta enseñar programación. Ofrezco mentoría desde nivel básico hasta intermedio en cualquier lenguaje de programación. ¿Te gustaría saber más?',
      options: [
        'Ver proyectos',
        'Contactar por WhatsApp',
        'Descargar CV',
        'Volver al inicio'
      ]
    },
    'Descargar CV': {
      text: '¿Qué tipo de CV te gustaría descargar?',
      options: ['CV FullStack', 'CV Frontend', 'CV Backend', 'CV Mobile', 'Volver al inicio']
    },
    'Landing Pages': {
      text: '¡Excelente! Desarrollo landing pages modernas, rápidas y optimizadas para conversión. Puedo trabajar con cualquier tecnología frontend según tus necesidades. ¿Cómo te gustaría contactarme?',
      options: ['Contactar por Email (Frontend)', 'WhatsApp: Landing Pages', 'Ver proyectos', 'CV Frontend', 'Volver al inicio']
    },
    'SaaS / Sistemas Administrativos': {
      text: 'Perfecto! Brayan ha desarrollado sistemas SaaS completos con NestJS, Next.js y Laravel, incluyendo ERPs y sistemas de gestión clínica. ¿Qué te gustaría saber?',
      options: ['Ver proyectos', 'CV FullStack', 'CV Backend', 'Volver al inicio']
    },
    'Apps Móviles': {
      text: 'Genial! Brayan desarrolla apps móviles con Flutter y Dart, incluyendo apps de salud, memoria y fitness. ¿Quieres más información?',
      options: ['Ver proyectos', 'CV Mobile', 'Volver al inicio']
    },
    'Aplicaciones Web': {
      text: 'Brayan crea aplicaciones web escalables con React, Vue.js, Next.js y backends robustos. ¿Te interesa algún stack en particular?',
      options: ['Ver proyectos', 'CV FullStack', 'CV Frontend', 'CV Backend', 'Volver al inicio']
    },
    'Aplicaciones Desktop': {
      text: 'Brayan tiene experiencia en aplicaciones desktop multiplataforma. ¿Quieres conocer más sobre sus proyectos?',
      options: ['Ver proyectos', 'CV FullStack', 'Volver al inicio']
    },
    'Machine Learning / IA': {
      text: 'Increíble! Brayan ha desarrollado sistemas de IA para detección de plagas, cáncer de mama, placas vehiculares y chatbots inteligentes. ¿Qué te gustaría explorar?',
      options: ['Ver proyectos', 'CV FullStack', 'Volver al inicio']
    }
  };

  const handleOptionClick = (option) => {
    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: option }]);

    // Manejar descarga de CV
    if (option.startsWith('CV ')) {
      const cvType = option.replace('CV ', '').toLowerCase().replace(' ', '');
      const typeMap = {
        'fullstack': 'fullstack',
        'frontend': 'frontend',
        'backend': 'backend',
        'mobile': 'mobile',
        'machinelearning': 'ml'
      };
      
      generateCV(typeMap[cvType] || 'fullstack');
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: `✅ ¡Perfecto! Tu CV de ${option.replace('CV ', '')} se está descargando. ¿Necesitas algo más?`,
        options: ['Ver proyectos', 'Otro CV', 'Contactar por WhatsApp', 'Volver al inicio']
      }]);
      return;
    }

    // Manejar navegación
    if (option === 'Ver proyectos') {
      window.location.href = '/projects';
      return;
    }

    if (option === 'Contactar por WhatsApp') {
      window.open('https://wa.me/51998511769?text=¡Hola! Me interesa trabajar contigo.', '_blank');
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: '¡Genial! Te he redirigido a WhatsApp. ¿Hay algo más en lo que pueda ayudarte?',
        options: ['Ver proyectos', 'Descargar CV', 'Volver al inicio']
      }]);
      return;
    }

    if (option === 'Contactar por Email (Frontend)') {
      window.location.href = 'mailto:rfreyrebrayaned@gmail.com?subject=Interés%20en%20Desarrollo%20Frontend%2FLanding%20Page';
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: '¡Perfecto! Se ha abierto tu cliente de correo. Estaré atento a tu mensaje.',
        options: ['Ver proyectos', 'Volver al inicio']
      }]);
      return;
    }

    if (option === 'WhatsApp: Landing Pages') {
      window.open('https://wa.me/51998511769?text=Hola,%20me%20interesa%20una%20Landing%20Page%20o%20servicio%20Frontend.', '_blank');
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: '¡Genial! Continuemos la conversación por WhatsApp.',
        options: ['Ver proyectos', 'Volver al inicio']
      }]);
      return;
    }

    if (option === 'Volver al inicio') {
      setMessages([{
        id: Date.now(),
        type: 'bot',
        text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
        options: [
          'Sobre Trabajo',
          'Aprende Conmigo',
          'Descargar CV'
        ]
      }]);
      setVisibleOptions({}); // Reset options visibility
      return;
    }

    if (option === 'Otro CV') {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: '¿Qué tipo de CV te gustaría descargar?',
        options: ['CV FullStack', 'CV Frontend', 'CV Backend', 'CV Mobile', 'Volver al inicio']
      }]);
      return;
    }

    // Respuestas predefinidas
    if (responses[option]) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: responses[option].text,
        options: responses[option].options
      }]);
    }
  };

  // Efecto para agregar/quitar clase al body cuando el chatbot está abierto en móvil
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('chatbot-open-mobile');
    } else {
      document.body.classList.remove('chatbot-open-mobile');
    }
    
    // Limpiar al desmontar
    return () => {
      document.body.classList.remove('chatbot-open-mobile');
    };
  }, [isOpen]);

  const handleToggleChat = () => {
    if (isOpen) {
      // Limpiar mensajes al cerrar
      setMessages([{
        id: Date.now(),
        type: 'bot',
        text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
        options: [
          'Sobre Trabajo',
          'Aprende Conmigo',
          'Descargar CV'
        ]
      }]);
      setVisibleOptions({}); // Reset options visibility
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante - Desktop */}
      <motion.button
        onClick={handleToggleChat}
        className="fixed bottom-8 right-32 z-[100] md:flex hidden items-center justify-center w-16 h-16 bg-secondary hover:bg-blue-600 text-white rounded-full border-4 border-default shadow-brutal hover-lift transition-all duration-200 chatbot-floating-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chatbot"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaRobot className="text-2xl" />}
      </motion.button>

      {/* Botón flotante - Mobile (solo cuando está cerrado) */}
      {!isOpen && (
        <motion.button
          onClick={handleToggleChat}
          className="fixed bottom-6 right-20 z-[100] md:hidden flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full border-2 border-default shadow-brutal-sm hover-lift transition-all duration-200"
          whileTap={{ scale: 0.95 }}
          aria-label="Abrir chatbot"
        >
          <FaRobot className="text-lg" />
        </motion.button>
      )}

      {/* Ventana del chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 z-[100] w-96 max-w-[calc(100vw-2rem)] md:w-96 bg-default border-4 border-default rounded-3xl shadow-brutal-xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 10rem)' }}
          >
            {/* Header */}
            <div className="bg-secondary border-b-4 border-default p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaRobot className="text-2xl text-white mr-3" />
                  <div>
                    <h3 className="font-black text-white ">Asistente Virtual</h3>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <FaTimes className="text-white" />
                </button>
              </div>
            </div>

            {/* Mensajes */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-default">
              {messages.map((message, index) => (
                <div key={message.id || index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-primary' : 'bg-gray-light'} border-4 border-default rounded-xl p-3 shadow-brutal-sm`}>
                    <p className={`text-sm font-bold ${message.type === 'user' ? 'text-black' : 'text-default'}`}>
                      {message.type === 'bot' ? (
                        <TextType 
                          text={message.text}
                          loop={false}
                          typingSpeed={30}
                          showCursor={index === messages.length - 1}
                          cursorCharacter="|"
                          onTypingDone={() => handleTypingDone(index)}
                        />
                      ) : (
                        message.text
                      )}
                    </p>
                    
                    {message.options && visibleOptions[index] && (
                      <motion.div 
                        className="mt-3 space-y-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {message.options.map((option, optIndex) => (
                          <motion.button
                            key={optIndex}
                            variants={itemVariants}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-3 py-2 bg-gray-light border-4 border-default rounded-lg font-bold text-xs hover:bg-opacity-80 transition-all shadow-brutal-sm hover-lift text-default"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="border-t-4 border-default p-3 bg-default">
              <p className="text-xs text-center font-bold text-default">
                Selecciona una opción arriba
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Versión móvil - pantalla completa */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-[9999] bg-default flex flex-col"
          >
            {/* Header móvil */}
            <div className="bg-secondary border-b-4 border-default p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaRobot className="text-2xl text-white mr-3" />
                  <div>
                    <h3 className="font-black text-white ">Asistente Virtual</h3>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
              </div>
            </div>

            {/* Mensajes móvil */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-default" style={{ height: 'calc(100vh - 8rem)' }}>
              {messages.map((message, index) => (
                <div key={message.id || index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${message.type === 'user' ? 'bg-primary' : 'bg-gray-light'} border-4 border-default rounded-xl p-4 shadow-brutal`}>
                    <p className={`text-sm font-bold ${message.type === 'user' ? 'text-black' : 'text-default'}`}>
                      {message.type === 'bot' ? (
                        <TextType 
                          text={message.text}
                          loop={false}
                          typingSpeed={30}
                          showCursor={index === messages.length - 1}
                          cursorCharacter="|"
                          onTypingDone={() => handleTypingDone(index)}
                        />
                      ) : (
                        message.text
                      )}
                    </p>
                    
                    {message.options && visibleOptions[index] && (
                      <motion.div 
                        className="mt-4 space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {message.options.map((option, optIndex) => (
                          <motion.button
                            key={optIndex}
                            variants={itemVariants}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-4 py-3 bg-gray-light border-4 border-default rounded-lg font-bold text-sm hover:bg-opacity-80 transition-all shadow-brutal hover-lift text-default"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer móvil */}
            <div className="border-t-4 border-default p-3 bg-default">
              <p className="text-xs text-center font-bold text-default">
                Selecciona una opción arriba
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
