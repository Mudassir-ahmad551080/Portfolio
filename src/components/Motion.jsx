import React from 'react'
import { motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'
const Motion = () => {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <div id={theme} className=' hidden overflow-hidden md:flex p-0 flex-row w-full flex justify-center items-center text-center mt-10'>
        <motion.h1
          className='text-xl text- font-bold flex flex-row ml-0 space-x-10 '
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{ duration: 11, delay: 0.4, repeat: Infinity }}
        >By  <span className='ml-3 mr-3 text-red-600'> MERN </span> Technology build A full Flagen Web
          <span className='ml-3 text-green-600'>Application</span>
        </motion.h1>
      </div>
    </div>
  )
}

export default Motion