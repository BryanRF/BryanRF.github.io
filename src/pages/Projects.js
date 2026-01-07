import React from 'react';
import { motion } from 'framer-motion';
import { staticProjects } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = staticProjects;

  return (
    <div className="min-h-screen bg-body">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="neo-title mb-6">
            Mis Proyectos
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl font-bold text-default">
            Proyectos en los que estoy trabajando. Desarrollo móvil y web con enfoque en
            calidad, seguridad y experiencia de usuario.
          </p>
        </motion.div>

        {/* Grid de proyectos - 2 columnas desktop, 1 mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary border-4 border-default rounded-3xl p-8 md:p-12 shadow-brutal-xl text-center"
        >
          <FaGithub className="text-5xl md:text-6xl mx-auto mb-6 text-black" />

          <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
            ¿Quieres ver más?
          </h3>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-bold text-black">
            Visita mi perfil de GitHub para explorar todos mis repositorios.
          </p>

          <a
            href="https://github.com/BryanRF"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button bg-black text-white hover:opacity-80 inline-flex items-center transition-all duration-200"
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