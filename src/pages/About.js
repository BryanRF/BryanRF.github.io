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
  FaCoffee,
  FaStar,
  FaShieldAlt,
} from 'react-icons/fa';

function About() {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const yearsOfExperience = currentYear - startYear;

  const skills = [
    {
      category: "Frontend",
      icon: FaCode,
      technologies: ["React", "Vue 2", "Vue 3", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Flutter", "Dart"],
      level: "Avanzado"
    },
    {
      category: "Backend", 
      icon: FaServer,
      technologies: ["Node.js", "Python", "Java", "Spring Boot", "Express.js", "Django", "FastAPI", "NestJS", "RESTful APIs", "GraphQL", "PHP"],
      level: "Avanzado"
    },
    {
      category: "Mobile & Desktop",
      icon: FaMobileAlt,
      technologies: ["Flutter", "Dart", "Android (Java/Kotlin)", "Kotlin"],
      level: "Intermedio-Avanzado"
    },
    {
      category: "Bases de Datos",
      icon: FaDatabase,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
      level: "Intermedio-Avanzado"
    },
    {
      category: "Machine Learning",
      icon: FaBrain,
      technologies: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "OpenCV", "Python"],
      level: "Intermedio"
    },
    {
      category: "Herramientas",
      icon: FaTools,
      technologies: ["Git", "Docker", "AWS", "Linux", "VS Code", "Figma"],
      level: "Intermedio-Avanzado"
    },
    {
      category: "Seguridad y Normativas",
      icon: FaShieldAlt,
      technologies: ["Normativas ISO (27001)", "Seguridad de la Información", "OWASP"],
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
    { title: "Attack on Titan", genre: "Acción/Drama", status: "⭐ Favorito", description: "Una obra maestra narrativa" },
    { title: "Death Note", genre: "Thriller/Sobrenatural", status: "🧠 Psicológico", description: "El duelo mental perfecto" },
    { title: "Berserk", genre: "Fantasía Oscura/Aventura", status: "⚔️ Clásico", description: "Violento, crudo y profundamente humano" },
    { title: "Mushoku Tensei", genre: "Fantasía/Isekai", status: "🌍 Reencarnación", description: "Un viaje de redención en otro mundo" },
    { title: "Frieren: Beyond Journey's End", genre: "Fantasía/Reflexivo", status: "⏳ Emotivo", description: "El lado humano de lo que viene después de la aventura" },
    { title: "Howl's Moving Castle", genre: "Fantasía/Aventura", status: "🏰 Ghibli Favorito", description: "Una historia mágica de libertad y transformación" }
  ];

  const favoriteSeries = [
    { title: "Love, Death & Robots", genre: "Animación/Sci-Fi", platform: "Netflix", description: "Historias visualmente impactantes y provocadoras" },
    { title: "You", genre: "Thriller/Psicológico", platform: "Netflix", description: "Obsesión, manipulación y giros inesperados" },
    { title: "La Casa del Dragón", genre: "Fantasía/Drama", platform: "HBO Max", description: "Intrigas y fuego en los Siete Reinos" },
    { title: "El Señor de los Anillos (saga)", genre: "Fantasía/Epico", platform: "Amazon Prime", description: "Una travesía legendaria por la Tierra Media" },
    { title: "Harry Potter (saga)", genre: "Fantasía/Aventura", platform: "HBO Max", description: "Magia, amistad y oscuridad en Hogwarts" },
    { title: "John Wick (saga)", genre: "Acción/Crimen", platform: "Prime Video", description: "Venganza estilizada al más alto nivel" }
  ];

  return (
    <div className="min-h-screen bg-body">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="neo-title mb-6 text-default">
            Sobre Mí
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-bold text-default">
              Ingeniero de sistemas con {yearsOfExperience} años de experiencia creando soluciones tecnológicas 
              innovadoras que combinan funcionalidad, diseño y eficiencia.
            </p>
            
            <div className="flex items-center justify-center text-default mb-8">
              <FaMapMarkerAlt className="mr-2 text-2xl" />
              <span className="font-bold text-lg">Chiclayo, Perú 🇵🇪</span>
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
          <div className="text-center p-6 bg-default border-4 border-default rounded-2xl shadow-brutal">
            <div className="text-4xl font-black text-default mb-2">{yearsOfExperience}+</div>
            <div className="text-sm font-bold  text-default">Años de experiencia</div>
          </div>
          <div className="text-center p-6 bg-default border-4 border-default rounded-2xl shadow-brutal">
            <div className="text-4xl font-black text-default mb-2">15+</div>
            <div className="text-sm font-bold  text-default">Proyectos completados</div>
          </div>
          <div className="text-center p-6 bg-default border-4 border-default rounded-2xl shadow-brutal">
            <div className="text-4xl font-black text-default mb-2">10+</div>
            <div className="text-sm font-bold  text-default">Tecnologías dominadas</div>
          </div>
          <div className="text-center p-6 bg-default border-4 border-default rounded-2xl shadow-brutal">
            <div className="text-4xl font-black text-default mb-2">∞</div>
            <div className="text-sm font-bold  text-default">Tazas de café</div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="neo-subtitle mb-12 text-center text-default">Habilidades Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div 
                  key={index}
                 className="p-8 bg-default border-4 border-default rounded-2xl shadow-brutal hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <IconComponent className="text-3xl text-default mr-4" />
                    <div>
                      <h3 className="text-lg font-black  text-default">{skill.category}</h3>
                      <span className="text-sm font-bold text-default">{skill.level}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-current rounded-full mr-3"></div>
                        <span className="text-default text-sm font-bold">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-black mb-8 text-default">Formación Académica</h2>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-8 bg-default border-4 border-default rounded-2xl shadow-brutal"
              >
                <div className="flex items-start mb-4">
                  <FaGraduationCap className="text-3xl text-default mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-black  text-default mb-2">{edu.degree}</h3>
                    <p className="font-bold text-default mb-2">{edu.institution}</p>
                    <p className="text-default text-sm font-bold mb-4">{edu.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm font-bold text-default">
                        <FaCalendar className="mr-2" />
                        {edu.year}
                      </div>
                      <span className="px-4 py-2 bg-primary border-4 border-default rounded-lg text-black text-sm font-black shadow-brutal-sm">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-black mb-8 text-default">Experiencia Profesional</h2>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="p-8 bg-default border-4 border-default rounded-2xl shadow-brutal"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-black  text-default mb-2">{exp.role}</h3>
                    <p className="font-bold text-default mb-4">{exp.company}</p>
                    <p className="text-default font-bold leading-relaxed mb-6">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div>
                        <h4 className="text-default font-black  mb-3 text-sm">Logros destacados:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-black text-sm font-bold">
                              <div className="w-2 h-2 bg-current rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm font-bold text-default bg-gray-light border-4 border-default px-4 py-2 rounded-lg shadow-brutal-sm">
                    <FaCalendar className="mr-2" />
                    {exp.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="neo-subtitle mb-12 text-center text-default">Hobbies & Gustos Personales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <motion.div 
                  key={index}
                 className="p-8 bg-default border-4 border-default rounded-2xl shadow-brutal hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-3xl text-default mr-4" />
                    <h3 className="text-lg font-black  text-default">{hobby.category}</h3>
                  </div>
                  
                  <p className="text-default text-sm font-bold mb-6">{hobby.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {hobby.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="px-4 py-2 bg-gray-light border-4 border-default text-default text-sm font-bold rounded-lg shadow-brutal-sm"
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
              <h3 className="text-2xl font-black mb-8 text-default flex items-center">
                <FaStar className="mr-3 text-default" />
                Anime Favoritos
              </h3>
              <div className="space-y-4">
                {favoriteAnime.map((anime, index) => (
                  <motion.div 
                    key={index}
                className="p-6 bg-default border-4 border-default rounded-xl shadow-brutal"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-default font-black">{anime.title}</h4>
                      <span className="text-xs font-bold text-default bg-gray-light px-3 py-1 rounded-lg border-2 border-default">
                        {anime.genre}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-default text-sm font-bold">{anime.description}</p>
                      <span className="text-xs font-bold text-default ml-4">{anime.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Series Favoritas */}
            <div>
              <h3 className="text-2xl font-black mb-8 text-default flex items-center">
                <FaTv className="mr-3 text-default" />
                Series Favoritas
              </h3>
              <div className="space-y-4">
                {favoriteSeries.map((series, index) => (
                  <motion.div 
                    key={index}
                className="p-6 bg-default border-4 border-default rounded-xl shadow-brutal"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-default font-black">{series.title}</h4>
                      <span className="text-xs font-bold text-default bg-gray-light px-3 py-1 rounded-lg border-2 border-default">
                        {series.platform}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-default text-sm font-bold">{series.description}</p>
                      <span className="text-xs font-bold text-default ml-4">{series.genre}</span>
                    </div>
                  </motion.div>
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