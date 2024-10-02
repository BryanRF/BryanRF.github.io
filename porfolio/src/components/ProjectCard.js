import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
  });

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <animated.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
            style={springProps}
          >
            <FaGithub className="mr-2" />
            <span>Código</span>
          </animated.a>
          <animated.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
            style={springProps}
          >
            <FaExternalLinkAlt className="mr-2" />
            <span>Demo</span>
          </animated.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;