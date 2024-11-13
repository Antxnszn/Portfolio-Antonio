import { useState, useEffect, useRef } from 'react';


export default function ICPCImages() {
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
  
    return(
        <div ref={el => sectionsRef.current[0] = el} className="fade-in-l-section grid grid-col mx-2">
        
        <img src="/icpcescom.jpg" className="p-10"/>

        </div>
    );
}