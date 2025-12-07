import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaFolder, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            ? 'bg-white border-b-4 border-black shadow-brutal' 
            : 'bg-white/95 backdrop-blur-sm'
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
              className="text-2xl font-black uppercase text-black hover:text-gray-700 transition-colors duration-300"
              style={{ fontFamily: 'Sora, sans-serif' }}
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
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl border-4 border-black font-bold uppercase text-sm shadow-brutal-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary text-black' 
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="text-lg" />
                    <span>{item.text}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 bg-white border-4 border-black rounded-xl shadow-brutal-sm hover:bg-gray-100 transition-all"
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
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white border-l-4 border-black z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b-4 border-black">
                  <Link 
                    to="/" 
                    className="text-xl font-black uppercase"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BryanRF
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-lg" />
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
                          className={`flex items-center space-x-4 p-4 rounded-xl border-4 border-black font-bold uppercase shadow-brutal-sm transition-all duration-200 ${
                            isActive 
                              ? 'bg-primary text-black' 
                              : 'bg-white text-black hover:bg-gray-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <IconComponent className="text-xl" />
                          <span>{item.text}</span>
                        </Link>
                      );
                    })}
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