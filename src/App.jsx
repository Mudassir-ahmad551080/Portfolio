import React, { Suspense } from 'react' // 1. Import Suspense
import Navbar from './components/Navbar' // Keep standard (Visible immediately)
import Home from './components/Home'     // Keep standard (Visible immediately)

// 2. Lazy load components that are not immediately visible
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Motion = React.lazy(() => import('./components/Motion'));
const Skills = React.lazy(() => import('./components/Skills.jsx'));
const Contact = React.lazy(() => import('./components/Contact'));
const ContactInfo = React.lazy(() => import('./components/ContactInfo'));
const ResumeButton = React.lazy(() => import('./components/ResumeButton'));
const Footer = React.lazy(() => import('./components/Footer'));

// Keep libraries and context as standard imports
import gsap from 'gsap'
import { useTheme } from './context/ThemeContext'
import { motion, useScroll } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { useGSAP } from '@gsap/react'
import StarBackground from './components/StarsBackground.jsx'

// Optional: Create a simple loading spinner/placeholder for the Suspense fallback
const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <span className="text-zinc-500">Loading section...</span>
  </div>
);

const App = () => {
  const scrollYprogress = useScroll().scrollYProgress
  const [theme] = useTheme();
  const divref = React.useRef(null);

  useGSAP(function(){
     const tl = gsap.timeline();
     tl.from('.stair',{ height: 0, duration: 0.8, stagger: { amount: -0.3 } });
     tl.to('.stair',{ y: '100%', stagger:{ amount: -0.3 } });
     tl.to(divref.current, { opacity: 0, duration: 0, delay:-0.1, display: 'none' });
  })

  return (
    <>
      <StarBackground theme={theme} />

      {/* Initial GSAP Loading Overlay */}
      <div ref={divref} className='h-screen w-full leading-tight flex fixed z-50 top-0 pointer-events-none'>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
         <div className='stair h-full w-1/2 bg-zinc-950'></div>
      </div>

      <div id={theme} style={{ backgroundColor: 'transparent' }} className="relative">
        
        <motion.div
          style={{ scaleX: scrollYprogress }}
          className='bg-lime-400 h-[2px] mb-20 origin-left fixed w-full z-120'
        ></motion.div>
        
        {/* Render standard components normally */}
        <Navbar />
        <div className='mt-15 absolute w-full h-[5px] mt-11 fixed mt-1 z-1 hidden md:flex bg-amber-100'></div>
        <Home />

        {/* 3. Wrap lazy components in Suspense */}
        {/* You can wrap them individually or group them all in one Suspense */}
        <Suspense fallback={<LoadingFallback />}>
            <Motion />
            <hr className=' mt-0 ' />
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

export default App