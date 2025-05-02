import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Exprience from './components/Exprience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useTheme } from './context/ThemeContext'
import Motion from './components/Motion'
import { motion,useScroll } from 'framer-motion'
const App = () => {
  const scrollYprogress=useScroll().scrollYProgress
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <motion.div
        style={{
          scaleX:scrollYprogress
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
        <Footer />
      </div>

    </>
  )
}

export default App