# 🌗 Guía: Dark Mode Fluido con View Transitions API en React

Esta guía explica cómo implementar un tema Dark/Light sin lag, usando la **View Transitions API** de forma nativa con React y Tailwind CSS. Esta versión está optimizada por hardware (usando `clip-path`) para evitar caídas de FPS.

## 1. Configurar Tailwind (`tailwind.config.js`)

Asegúrate de habilitar el modo oscuro basado en clases:

```javascript
module.exports = {
  // ...
  darkMode: 'class',
  // ...
}
```

## 2. Crear el Hook `useDarkMode.js`

Este hook gestiona el estado, pero lo más importante: usa `flushSync` para forzar a React a actualizar el DOM de inmediato. Sin esto, React retrasa el renderizado y la transición de pantalla toma una captura equivocada.

```javascript
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return savedMode === 'true';
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Efecto para sincronizar inicialmente con el HTML
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (document.startViewTransition) {
      // 1. Añadir clase temporal para desactivar transiciones globales en CSS
      document.documentElement.classList.add('view-transition-active');
      
      const transition = document.startViewTransition(() => {
        // 2. Usar flushSync para que React actualice los componentes de forma síncrona
        flushSync(() => {
          const root = document.documentElement;
          const newMode = !isDarkMode;
          
          if (newMode) root.classList.add('dark');
          else root.classList.remove('dark');
          
          setIsDarkMode(newMode);
          localStorage.setItem('darkMode', newMode.toString());
        });
      });
      
      // 3. Remover la clase al terminar la animación
      transition.finished.finally(() => {
        document.documentElement.classList.remove('view-transition-active');
      });
    } else {
      setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        localStorage.setItem('darkMode', newMode.toString());
        return newMode;
      });
    }
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
```

## 3. Estilos de Animación Optimizados (`index.css`)

Aquí desactivamos transiciones conflictivas y usamos `clip-path: circle()` en lugar de SVG masks, ya que el clip-path utiliza aceleración por hardware (GPU) impidiendo el lag al escalar.

```css
/* 1. Deshabilitar transiciones globales de colores para que no interfieran con la captura de la pantalla */
html.view-transition-active * {
  transition: none !important;
}

/* 2. Configurar la duración de la animación expansiva */
::view-transition-group(root) {
  animation-duration: 0.7s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}

/* 3. La pantalla "NUEVA" (el nuevo tema) crece como un círculo desde la izquierda superior */
::view-transition-new(root) {
  animation: clip-expand 0.7s ease-in-out;
  z-index: 9999;
}

/* La pantalla "VIEJA" (el tema anterior) se queda de fondo esperando ser tapada */
::view-transition-old(root) {
  z-index: 1;
}

/* Soporte condicional para dark mode */
.dark::view-transition-new(root) {
  animation: clip-expand 0.7s ease-in-out;
}

/* 4. Animación CSS hiper-fluida (60+ FPS) usando clip-path nativo */
@keyframes clip-expand {
  0% {
    clip-path: circle(0px at top left);
  }
  100% {
    clip-path: circle(150vmax at top left);
  }
}
```

## 4. Cómo llamarlo en tu componente

En tu Navbar, Header o el componente que tenga el botón:

```jsx
import React from 'react';
import useDarkMode from '../hooks/useDarkMode'; // Tu ruta correcta

const ThemeToggleBtn = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Activar Modo Claro' : 'Activar Modo Oscuro'}
    </button>
  );
};

export default ThemeToggleBtn;
```
