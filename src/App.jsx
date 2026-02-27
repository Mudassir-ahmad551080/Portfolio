import React, { Suspense, useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

// Lazy loaded components
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Motion = React.lazy(() => import('./components/Motion'));
const Skills = React.lazy(() => import('./components/Skills.jsx'));
const Contact = React.lazy(() => import('./components/Contact'));
const ContactInfo = React.lazy(() => import('./components/ContactInfo'));
const ResumeButton = React.lazy(() => import('./components/ResumeButton'));
const Footer = React.lazy(() => import('./components/Footer'));

import gsap from 'gsap'
import { useTheme } from './context/ThemeContext'
import { motion, useScroll } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { useGSAP } from '@gsap/react'
import StarBackground from './components/StarsBackground.jsx'

const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <span className="text-zinc-500">Loading section...</span>
  </div>
);

const App = () => {
  const scrollYprogress = useScroll().scrollYProgress
  const [theme] = useTheme();
  const divref = useRef(null);
  
  // 1. New State for the counter
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 2. Logic to run the counter from 0 to 100
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 20); // Adjust speed here (20ms * 100 = 2 seconds total)
      return () => clearTimeout(timer);
    } else {
      // Small delay after reaching 100 before starting GSAP transition
      setTimeout(() => setIsLoaded(true), 200);
    }
  }, [progress]);

  // 3. GSAP Animation - Triggers only when isLoaded is true
  useGSAP(() => {
    if (isLoaded) {
      const tl = gsap.timeline();
      // First, fade out the number
      tl.to('.loader-text', { opacity: 0, duration: 0.3 });
      // Then, run your stair animation
      tl.from('.stair', { height: 0, duration: 0.8, stagger: { amount: -0.3 } });
      tl.to('.stair', { y: '100%', stagger: { amount: -0.3 } });
      tl.to(divref.current, { opacity: 0, duration: 0, display: 'none' });
    }
  }, [isLoaded]);

  return (
    <>
      <StarBackground theme={theme} />

      {/* Full Screen Loader Overlay */}
      <div 
        ref={divref} 
        className='h-screen w-full flex fixed z-[100] top-0 left-0 bg-zinc-950 overflow-hidden'
      >
        {/* Numeric Display */}
        {!isLoaded && (
          <div className="loader-text absolute inset-0 flex items-center justify-center z-[110]">
            <h1 className="text-white text-8xl md:text-9xl font-bold font-mono">
              {progress}%
            </h1>
          </div>
        )}

        {/* GSAP Stair Elements */}
        <div className='stair h-full w-1/6 bg-zinc-900 border-r border-zinc-800'></div>
        <div className='stair h-full w-1/6 bg-zinc-900 border-r border-zinc-800'></div>
        <div className='stair h-full w-1/6 bg-zinc-900 border-r border-zinc-800'></div>
        <div className='stair h-full w-1/6 bg-zinc-900 border-r border-zinc-800'></div>
        <div className='stair h-full w-1/6 bg-zinc-900 border-r border-zinc-800'></div>
        <div className='stair h-full w-1/6 bg-zinc-900'></div>
      </div>

      <div id={theme} style={{ backgroundColor: 'transparent' }} className="relative">
        <motion.div
          style={{ scaleX: scrollYprogress }}
          className='bg-lime-400 h-[2px] mb-20 origin-left fixed w-full z-[80]'
        ></motion.div>
        
        <Navbar />
        <Home />

        <Suspense fallback={<LoadingFallback />}>
            <Motion />
            <hr className='mt-0' />
            <About />
            <Portfolio />
            <Skills/>
            <hr className='mb-10 m-2 mx-8' />
            <Contact />
            <ContactInfo/>
            <ResumeButton/>
            <hr className='mb-10 m-2 mx-8' />
            <Footer />
        </Suspense>
      </div>
      <Toaster />
    </>
  )
}

export default App;