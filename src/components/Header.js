import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaFolder, FaUser, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { icon: FaHome, text: 'Inicio', path: '/' },
    { icon: FaFolder, text: 'Proyectos', path: '/projects' },
    { icon: FaUser, text: 'Sobre Mí', path: '/about' },
    { icon: FaEnvelope, text: 'Contacto', path: '/contact' },
  ];

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'border-b-4 shadow-brutal' 
            : 'backdrop-blur-sm'
        }`}
        style={{
          backgroundColor: isDarkMode ? 'var(--bg-primary)' : 'white',
          borderColor: 'var(--border-color)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-black transition-colors duration-300"
              style={{ 
                fontFamily: 'Sora, sans-serif',
                color: 'var(--text-primary)'
              }}
            >
              BryanRF
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isCurrentPath(item.path);
                
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl border-4 font-bold text-sm shadow-brutal-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{
                      backgroundColor: isActive ? 'var(--color-primary)' : (isDarkMode ? 'var(--bg-secondary)' : 'white'),
                      color: isActive ? 'black' : 'var(--text-primary)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <IconComponent className="text-lg" />
                    <span>{item.text}</span>
                  </Link>
                );
              })}
              
              {/* Dark Mode Toggle Button - Desktop */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl border-4 shadow-brutal-sm transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: isDarkMode ? 'var(--bg-secondary)' : 'white',
                  borderColor: 'var(--border-color)'
                }}
                aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {isDarkMode ? (
                  <FaSun className="text-xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-xl text-gray-700" />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 border-4 rounded-xl shadow-brutal-sm transition-all"
              style={{
                backgroundColor: isDarkMode ? 'var(--bg-secondary)' : 'white',
                borderColor: 'var(--border-color)'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" style={{ color: 'var(--text-primary)' }} /> : <FaBars className="text-xl" style={{ color: 'var(--text-primary)' }} />}
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
              className="fixed top-0 right-0 h-full w-80 max-w-sm border-l-4 z-50 lg:hidden"
              style={{
                backgroundColor: isDarkMode ? 'var(--bg-primary)' : 'white',
                borderColor: 'var(--border-color)'
              }}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b-4" style={{ borderColor: 'var(--border-color)' }}>
                  <Link 
                    to="/" 
                    className="text-xl font-black"
                    style={{ 
                      fontFamily: 'Sora, sans-serif',
                      color: 'var(--text-primary)'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BryanRF
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-lg" style={{ color: 'var(--text-primary)' }} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      const isActive = isCurrentPath(item.path);
                      
                      return (
                        <Link
                          key={index}
                          to={item.path}
                          className={`flex items-center space-x-4 p-4 rounded-xl border-4 font-bold shadow-brutal-sm transition-all duration-200`}
                          style={{
                            backgroundColor: isActive ? 'var(--color-primary)' : (isDarkMode ? 'var(--bg-secondary)' : 'white'),
                            color: isActive ? 'black' : 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <IconComponent className="text-xl" />
                          <span>{item.text}</span>
                        </Link>
                      );
                    })}
                    
                    {/* Dark Mode Toggle Button - Mobile */}
                    <button
                      onClick={toggleDarkMode}
                      className="w-full flex items-center space-x-4 p-4 rounded-xl border-4 font-bold shadow-brutal-sm transition-all duration-200"
                      style={{
                        backgroundColor: isDarkMode ? 'var(--bg-secondary)' : 'white',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      {isDarkMode ? (
                        <>
                          <FaSun className="text-xl text-yellow-400" />
                          <span>Modo Claro</span>
                        </>
                      ) : (
                        <>
                          <FaMoon className="text-xl" />
                          <span>Modo Oscuro</span>
                        </>
                      )}
                    </button>
                  </div>
                </nav>
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