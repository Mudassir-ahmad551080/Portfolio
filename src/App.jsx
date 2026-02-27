import React, { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

// Lazy load components
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Motion = React.lazy(() => import('./components/Motion'));
const Skills = React.lazy(() => import('./components/Skills.jsx'));
const Contact = React.lazy(() => import('./components/Contact'));
const ContactInfo = React.lazy(() => import('./components/ContactInfo'));
const ResumeButton = React.lazy(() => import('./components/ResumeButton'));
const Footer = React.lazy(() => import('./components/Footer'));

import { useTheme } from './context/ThemeContext'
import { motion, useScroll } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import StarBackground from './components/StarsBackground.jsx'
import CircularLoader from './components/CircularLoader'

const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <span className="text-zinc-500">Loading section...</span>
  </div>
);

const App = () => {
  const scrollYprogress = useScroll().scrollYProgress
  const [theme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Circular Loader */}
      {isLoading && <CircularLoader onComplete={handleLoadingComplete} />}

      {/* Main Content - Hidden until loading complete */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <StarBackground theme={theme} />

        <div id={theme} style={{ backgroundColor: 'transparent' }} className="relative">
          
          <motion.div
            style={{ scaleX: scrollYprogress }}
            className='bg-lime-400 h-[2px] mb-20 origin-left fixed w-full z-120'
          ></motion.div>
          
          <Navbar />
          <div className='mt-15 absolute w-full h-[5px] mt-11 fixed mt-1 z-1 hidden md:flex bg-amber-100'></div>
          <Home />

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
      </div>
    </>
  )
}

export default App