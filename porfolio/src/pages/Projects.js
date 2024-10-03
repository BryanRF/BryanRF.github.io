import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

import ProjectCard from '../components/ProjectCard';
import projectImage from '../images/image.png';
const projects = [
  {
    id: 1,
    title: "Generador de Datos",
    description: "Herramienta que genera automáticamente inserciones optimizadas para diferentes tipos de bases de datos (MySQL, PostgreSQL, MongoDB, etc.), facilitando la carga y el manejo de grandes volúmenes de datos.",
    image: projectImage,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Clasificación de Imágenes con Machine Learning",
    description: "Sistema basado en Machine Learning para clasificar grandes conjuntos de imágenes, empleando técnicas avanzadas de aprendizaje supervisado y redes neuronales.",
    image: projectImage,
    github: "https://github.com",
    demo: "https://demo.com"
  },
];


const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
     
    </div>
  );
};

export default Projects;