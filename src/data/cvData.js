// Datos del CV completo
export const cvData = {
  personal: {
    name: "Brayan Eduardo Rojas Freyre",
    title: "Full Stack Developer | Mobile, Web & Backend | Tech Lead",
    location: "Chiclayo, Perú",
    phone: "+51 998511769",
    email: "rfreyrebrayaned@gmail.com",
    linkedin: "https://www.linkedin.com/in/brayan-rojas-freyre-48933834a/",
    portfolio: "bryanrf.github.io",
    birthDate: "1999-12-26"
  },
  
  profile: {
    fullstack: "Ingeniero de Sistemas y Full Stack Developer / Tech Lead Semi-Senior con 4+ años construyendo productos end-to-end (móvil, web y backend). Experiencia en arquitectura (Clean Architecture, Microservicios), buenas prácticas (Clean Code, SOLID), integración de IA y despliegue en entornos cloud. Trabajo con stacks modernos: Flutter y Android nativo (Kotlin), Frontend Web (React/Vue/Angular) y Backend (NestJS/Python/Java) con bases de datos SQL/NoSQL y pipelines CI/CD.",
    frontend: "Frontend Web con React 18/Next.js (SSR/SSG), TypeScript, Zustand e Inertia.js. Vue 3 (Composition API) y Vue 2, Nuxt, Quasar, PrimeVue. También Angular. UI/UX: Tailwind CSS, Bootstrap, Sass, animaciones y gráficas con Framer Motion, ApexCharts y Chart.js; enfoque en performance, accesibilidad y componentes reutilizables.",
    backend: "Backend y microservicios con Node.js y NestJS: módulos, providers, inyección de dependencias, guards/interceptors/pipes, validación, Swagger, WebSockets, GraphQL (Apollo/Federation) y gRPC. Python (Django/FastAPI) para servicios e IA; experiencia enterprise con Laravel y Java (Spring Boot). Enfoque en arquitectura, seguridad (JWT/OAuth2, OWASP), observabilidad y escalabilidad.",
    mobile: "Desarrollo móvil: Flutter (Dart) con Riverpod/BLoC, arquitectura por capas, optimización de render/animaciones y Method Channels. Android nativo con Kotlin (Jetpack Compose, Coroutines/Flow, Hilt, WorkManager) y patrones MVVM/Clean Architecture. Experiencia con React Native (TypeScript). Seguridad: SSL Pinning, cifrado (AES-256) y biometría.",
    ml: "Integración de IA en productos: Computer Vision con OpenCV, modelos con TensorFlow/Keras y NLP para automatización (por ejemplo, análisis de sentimiento), conectando servicios Python con el core mediante colas/mensajería y arquitectura escalable."
  },
  
  experience: [
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Perú",
      role: "Full Stack Tech Lead (Mobile, Web & Backend)",
      period: "Enero 2024 – Presente",
      description: "Empresa de desarrollo de software y soluciones tecnológicas",
      achievements: [
        "Liderazgo técnico transversal  gestionando el ciclo completo: móvil, web, backend y cloud.",
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
      items: ["React 18", "Next.js (SSR/SSG)", "TypeScript", "Vite", "Zustand", "Inertia.js", "Vue 3 (Composition API)", "Vue 2", "Pinia", "Vuex", "Nuxt.js", "Quasar", "PrimeVue", "Angular", "Tailwind CSS", "Bootstrap", "Sass", "Framer Motion", "ApexCharts", "Chart.js"]
    },
    backend: {
      title: "Backend & AI",
      items: ["Node.js", "TypeScript", "NestJS (Microservicios)", "NestJS Providers/DI", "Guards/Interceptors/Pipes", "REST APIs", "Swagger/OpenAPI", "GraphQL (Apollo/Federation)", "WebSockets", "gRPC", "Python (Django, FastAPI)", "OpenCV", "TensorFlow", "NLP (Sentiment Analysis)", "PHP (Laravel)", "Java (Spring Boot)", "JWT", "OAuth2", "OWASP"]
    },
    flutter: {
      title: "Flutter (Dart)",
      items: ["Dart", "Flutter", "Riverpod", "BLoC", "Arquitectura (Clean/Layered)", "State Management", "Dio/HTTP", "Freezed/JsonSerializable", "GoRouter", "Firebase (Auth/FCM)", "Method Channels", "Animaciones", "Optimización de performance"]
    },
    kotlin: {
      title: "Android Nativo (Kotlin)",
      items: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "MVVM", "Clean Architecture", "Hilt (DI)", "WorkManager", "Retrofit/OkHttp", "Room", "Navigation", "Servicios/Background", "Testing (JUnit)"]
    },
    reactNative: {
      title: "React Native",
      items: ["React Native", "TypeScript", "Redux Toolkit", "Integración APIs", "Navegación", "Build/Release"]
    },
    mobile: {
      title: "Mobile (Resumen)",
      items: ["Flutter", "Android (Kotlin)", "React Native", "Arquitectura móvil", "Seguridad móvil (SSL Pinning, biometría)"]
    },
    database: {
      title: "Base de Datos",
      items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Redis", "SQLite/Room"]
    },
    cloud: {
      title: "Cloud y DevOps",
      items: ["AWS (EKS, S3, DynamoDB)", "Docker (Compose)", "Kubernetes", "Nginx", "Linux", "GitHub Actions", "CI/CD", "GitFlow", "Fastlane", "Jira", "Postman"]
    },
    architecture: {
      title: "Arquitectura y Buenas Prácticas",
      items: ["Clean Architecture", "Microservicios", "SOLID", "Clean Code", "DDD (conceptos)", "Patrones de diseño", "Testing (unit/integration)", "Code Review", "Documentación técnica"]
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
    title: "Full Stack Developer | Mobile, Web & Backend | Tech Lead",
    location: "Chiclayo, Peru",
    phone: "+51 998511769",
    email: "rfreyrebrayaned@gmail.com",
    linkedin: "https://www.linkedin.com/in/brayan-rojas-freyre-48933834a/",
    portfolio: "bryanrf.github.io",
    birthDate: "1999-12-26"
  },

  profile: {
    fullstack: "Systems Engineer and Full Stack Developer / Semi-Senior Tech Lead with 4+ years building end-to-end products (mobile, web and backend). Experience in architecture (Clean Architecture, Microservices), best practices (Clean Code, SOLID), AI integration and cloud environments. Strong with modern stacks: Flutter and native Android (Kotlin), Web Frontend (React/Vue/Angular) and Backend (NestJS/Python/Java), using SQL/NoSQL databases and CI/CD pipelines.",
    frontend: "Web frontend with React 18/Next.js (SSR/SSG), TypeScript, Zustand and Inertia.js. Vue 3 (Composition API) and Vue 2, Nuxt, Quasar, PrimeVue. Also Angular. UI/UX: Tailwind CSS, Bootstrap, Sass, animations and dashboards with Framer Motion, ApexCharts and Chart.js; focus on performance, accessibility and reusable components.",
    backend: "Backend and microservices with Node.js and NestJS: modules, providers, dependency injection, guards/interceptors/pipes, validation, Swagger, WebSockets, GraphQL (Apollo/Federation) and gRPC. Python (Django/FastAPI) for services and AI; enterprise experience with Laravel and Java (Spring Boot). Focus on architecture, security (JWT/OAuth2, OWASP), observability and scalability.",
    mobile: "Mobile development: Flutter (Dart) with Riverpod/BLoC, layered architecture, render/animation optimization and Method Channels. Native Android with Kotlin (Jetpack Compose, Coroutines/Flow, Hilt, WorkManager) using MVVM/Clean Architecture. Experience with React Native (TypeScript). Security: SSL Pinning, encryption (AES-256) and biometrics.",
    ml: "AI integration in products: Computer Vision with OpenCV, TensorFlow/Keras models and NLP for automation (e.g., sentiment analysis), connecting Python services with the core through messaging/queues and scalable architecture."
  },

  experience: [
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Peru",
      role: "Full Stack Tech Lead (Mobile, Web & Backend)",
      period: "Jan 2024 – Present",
      description: "Software development company and technology solutions",
      achievements: [
        "Cross-functional technical leadership across mobile, web, backend and cloud.",
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
      items: ["React 18", "Next.js (SSR/SSG)", "TypeScript", "Vite", "Zustand", "Inertia.js", "Vue 3 (Composition API)", "Vue 2", "Pinia", "Vuex", "Nuxt.js", "Quasar", "PrimeVue", "Angular", "Tailwind CSS", "Bootstrap", "Sass", "Framer Motion", "ApexCharts", "Chart.js"]
    },
    backend: {
      title: "Backend & AI",
      items: ["Node.js", "TypeScript", "NestJS (Microservices)", "NestJS Providers/DI", "Guards/Interceptors/Pipes", "REST APIs", "Swagger/OpenAPI", "GraphQL (Apollo/Federation)", "WebSockets", "gRPC", "Python (Django, FastAPI)", "OpenCV", "TensorFlow", "NLP (Sentiment Analysis)", "PHP (Laravel)", "Java (Spring Boot)", "JWT", "OAuth2", "OWASP"]
    },
    flutter: {
      title: "Flutter (Dart)",
      items: ["Dart", "Flutter", "Riverpod", "BLoC", "Architecture (Clean/Layered)", "State Management", "Dio/HTTP", "Freezed/JsonSerializable", "GoRouter", "Firebase (Auth/FCM)", "Method Channels", "Animations", "Performance optimization"]
    },
    kotlin: {
      title: "Native Android (Kotlin)",
      items: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "MVVM", "Clean Architecture", "Hilt (DI)", "WorkManager", "Retrofit/OkHttp", "Room", "Navigation", "Background services", "Testing (JUnit)"]
    },
    reactNative: {
      title: "React Native",
      items: ["React Native", "TypeScript", "Redux Toolkit", "API integrations", "Navigation", "Build/Release"]
    },
    mobile: {
      title: "Mobile (Summary)",
      items: ["Flutter", "Android (Kotlin)", "React Native", "Mobile architecture", "Mobile security (SSL Pinning, biometrics)"]
    },
    database: {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Redis", "SQLite/Room"]
    },
    cloud: {
      title: "Cloud & DevOps",
      items: ["AWS (EKS, S3, DynamoDB)", "Docker (Compose)", "Kubernetes", "Nginx", "Linux", "GitHub Actions", "CI/CD", "GitFlow", "Fastlane", "Jira", "Postman"]
    },
    architecture: {
      title: "Architecture & Best Practices",
      items: ["Clean Architecture", "Microservices", "SOLID", "Clean Code", "DDD (concepts)", "Design patterns", "Testing (unit/integration)", "Code review", "Technical documentation"]
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
    mobile: ['flutter', 'kotlin', 'reactNative', 'mobile', 'frontend', 'database', 'tools', 'security'],
    fullstack: ['frontend', 'backend', 'flutter', 'kotlin', 'reactNative', 'mobile', 'database', 'cloud', 'architecture', 'ml', 'tools', 'security'],
    ml: ['ml', 'backend', 'tools']
  };
  
  const relevantSkills = skillMap[type] || ['frontend', 'backend', 'flutter', 'kotlin', 'reactNative', 'mobile', 'database', 'cloud', 'architecture', 'ml', 'tools'];
  const result = {};
  
  relevantSkills.forEach(skillKey => {
    if (data.skills[skillKey]) {
      result[skillKey] = data.skills[skillKey];
    }
  });
  
  return result;
};
