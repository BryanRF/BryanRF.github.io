// Datos del CV completo
export const cvData = {
  personal: {
    name: "Brayan Eduardo Rojas Freyre",
    title: "Ingeniero de Sistemas y Líder Técnico",
    location: "Chiclayo, Perú",
    phone: "+51 998511769",
    email: "rfreyrebrayaned@gmail.com",
    linkedin: "linkedin.com/in/brayan-rojas-freyre-48933834a",
    portfolio: "bryanrf.github.io",
    birthDate: "1999-12-26"
  },
  
  profile: {
    fullstack: "Ingeniero de Sistemas y Líder Técnico con experiencia sólida en el ciclo completo de desarrollo de software (FullStack), arquitectura Cloud (AWS) e integración de Inteligencia Artificial. Especializado en escalar aplicaciones web y móviles, optimizar bases de datos y liderar equipos técnicos bajo metodologías ágiles. Enfocado en la entrega de código limpio (Clean Code) y soluciones de alto impacto.",
    frontend: "Desarrollador Frontend especializado en crear interfaces modernas y responsivas con React, Vue.js, Next.js y Flutter. Experto en optimización de rendimiento y experiencia de usuario.",
    backend: "Desarrollador Backend con amplia experiencia en arquitecturas escalables usando NestJS, Laravel, Django y Spring Boot. Especializado en APIs RESTful, bases de datos y servicios Cloud.",
    mobile: "Desarrollador Mobile con Flutter y Dart, creando aplicaciones multiplataforma de alto rendimiento con interfaces nativas y sincronización en tiempo real.",
    ml: "Especialista en Machine Learning e IA, desarrollando modelos predictivos con TensorFlow, OpenCV y Python para soluciones de visión por computadora y procesamiento de lenguaje natural."
  },
  
  experience: [
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Perú",
      role: "Líder Técnico / Semi-Senior FullStack Developer",
      period: "Enero 2024 – Presente",
      description: "Empresa de desarrollo de software y soluciones tecnológicas",
      achievements: [
        "Lidero un equipo de desarrolladores, supervisando la calidad del código mediante revisiones (Code Reviews) y asegurando la implementación de principios SOLID y Clean Code.",
        "Diseño arquitecturas escalables para aplicaciones multiplataforma, transformando requerimientos de negocio en historias de usuario técnicas y priorizando entregables.",
        "Desarrollé una red social multiplataforma utilizando NestJS y Flutter, integrando WebSockets para comunicación en tiempo real y reduciendo la latencia de interacción.",
        "Implementé sistemas de moderación inteligente automatizada utilizando Python, OpenCV y TensorFlow para el análisis de imágenes y lenguaje natural."
      ],
      tags: ["fullstack", "backend", "mobile", "ml"]
    },
    {
      company: "INNOVAHTEC",
      location: "Chiclayo, Perú",
      role: "Programador FullStack",
      period: "Agosto 2023 – Diciembre 2023",
      description: "Empresa de desarrollo de software y soluciones tecnológicas",
      achievements: [
        "Desarrollé módulos multiplataforma de alto rendimiento utilizando Quasar, Django y Android (Java).",
        "Orquesté la infraestructura Cloud en AWS (S3, DynamoDB) y gestioné despliegues en servidores Linux con Nginx, asegurando una alta disponibilidad.",
        "Implementé Firebase para la sincronización de datos en tiempo real, mejorando la experiencia de usuario en entornos móviles.",
        "Creé agentes de Inteligencia Artificial para automatizar el soporte del sistema y personalizar la experiencia del usuario mediante algoritmos de recomendación."
      ],
      tags: ["fullstack", "frontend", "backend", "mobile", "ml"]
    },
    {
      company: "DIGITALTEI",
      location: "Ferreñafe, Perú",
      role: "Programador FullStack",
      period: "Diciembre 2022 – Agosto 2023",
      description: "Consultora de tecnología y transformación digital",
      achievements: [
        "Construí un sistema administrativo integral (ERP) con Laravel para la gestión de ventas, personal e inventarios, centralizando la data operativa de la empresa.",
        "Integré pasarelas de pago y funcionalidades de comercio electrónico, optimizando el flujo de ventas digital.",
        "Mejoré el rendimiento de la aplicación y fortalecí la seguridad en producción, reduciendo vulnerabilidades y tiempos de carga.",
        "Redacté documentación técnica detallada para facilitar el mantenimiento futuro y la escalabilidad del sistema."
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
    degree: "Bachiller en Ingeniería de Sistemas",
    institution: "Universidad Señor de Sipán",
    location: "Chiclayo, Perú"
  },
  
  skills: {
    frontend: {
      title: "Frontend y Móvil",
      items: ["React", "React Native", "Angular", "Vue.js", "Quasar", "Next.js", "Flutter (Dart)", "PrimeVue", "Tailwind CSS", "Framer Motion"]
    },
    backend: {
      title: "Lenguajes y Backend",
      items: ["Python (Django, OpenCV, TensorFlow)", "PHP (Laravel)", "Java (Spring Boot, Android)", "Node.js (NestJS)", "JavaScript/TypeScript"]
    },
    mobile: {
      title: "Desarrollo Móvil",
      items: ["Flutter", "Dart", "Android (Java/Kotlin)", "Kotlin", "Firebase", "React Native"]
    },
    database: {
      title: "Base de Datos",
      items: ["PostgreSQL", "MySQL", "SQL Server", "DynamoDB (NoSQL)", "MongoDB", "Redis"]
    },
    cloud: {
      title: "Cloud y DevOps",
      items: ["AWS (S3, DynamoDB)", "Docker", "Nginx", "Linux", "Jenkins", "GitLab CI", "Firebase"]
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

// Función para filtrar experiencia por tipo
export const filterExperienceByType = (type) => {
  return cvData.experience.filter(exp => exp.tags.includes(type));
};

// Función para obtener skills por tipo
export const getSkillsByType = (type) => {
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
    if (cvData.skills[skillKey]) {
      result[skillKey] = cvData.skills[skillKey];
    }
  });
  
  return result;
};
