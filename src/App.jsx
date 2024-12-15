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
  const canvas = document.getElementById('copitos');
    const ctx = canvas.getContext('2d');

    let width, height;
    let snowflakes = [];

    function init() {
        resize();
        createSnowflakes();
        animate();
    }

    // Adjust canvas size to window size
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);

    // Create snowflakes
    function createSnowflakes() {
        let count = width / 8; // Slightly increase the number of snowflakes
        snowflakes = [];
        for (let i = 0; i < count; i++) {
            snowflakes.push(new Snowflake());
        }
    }

    // Snowflake class
    function Snowflake() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 4 + 1; // Variable size (1 to 5 pixels)
        this.speedX = Math.random() * 1 - 0.5; // Random lateral movement
        this.speedY = Math.random() * 3 + 1; // Falling speed (1 to 4)
        this.opacity = Math.random() * 0.5 + 0.3; // Slight transparency
        this.swing = Math.random() * 2; // Oscillation movement
        this.swingSpeed = Math.random() * 0.05 + 0.02; // Oscillation speed
        this.angle = Math.random() * Math.PI * 2; // Initial angle
    }

    Snowflake.prototype.update = function () {
        this.angle += this.swingSpeed; // Update angle for oscillation
        this.x += Math.cos(this.angle) * this.swing + this.speedX; // Oscillation + lateral movement
        this.y += this.speedY; // Falling

        // Reset snowflake to the top if it goes out of bounds
        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * width;
        }

        // Handle lateral out-of-bounds
        if (this.x > width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
    };

    Snowflake.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
        gradient.addColorStop(0, 'rgba(200, 200, 200,' + this.opacity + ')');
        gradient.addColorStop(1, 'rgba(200, 200, 200, 0)');

        ctx.fillStyle = gradient;
        ctx.fill();
    };

    // Main animation
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Snowflakes
        snowflakes.forEach((flake) => {
            flake.update();
            flake.draw();
        });
        requestAnimationFrame(animate);
    }

    init();
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
    
    <main className="min-h-screen mx-10 lg:mx-0 max-w-dvw">
      
      <section 
        ref={el => sectionsRef.current[0] = el} 
        className="w-full fade-in-l-section"
      >
        <Jumbotron />
      </section>
      <header ref={el => sectionsRef.current[1] = el}  className="sticky top-4 w-full z-50 flex justify-center fade-in-section">
  <nav className="relative mb-10">
    <div
      style={{ color: '#312434', opacity: '80%' }}
      className="bg-current rounded-lg opacity-[100%] hidden md:block text-xl font-light"
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
          ref={el => sectionsRef.current[2] = el} 
          className="fade-in-l-section"
        >
          <InfoCards2 />
        </div>
        <div 
          ref={el => sectionsRef.current[3] = el} 
          className="fade-in-r-section"
        >
          <InfoCards />
        </div>
      </section>
      

      <section className="">
        <h2 
          ref={el => sectionsRef.current[4] = el} className="fade-in-section text-[2.5rem] lg:text-[3.0rem] font-light text-center text-[#E0DFFF] mb-8" 
          id="skills"
        >
          Skills
        </h2>
        <h3 ref={el => sectionsRef.current[5] = el} className='fade-in-section text-[1.5rem] lg:text-[2rem] font-light text-center text-[#E0DFFF] mb-3'>Performing</h3>
        <div 
          ref={el => sectionsRef.current[6] = el}
          className="fade-in-r-section"
        >
          <SkillsLogos />
        </div>
        <h3 ref={el => sectionsRef.current[7] = el} className='fade-in-section text-[1.5rem] lg:text-[2rem] font-light text-center text-[#E0DFFF] mb-3'>Learning</h3>
        <div 
          ref={el => sectionsRef.current[8] = el}
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