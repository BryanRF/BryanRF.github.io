import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket, FaCog } from 'react-icons/fa';

// Iconos para diferentes tipos de proyectos
const getProjectIcon = (type) => {
  const icons = {
    'database': FaDatabase,
    'ml': FaBrain,
    'web': FaCode,
    'analytics': FaChartLine,
    'automation': FaCog,
    'default': FaRocket
  };
  return icons[type] || icons['default'];
};

// Gradientes para diferentes tipos de proyectos
const getProjectGradient = (type) => {
  const gradients = {
    'database': 'from-blue-500/20 via-purple-500/20 to-indigo-500/20',
    'ml': 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
    'web': 'from-orange-500/20 via-red-500/20 to-pink-500/20',
    'analytics': 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
    'automation': 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
    'default': 'from-purple-500/20 via-pink-500/20 to-rose-500/20'
  };
  return gradients[type] || gradients['default'];
};

// Tags de tecnologías con colores
const TechTag = ({ tech }) => {
  const techColors = {
    'MySQL': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'PostgreSQL': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'MongoDB': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Python': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Machine Learning': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'React': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Node.js': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'TensorFlow': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Docker': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    'AWS': 'bg-orange-600/20 text-orange-300 border-orange-600/30'
  };

  const defaultColor = 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  
  return (
    <span className={`px-2 py-1 text-xs rounded-full border ${techColors[tech] || defaultColor} backdrop-blur-sm`}>
      {tech}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = getProjectIcon(project.type);
  const gradientClass = getProjectGradient(project.type);

  const springProps = useSpring({
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(6, 182, 212, 0.3), 0 10px 10px -5px rgba(6, 182, 212, 0.1)' 
      : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    config: { tension: 300, friction: 10 }
  });

  const iconSpring = useSpring({
    transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
    config: { tension: 300, friction: 10 }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <animated.div
        style={springProps}
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradientClass} backdrop-blur-sm border border-gray-700/50 group cursor-pointer`}
      >
        {/* Efecto de brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Header con icono */}
        <div className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80">
          <div className="flex items-center justify-between mb-4">
            <animated.div style={iconSpring} className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
              <IconComponent className="w-6 h-6 text-cyan-400" />
            </animated.div>
            <div className="flex space-x-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-600/50 transition-all duration-200 backdrop-blur-sm border border-gray-600/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-200 backdrop-blur-sm border border-cyan-500/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
          
          <motion.h3 
            className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
            layoutId={`title-${project.id}`}
          >
            {project.title}
          </motion.h3>
          
          {project.status && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 mb-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              {project.status}
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6 pt-2">
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>
          
          {/* Características destacadas */}
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Características:</h4>
              <ul className="space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-center">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tags de tecnologías */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <TechTag key={idx} tech={tech} />
              ))}
            </div>
          )}
          
          {/* Métricas del proyecto */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-700/50">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Indicador de progreso si existe */}
        {project.progress !== undefined && (
          <div className="px-6 pb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">Progreso</span>
              <span className="text-xs text-cyan-400 font-semibold">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        )}
      </animated.div>
    </motion.div>
  );
};

export default ProjectCard;