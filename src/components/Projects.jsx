import { useState, useEffect, useRef } from 'react';
import '../App.css';


export default function Projects() {
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
  <>
  <h2  id="projects" className="text-[2.5rem] lg:text-[3.0rem] font-light lg:mt-28 tracking-tight text-[#E6EFFA]">
    Projects
  </h2>
  {/*  */}
  <div ref={el => sectionsRef.current[0] = el} className=" fade-in-section justify-center items-center lg:mx-[10em] rounded-[15px] mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[18px] lg:p-10 gap-5">
        <div ref={el => sectionsRef.current[1] = el} className="fade-in-l-section overflow-hidden rounded-lg">
          <a href="https://devinterview.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img 
              
              src="../../public/devinterview.jpg" 
              className="w-full max-w-[500px] transition-transform duration-300 hover:scale-110"
              alt="Dev Interview"
            />
          </a>
        </div>
        <div ref={el => sectionsRef.current[2] = el} className="fade-in-r-section flex flex-col gap-5 lg:gap-3">
          <a href="https://devinterview.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#E6EFFA] font-light text-4xl text-justify">DevInterview</a>
          <p className="text-[#E6EFFA] font-light text-base text-justify">Collaborators:</p>
          <div className="flex flex-row gap-5 justify-start items-left">
            <a href="https://github.com/Antxnszn" target="_blank" rel="noopener noreferrer">
              <img src="https://avatars.githubusercontent.com/u/147531709?v=4" className="rounded-full size-8"/>
            </a>
            <a href="https://github.com/danielctecla" target="_blank" rel="noopener noreferrer">
              <img src="https://avatars.githubusercontent.com/u/94944243?v=4" className="rounded-full size-8"/>
            </a>
            <a href="https://github.com/mvnueloc" target="_blank" rel="noopener noreferrer">
              <img src="https://avatars.githubusercontent.com/u/128934926?v=4" className="rounded-full size-8"/>
            </a>
          </div>
          <p className="text-[#E6EFFA] font-light text-lg text-justify">
          Powered by Vercel SDK AI, it analyzes your responses, offers feedback based on a scoring system, and provides ideal answers and tips to help you improve for your technical interviews. 
            <span className="text-[#98B6DB] font-normal"> Developed for Vercel SDK AI Hackathon</span>
          </p>
          
          {/* Added Visit Site Button */}
          <a 
  href="https://devinterview.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-[#1D2A3A] rounded-lg hover:bg-[#253E5C] transition-colors duration-200 w-fit 
             hover:shadow-[0_0_20px_rgba(103,176,255,0.7)] animate-pulse hover:scale-105 transform transition-all duration-300 ease-in-out"
>
  Visit Site
</a>
        </div>
      </div>
    </div>
  {/*  */}
  <div ref={el => sectionsRef.current[3] = el} className="fade-in-section justify-center items-center lg:mx-[10em] rounded-[15px] mt-14">
  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[18px] lg:p-10 gap-5">
    <div ref={el => sectionsRef.current[4] = el} className="fade-in-r-section overflow-hidden rounded-lg">
      <a href="https://mali-five.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img 
          src="../../public/maliproject.jpg" 
          className="w-full max-w-[500px] transition-transform duration-300 hover:scale-110"
          alt="Mali Project"
        />
      </a>
    </div>
    <div ref={el => sectionsRef.current[5] = el} className="fade-in-l-section flex flex-col gap-5 lg:gap-3">
      <a href="https://mali-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#E6EFFA] font-light text-4xl text-justify">Mali</a>
      <p className="text-[#E6EFFA] font-light text-[1rem] text-justify">Collaborators:</p>
      <div className="flex flex-row gap-5 justify-start items-left">
        <a href="https://github.com/Antxnszn" target="_blank" rel="noopener noreferrer">
          <img src="https://avatars.githubusercontent.com/u/147531709?v=4" className="rounded-full size-8"/>
        </a>
        <a href="https://github.com/danielctecla" target="_blank" rel="noopener noreferrer">
          <img src="https://avatars.githubusercontent.com/u/128934926?v=4" className="rounded-full size-8"/>
        </a>
      </div>
      <p className="text-[#E6EFFA] font-light text-[1.2rem] text-justify">
        Designed and implemented a backend system tailored to social services. Integrated advanced AI models (OpenAI's Llama 3.2 with RAGs) for more precise, retrieval-based text generation. 
        <span className="text-[#98B6DB] font-normal"> Developed for "Hackathon: Contruyendo el futuro by Meta and Centro"</span>
      </p>

      {/* Botón con animación */}
      <a 
        href="https://mali-five.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-[#67B0FF30] rounded-lg hover:bg-[#2B4B70] 
                   transition-colors duration-200 w-fit hover:shadow-[0_0_20px_rgba(103,176,255,0.7)] animate-pulse hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Visit Site
      </a>
    </div>
  </div>
</div>



  </>
  )
}