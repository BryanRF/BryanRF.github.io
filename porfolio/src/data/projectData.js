// Proyectos estáticos del portafolio
export const staticProjects = [
  {
    id: 1,
    title: "Memory - Apoyo Cognitivo",
    description: "Aplicación móvil diseñada para personas con dificultades de retención de memoria, ofreciendo ejercicios personalizados y seguimiento de progreso.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    type: "mobile",
    status: "Completado",
    icon: "FaBrain",
    features: [
      "Ejercicios de memoria personalizados",
      "Seguimiento de progreso",
      "Recordatorios inteligentes",
      "Interfaz intuitiva y accesible"
    ],
    metrics: {
      users: "500+",
      rating: "4.8/5",
      downloads: "2K+"
    }
  },
  {
    id: 2,
    title: "Recordatorio de Medicamentos",
    description: "App móvil para gestión y recordatorio de medicamentos con alertas personalizadas y seguimiento de adherencia al tratamiento.",
    technologies: ["Flutter", "Dart", "Local Notifications", "SQLite"],
    type: "mobile",
    status: "Completado",
    icon: "FaCapsules",
    features: [
      "Alertas de medicación",
      "Historial de tomas",
      "Gestión de múltiples tratamientos",
      "Reportes para médicos"
    ],
    metrics: {
      users: "1K+",
      rating: "4.9/5",
      downloads: "3K+"
    }
  },
  {
    id: 3,
    title: "Memory Fitness",
    description: "Aplicación de entrenamiento cerebral con juegos y desafíos diseñados para mejorar la memoria y agilidad mental.",
    technologies: ["Flutter", "Dart", "Gamification", "Analytics"],
    type: "mobile",
    status: "Completado",
    icon: "FaDumbbell",
    features: [
      "Juegos de memoria variados",
      "Niveles de dificultad adaptativos",
      "Estadísticas de rendimiento",
      "Desafíos diarios"
    ],
    metrics: {
      users: "800+",
      rating: "4.7/5",
      downloads: "2.5K+"
    }
  },
  {
    id: 4,
    title: "Memory Parejas",
    description: "Juego de memoria clásico modernizado con múltiples temas y modos de juego para todas las edades.",
    technologies: ["Flutter", "Dart", "Animations", "State Management"],
    type: "mobile",
    status: "Completado",
    icon: "FaPuzzlePiece",
    features: [
      "Múltiples temas visuales",
      "Modo multijugador",
      "Sistema de puntuación",
      "Animaciones fluidas"
    ],
    metrics: {
      users: "1.5K+",
      rating: "4.6/5",
      downloads: "4K+"
    }
  },
  {
    id: 5,
    title: "Tu Lote Propio",
    description: "Landing page auto-gestionable para venta de lotes y propiedades con panel administrativo completo.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    type: "web",
    status: "Completado",
    icon: "FaHome",
    features: [
      "Catálogo de propiedades",
      "Panel administrativo",
      "Sistema de búsqueda avanzada",
      "Integración con WhatsApp"
    ],
    metrics: {
      properties: "200+",
      visits: "10K+/mes",
      conversions: "15%"
    },
    github: "https://github.com/BryanRF/TuLotePropio",
    demo: "https://tulotepropio.pe"
  },
  {
    id: 6,
    title: "Clínica SaaS",
    description: "Sistema integral de gestión clínica con módulos de citas, historias clínicas, facturación y reportes.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Docker", "AWS"],
    type: "web",
    status: "En Desarrollo",
    icon: "FaHospital",
    features: [
      "Gestión de pacientes",
      "Agendamiento de citas",
      "Historias clínicas digitales",
      "Facturación electrónica",
      "Reportes y analytics"
    ],
    metrics: {
      clinics: "5",
      patients: "2K+",
      appointments: "500+/mes"
    }
  },
  {
    id: 7,
    title: "Generador de Datos de Prueba",
    description: "Herramienta para generar datos de prueba realistas en múltiples formatos para cualquier base de datos o estructura.",
    technologies: ["Python", "Pandas", "Faker", "SQLAlchemy"],
    type: "automation",
    status: "Completado",
    icon: "FaDatabase",
    features: [
      "Exportación a Excel, CSV, JSON",
      "Soporte para múltiples DBMS",
      "Generación de estructuras complejas",
      "Datos realistas y personalizables"
    ],
    metrics: {
      formats: "10+",
      records: "1M+ generados",
      databases: "Todas"
    },
    github: "https://github.com/BryanRF/DataGenerator"
  },
  {
    id: 8,
    title: "Detección de Plagas en Papa",
    description: "Sistema de IA para detección temprana de plagas en cultivos de papa mediante análisis de imágenes.",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
    type: "ml",
    status: "Completado",
    icon: "FaLeaf",
    features: [
      "Detección en tiempo real",
      "Precisión del 95%",
      "Clasificación de 8 tipos de plagas",
      "Recomendaciones de tratamiento"
    ],
    metrics: {
      accuracy: "95%",
      images: "10K+ analizadas",
      pests: "8 tipos"
    }
  },
  {
    id: 9,
    title: "Detección de Placas Vehiculares",
    description: "Sistema de reconocimiento automático de placas vehiculares con alta precisión para control de acceso.",
    technologies: ["Python", "OpenCV", "YOLO", "OCR"],
    type: "ml",
    status: "Completado",
    icon: "FaCar",
    features: [
      "Reconocimiento en tiempo real",
      "Soporte para múltiples formatos",
      "Registro de entradas/salidas",
      "Integración con cámaras IP"
    ],
    metrics: {
      accuracy: "98%",
      speed: "<100ms",
      plates: "50K+ procesadas"
    }
  },
  {
    id: 10,
    title: "Detección de Cáncer de Mama",
    description: "Sistema de apoyo al diagnóstico mediante análisis de mamografías con redes neuronales profundas.",
    technologies: ["Python", "TensorFlow", "Keras", "Medical Imaging"],
    type: "ml",
    status: "Completado",
    icon: "FaHeartbeat",
    features: [
      "Análisis de mamografías",
      "Clasificación de lesiones",
      "Reporte detallado",
      "Validado clínicamente"
    ],
    metrics: {
      accuracy: "94%",
      sensitivity: "96%",
      images: "5K+ analizadas"
    }
  },
  {
    id: 11,
    title: "ChatBots Inteligentes",
    description: "Desarrollo de chatbots con IA para atención al cliente, soporte técnico y automatización de procesos.",
    technologies: ["Python", "NLP", "DialogFlow", "WebSockets"],
    type: "ml",
    status: "Completado",
    icon: "FaRobot",
    features: [
      "Procesamiento de lenguaje natural",
      "Integración multicanal",
      "Aprendizaje continuo",
      "Análisis de sentimientos"
    ],
    metrics: {
      bots: "10+",
      conversations: "100K+",
      satisfaction: "92%"
    }
  }
];

// Configuración de WhatsApp
export const whatsappConfig = {
  defaultNumber: "51998511769"
};