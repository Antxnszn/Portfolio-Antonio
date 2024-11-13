import { useState, useEffect, useRef } from 'react';


export default function InfoCard3() {
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
        <>
        <p style={{ color: "#E6EFFA" }}
      ref={el => sectionsRef.current[0] = el} className="fade-in-r-section text-justify tracking-wide p-10 mt-20 text-[1rem] lg:text-[1.2rem] mb-5 font-light"
    >
        As a member of my school's Algorithmics Club, I am continuously improving my algorithmic skills in preparation for the ICPC, the most prestigious competitive programming event.
        </p>
        </>


    );
}