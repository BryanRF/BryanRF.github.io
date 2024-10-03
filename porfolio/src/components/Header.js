import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaFolder, FaUser, FaEnvelope } from 'react-icons/fa';

const ProjectsHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400">BR</Link>
          <ul className="flex space-x-6">
            {[
              { icon: FaHome, text: 'Inicio', path: '/' },
              { icon: FaFolder, text: 'Proyectos', path: '/projects' },
              { icon: FaUser, text: 'Sobre Mí', path: '/about' },
            ].map((item, index) => (
              <motion.li key={item.text} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.path} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <item.icon className="mr-2" />
                  <span>{item.text}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default ProjectsHeader;