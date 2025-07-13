import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaSearch, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket, FaCog, FaWhatsapp, FaFilter, FaSort } from 'react-icons/fa';
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
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    let result = [...projects];
    
    // Filtrar por categoría
    if (activeFilter !== 'all') {
      result = result.filter(project => project.type === activeFilter);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
      result = result.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies?.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Ordenar
    if (sortBy === 'recent') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'status') {
      result.sort((a, b) => {
        const statusOrder = { 'Completado': 3, 'Beta': 2, 'En desarrollo': 1 };
        return (statusOrder[b.status] || 0) - (statusOrder[a.status] || 0);
      });
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm, sortBy]);

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
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Mis <span className="font-normal text-white">Proyectos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-8">
            Una colección de soluciones tecnológicas que combinan innovación 
            con diseño funcional para resolver problemas reales del mundo empresarial.
          </p>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-12">
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="text-3xl font-light text-white mb-2">{projects.length}</div>
              <div className="text-sm text-gray-400">Proyectos totales</div>
            </div>
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="text-3xl font-light text-white mb-2">
                {projects.filter(p => p.status === 'Completado').length}
              </div>
              <div className="text-sm text-gray-400">Completados</div>
            </div>
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="text-3xl font-light text-white mb-2">
                {projects.filter(p => p.status === 'En desarrollo').length}
              </div>
              <div className="text-sm text-gray-400">En desarrollo</div>
            </div>
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <div className="text-3xl font-light text-white mb-2">
                {[...new Set(projects.flatMap(p => p.technologies || []))].length}
              </div>
              <div className="text-sm text-gray-400">Tecnologías</div>
            </div>
          </div>
        </motion.div>

        {/* Controles de filtrado y búsqueda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Barra de búsqueda */}
          <div className="relative mb-8">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyectos, tecnologías..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filtros por categoría */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center text-gray-400 mr-4">
                <FaFilter className="mr-2" />
                <span className="text-sm font-medium">Filtrar:</span>
              </div>
              {filterCategories.map((category) => {
                const IconComponent = iconMap[category.icon] || FaRocket;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                      activeFilter === category.id
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600 hover:text-white'
                    }`}
                  >
                    <IconComponent className="mr-2 text-sm" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Ordenamiento */}
            <div className="flex items-center gap-3">
              <div className="flex items-center text-gray-400">
                <FaSort className="mr-2" />
                <span className="text-sm font-medium">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600"
              >
                <option value="recent">Más recientes</option>
                <option value="status">Por estado</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              Mostrando {filteredProjects.length} de {projects.length} proyectos
              {searchTerm && ` para "${searchTerm}"`}
              {activeFilter !== 'all' && ` en ${filterCategories.find(f => f.id === activeFilter)?.name}`}
            </p>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-6xl text-gray-700 mb-4">🔍</div>
                <h3 className="text-xl text-gray-400 mb-2">No se encontraron proyectos</h3>
                <p className="text-gray-500">
                  Intenta con otros términos de búsqueda o cambia los filtros
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-12 rounded-3xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-light mb-4 text-white">
            ¿Te interesa algún proyecto?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Me encanta hablar sobre tecnología y colaborar en nuevas ideas. 
            Conversemos sobre cómo podemos trabajar juntos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGeneralWhatsApp}
              className="group flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium hover:scale-105"
            >
              <FaWhatsapp className="mr-3 group-hover:scale-110 transition-transform" />
              Conversemos por WhatsApp
            </button>
            
            <a
              href="mailto:rfreyrebrayaned@gmail.com"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-white rounded-xl hover:border-gray-400 hover:bg-gray-900/50 transition-all duration-300"
            >
              Enviar email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;