// src/App.jsx
import React from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';

const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
