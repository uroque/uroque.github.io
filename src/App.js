import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact_me" element={<Contact />} />
    </Routes>
  );
}

export default App;
