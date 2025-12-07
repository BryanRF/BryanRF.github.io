import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket, FaCog, FaExternalLinkAlt } from 'react-icons/fa';

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

// Colores para diferentes tipos de proyectos
const getProjectColor = (type) => {
  const colors = {
    'database': 'bg-celeste',
    'ml': 'bg-green',
    'web': 'bg-pink',
    'analytics': 'bg-purple',
    'automation': 'bg-yellow',
    'default': 'bg-orange'
  };
  return colors[type] || colors['default'];
};

// Tags de tecnologías con colores Neo-Brutalism
const TechTag = ({ tech }) => {
  const techColors = {
    'MySQL': 'bg-celeste',
    'PostgreSQL': 'bg-purple',
    'MongoDB': 'bg-green',
    'Python': 'bg-yellow',
    'Machine Learning': 'bg-pink',
    'React': 'bg-celeste',
    'Node.js': 'bg-green',
    'TensorFlow': 'bg-orange',
    'Docker': 'bg-celeste',
    'AWS': 'bg-orange',
    'Redis': 'bg-pink',
    'FastAPI': 'bg-green',
    'D3.js': 'bg-yellow',
    'Flask': 'bg-purple',
    'OpenCV': 'bg-celeste',
    'Selenium': 'bg-green',
    'BeautifulSoup': 'bg-yellow',
    'Celery': 'bg-green',
    'Pandas': 'bg-purple',
    'scikit-learn': 'bg-orange',
    'Stripe': 'bg-pink'
  };

  const defaultColor = 'bg-gray-200';
  
  return (
    <span className={`px-3 py-1 text-xs font-bold border-2 border-default rounded-lg ${techColors[tech] || defaultColor} text-black shadow-brutal-sm`}>
      {tech}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = getProjectIcon(project.type);
  const colorClass = getProjectColor(project.type);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full bg-default border-4 border-default rounded-2xl overflow-hidden shadow-brutal hover-lift transition-all duration-200`}
      >
        {/* Header con icono colorido */}
        <div className={`${colorClass} p-6 border-b-4 border-default`}>
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center justify-center w-14 h-14 bg-default border-4 border-default rounded-xl shadow-brutal-sm`}
            >
              <IconComponent className="w-7 h-7 text-default" />
            </motion.div>
            
            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-default border-4 border-default text-default hover:bg-opacity-80 transition-all duration-200 shadow-brutal-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
          
          <h3 className="text-2xl font-black  text-black mb-2">
            {project.title}
          </h3>
          
          {project.status && (
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-4 border-default shadow-brutal-sm text-black ${
              project.status === 'En Proceso' 
                ? 'bg-primary' 
                : project.status === 'Completado' 
                ? 'bg-green-400' 
                : 'bg-white'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                project.status === 'En Proceso' 
                  ? 'bg-black' 
                  : project.status === 'Completado' 
                  ? 'bg-green-700' 
                  : 'bg-black'
              }`} />
              {project.status}
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6">
          <p className="text-default font-bold mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Características destacadas */}
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-black  mb-3 text-default">Características:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm font-bold text-default flex items-start">
                    <span className="mr-2 text-lg">•</span>
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
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t-4 border-default">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center bg-gray-light border-4 border-default rounded-lg p-3 shadow-brutal-sm">
                  <div className="text-2xl font-black text-default">{value}</div>
                  <div className="text-xs font-bold  text-default">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Indicador de progreso si existe */}
        {project.progress !== undefined && (
          <div className="px-6 pb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-black  text-default">Progreso</span>
              <span className="text-xs font-black text-default">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-light border-4 border-default rounded-full h-4 overflow-hidden">
              <motion.div 
                className="bg-green h-full border-r-3 border-black"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;