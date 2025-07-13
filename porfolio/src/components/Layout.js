import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout({ children }) {
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Contacto', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-800"
      >
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl font-light hover:text-gray-300 transition-colors"
            >
              BryanRF
            </Link>

            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-white border-b border-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 BryanRF. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;