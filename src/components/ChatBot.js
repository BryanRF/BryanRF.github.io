import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { generateCV } from '../utils/cvGenerator';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
      options: [
        'Sobre Trabajo',
        'Aprende Conmigo',
        'Descargar CV'
      ]
    }
  ]);
  const [currentStep, setCurrentStep] = useState('initial');

  // Auto-scroll al final cuando cambian los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      text: '¡Excelente! Brayan tiene experiencia creando landing pages modernas y auto-gestionables con React y Laravel. ¿Te gustaría ver ejemplos o descargar su CV Frontend?',
      options: ['Ver proyectos', 'CV Frontend', 'Volver al inicio']
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
    setMessages(prev => [...prev, { type: 'user', text: option }]);

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
        type: 'bot',
        text: '¡Genial! Te he redirigido a WhatsApp. ¿Hay algo más en lo que pueda ayudarte?',
        options: ['Ver proyectos', 'Descargar CV', 'Volver al inicio']
      }]);
      return;
    }

    if (option === 'Volver al inicio') {
      setMessages([{
        type: 'bot',
        text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
        options: [
          'Sobre Trabajo',
          'Aprende Conmigo',
          'Descargar CV'
        ]
      }]);
      setCurrentStep('initial');
      return;
    }

    if (option === 'Otro CV') {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: '¿Qué tipo de CV te gustaría descargar?',
        options: ['CV FullStack', 'CV Frontend', 'CV Backend', 'CV Mobile', 'Volver al inicio']
      }]);
      return;
    }

    // Respuestas predefinidas
    if (responses[option]) {
      setMessages(prev => [...prev, {
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
        type: 'bot',
        text: '¡Hola! 👋 Soy el asistente de Brayan. ¿En qué puedo ayudarte?',
        options: [
          'Sobre Trabajo',
          'Aprende Conmigo',
          'Descargar CV'
        ]
      }]);
      setCurrentStep('initial');
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante - Desktop */}
      <motion.button
        onClick={handleToggleChat}
        className="fixed bottom-8 right-32 z-50 md:flex hidden items-center justify-center w-16 h-16 bg-secondary hover:bg-blue-600 text-white rounded-full border-4 border-black shadow-brutal hover-lift transition-all duration-200 chatbot-floating-button"
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
          className="fixed bottom-6 right-20 z-50 md:hidden flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full border-2 border-black shadow-brutal-sm hover-lift transition-all duration-200"
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
            className="fixed bottom-28 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] md:w-96 bg-white border-4 border-black rounded-3xl shadow-brutal-xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 10rem)' }}
          >
            {/* Header */}
            <div className="bg-secondary border-b-4 border-black p-4">
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
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-light">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-primary' : 'bg-white'} border-4 border-black rounded-xl p-3 shadow-brutal-sm`}>
                    <p className="text-sm font-bold text-black">{message.text}</p>
                    
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, optIndex) => (
                          <button
                            key={optIndex}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-3 py-2 bg-white border-4 border-black rounded-lg font-bold text-xs hover:bg-gray-100 transition-all shadow-brutal-sm hover-lift"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="border-t-4 border-black p-3 bg-white">
              <p className="text-xs text-center font-bold text-black">
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
            className="md:hidden fixed inset-0 z-[9999] bg-white flex flex-col"
          >
            {/* Header móvil */}
            <div className="bg-secondary border-b-4 border-black p-4">
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-light" style={{ height: 'calc(100vh - 8rem)' }}>
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${message.type === 'user' ? 'bg-primary' : 'bg-white'} border-4 border-black rounded-xl p-4 shadow-brutal`}>
                    <p className="text-sm font-bold text-black">{message.text}</p>
                    
                    {message.options && (
                      <div className="mt-4 space-y-3">
                        {message.options.map((option, optIndex) => (
                          <button
                            key={optIndex}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-4 py-3 bg-white border-4 border-black rounded-lg font-bold text-sm hover:bg-gray-100 transition-all shadow-brutal hover-lift"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer móvil */}
            <div className="border-t-4 border-black p-3 bg-white">
              <p className="text-xs text-center font-bold text-black">
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
