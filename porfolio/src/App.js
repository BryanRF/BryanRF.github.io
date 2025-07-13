import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal - Home standalone */}
        <Route path="/home" element={<Home />} />
        
        {/* Rutas con Layout (para páginas internas) */}
        <Route element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        {/* Redirección por defecto */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;