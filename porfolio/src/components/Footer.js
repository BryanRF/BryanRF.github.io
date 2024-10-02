import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ProjectsFooter = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername' },
    { icon: FaEnvelope, href: 'mailto:your@email.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex space-x-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2024 Brayan Rojas. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default ProjectsFooter;