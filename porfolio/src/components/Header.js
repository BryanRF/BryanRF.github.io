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
    { icon: FaHome, text: 'Inicio', path: '/home', description: 'Página principal' },
    { icon: FaFolder, text: 'Proyectos', path: '/projects', description: 'Mi trabajo' },
    { icon: FaUser, text: 'Sobre Mí', path: '/about', description: 'Conoce más' },
    { icon: FaEnvelope, text: 'Contacto', path: '/contact', description: 'Hablemos' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/BryanRF', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/BryanRF', label: 'LinkedIn' },
  ];

  const isCurrentPath = (path) => location.pathname === path;

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <nav className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link 
                to="/home" 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl lg:text-3xl font-bold px-3 py-2">
                  BR
                </div>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  layoutId="logoUnderline"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isCurrentPath(item.path);
                
                return (
                  <motion.div
                    key={item.text}
                    variants={navItemVariants}
                    initial="initial"
                    className="relative group"
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {/* Efecto de hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`navHover-${index}`}
                      />
                      
                      <IconComponent className={`mr-2 text-sm ${isActive ? 'text-cyan-400' : ''}`} />
                      <span className="font-medium text-sm">{item.text}</span>
                      
                      {/* Indicador activo */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                          layoutId="activeTab"
                        />
                      )}
                    </Link>
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                      initial={{ y: -10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {item.description}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* Social Links (Desktop) */}
              <div className="hidden lg:flex items-center space-x-2 mr-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
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
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 z-50 lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Navegación
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      const isActive = isCurrentPath(item.path);
                      
                      return (
                        <motion.div
                          key={item.text}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className={`flex items-center p-4 rounded-xl transition-all duration-300 group ${
                              isActive
                                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                            }`}
                          >
                            <IconComponent className={`mr-4 text-lg ${isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'}`} />
                            <div>
                              <div className="font-medium">{item.text}</div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                {item.description}
                              </div>
                            </div>
                            {isActive && (
                              <motion.div
                                className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                                layoutId="mobileActiveIndicator"
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-gray-800/50">
                  <div className="text-sm text-gray-400 mb-4">Sígueme en:</div>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-xl transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;