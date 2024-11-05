import { useState, useEffect, useRef } from 'react';
import './App.css';
import Jumbotron from './components/Hero';
import InfoCards from './components/IntroCards';
import InfoCards2 from './components/IntroCard2';
import SkillsLogos from './components/SkillsLogos';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = sectionsRef.current.filter(el => el);
    elements.forEach(section => observer.observe(section));

    return () => {
      elements.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient">
      <section 
        ref={el => sectionsRef.current[0] = el} 
        className="w-full fade-in-l-section"
      >
        <Jumbotron />
      </section>
      

      <section className="grid grid-cols-1 lg:grid-cols-2 items-start w-full max-w-7xl mx-auto px-4 gap-0">
        <div 
          ref={el => sectionsRef.current[1] = el} 
          className="fade-in-section"
        >
          <InfoCards2 />
        </div>
        <div 
          ref={el => sectionsRef.current[2] = el} 
          className="fade-in-r-section"
        >
          <InfoCards />
        </div>
      </section>
      

      <section className="mt-8">
        <h2 
          className="text-[2.5rem] lg:text-[3.0rem] font-light text-center text-[#E0DFFF] mb-8" 
          id="skills"
        >
          Skills
        </h2>
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="fade-in-section"
        >
          <SkillsLogos />
        </div>
      </section>
    </main>
  );
}

export default App;