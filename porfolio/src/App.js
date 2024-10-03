import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          {/* Agrega aquí más rutas para páginas internas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;