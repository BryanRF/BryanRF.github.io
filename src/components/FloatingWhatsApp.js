import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappConfig } from '../data/projectData';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = "¡Hola! Me gustaría conversar contigo.";
    const link = `https://wa.me/${whatsappConfig.defaultNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm font-bold rounded-lg border-4 border-black shadow-brutal-sm whitespace-nowrap">
            Chatea conmigo
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        )}
        
        {/* Floating Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full border-4 border-black shadow-brutal hover-lift transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
