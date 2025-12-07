import React from 'react';
import { motion } from 'framer-motion';
import { staticProjects } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import { FaSearch, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket, FaCog, FaFilter, FaSort, FaGithub } from 'react-icons/fa';

const iconMap = {
  'FaCode': FaCode,
  'FaDatabase': FaDatabase,
  'FaBrain': FaBrain,
  'FaChartLine': FaChartLine,
  'FaRocket': FaRocket,
  'FaCog': FaCog
};

const filterCategories = [
  { id: 'all', name: 'Todos', icon: 'FaRocket' },
  { id: 'web', name: 'Web', icon: 'FaCode' },
  { id: 'database', name: 'Bases de Datos', icon: 'FaDatabase' },
  { id: 'ml', name: 'Machine Learning', icon: 'FaBrain' },
  { id: 'analytics', name: 'Analytics', icon: 'FaChartLine' },
  { id: 'automation', name: 'Automatización', icon: 'FaCog' }
];

const Projects = () => {
  const githubProjects = staticProjects; // Usar proyectos estáticos
  const loading = false;
  const error = null;
  
  const [filteredProjects, setFilteredProjects] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortBy, setSortBy] = React.useState('recent');

  React.useEffect(() => {
    let result = [...githubProjects];
    
    if (activeFilter !== 'all') {
      result = result.filter(project => project.type === activeFilter);
    }
    
    if (searchTerm) {
      result = result.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies?.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.language?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (sortBy === 'recent') {
      result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else if (sortBy === 'stars') {
      result.sort((a, b) => b.stars - a.stars);
    }
    
    setFilteredProjects(result);
  }, [githubProjects, activeFilter, searchTerm, sortBy]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
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

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-brutal-xl text-center max-w-2xl">
          <p className="text-2xl font-black mb-4">⚠️ Error al cargar proyectos</p>
          <p className="text-lg font-bold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-body">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="neo-title mb-6">
            Mis Proyectos
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-8 font-bold">
            Proyectos reales desde mi GitHub. Explora mi trabajo en desarrollo web, bases de datos, 
            machine learning y más.
          </p>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-12">
            <div className="bg-default border-4 border-default rounded-2xl p-6 text-center shadow-brutal">
              <div className="text-4xl font-black text-default mb-2">{githubProjects.length}</div>
              <div className="text-sm font-bold text-default">Proyectos</div>
            </div>
            <div className="bg-default border-4 border-default rounded-2xl p-6 text-center shadow-brutal">
              <div className="text-4xl font-black text-default mb-2">
                {filteredProjects.length}
              </div>
              <div className="text-sm font-bold text-default">Activos</div>
            </div>
            <div className="bg-default border-4 border-default rounded-2xl p-6 text-center shadow-brutal">
              <div className="text-4xl font-black text-default mb-2">
                {githubProjects.filter(p => p.status === 'Completado').length}
              </div>
              <div className="text-sm font-bold text-default">Completados</div>
            </div>
            <div className="bg-default border-4 border-default rounded-2xl p-6 text-center shadow-brutal">
              <div className="text-4xl font-black text-default mb-2">
                {new Set(githubProjects.flatMap(p => p.technologies || [])).size}
              </div>
              <div className="text-sm font-bold text-default">Tecnologías</div>
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
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-default text-xl" />
            <input
              type="text"
              placeholder="Buscar proyectos, tecnologías, lenguajes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neo-input w-full pl-16 pr-6 py-4 text-lg font-bold"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filtros por categoría */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center mr-4">
                <FaFilter className="mr-2 text-default" />
                <span className="text-sm font-black text-default">Filtrar:</span>
              </div>
              {filterCategories.map((category) => {
                const IconComponent = iconMap[category.icon] || FaRocket;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`flex items-center px-4 py-2 border-4 border-default rounded-lg font-bold text-sm shadow-brutal-sm transition-all duration-200 ${
                      activeFilter === category.id
                        ? 'bg-primary text-black'
                        : 'bg-default text-default hover:bg-opacity-80'
                    }`}
                  >
                    <IconComponent className="mr-2" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Ordenamiento */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <FaSort className="mr-2 text-default" />
                <span className="text-sm font-black text-default">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-4 border-default rounded-lg font-bold bg-default text-default shadow-brutal-sm"
              >
                <option value="recent">Más recientes</option>
                <option value="stars">Más estrellas</option>
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
          <div className="bg-default border-4 border-default rounded-xl p-4 shadow-brutal-sm">
            <p className="font-bold text-default">
              Mostrando {filteredProjects.length} de {githubProjects.length} proyectos
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <div className="bg-default border-4 border-default rounded-3xl p-12 shadow-brutal-xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-black mb-4 text-default">No se encontraron proyectos</h3>
                <p className="font-bold text-default">
                  Intenta con otros términos de búsqueda o cambia los filtros
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary border-4 border-default rounded-3xl p-12 shadow-brutal-xl text-center"
        >
          <FaGithub className="text-6xl mx-auto mb-6 text-black" />
          
          <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
            ¿Quieres ver más?
          </h3>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bold text-black">
            Visita mi perfil de GitHub para explorar todos mis repositorios y contribuciones.
          </p>
          
          <a
            href="https://github.com/BryanRF"
            target="_blank"
            rel="noopener noreferrer"
                    className="neo-button bg-purple-800  dark:bg-black text-white hover:opacity-80 inline-flex items-center transition-all duration-200"
          >
            <FaGithub className="mr-3" />
            Ver GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;