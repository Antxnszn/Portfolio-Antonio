import { useState, useEffect, useRef } from 'react';

export default function Images() {
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

<section className='text-[#E6EFFA]'>
  
      <p ref={el => sectionsRef.current[0] = el} className='fade-in-l-section text-xl lg:text-[2.2rem] text-[#E6EFFA] font-light text-center mt-14 lg:mb-14'>No experience...</p>
        <div className=' flex flex-col lg:flex-row gap-5 lg:gap-[5em] mt-10 items-center justify-center'>
          <p ref={el => sectionsRef.current[1] = el} className='fade-in-l-section text-xl lg:ml-10 lg:text-[2.2rem] font-light text-center mt-5 mb-1 lg:mt-14 lg:mb-14'>Living experiences :) </p>
          <img ref={el => sectionsRef.current[2] = el} src="/baloonsicpc.jpg" alt="Antonio" className="fade-in-r-section rounded-lg h-auto w-[300px] lg:w-[300px] mt-[1em] lg:mt-10 mb-10 " />
        </div>
        <div className=' flex flex-col lg:flex-row lg:gap-[2em] mt-10 items-center justify-center'>
          <img ref={el => sectionsRef.current[3] = el} src="/antonioicpc.jpg" alt="" className="fade-in-l-section rounded-lg h-auto w-[280px] lg:w-[320px] mb-10 " />  
          <img ref={el => sectionsRef.current[4] = el} src="/team.jpg" alt="" className="fade-in-section rounded-lg h-auto w-[350px] mb-10 " />
          <img ref={el => sectionsRef.current[5] = el} src="/microsoftai.jpeg" alt="" className="fade-in-r-section hidden lg:block rounded-lg h-auto w-[330px] mb-10 " />
        </div>
        <div className='flex flex-col lg:flex-row gap-10 mt-2 items-center justify-center'>
  <img ref={el => sectionsRef.current[6] = el} src="/escom.jpg" alt="" className="fade-in-l-section rounded-lg h-auto w-[400px] mb-10" />
  <img ref={el => sectionsRef.current[7] = el} src="/nuevent.jpg" alt="" className="fade-in-invert-section rounded-lg h-[300px] w-auto mb-10" />
</div>

      </section>


</>

)

}
