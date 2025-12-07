import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';

function App() {
  // Configuración para GitHub Pages - servido desde la raíz
  const basename = '';
  
  return (
    <Router basename={basename}>
      <FloatingWhatsApp />
      <ChatBot />
      <Routes>
        {/* Ruta principal SIN Layout */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas anidadas CON Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Ruta catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;