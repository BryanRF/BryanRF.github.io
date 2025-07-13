import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
  FaPalette,
  FaCalendar,
  FaTools,
  FaMobileAlt,
  FaLightbulb,
  FaHeart,
  FaMapMarkerAlt,
  FaGamepad,
  FaMusic,
  FaTv,
  FaBook,
  FaCamera,
  FaCoffee,
  FaPlane,
  FaStar,
  FaArtstation,
  FaPencilAlt
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
    technologies: [
      "React",
      "Vue 2",
      "Vue 3",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Flutter",
      "Dart"
    ],
    level: "Avanzado"
  },
  {
    category: "Backend", 
    icon: FaServer,
    technologies: [
      "Node.js",
      "Python",
      "Java",
      "Spring Boot",
      "Express.js",
      "Django",
      "FastAPI",
      "NestJS",
      "RESTful APIs",
      "GraphQL",
      "PHP"
    ],
    level: "Avanzado"
  },
  {
    category: "Mobile & Desktop",
    icon: FaMobileAlt,
    technologies: [
      "Flutter",
      "Dart",
      "Android (Java/Kotlin)",
      "Kotlin"
    ],
    level: "Intermedio-Avanzado"
  },
  {
    category: "Bases de Datos",
    icon: FaDatabase,
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase"
    ],
    level: "Intermedio-Avanzado"
  },
  {
    category: "Machine Learning",
    icon: FaBrain,
    technologies: [
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Python"
    ],
    level: "Intermedio"
  },
  {
    category: "Herramientas",
    icon: FaTools,
    technologies: [
      "Git",
      "Docker",
      "AWS",
      "Linux",
      "VS Code",
      "Figma"
    ],
    level: "Intermedio-Avanzado"
  }
];


  const education = [
    {
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Señor de Sipán",
      year: "2019 - 2024",
      status: "Graduado",
      description: "Especialización en desarrollo de software y sistemas de información empresariales"
    }
  ];

  const experience = [
    {
      role: "Desarrollador Full-Stack",
      company: "InnovaHtec",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web, móviles y de escritorio. Lidero proyectos desde la conceptualización hasta el deployment, trabajando con tecnologías modernas y metodologías ágiles.",
      achievements: [
        "Desarrollo de +10 aplicaciones web completas",
        "Implementación de sistemas de gestión empresarial",
        "Optimización de rendimiento en aplicaciones legacy"
      ]
    },
    {
      role: "Especialista en Machine Learning",
      company: "Proyectos Independientes", 
      period: "2022 - 2023",
      description: "Implementación de modelos de ML para análisis predictivo y clasificación de datos empresariales. Desarrollo de sistemas de automatización inteligente.",
      achievements: [
        "Creación de modelos predictivos con 95% de precisión",
        "Automatización de procesos empresariales",
        "Análisis de datos para toma de decisiones estratégicas"
      ]
    }
  ];

  const interests = [
    { icon: FaCode, title: "Desarrollo de Software", description: "Crear soluciones elegantes para problemas complejos" },
    { icon: FaBrain, title: "Inteligencia Artificial", description: "Explorar el potencial del machine learning" },
    { icon: FaLightbulb, title: "Innovación", description: "Estar al día con las últimas tecnologías" },
    { icon: FaHeart, title: "Impacto Social", description: "Usar la tecnología para mejorar vidas" }
  ];

  const personalValues = [
    "Aprendizaje continuo y adaptabilidad",
    "Código limpio y buenas prácticas",
    "Colaboración y trabajo en equipo",
    "Innovación responsable",
    "Orientación a resultados"
  ];

  // NUEVA SECCIÓN: Hobbies y gustos personales
  const hobbies = [
    {
      category: "Gaming",
      icon: FaGamepad,
      items: ["Dota 2", "GTA", "Elder Ring", "Skyrim", "Vallheim"],
      description: "Siempre listo para una partida competitiva o explorar mundos nuevos"
    },
    {
      category: "Música",
      icon: FaMusic,
      items: ["Rock", "Pop", "Electrónica", "De todo un poco"],
      description: "La banda sonora perfecta para programar y concentrarme"
    },
    {
  category: "Pintar y Arte Digital",
  icon: FaPalette,
  items: ["Pintura", "Ciencia ficción", "Estilo animado", "Pixel Art"],
  description: "Explorando mundos imaginarios y estilos visuales únicos a través del arte digital"
},

    {
      category: "Otros",
      icon: FaCoffee,
      items: ["Café de especialidad", "Tecnología", "Viajes", "Lectura"],
      description: "Explorando el mundo, una taza de café a la vez"
    }
  ];

