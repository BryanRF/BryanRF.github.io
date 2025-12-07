# 🎨 Portfolio Neo-Brutalism - Brayan Rojas

Portfolio personal desarrollado con **React** y **Tailwind CSS**, implementando un diseño **Neo-Brutalism** moderno y audaz.

🌐 **[Ver Portfolio en Vivo](https://bryanrf.github.io)**

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Estilo Neo-Brutalism](#-estilo-neo-brutalism)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Deployment](#-deployment)
- [Funcionalidades Principales](#-funcionalidades-principales)

---

## ✨ Características

### 🎨 Diseño Neo-Brutalism
- **Bordes gruesos negros** (4px) en todos los elementos
- **Sombras duras** sin blur (shadow-brutal)
- **Colores primarios**: Amarillo (#FFD93D) y Azul (#026dd8)
- **Tipografía bold**: Sora para títulos, Montserrat para contenido
- **Contraste máximo**: Fondo blanco con texto negro
- **Sin gradientes suaves**: Diseño plano y directo

### 📱 Proyectos Estáticos (11 proyectos)
- **Apps Móviles** (Flutter/Dart): Memory, Memory Fitness, Memory Parejas, Recordatorio de Medicamentos
- **Aplicaciones Web**: Tu Lote Propio, Clínica SaaS
- **Herramientas**: Generador de Datos de Prueba
- **Machine Learning**: Detección de Plagas, Placas Vehiculares, Cáncer de Mama, ChatBots

### 🤖 Chatbot Interactivo
- **3 opciones principales**: Sobre Trabajo, Aprende Conmigo, Descargar CV
- **Auto-scroll suave** después de cada selección
- **Responsive**: Ventana flotante (desktop) / Pantalla completa (mobile)
- **Se limpia automáticamente** al cerrar

### 📄 Generador de CV Dinámico
- **4 especializaciones**: FullStack, Frontend, Backend, Mobile
- Generación con **jsPDF**
- Filtrado de experiencia por especialización
- Colores optimizados para impresión

### 🧭 Navbar con Scroll Detection
- Aparece automáticamente al hacer scroll (>800px)
- Se muestra después de la sección "Sobre Mí"
- Transición suave

---

## 🎨 Estilo Neo-Brutalism

### Paleta de Colores

```css
/* Primarios */
--color-primary: #FFD93D;        /* Amarillo */
--color-secondary: #026dd8;      /* Azul */

/* Neutrales */
--color-black: #000000;
--color-white: #FFFFFF;
--color-gray-light: #F5F5F5;
```

### Clases CSS Personalizadas

#### Sombras Neo-Brutalism
```css
.shadow-brutal {
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
}

.shadow-brutal-sm {
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
}

.shadow-brutal-xl {
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
}
```

#### Componentes Base
```css
.neo-button {
  @apply px-6 py-3 border-4 border-black rounded-xl 
         font-black shadow-brutal hover-lift 
         transition-all duration-200;
}

.neo-card {
  @apply bg-white border-4 border-black rounded-2xl 
         p-6 shadow-brutal;
}

.neo-input {
  @apply w-full px-4 py-3 border-4 border-black 
         rounded-lg font-bold;
}
```

#### Efectos de Hover
```css
.hover-lift {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover-lift:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1);
}
```

### Principios de Diseño

1. **Bordes Completos**: Todos los elementos tienen `border-4` en los 4 lados
2. **Sin Uppercase Automático**: Removido de CSS, aplicado selectivamente
3. **Sombras Sin Blur**: Sombras sólidas sin difuminado
4. **Contraste Alto**: Siempre negro sobre blanco o viceversa
5. **Tipografía Bold**: Mínimo `font-bold`, preferiblemente `font-black`

---

## 🛠 Tecnologías

### Core
- **React** 18.3.1
- **React Router DOM** 6.26.2
- **Tailwind CSS** 3.4.13

### Animaciones y UI
- **Framer Motion** 11.9.0 - Animaciones fluidas
- **React Icons** - Iconografía

### Utilidades
- **jsPDF** 3.0.4 - Generación de PDFs
- **Flowbite** 2.5.2 - Componentes adicionales

### DevOps
- **gh-pages** 6.1.1 - Deployment a GitHub Pages

---

## 📁 Estructura del Proyecto

```
porfolio/
├── public/
│   ├── avatar.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatBot.js          # Chatbot interactivo
│   │   ├── FloatingWhatsApp.js # Botón flotante WhatsApp
│   │   ├── Footer.js           # Footer Neo-Brutalism
│   │   ├── Header.js           # Navbar con scroll
│   │   ├── Layout.js           # Layout principal
│   │   └── ProjectCard.js      # Tarjeta de proyecto
│   ├── data/
│   │   ├── cvData.js           # Datos del CV
│   │   └── projectData.js      # Proyectos estáticos
│   ├── pages/
│   │   ├── About.js            # Página Sobre Mí
│   │   ├── Contact.js          # Página de Contacto
│   │   ├── Home.js             # Página Principal
│   │   └── Projects.js         # Página de Proyectos
│   ├── utils/
│   │   ├── ageCalculator.js    # Calculador de edad
│   │   └── cvGenerator.js      # Generador de PDFs
│   ├── App.js                  # Componente raíz
│   └── index.css               # Estilos Neo-Brutalism
├── package.json
└── tailwind.config.js
```

---

## 🚀 Instalación

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/BryanRF/BryanRF.github.io.git
cd BryanRF.github.io/porfolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm start
```

4. **Abrir en navegador**
```
http://localhost:3000
```

---

## 📦 Deployment

### Build de Producción
```bash
npm run build
```

### Deploy a GitHub Pages
```bash
npm run deploy
```

El sitio se desplegará automáticamente en: `https://bryanrf.github.io`

---

## 🎯 Funcionalidades Principales

### 1. Página Principal (Home)
- Hero section con avatar
- Sección "Sobre Mí" con información de enseñanza/mentoría
- Estadísticas (años de experiencia, proyectos, etc.)
- Skills técnicas organizadas por categoría
- Soft skills y lenguajes
- CTA de contacto

### 2. Proyectos
- **11 proyectos estáticos** organizados por tipo
- **Filtros**: All, Web, Mobile, ML, Automation
- **Ordenamiento**: Recientes, Nombre, Tipo
- **Búsqueda** en tiempo real
- **Estadísticas**: Total proyectos, Activos, Completados, Tecnologías
- **Estados visuales**: "En Proceso" (amarillo), "Completado" (verde)

### 3. Sobre Mí (About)
- Información personal detallada
- Educación y experiencia profesional
- Hobbies e intereses
- Anime y series favoritas

### 4. Contacto
- Formulario de contacto
- Métodos de contacto (email, WhatsApp, ubicación)
- Links a redes sociales
- Disponibilidad y zona horaria

### 5. Chatbot
**Flujo de conversación:**
```
Inicio
├── Sobre Trabajo
│   ├── Landing Pages → CV Frontend
│   ├── SaaS/Sistemas → CV FullStack/Backend
│   ├── Apps Móviles → CV Mobile
│   ├── Apps Web → CV FullStack/Frontend/Backend
│   ├── Apps Desktop → CV FullStack
│   └── ML/IA → CV FullStack
├── Aprende Conmigo
│   ├── Ver proyectos
│   ├── Contactar WhatsApp
│   └── Descargar CV
└── Descargar CV
    ├── CV FullStack
    ├── CV Frontend
    ├── CV Backend
    └── CV Mobile
```

### 6. Generador de CV
- **Personalización por especialización**
- **Secciones**: Perfil, Experiencia, Educación, Skills
- **Filtrado inteligente** de experiencia relevante
- **Formato profesional** con colores optimizados
- **Descarga automática** en PDF

---

## 🎨 Personalización

### Cambiar Colores Primarios

Editar `src/index.css`:
```css
:root {
  --color-primary: #TU_COLOR_AQUI;
  --color-secondary: #TU_COLOR_AQUI;
}
```

### Agregar Proyectos

Editar `src/data/projectData.js`:
```javascript
{
  id: 12,
  title: "Tu Proyecto",
  description: "Descripción del proyecto",
  technologies: ["React", "Node.js"],
  type: "web", // web, mobile, ml, automation
  status: "Completado", // Completado, En Proceso
  icon: "FaCode",
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/...",
  demo: "https://..."
}
```

### Modificar Información Personal

Editar `src/data/cvData.js`:
```javascript
export const cvData = {
  personal: {
    name: "Tu Nombre",
    title: "Tu Título",
    // ... más campos
  }
}
```

---

## 📝 Scripts Disponibles

```bash
npm start          # Desarrollo
npm run build      # Build de producción
npm run deploy     # Deploy a GitHub Pages
npm test           # Tests
npm run eject      # Eject de Create React App
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👤 Autor

**Brayan Eduardo Rojas Freyre**

- GitHub: [@BryanRF](https://github.com/BryanRF)
- LinkedIn: [Brayan Rojas](https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/)
- Email: rfreyrebrayaned@gmail.com
- WhatsApp: +51 998511769

---

## 🙏 Agradecimientos

- Diseño inspirado en el movimiento **Neo-Brutalism**
- Iconos de **React Icons**
- Animaciones con **Framer Motion**
- Hosting en **GitHub Pages**

---

**Hecho con ❤️ y ☕ en Perú** 🇵🇪
