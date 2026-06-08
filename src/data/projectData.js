// Proyectos estáticos del portafolio
export const staticProjects = [
  {
    id: 1,
    title: "MEMORY",
    description: "Guarda tus notas, contraseñas, diarios y recuerdos de forma segura. App multiplatforma para Windows, Web y Android con cifrado AES-256.",
    technologies: ["Flutter", "Dart", "AES-256", "Biometría", "SQLite", "Offline-first"],
    type: "startup",
    category: "Dinamica",
    status: "Completado",
    icon: "FaBrain",
    features: [
      "Cifrado AES-256 de grado militar",
      "Autenticación biométrica",
      "Multiplataforma: Windows, Web y Android",
      "Funcionamiento 100% Offline"
    ],
    metrics: {
      plataformas: "3+",
      seguridad: "AES-256"
    },
    github: "https://github.com/BryanRF/memory-releases",
    demo: "https://memory-web-sand.vercel.app/",
    demoText: "Landing Page",
    downloadUrl: "https://github.com/BryanRF/memory-releases/releases"
  },
  {
    id: 2,
    title: "LOTE PROPIO",
    description: "Plataforma dinámica para la gestión y venta de lotes y propiedades con panel administrativo completo.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    type: "startup",
    category: "Dinamica",
    status: "Completado",
    icon: "FaHome",
    features: [
      "Catálogo de propiedades y lotes",
      "Panel administrativo dinámico",
      "Búsqueda avanzada de inmuebles",
      "Diseño responsive premium"
    ],
    metrics: {
      propiedades: "200+",
      visitas: "10K+/mes"
    },
    demo: "https://www.tuloteahora.com/"
  },
  {
    id: 3,
    title: "MENU FAST",
    description: "SaaS para promocionar restaurantes. Permite ver platos del día mediante menús QR locales o un mapa interactivo con negocios cercanos.",
    technologies: ["React", "Tailwind CSS", "Geolocalización", "QR Code"],
    type: "startup",
    category: "Dinamica",
    status: "Completado",
    icon: "FaUtensils",
    features: [
      "Plataforma SaaS para restaurantes",
      "Menús digitales automáticos con QR",
      "Geolocalización de menús cercanos",
      "Promoción de negocios y platos del día"
    ],
    metrics: {
      rendimiento: "100%",
      SEO: "Optimizado"
    },
    demo: "https://menufast-web.vercel.app/",
    demoText: "Ver App"
  },
  {
    id: 4,
    title: "PARKEO",
    description: "Sistema inteligente para la gestión de estacionamientos y control de acceso vehicular.",
    technologies: ["NestJS", "React", "PostgreSQL", "IoT"],
    type: "startup",
    category: "Dinamica",
    status: "En Proceso",
    icon: "FaCar",
    features: [
      "Control de cupos en tiempo real",
      "Sistema de tickets digitales",
      "Reportes de ocupación",
      "Integración de pagos"
    ],
    metrics: {
      eficiencia: "Digital",
      control: "Total"
    }
  },
  {
    id: 5,
    title: "ASISTO",
    description: "Próximamente: Plataforma integral para el control de asistencia y gestión de personal.",
    technologies: ["Flutter", "NestJS", "PostgreSQL"],
    type: "startup",
    category: "Dinamica",
    status: "Próximamente",
    icon: "FaUserCheck",
    features: [
      "Control de asistencia digital",
      "Geolocalización de registros",
      "Gestión de reportería",
      "Sincronización en la nube"
    ],
    metrics: {
      estado: "Proximamente",
      fase: "Planificación"
    }
  },
  {
    id: 6,
    title: "LANDING PAGE",
    description: "Landing page simple para construcción - Cliente: RFREYRE CONTRUCCIONES EN DESARROLLO",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    type: "web",
    category: "Landing Page",
    status: "Completado",
    icon: "FaHome",
    features: [
      "Diseño minimalista y profesional",
      "Optimización para móviles",
      "Sección de servicios de construcción",
      "Interfaz intuitiva para clientes"
    ],
    metrics: {
      rendimiento: "100%",
      SEO: "Optimizado"
    },
    demo: "https://lading-page-consturccion.vercel.app/",
    demoText: "Ver Web"
  }
];

// Configuración de WhatsApp
export const whatsappConfig = {
  defaultNumber: "51998511769"
};