const favoriteAnime = [
  { 
    title: "Attack on Titan", 
    genre: "Acción/Drama", 
    status: "⭐ Favorito",
    description: "Una obra maestra narrativa"
  },
  { 
    title: "Death Note", 
    genre: "Thriller/Sobrenatural", 
    status: "🧠 Psicológico",
    description: "El duelo mental perfecto"
  },
  { 
    title: "Berserk", 
    genre: "Fantasía Oscura/Aventura", 
    status: "⚔️ Clásico",
    description: "Violento, crudo y profundamente humano"
  },
  { 
    title: "Mushoku Tensei", 
    genre: "Fantasía/Isekai", 
    status: "🌍 Reencarnación",
    description: "Un viaje de redención en otro mundo"
  },
  { 
    title: "Frieren: Beyond Journey's End", 
    genre: "Fantasía/Reflexivo", 
    status: "⏳ Emotivo",
    description: "El lado humano de lo que viene después de la aventura"
  },
  { 
    title: "Howl’s Moving Castle", 
    genre: "Fantasía/Aventura", 
    status: "🏰 Ghibli Favorito",
    description: "Una historia mágica de libertad y transformación"
  }
];

const favoriteSeries = [
  { 
    title: "Love, Death & Robots", 
    genre: "Animación/Sci-Fi", 
    platform: "Netflix",
    description: "Historias visualmente impactantes y provocadoras"
  },
  { 
    title: "You", 
    genre: "Thriller/Psicológico", 
    platform: "Netflix",
    description: "Obsesión, manipulación y giros inesperados"
  },
  { 
    title: "La Casa del Dragón", 
    genre: "Fantasía/Drama", 
    platform: "HBO Max",
    description: "Intrigas y fuego en los Siete Reinos"
  },
  { 
    title: "El Señor de los Anillos (saga)", 
    genre: "Fantasía/Epico", 
    platform: "Amazon Prime",
    description: "Una travesía legendaria por la Tierra Media"
  },
  { 
    title: "Harry Potter (saga)", 
    genre: "Fantasía/Aventura", 
    platform: "HBO Max",
    description: "Magia, amistad y oscuridad en Hogwarts"
  },
  { 
    title: "John Wick (saga)", 
    genre: "Acción/Crimen", 
    platform: "Prime Video",
    description: "Venganza estilizada al más alto nivel"
  }
];


  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Sobre <span className="font-normal text-white">Mí</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              Ingeniero de sistemas con {yearsOfExperience} años de experiencia creando soluciones tecnológicas 
              innovadoras que combinan funcionalidad, diseño y eficiencia.
            </p>
            
            <div className="flex items-center justify-center text-gray-400 mb-8">
              <FaMapMarkerAlt className="mr-2" />
              <span>Chiclayo, Perú 🇵🇪</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="text-3xl font-light text-white mb-2">{yearsOfExperience}+</div>
            <div className="text-sm text-gray-400">Años de experiencia</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="text-3xl font-light text-white mb-2">15+</div>
            <div className="text-sm text-gray-400">Proyectos completados</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="text-3xl font-light text-white mb-2">10+</div>
            <div className="text-sm text-gray-400">Tecnologías dominadas</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="text-3xl font-light text-white mb-2">∞</div>
            <div className="text-sm text-gray-400">Tazas de café</div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light mb-12 text-center text-white">Habilidades Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div 
                  key={index}
                  className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <IconComponent className="text-2xl text-gray-400 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-white">{skill.category}</h3>
                      <span className="text-sm text-gray-400">{skill.level}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {skill.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light mb-12 text-center text-white">Formación Académica</h2>
          
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-2xl text-gray-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <FaCalendar className="mr-2" />
                      {edu.year}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light mb-12 text-center text-white">Experiencia Profesional</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">{exp.role}</h3>
                    <p className="text-gray-400 mb-4 font-medium">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div>
                        <h4 className="text-white font-medium mb-3">Logros destacados:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-gray-300 text-sm">
                              <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:ml-8 mt-4 lg:mt-0">
                    <div className="flex items-center text-sm text-gray-400 bg-gray-800/50 px-4 py-2 rounded-lg">
                      <FaCalendar className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* NUEVA SECCIÓN: Hobbies y Gustos Personales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light mb-12 text-center text-white">Hobbies & Gustos Personales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <motion.div 
                  key={index}
                  className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-2xl text-gray-400 mr-4" />
                    <h3 className="text-lg font-medium text-white">{hobby.category}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6">{hobby.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {hobby.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Anime y Series */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Anime Favoritos */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-white flex items-center">
                <FaStar className="mr-3 text-yellow-400" />
                Anime Favoritos
              </h3>
              <div className="space-y-4">
                {favoriteAnime.map((anime, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{anime.title}</h4>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {anime.genre}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 text-sm">{anime.description}</p>
                      <span className="text-xs text-gray-300 ml-4">{anime.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Series Favoritas */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-white flex items-center">
                <FaTv className="mr-3 text-blue-400" />
                Series Favoritas
              </h3>
              <div className="space-y-4">
                {favoriteSeries.map((series, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{series.title}</h4>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {series.platform}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 text-sm">{series.description}</p>
                      <span className="text-xs text-gray-300 ml-4">{series.genre}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Interests */}
            <div>
              <h2 className="text-2xl font-light mb-8 text-white">Mis Intereses</h2>
              <div className="space-y-6">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <IconComponent className="text-xl text-gray-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-1">{interest.title}</h3>
                        <p className="text-gray-400 text-sm">{interest.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-light mb-8 text-white">Valores Profesionales</h2>
              <div className="space-y-4">
                {personalValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

   
      </div>
    </div>
  );
}

export default About;