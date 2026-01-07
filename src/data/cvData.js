// Datos del CV completo
export const cvData = {
  personal: {
    name: "Brayan Eduardo Rojas Freyre",
    title: "Full Stack Tech Lead | Mobile, Backend & Cloud Specialist",
    location: "Chiclayo, Perú",
    phone: "+51 998511769",
    email: "rfreyrebrayaned@gmail.com",
    linkedin: "https://www.linkedin.com/in/brayan-rojas-freyre-48933834a/",
    portfolio: "bryanrf.github.io",
    birthDate: "1999-12-26"
  },
  
  profile: {
    fullstack: "Ingeniero de Sistemas y Tech Lead Semi-Senior con 4+ años de experiencia construyendo ecosistemas tecnológicos completos. Especialista en Desarrollo Móvil Híbrido y Nativo (Flutter/Kotlin), Arquitecturas Backend de Microservicios (NestJS/Python) y Frontend Web Moderno (React/Vue). Experto integrando IA en flujos de negocio, diseñando bases de datos escalables (SQL/NoSQL) y desplegando infraestructura en AWS/Docker.",
    frontend: "Frontend Web moderno con React 18 y Next.js (SSR), Zustand e Inertia.js. También Vue 3 (Composition API), Nuxt.js, Quasar y PrimeVue. UI/UX: Tailwind CSS, Bootstrap, Sass, Framer Motion, ApexCharts y Chart.js.",
    backend: "Backend y microservicios con Node.js y NestJS: GraphQL (Apollo/Federation), WebSockets, gRPC y módulos compartidos. Python para IA con Django/FastAPI, OpenCV y TensorFlow, además de NLP (análisis de sentimiento). Experiencia enterprise con Laravel y Spring Boot.",
    mobile: "Desarrollo móvil experto: Flutter (Dart, Riverpod 2.0, BLoC, Method Channels, optimización de render y animaciones). Android nativo: Kotlin, Jetpack Compose, Coroutines/Flow, Dagger Hilt, WorkManager. React Native con TypeScript + Redux Toolkit. Seguridad móvil: SSL Pinning, AES-256 y biometría.",
    ml: "Integración de IA en productos: Computer Vision con OpenCV, modelos con TensorFlow y NLP para moderación/automatización de procesos, conectando servicios Python con backends mediante colas y arquitectura escalable."
  },
  
  experience: [
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Perú",
      role: "Full Stack Tech Lead (Mobile, Web & Backend)",
      period: "Enero 2024 – Presente",
      description: "Empresa de desarrollo de software y soluciones tecnológicas",
      achievements: [
        "Liderazgo técnico transversal (4 devs) gestionando el ciclo completo: móvil, web, backend y cloud.",
        "Arquitectura 360° con Clean Architecture unificando Flutter (mobile), Next.js/Vue (web) y NestJS (backend).",
        "Migración a microservicios en NestJS + Docker, GraphQL para optimizar consumo de data y WebSockets para comunicación real-time.",
        "Integración de IA en Python (NLP y OpenCV) conectada al core mediante colas/mensajería.",
        "Seguridad móvil: implementación de SSL Pinning en capa nativa Kotlin expuesta a Flutter; optimización de performance reduciendo peso de la app ~35%.",
        "Dashboards administrativos con Vue 3/Quasar y ApexCharts para métricas en tiempo real."
      ],
      tags: ["fullstack", "backend", "mobile", "ml"]
    },
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Perú",
      role: "Full Stack Developer (Flutter, Node.js & React)",
      period: "Agosto 2023 – Diciembre 2023",
      description: "Empresa de desarrollo de software y soluciones tecnológicas",
      achievements: [
        "Desarrollo de features complejas en Flutter, integrando módulos nativos Kotlin (Coroutines, Dagger Hilt) vía Method Channels.",
        "Backend y data: optimización de consultas y APIs seguras; trabajo con DynamoDB y estrategias de sincronización.",
        "Sincronización offline-first con bases locales y tareas en background."
      ],
      tags: ["fullstack", "frontend", "backend", "mobile", "ml"]
    },
    {
      company: "DIGITALTEI",
      location: "Ferreñafe, Perú",
      role: "Full Stack Developer (Laravel, Vue & Android)",
      period: "Diciembre 2020 – Agosto 2023",
      description: "Consultora de tecnología y transformación digital",
      achievements: [
        "Web enterprise: desarrollo de ERPs con Laravel (Blade) y componentes Vue.js/Bootstrap.",
        "Android nativo: apps empresariales en Kotlin bajo MVVM y Clean Architecture, consumo de APIs con Retrofit.",
        "Frontend e-commerce: personalización de temas y plugins (PrestaShop/Prestashop) y maquetación UI responsiva."
      ],
      tags: ["fullstack", "backend", "frontend"]
    },
    {
      company: "INTERIBERICA",
      location: "Remoto (Sede España)",
      role: "Programador Frontend",
      period: "Enero 2021 – Marzo 2021",
      description: "Empresa de comercio electrónico y desarrollo web",
      achievements: [
        "Desarrollé plugins personalizados para Opencart y Prestashop, adaptando las plataformas a necesidades específicas del mercado europeo.",
        "Optimicé la interfaz de usuario (UI/UX) para mejorar la tasa de conversión y la navegabilidad del sitio."
      ],
      tags: ["frontend"]
    }
  ],
  
  education: {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Señor de Sipán",
    location: "Chiclayo, Perú"
  },
  
  skills: {
    frontend: {
      title: "Frontend Web",
      items: ["React 18", "Next.js (SSR)", "Zustand", "Inertia.js", "Vue 3 (Composition API)", "Nuxt.js", "Quasar", "PrimeVue", "Tailwind CSS", "Bootstrap", "Sass", "Framer Motion", "ApexCharts", "Chart.js"]
    },
    backend: {
      title: "Backend & AI",
      items: ["Node.js", "NestJS (Microservicios)", "GraphQL (Apollo/Federation)", "WebSockets", "gRPC", "Python (Django, FastAPI)", "OpenCV", "TensorFlow", "NLP (Sentiment Analysis)", "PHP (Laravel)", "Java (Spring Boot)", "JavaScript/TypeScript"]
    },
    mobile: {
      title: "Desarrollo Móvil",
      items: ["Flutter (Dart)", "Riverpod 2.0", "BLoC", "Method Channels", "Android (Kotlin)", "Jetpack Compose", "Coroutines/Flow", "Dagger Hilt", "WorkManager", "React Native (TypeScript)", "Redux Toolkit", "SSL Pinning", "AES-256", "Biometría"]
    },
    database: {
      title: "Base de Datos",
      items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Redis", "SQLite/Room"]
    },
    cloud: {
      title: "Cloud y DevOps",
      items: ["AWS (EKS, S3, DynamoDB)", "Docker (Compose/Swarm)", "Nginx", "Linux", "GitHub Actions", "GitFlow", "Fastlane", "Jira", "Postman"]
    },
    ml: {
      title: "Machine Learning e IA",
      items: ["TensorFlow", "OpenCV", "scikit-learn", "Keras", "Python", "Computer Vision", "NLP"]
    },
    tools: {
      title: "Herramientas y Otros",
      items: ["Git", "GitHub", "Postman", "Metodologías Ágiles (Scrum)", "Clean Code", "SOLID"]
    },
    security: {
      title: "Seguridad y Normativas",
      items: ["Normativas ISO (27001)", "Seguridad de la Información", "OWASP"]
    }
  }
};

