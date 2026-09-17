import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

const useDarkMode = () => {
  // Initialize state based on localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 1. Check localStorage first
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // 2. Fallback to system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply the logic to the DOM
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Listen for system preference changes (only works if user hasn't manually set a mode)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update from system if there is NO manual override in localStorage
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older legacy browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleDarkMode = () => {
    // Verificar si el navegador soporta View Transitions API
    if (document.startViewTransition) {
      // Desactivamos transiciones CSS globales para que no interfieran con View Transitions
      document.documentElement.classList.add('view-transition-active');
      
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          const root = document.documentElement;
          const newMode = !isDarkMode;
          
          // Aplicar el cambio de clase directamente dentro de la transición
          if (newMode) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
          
          // Actualizar el estado y localStorage de forma síncrona
          setIsDarkMode(newMode);
          localStorage.setItem('darkMode', newMode.toString());
        });
      });
      
      // Limpiar la clase cuando la transición termine (ya sea éxito o error)
      transition.finished.finally(() => {
        document.documentElement.classList.remove('view-transition-active');
      });
    } else {
      // Fallback para navegadores que no soportan View Transitions
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
