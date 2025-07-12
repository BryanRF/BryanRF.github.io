import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { FaFilter, FaSearch, FaCode, FaDatabase, FaBrain, FaChartLine, FaRocket } from 'react-icons/fa';

// Datos de proyectos mejorados con más información
const projects = [
  {
    id: 1,
    title: "Generador de Datos Inteligente",
    description: "Herramienta avanzada que genera automáticamente inserciones optimizadas para diferentes tipos de bases de datos, con soporte para múltiples formatos y validación de datos en tiempo real.",
    type: "database",
    status: "Completado",
    technologies: ["Python", "PostgreSQL", "MySQL", "MongoDB", "Docker"],
    features: [
      "Generación de datos sintéticos realistas",
      "Soporte para múltiples SGBD",
      "Validación automática de esquemas",
      "Optimización de consultas"
    ],
    metrics: {
      rendimiento: "99.9%",
      velocidad: "10K/seg"
    },
    progress: 100,
    github: "https://github.com/tuusuario/generador-datos",
    demo: "https://demo-generador.com"
  },
  {
    id: 2,
    title: "Clasificador de Imágenes con Deep Learning",
    description: "Sistema de clasificación de imágenes usando redes neuronales convolucionales avanzadas, con capacidad de entrenamiento personalizado y detección en tiempo real.",
    type: "ml",
    status: "En desarrollo",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"],
    features: [
      "Reconocimiento en tiempo real",
      "Entrenamiento personalizable",
      "API REST integrada",
      "Escalabilidad en la nube"
    ],
    metrics: {
      precisión: "94.2%",
      velocidad: "30 FPS"
    },
    progress: 85,
    github: "https://github.com/tuusuario/clasificador-ml",
    demo: "https://demo-classifier.com"
  },
  {
    id: 3,
    title: "Dashboard Analítico Avanzado",
    description: "Plataforma de visualización de datos en tiempo real con gráficos interactivos, métricas personalizables y alertas inteligentes para análisis empresarial.",
    type: "analytics",
    status: "Beta",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Visualizaciones interactivas",
      "Alertas en tiempo real",
      "Exportación automática",
      "Integración con APIs"
    ],
    metrics: {
      usuarios: "1.2K",
      uptime: "99.8%"
    },
    progress: 90,
    github: "https://github.com/tuusuario/dashboard-analytics",
    demo: "https://demo-dashboard.com"
  },
  {
    id: 4,
    title: "Automatizador de Procesos Web",
    description: "Sistema de automatización web que ejecuta tareas repetitivas, scraping inteligente y procesamiento de formularios con técnicas de machine learning.",
    type: "automation",
    status: "Planificado",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Celery", "Redis"],
    features: [
      "Scraping inteligente",
      "Automatización de formularios",
      "Programación de tareas",
      "Detección anti-bot avanzada"
    ],
    metrics: {
      tareas: "500+",
      éxito: "96.5%"
    },
    progress: 60,
    github: "https://github.com/tuusuario/web-automation",
    demo: "https://demo-automation.com"
  }
];

const filterCategories = [
  { id: 'all', name: 'Todos', icon: FaRocket },
  { id: 'database', name: 'Base de Datos', icon: FaDatabase },
  { id: 'ml', name: 'Machine Learning', icon: FaBrain },
  { id: 'analytics', name: 'Analítica', icon: FaChartLine },
  { id: 'automation', name: 'Automatización', icon: FaCode }
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let result = projects;
    
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
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm]);

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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        {/* Header de la página */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mis Proyectos
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una colección de mis trabajos más destacados en desarrollo de software, 
            machine learning y automatización de procesos.
          </p>
        </motion.div>

        {/* Barra de búsqueda y filtros */}
        <motion.div
          className="mb-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Búsqueda */}
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                    activeFilter === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="mr-2" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Proyectos', value: projects.length, color: 'cyan' },
            { label: 'Completados', value: projects.filter(p => p.progress === 100).length, color: 'green' },
            { label: 'En desarrollo', value: projects.filter(p => p.progress < 100 && p.progress > 0).length, color: 'yellow' },
            { label: 'Tecnologías', value: [...new Set(projects.flatMap(p => p.technologies || []))].length, color: 'purple' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 text-center"
              variants={itemVariants}
            >
              <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                  No se encontraron proyectos
                </h3>
                <p className="text-gray-400">
                  Intenta con otros términos de búsqueda o filtros diferentes.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            ¿Tienes algún proyecto en mente?
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Me encanta colaborar en proyectos innovadores. ¡Hablemos!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;