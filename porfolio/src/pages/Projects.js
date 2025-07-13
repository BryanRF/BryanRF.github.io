import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaSearch, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket, FaCog, FaWhatsapp } from 'react-icons/fa';
import { projects, filterCategories, whatsappConfig } from '../data/projectData';

const iconMap = {
  'FaCode': FaCode,
  'FaDatabase': FaDatabase,
  'FaBrain': FaBrain,
  'FaChartLine': FaChartLine,
  'FaRocket': FaRocket,
  'FaCog': FaCog
};

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    let result = projects;
    
    if (activeFilter !== 'all') {
      result = result.filter(project => project.type === activeFilter);
    }
    
    if (searchTerm) {
      result = result.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies?.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleGeneralWhatsApp = () => {
    const message = "¡Hola! Me interesan tus proyectos y me gustaría conocer más sobre tu trabajo. ¿Podríamos conversar?";
    const link = `https://wa.me/${whatsappConfig.defaultNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Mis <span className="font-normal">Proyectos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            Una colección de soluciones tecnológicas que combinan innovación 
            con diseño funcional para resolver problemas reales del mundo empresarial.
          </p>
          
          <motion.button
            onClick={handleGeneralWhatsApp}
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-white hover:border-gray-400 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="mr-2 text-sm" />
            Contactar por WhatsApp
          </motion.button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors duration-200"
            />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`flex items-center px-4 py-2 border transition-colors duration-200 ${
                    activeFilter === category.id
                      ? 'bg-white text-black border-white'
                      : 'bg-black text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-800"
        >
          {[
            { label: 'Proyectos', value: projects.length },
            { label: 'Completados', value: projects.filter(p => p.progress === 100).length },
            { label: 'En desarrollo', value: projects.filter(p => p.progress < 100 && p.progress > 0).length },
            { label: 'Tecnologías', value: [...new Set(projects.flatMap(p => p.technologies || []))].length }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-light mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mb-16"
          >
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-light mb-2 text-white">
                  No se encontraron proyectos
                </h3>
                <p className="text-gray-500">
                  Intenta con otros términos de búsqueda o filtros diferentes.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16 pb-16 border-b border-gray-800"
        >
          <h3 className="text-2xl font-light mb-4 text-white">
            ¿Tienes algún proyecto en mente?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Me encanta colaborar en proyectos innovadores. ¡Hablemos sobre cómo puedo ayudarte!
          </p>
          <motion.button
            onClick={handleGeneralWhatsApp}
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="mr-2 text-sm" />
            Empezemos a trabajar juntos
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500">
            © 2024 Brayan Rojas. Construido con React y mucho ☕
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;