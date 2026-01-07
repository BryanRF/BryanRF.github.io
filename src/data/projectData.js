// Proyectos estáticos del portafolio
export const staticProjects = [
  {
    id: 1,
    title: "🧠 MEMORY",
    description: "Guarda tus notas, contraseñas, diarios y recuerdos de forma segura. Solo tú puedes acceder, incluso sin internet. App móvil con cifrado AES-256 y autenticación biométrica.",
    technologies: ["Flutter", "Dart", "AES-256", "Biometría", "SQLite", "Offline-first"],
    type: "mobile",
    status: "Completado",
    icon: "FaBrain",
    features: [
      "🔐 Cifrado AES-256 de grado militar",
      "👆 Autenticación biométrica (huella/Face ID)",
      "📴 100% Offline: sin depender de internet",
      "� 15+ módulos: notas, diario, contraseñas, galería y más"
    ],
    metrics: {
      módulos: "15+",
      seguridad: "AES-256"
    },
    github: "https://github.com/BryanRF/memory-pub",
    downloadUrl: "https://github.com/BryanRF/memory-pub/releases"
  },
  {
    id: 2,
    title: "Tu Lote Ahora",
    description: "Plataforma web para venta de lotes y propiedades con panel administrativo completo, catálogo de proyectos y sistema de búsqueda avanzada.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    type: "web",
    status: "En Proceso",
    icon: "FaHome",
    features: [
      "🏠 Catálogo de propiedades y lotes",
      "⚙️ Panel administrativo completo",
      "🔍 Sistema de búsqueda avanzada",
      "📱 Diseño responsive y moderno"
    ],
    metrics: {
      propiedades: "200+",
      visitas: "10K+/mes"
    },
    demo: "https://www.tuloteahora.com/"
  }
];

// Configuración de WhatsApp
export const whatsappConfig = {
  defaultNumber: "51998511769"
};