export const cvDataEn = {
  personal: {
    name: "Brayan Eduardo Rojas Freyre",
    title: "Full Stack Tech Lead | Mobile, Backend & Cloud Specialist",
    location: "Chiclayo, Peru",
    phone: "+51 998511769",
    email: "rfreyrebrayaned@gmail.com",
    linkedin: "https://www.linkedin.com/in/brayan-rojas-freyre-48933834a/",
    portfolio: "bryanrf.github.io",
    birthDate: "1999-12-26"
  },

  profile: {
    fullstack: "Systems Engineer and Semi-Senior Tech Lead with 4+ years of experience building end-to-end technology ecosystems. Specialist in hybrid and native mobile development (Flutter/Kotlin), scalable backend microservices (NestJS/Python) and modern web frontend (React/Vue). Strong background in software architecture (Clean Architecture, Microservices), AI integration into business processes, and cloud deployment (AWS, Docker).",
    frontend: "Modern web frontend with React 18 and Next.js (SSR), Zustand and Inertia.js. Also Vue 3 (Composition API), Nuxt.js, Quasar and PrimeVue. UI/UX: Tailwind CSS, Bootstrap, Sass, Framer Motion, ApexCharts and Chart.js.",
    backend: "Backend and microservices with Node.js and NestJS: GraphQL (Apollo/Federation), WebSockets, gRPC and shared modules. AI development with Python (Django/FastAPI), OpenCV and TensorFlow, plus NLP (sentiment analysis). Enterprise experience with Laravel and Spring Boot.",
    mobile: "Expert mobile development: Flutter (Dart, Riverpod 2.0, BLoC, Method Channels, render and animation optimization). Native Android: Kotlin, Jetpack Compose, Coroutines/Flow, Dagger Hilt, WorkManager. React Native with TypeScript + Redux Toolkit. Mobile security: SSL Pinning, AES-256 and biometrics.",
    ml: "AI integration in products: Computer Vision with OpenCV, TensorFlow models and NLP for moderation/automation, connecting Python services with backends through messaging/queues and scalable architecture."
  },

  experience: [
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Peru",
      role: "Full Stack Tech Lead (Mobile, Web & Backend)",
      period: "Jan 2024 – Present",
      description: "Software development company and technology solutions",
      achievements: [
        "Cross-functional technical leadership (4 devs) across mobile, web, backend and cloud.",
        "360° architecture with Clean Architecture across Flutter (mobile), Next.js/Vue (web) and NestJS (backend).",
        "Monolith-to-microservices migration with NestJS + Docker; GraphQL to optimize data consumption and WebSockets for real-time communication.",
        "Python AI integration (NLP and OpenCV) connected to the core through messaging/queues.",
        "Mobile security: implemented SSL Pinning in native Kotlin exposed to Flutter; improved performance and reduced app size by ~35%.",
        "Admin dashboards built with Vue 3/Quasar and ApexCharts for real-time metrics."
      ],
      tags: ["fullstack", "backend", "mobile", "ml"]
    },
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Peru",
      role: "Full Stack Developer (Flutter, Node.js & React)",
      period: "Aug 2023 – Dec 2023",
      description: "Software development company and technology solutions",
      achievements: [
        "Built complex features in Flutter, integrating native Kotlin modules (Coroutines, Dagger Hilt) via Method Channels.",
        "Backend and data: query optimization and secure APIs; worked with DynamoDB and synchronization strategies.",
        "Offline-first synchronization using local databases and background tasks."
      ],
      tags: ["fullstack", "frontend", "backend", "mobile", "ml"]
    },
    {
      company: "DIGITALTEI",
      location: "Ferreñafe, Peru",
      role: "Full Stack Developer (Laravel, Vue & Android)",
      period: "Dec 2020 – Aug 2023",
      description: "Technology and digital transformation consultancy",
      achievements: [
        "Enterprise web: built ERPs with Laravel (Blade) and Vue.js/Bootstrap components.",
        "Native Android: enterprise apps in Kotlin using MVVM and Clean Architecture, consuming APIs with Retrofit.",
        "E-commerce frontend: customized themes and plugins (PrestaShop) and built responsive UI layouts."
      ],
      tags: ["fullstack", "backend", "frontend"]
    },
    {
      company: "INTERIBERICA",
      location: "Remote (Spain)",
      role: "Frontend Developer",
      period: "Jan 2021 – Mar 2021",
      description: "E-commerce and web development company",
      achievements: [
        "Built custom plugins for Opencart and Prestashop, adapting platforms to European market needs.",
        "Improved UI/UX to increase conversion rate and site usability."
      ],
      tags: ["frontend"]
    }
  ],

  education: {
    degree: "Systems Engineering",
    institution: "Universidad Señor de Sipán",
    location: "Chiclayo, Peru"
  },

  skills: {
    frontend: {
      title: "Web Frontend",
      items: ["React 18", "Next.js (SSR)", "Zustand", "Inertia.js", "Vue 3 (Composition API)", "Nuxt.js", "Quasar", "PrimeVue", "Tailwind CSS", "Bootstrap", "Sass", "Framer Motion", "ApexCharts", "Chart.js"]
    },
    backend: {
      title: "Backend & AI",
      items: ["Node.js", "NestJS (Microservices)", "GraphQL (Apollo/Federation)", "WebSockets", "gRPC", "Python (Django, FastAPI)", "OpenCV", "TensorFlow", "NLP (Sentiment Analysis)", "PHP (Laravel)", "Java (Spring Boot)", "JavaScript/TypeScript"]
    },
    mobile: {
      title: "Mobile Development",
      items: ["Flutter (Dart)", "Riverpod 2.0", "BLoC", "Method Channels", "Android (Kotlin)", "Jetpack Compose", "Coroutines/Flow", "Dagger Hilt", "WorkManager", "React Native (TypeScript)", "Redux Toolkit", "SSL Pinning", "AES-256", "Biometrics"]
    },
    database: {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Redis", "SQLite/Room"]
    },
    cloud: {
      title: "Cloud & DevOps",
      items: ["AWS (EKS, S3, DynamoDB)", "Docker (Compose/Swarm)", "Nginx", "Linux", "GitHub Actions", "GitFlow", "Fastlane", "Jira", "Postman"]
    },
    ml: {
      title: "Machine Learning & AI",
      items: ["TensorFlow", "OpenCV", "scikit-learn", "Keras", "Python", "Computer Vision", "NLP"]
    },
    tools: {
      title: "Tools & Practices",
      items: ["Git", "GitHub", "Postman", "Agile (Scrum)", "Clean Code", "SOLID"]
    },
    security: {
      title: "Security & Standards",
      items: ["ISO Standards (27001)", "Information Security", "OWASP"]
    }
  }
};

export const getCvData = (lang = 'es') => {
  return lang === 'en' ? cvDataEn : cvData;
};

// Función para filtrar experiencia por tipo
export const filterExperienceByType = (type, lang = 'es') => {
  const data = getCvData(lang);
  return data.experience.filter(exp => exp.tags.includes(type));
};

// Función para obtener skills por tipo
export const getSkillsByType = (type, lang = 'es') => {
  const data = getCvData(lang);
  const skillMap = {
    frontend: ['frontend', 'tools'],
    backend: ['backend', 'database', 'cloud', 'tools'],
    mobile: ['mobile', 'frontend', 'database', 'tools'],
    fullstack: ['frontend', 'backend', 'mobile', 'database', 'cloud', 'ml', 'tools', 'security'],
    ml: ['ml', 'backend', 'tools']
  };
  
  const relevantSkills = skillMap[type] || ['frontend', 'backend', 'mobile', 'database', 'cloud', 'ml', 'tools'];
  const result = {};
  
  relevantSkills.forEach(skillKey => {
    if (data.skills[skillKey]) {
      result[skillKey] = data.skills[skillKey];
    }
  });
  
  return result;
};
