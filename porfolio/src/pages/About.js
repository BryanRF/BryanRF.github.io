import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
  FaArrowLeft,
  FaDownload,
  FaCalendar
} from 'react-icons/fa';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Configuración personal
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const yearsOfExperience = currentYear - startYear;

  const skills = [
    {
      category: "Frontend",
      icon: FaCode,
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend", 
      icon: FaServer,
      technologies: ["Node.js", "Python", "FastAPI", "Express.js", "RESTful APIs"]
    },
    {
      category: "Bases de Datos",
      icon: FaDatabase,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      category: "Machine Learning",
      icon: FaBrain,
      technologies: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "OpenCV"]
    }
  ];

  const education = [
    {
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Señor de Sipan",
      year: "2019 - 2024",
      status: "Graduado"
    }
  ];

  const experience = [
    {
      role: "Especialista en Machine Learning",
      company: "Proyectos Independientes", 
      period: "2022 - 2023",
      description: "Implementación de modelos de ML para análisis predictivo y clasificación de datos empresariales."
    },
    {
      role: "Desarrollador Full-Stack",
      company: "InnovaHtec",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web, mobile, desktop."
    }
    
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header minimalista */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-800"
      >
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Sobre <span className="font-normal">Mí</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            Ingeniero de sistemas con {yearsOfExperience} años de experiencia creando soluciones tecnológicas 
            innovadoras. Mi pasión por la tecnología me impulsa a estar en constante aprendizaje 
            y a buscar siempre la excelencia en cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200">
              <FaDownload className="mr-2 text-sm" />
              Descargar CV
            </button>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white hover:border-gray-400 transition-colors duration-200"
            >
              Contactar
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-800"
        >
          {[
            { label: "Años de experiencia", value: `${yearsOfExperience}+` },
            { label: "Proyectos completados", value: "15+" },
            { label: "Tecnologías dominadas", value: "20+" },
            { label: "Líneas de código", value: "50K+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-light mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-2xl font-light mb-8">Habilidades Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -20 : 20) }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-gray-400 mr-3 text-lg" />
                    <h3 className="text-lg font-medium">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-xs text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-2xl font-light mb-8">Educación</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-gray-400 mr-3 text-lg" />
                    <div>
                      <h3 className="text-lg font-medium">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendar className="mr-2" />
                      {edu.year}
                    </div>
                    <span className="inline-block mt-1 px-2 py-1 bg-green-900/20 text-green-400 text-xs border border-green-800">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-2xl font-light mb-8">Experiencia</h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">{exp.role}</h3>
                    <p className="text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 ml-4">
                    <FaCalendar className="mr-2" />
                    {exp.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-16 pb-16 border-b border-gray-800"
        >
          <h3 className="text-2xl font-light mb-4 text-white">
            ¿Interesado en trabajar juntos?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Estoy siempre abierto a discutir nuevas oportunidades y proyectos emocionantes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Hablemos
          </Link>
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
}

export default About;