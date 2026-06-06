import React from 'react';
import Loader from './components/ui/Loader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import MobileShowcase from './components/sections/MobileShowcase';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MobileShowcase />
        <Achievements />
        <Testimonials />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
