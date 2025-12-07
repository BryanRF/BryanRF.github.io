import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="min-h-screen bg-body flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center"
      >
        <div className="bg-default border-4 border-default rounded-3xl p-8 md:p-12 shadow-brutal-xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          
          <div className="mb-8 relative">
             <motion.div
               animate={{ rotate: [0, 10, -10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="inline-block"
             >
                <FaExclamationTriangle className="text-8xl text-primary mx-auto mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
             </motion.div>
             <h1 className="text-8xl md:text-9xl font-black text-default mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
               404
             </h1>
          </div>

          <h2 className="text-2xl md:text-4xl font-black mb-6 text-default leading-tight">
            ¡Ups! Te has perdido
          </h2>
          
          <p className="text-lg md:text-xl text-default font-bold mb-10">
            La página que buscas no existe o ha sido movida a otra dimensión.
          </p>

          <Link 
            to="/" 
            className="neo-button bg-primary text-black hover:bg-yellow-400 inline-flex items-center text-lg md:text-xl group"
          >
            <FaHome className="mr-3 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
