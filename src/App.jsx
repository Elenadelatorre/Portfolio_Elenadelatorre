// src/App.jsx
import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
