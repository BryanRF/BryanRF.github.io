// src/data/projectData.js
export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma completa para la gestión de recursos empresariales con módulos de inventario, ventas, compras y reportes. Incluye dashboard en tiempo real y notificaciones automatizadas.",
    type: "web",
    status: "Completado",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Dashboard interactivo en tiempo real",
      "Gestión completa de inventarios",
      "Sistema de facturación automatizada",
      "Reportes detallados y analytics",
      "Notificaciones push en tiempo real"
    ],
    metrics: {
      usuarios: "250+",
      uptime: "99.9%",
      transacciones: "15K+"
    },
    progress: 100,
    github: "https://github.com/tuusuario/sistema-gestion",
    demo: "https://demo-gestion.com",
    whatsapp: "5491123456789" // Número de WhatsApp para contacto
  },
  {
    id: 2,
    title: "API de Análisis Predictivo",
    description: "Sistema de machine learning que analiza patrones de comportamiento y predice tendencias futuras. Utiliza algoritmos avanzados de deep learning para análisis de datos empresariales.",
    type: "ml",
    status: "En desarrollo",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Análisis predictivo avanzado",
      "Modelos de ML personalizables",
      "API REST escalable",
      "Visualización de predicciones",
      "Integración con múltiples fuentes"
    ],
    metrics: {
      precisión: "94.7%",
      modelos: "12",
      predicciones: "50K+"
    },
    progress: 75,
    github: "https://github.com/tuusuario/ml-predictivo",
    demo: "https://demo-ml.com",
    whatsapp: "5491123456789"
  },
  {
    id: 3,
    title: "Dashboard de Business Intelligence",
    description: "Plataforma de visualización de datos empresariales con gráficos interactivos, KPIs en tiempo real y generación automática de reportes. Conecta múltiples fuentes de datos.",
    type: "analytics",
    status: "Beta",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "AWS"],
    features: [
      "Visualizaciones interactivas avanzadas",
      "KPIs personalizables",
      "Conectores a múltiples DB",
      "Exportación automática de reportes",
      "Alertas inteligentes"
    ],
    metrics: {
      dashboards: "45",
      usuarios: "320",
      reportes: "2.5K"
    },
    progress: 90,
    github: "https://github.com/tuusuario/bi-dashboard",
    demo: "https://demo-bi.com",
    whatsapp: "5491123456789"
  },
  {
    id: 4,
    title: "Optimizador de Base de Datos",
    description: "Herramienta que analiza y optimiza consultas SQL automáticamente. Incluye sugerencias de índices, análisis de rendimiento y generación de esquemas optimizados.",
    type: "database",
    status: "Completado",
    technologies: ["Python", "PostgreSQL", "MySQL", "Redis", "Docker"],
    features: [
      "Análisis automático de consultas",
      "Sugerencias de optimización",
      "Generación de índices inteligente",
      "Monitoreo de rendimiento",
      "Reportes de mejoras"
    ],
    metrics: {
      mejora: "85%",
      consultas: "10K+",
      bases_datos: "50+"
    },
    progress: 100,
    github: "https://github.com/tuusuario/db-optimizer",
    demo: "https://demo-optimizer.com",
    whatsapp: "5491123456789"
  },
  {
    id: 5,
    title: "Bot de Trading Automatizado",
    description: "Sistema de trading algorítmico que utiliza análisis técnico y machine learning para ejecutar operaciones automáticas en mercados financieros con gestión de riesgo avanzada.",
    type: "automation",
    status: "En desarrollo",
    technologies: ["Python", "Pandas", "scikit-learn", "Redis", "AWS"],
    features: [
      "Análisis técnico automatizado",
      "Gestión de riesgo avanzada",
      "Múltiples estrategias de trading",
      "Backtesting completo",
      "Notificaciones en tiempo real"
    ],
    metrics: {
      rentabilidad: "23.5%",
      operaciones: "1.2K",
      precisión: "78%"
    },
    progress: 60,
    github: "https://github.com/tuusuario/trading-bot",
    demo: "https://demo-trading.com",
    whatsapp: "5491123456789"
  },
  {
    id: 6,
    title: "Plataforma E-commerce Avanzada",
    description: "Tienda online completa con funcionalidades avanzadas como recomendaciones personalizadas, chat en vivo, pagos múltiples y gestión completa de inventario.",
    type: "web",
    status: "Completado",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "Recomendaciones personalizadas",
      "Chat en vivo integrado",
      "Múltiples métodos de pago",
      "Gestión avanzada de inventario",
      "SEO optimizado"
    ],
    metrics: {
      ventas: "$125K",
      productos: "500+",
      conversión: "12.8%"
    },
    progress: 100,
    github: "https://github.com/tuusuario/ecommerce-platform",
    demo: "https://demo-ecommerce.com",
    whatsapp: "5491123456789"
  },
  {
    id: 7,
    title: "Sistema de Reconocimiento Facial",
    description: "Aplicación de seguridad que utiliza deep learning para reconocimiento facial en tiempo real. Incluye detección de emociones y análisis de comportamiento.",
    type: "ml",
    status: "Beta",
    technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "Docker"],
    features: [
      "Reconocimiento facial en tiempo real",
      "Detección de emociones",
      "Análisis de comportamiento",
      "Base de datos de rostros",
      "Alertas de seguridad"
    ],
    metrics: {
      precisión: "96.2%",
      velocidad: "25 FPS",
      rostros: "10K+"
    },
    progress: 80,
    github: "https://github.com/tuusuario/facial-recognition",
    demo: "https://demo-facial.com",
    whatsapp: "5491123456789"
  },
  {
    id: 8,
    title: "Automatizador de Procesos RPA",
    description: "Suite de automatización robótica de procesos que elimina tareas repetitivas en empresas. Incluye scraping web, procesamiento de documentos y flujos de trabajo.",
    type: "automation",
    status: "En desarrollo",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Celery", "Redis"],
    features: [
      "Automatización de formularios web",
      "Procesamiento de documentos",
      "Flujos de trabajo personalizables",
      "Monitoreo de procesos",
      "Reportes de eficiencia"
    ],
    metrics: {
      procesos: "150+",
      ahorro: "40 hrs/sem",
      eficiencia: "94%"
    },
    progress: 65,
    github: "https://github.com/tuusuario/rpa-suite",
    demo: "https://demo-rpa.com",
    whatsapp: "5491123456789"
  }
];

// Configuración para WhatsApp
export const whatsappConfig = {
  defaultNumber: "5491123456789", // Tu número por defecto
  defaultMessage: "¡Hola! Me interesa conocer más sobre tus proyectos. ¿Podríamos hablar?"
};

// Función para generar enlace de WhatsApp
export const generateWhatsAppLink = (projectId, customMessage = null) => {
  const project = projects.find(p => p.id === projectId);
  const number = project?.whatsapp || whatsappConfig.defaultNumber;
  const message = customMessage || `¡Hola! Me interesa el proyecto "${project?.title}". ¿Podríamos hablar sobre él?`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

// Categorías de filtros para la página de proyectos
export const filterCategories = [
  { id: 'all', name: 'Todos', icon: 'FaRocket' },
  { id: 'web', name: 'Desarrollo Web', icon: 'FaCode' },
  { id: 'ml', name: 'Machine Learning', icon: 'FaBrain' },
  { id: 'database', name: 'Base de Datos', icon: 'FaDatabase' },
  { id: 'analytics', name: 'Analítica', icon: 'FaChartLine' },
  { id: 'automation', name: 'Automatización', icon: 'FaCog' }
];

export default projects;