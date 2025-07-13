import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  // Configuración para GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? '/porfolio' : '';
  
  return (
    <Router basename={basename}>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas con Layout (para páginas internas) */}
        <Route element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        {/* Ruta catch-all para 404s */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;