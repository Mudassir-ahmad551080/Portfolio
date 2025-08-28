import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Exprience from './components/Exprience'
import gsap from 'gsap'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useTheme } from './context/ThemeContext'
import Motion from './components/Motion'
import { motion, useScroll } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import ResumeButton from './components/ResumeButton'
import ContactInfo from './components/ContactInfo'
import { useGSAP } from '@gsap/react'
const App = () => {
  const scrollYprogress = useScroll().scrollYProgress
  const [theme] = useTheme();
 const divref = React.useRef(null);
   useGSAP(function(){
     // GSAP animations go here
     const tl = gsap.timeline();
     tl.from('.stair',{
      height: 0,
      duration: 0.2,
      stagger: {
        amount: -0.3
      }
     });
     tl.to('.stair',{
      y: '100%',
      stagger:{
        amount: -0.3
      },
     });
     tl.to(divref.current, {
      opacity: 0,
      duration: 0,
      delay:-0.1,
      display: 'none'
     });

   })
  return (
    <>
    <div ref={divref} className='h-screen bg-black   w-full leading-tight flex fixed z-500 top-0 '>
      <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
       <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
      <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
      <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
      <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
      <div className=' stair h-full w-1/2 bg-zinc-800'>

      </div>
    </div>
      <div id={theme}>
        <motion.div
          style={{
            scaleX: scrollYprogress
          }}
          className='bg-lime-400 h-[2px] mb-20 origin-left   fixed w-full z-120'></motion.div>
        <Navbar />


        <div className='mt-15 absolute w-full h-[5px] mt-11 fixed mt-1 z-1 hidden md:flex bg-amber-100'></div>
        <Home />
        <Motion />
        <hr className=' mt-0 ' />
        <About />
        <Portfolio />
        <Exprience />
        <hr className='mb-10 m-2 mx-8' />
        <Contact />
        <ContactInfo/>
        <ResumeButton/>
        <hr className='mb-10 m-2 mx-8' />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App