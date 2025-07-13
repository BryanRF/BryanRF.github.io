import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaFolder, FaUser, FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { icon: FaHome, text: 'Inicio', path: '/', description: 'Página principal' },
    { icon: FaFolder, text: 'Proyectos', path: '/projects', description: 'Mi trabajo' },
    { icon: FaUser, text: 'Sobre Mí', path: '/about', description: 'Conoce más' },
    { icon: FaEnvelope, text: 'Contacto', path: '/contact', description: 'Hablemos' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/BryanRF', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/', label: 'LinkedIn' },
  ];

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-light text-white hover:text-gray-300 transition-colors duration-300"
            >
              <span className="font-normal">Brayan</span>RF
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isCurrentPath(item.path);
                
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-gray-800/50' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-900/30'
                    }`}
                  >
                    <IconComponent className={`text-lg transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`} />
                    <span className="font-medium">{item.text}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-black/95 backdrop-blur-xl border-l border-gray-800 z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <Link 
                    to="/" 
                    className="text-xl font-light text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-normal">Brayan</span>RF
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      const isActive = isCurrentPath(item.path);
                      
                      return (
                        <Link
                          key={index}
                          to={item.path}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'text-white bg-gray-800/50 border border-gray-700' 
                              : 'text-gray-400 hover:text-white hover:bg-gray-900/30'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <IconComponent className="text-xl" />
                          <div>
                            <div className="font-medium">{item.text}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-gray-800">
                  <div className="flex items-center justify-center space-x-6">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                          aria-label={social.label}
                        >
                          <IconComponent className="text-xl" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;