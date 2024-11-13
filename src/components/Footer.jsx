import { useState, useEffect, useRef } from 'react';
import GitHubprofile from "../Icons/GitHubprofile";
import Linkedin from "../Icons/Linkedin";


export default function Footer() {
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
      <footer id="contact" className='mb-10'>
        <p
          ref={(el) => (sectionsRef.current[0] = el)}
          className="fade-in-invert-section mt-[2em] text-[1.5rem] text-[#E9DBED]"
        >
          Let's build something amazing together!❤️
        </p>
        <h4 id="section3" className="text-[2.0rem] text-[#E9DBED] font-light text-center mt-[2em]">
          Contact Me
        </h4>
        <div className="flex flex-row-2 mt-10 gap-6 items-center justify-center">
          <div>
            <Linkedin />
          </div>
          <div>
            <GitHubprofile />
          </div>
        </div>
      </footer>
    </>
  );
}
