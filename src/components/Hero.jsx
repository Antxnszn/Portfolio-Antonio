'use client'

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ReactTyped } from "react-typed";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const [count, setCount] = useState(0)
const sectionsRef = useRef([]);

useEffect(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);  // Deja de observar el elemento una vez que es visible
      }
    });
  }, { threshold: 0.1 });

  sectionsRef.current.forEach(section => {
    if (section) {
      observer.observe(section);
    }
  });

  return () => {
    sectionsRef.current.forEach(section => {
      if (section) {
        observer.unobserve(section);
      }
    });
  };
}, []);

  return (
    <div className="bg-transparent mb-[6em]">

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
            
          <div className="text-justify grid grid-col-1 gap-20 lg:grid-cols-2 justify-center">
            <div>
            <h2 className="text-[#C8C8C8] text-[3.5rem] font-semibold mt-3">
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#473b87] from-[#E6EFFA]">
            <ReactTyped
              strings={[
                "Hi!",
                "¡Hola!",
                "Bonjour",
                "Olá",
                "안녕하세요",
              ]}
              typeSpeed={50}
              backSpeed={100}
              loop></ReactTyped>
          </span>
        </h2>
       
            <p ref={el => sectionsRef.current[0] = el} className="mt-8 text-lg font-light fade-in-l-section text-[#E6EFFA] sm:text-xl/8">
            I'm Roberto Antonio Navarro Estrada, an Artificial Intelligence Engineering student with a deep passion for algorithms and maths.
            </p>
            </div>
            <center>
            <img
              ref={el => sectionsRef.current[1] = el} 
              className="object-cover rounded-full w-48 h-48 lg:mt-[5em] fade-in-r-section"
              src="../public/antonio.jpeg"
              alt="Antonio"
            />
            </center>
            
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5% )',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}