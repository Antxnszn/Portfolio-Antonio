import { useState, useEffect, useRef } from 'react';
import './App.css';
import Jumbotron from './components/Hero';
import InfoCards from './components/IntroCards';
import InfoCards2 from './components/IntroCard2';
import SkillsLogos from './components/SkillsLogos';
import PerformingLogos from './components/LearningLogos';
import InfoCard3 from './components/InfoCard3';
import ICPCImages from './components/ICPCImages';
import Projects from './components/Projects';
import Images from './components/Images';
import Footer from './components/Footer';




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
    
    <main className="min-h-screen mx-10 lg:mx-0 max-w-dvw overflow-x-hidden">
      
      <section 
        ref={el => sectionsRef.current[0] = el} 
        className="w-full fade-in-l-section"
      >
        <Jumbotron />
      </section>
      <header className="sticky top-4 w-full z-50 flex justify-center">
  <nav className="relative">
    <div
      style={{ color: '#312434', opacity: '80%' }}
      className="bg-current mt-2 rounded-lg opacity-[100%] hidden w-fit md:block"
      id="navbar-default"
    >
      <ul
        style={{ color: '#E9DBED' }}
        className="font-normal flex flex-cols-4 md:p-0 mb-10 gap-14"
      >
        <li>
          <a
            href="#aboutme"
            className="text-center block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#98B6DB]"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#98B6DB]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#98B6DB]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#98B6DB]"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>


      <section id="aboutme" className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:mx-[15em] lg:gap-[8em] mb-10">
        <div 
          ref={el => sectionsRef.current[1] = el} 
          className="fade-in-l-section"
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
      

      <section className="">
        <h2 
          ref={el => sectionsRef.current[3] = el} className="fade-in-section text-[2.5rem] lg:text-[3.0rem] font-light text-center text-[#E0DFFF] mb-8" 
          id="skills"
        >
          Skills
        </h2>
        <h3 ref={el => sectionsRef.current[4] = el} className='fade-in-section text-[1.5rem] lg:text-[2rem] font-light text-center text-[#E0DFFF] mb-3'>Performing</h3>
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="fade-in-r-section"
        >
          <SkillsLogos />
        </div>
        <h3 ref={el => sectionsRef.current[6] = el} className='fade-in-section text-[1.5rem] lg:text-[2rem] font-light text-center text-[#E0DFFF] mb-3'>Learning</h3>
        <div 
          ref={el => sectionsRef.current[7] = el}
          className="fade-in-l-section"
        >
          <PerformingLogos />
        </div>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-0 lg:mx-[15em] lg:mt-10'>
      <InfoCard3 />
      <ICPCImages />
      </div>
      <Projects/>
      <Images />
      <Footer/>
    </main>
    
  );
}

export default App;