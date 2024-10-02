import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Proyecto Innovador 1",
    description: "Una aplicación revolucionaria que transforma la manera en que interactuamos con la tecnología.",
    image: "https://source.unsplash.com/random/800x600?tech",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  // ... Añade más proyectos aquí
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